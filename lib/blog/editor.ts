export type BodyImage = {
  url: string;
  alt: string;
  caption: string;
  line: number;
};

export type PasteImage = { marker: string; sourceUrl: string; alt: string };
export type RichPaste = { markdown: string; images: PasteImage[] };

const SAFE_LINK = /^https?:\/\/[^\s]+$/i;
const BLOCKED_ELEMENTS = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "FORM", "INPUT", "BUTTON", "SVG", "MATH", "NOSCRIPT"]);

function cleanText(value: string) {
  return value.replace(/\u00a0/g, " ").replace(/[ \t]+\n/g, "\n");
}

function escapeInline(value: string) {
  return cleanText(value).replace(/([\\`])/g, "\\$1");
}

function renderChildren(node: Node, images: PasteImage[], depth = 0): string {
  return Array.from(node.childNodes).map((child) => renderNode(child, images, depth)).join("");
}

function renderList(element: Element, images: PasteImage[], ordered: boolean, depth: number): string {
  const rows = Array.from(element.children).filter((child) => child.tagName === "LI");
  return rows.map((item, index): string => {
    const nested = Array.from(item.children).filter((child) => child.tagName === "UL" || child.tagName === "OL");
    const clone = item.cloneNode(true) as Element;
    Array.from(clone.children).filter((child) => child.tagName === "UL" || child.tagName === "OL").forEach((child) => child.remove());
    const prefix = ordered ? `${index + 1}. ` : "- ";
    const body = renderChildren(clone, images, depth + 1).trim();
    const nestedText: string = nested.map((child): string => renderList(child, images, child.tagName === "OL", depth + 1)).join("");
    const indent = "  ".repeat(depth);
    return `${indent}${prefix}${body}\n${nestedText}`;
  }).join("");
}

function renderNode(node: Node, images: PasteImage[], depth = 0): string {
  if (node.nodeType === Node.TEXT_NODE) return escapeInline(node.textContent ?? "");
  if (node.nodeType !== Node.ELEMENT_NODE) return "";
  const element = node as Element;
  if (BLOCKED_ELEMENTS.has(element.tagName)) return "";
  const inner = () => renderChildren(element, images, depth);
  switch (element.tagName) {
    case "H1":
    case "H2": return `\n\n## ${inner().trim()}\n\n`;
    case "H3":
    case "H4":
    case "H5":
    case "H6": return `\n\n### ${inner().trim()}\n\n`;
    case "P":
    case "DIV": return `\n\n${inner().trim()}\n\n`;
    case "BR": return "\n";
    case "STRONG":
    case "B": {
      const value = inner().trim();
      return value ? `**${value}**` : "";
    }
    case "UL": return `\n${renderList(element, images, false, depth)}\n`;
    case "OL": return `\n${renderList(element, images, true, depth)}\n`;
    case "A": {
      const label = inner().trim();
      const href = element.getAttribute("href") ?? "";
      return label && SAFE_LINK.test(href) ? `[${label}](${href})` : label;
    }
    case "IMG": {
      const sourceUrl = element.getAttribute("src") ?? "";
      if (!/^https:\/\//i.test(sourceUrl)) return "";
      const marker = `[[FOURFEETZ_IMPORT_${images.length}_${crypto.randomUUID()}]]`;
      images.push({ marker, sourceUrl, alt: (element.getAttribute("alt") ?? "").slice(0, 240) });
      return `\n\n${marker}\n\n`;
    }
    default: return inner();
  }
}

export function htmlToMarkdown(html: string): RichPaste {
  const document = new DOMParser().parseFromString(html, "text/html");
  const images: PasteImage[] = [];
  const markdown = renderChildren(document.body, images)
    .replace(/\n[ \t]+\n/g, "\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return { markdown, images };
}

export function insertAtSelection(value: string, insertion: string, start: number, end: number) {
  const prefix = start > 0 && value[start - 1] !== "\n" && insertion.startsWith("#") ? "\n" : "";
  return { value: value.slice(0, start) + prefix + insertion + value.slice(end), caret: start + prefix.length + insertion.length };
}

export type MarkdownCommand = "h2" | "h3" | "bold" | "bullet" | "number" | "link";

export function applyMarkdownCommand(value: string, start: number, end: number, command: MarkdownCommand) {
  const selected = value.slice(start, end);
  if (command === "bold") {
    const content = selected || "굵게 표시할 텍스트";
    const next = insertAtSelection(value, `**${content}**`, start, end);
    return { ...next, selectionStart: next.caret - content.length - 2, selectionEnd: next.caret - 2 };
  }
  if (command === "link") {
    const label = selected || "링크 텍스트";
    const insertion = `[${label}](https://)`;
    const next = insertAtSelection(value, insertion, start, end);
    return { ...next, selectionStart: next.caret - 1, selectionEnd: next.caret - 1 };
  }
  const lineStart = value.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
  const lineEndMatch = value.indexOf("\n", end);
  const lineEnd = lineEndMatch === -1 ? value.length : lineEndMatch;
  const lines = value.slice(lineStart, lineEnd).split("\n");
  const prefix = command === "h2" ? "## " : command === "h3" ? "### " : command === "bullet" ? "- " : "1. ";
  const replacement = lines.map((line) => `${prefix}${line.replace(/^(?:#{2,3}|[-*]|\d+\.)\s+/, "")}`).join("\n");
  const next = insertAtSelection(value, replacement, lineStart, lineEnd);
  return { ...next, selectionStart: lineStart, selectionEnd: lineStart + replacement.length };
}

const IMAGE_LINE = /^!\[([^\]]*)\]\((https:\/\/[^\s)]+|\/images\/[^\s)]+)(?:\s+"([^"]*)")?\)$/;

export function getBodyImages(markdown: string): BodyImage[] {
  return markdown.replace(/\r/g, "").split("\n").flatMap((line, index) => {
    const match = line.trim().match(IMAGE_LINE);
    return match ? [{ url: match[2], alt: match[1], caption: match[3] ?? "", line: index }] : [];
  });
}

export function imageMarkdown(url: string, alt = "", caption = "") {
  const safeAlt = alt.replace(/[\]\n]/g, " ").trim();
  const safeCaption = caption.replace(/["\n]/g, "'").trim();
  return `![${safeAlt}](${url}${safeCaption ? ` "${safeCaption}"` : ""})`;
}

export type ImageSlot = { id: string; label: string; line: number };

export function getImageSlots(markdown: string): ImageSlot[] {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const headings = lines.flatMap((line, index) => /^(#{2,3})\s+(.+)$/.test(line.trim()) ? [{ index, title: line.trim().replace(/^#{2,3}\s+/, "") }] : []);
  const slots: ImageSlot[] = [{ id: "start", label: "본문 맨 앞", line: 0 }];
  headings.forEach((heading, index) => slots.push({
    id: `section-${heading.index}`,
    label: `‘${heading.title.slice(0, 32)}’ 구간 뒤`,
    line: headings[index + 1]?.index ?? lines.length,
  }));
  slots.push({ id: "end", label: "본문 맨 뒤", line: lines.length });
  return slots;
}

export function insertImagesAtLines(markdown: string, insertions: { line: number; markdown: string }[]) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const ordered = insertions.map((item,index)=>({...item,index})).sort((a, b) => b.line - a.line || b.index - a.index);
  for (const item of ordered) lines.splice(item.line, 0, "", item.markdown, "");
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function removeBodyImage(markdown: string, line: number) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  if (IMAGE_LINE.test((lines[line] ?? "").trim())) lines.splice(line, 1);
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function replaceBodyImage(markdown: string, line: number, replacement: string) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  if (IMAGE_LINE.test((lines[line] ?? "").trim())) lines[line] = replacement;
  return lines.join("\n");
}
