export type PublishStatus = "published" | "draft";

export type PublishingFields = {
  publishedAt?: string;
  updatedAt?: string;
  publishStatus?: PublishStatus;
};

function parseContentDate(value?: string, endOfDay = false) {
  if (!value) return undefined;

  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  const parsed = dateOnly
    ? new Date(
        Number(dateOnly[1]),
        Number(dateOnly[2]) - 1,
        Number(dateOnly[3]),
        endOfDay ? 23 : 0,
        endOfDay ? 59 : 0,
        endOfDay ? 59 : 0,
        endOfDay ? 999 : 0,
      )
    : new Date(value);

  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

export function isPublishedContent(item: PublishingFields, now = new Date()) {
  if (item.publishStatus === "draft") return false;
  const published = parseContentDate(item.publishedAt);
  return !published || published.getTime() <= now.getTime();
}

export function getContentTimestamp(item: PublishingFields) {
  return parseContentDate(item.updatedAt ?? item.publishedAt, true)?.getTime() ?? 0;
}

export function sortByFreshness<T extends PublishingFields>(items: T[]) {
  return items
    .map((item, sourceIndex) => ({ item, sourceIndex }))
    .sort(
      (left, right) =>
        getContentTimestamp(right.item) - getContentTimestamp(left.item) ||
        left.sourceIndex - right.sourceIndex,
    )
    .map(({ item }) => item);
}
