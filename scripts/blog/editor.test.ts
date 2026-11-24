import test from "node:test";
import assert from "node:assert/strict";
import {applyMarkdownCommand,getBodyImages,getImageSlots,imageMarkdown,insertImagesAtLines,removeBodyImage,replaceBodyImage} from "../../lib/blog/editor.ts";
import {isPublicImageHost,isPublicIp,validateRemoteImageUrl} from "../../lib/blog/imageSecurity.ts";

test("toolbar commands preserve text while adding supported Markdown",()=>{
 const source="일반 문장\n두 번째 문장";
 assert.equal(applyMarkdownCommand(source,0,5,"h2").value,"## 일반 문장\n두 번째 문장");
 assert.equal(applyMarkdownCommand(source,0,5,"bold").value,"**일반 문장**\n두 번째 문장");
 assert.equal(applyMarkdownCommand(source,0,source.length,"bullet").value,"- 일반 문장\n- 두 번째 문장");
});

test("body images remain compatible with the existing Markdown storage contract",()=>{
 const legacy="## 과정\n\n기존 본문\n\n![직접 입력한 설명](https://example.com/a.png \"캡션\")";
 assert.deepEqual(getBodyImages(legacy),[{url:"https://example.com/a.png",alt:"직접 입력한 설명",caption:"캡션",line:4}]);
 const updated=replaceBodyImage(legacy,4,imageMarkdown("https://example.com/b.webp","새 설명","새 캡션"));
 assert.match(updated,/!\[새 설명\]\(https:\/\/example\.com\/b\.webp "새 캡션"\)/);
 assert.equal(getBodyImages(removeBodyImage(updated,4)).length,0);
});

test("automatic placement distributes in selection order without duplicating images",()=>{
 const article="## 첫 구간\n\n첫 내용\n\n## 둘째 구간\n\n둘째 내용";
 const slots=getImageSlots(article).filter(slot=>slot.id.startsWith("section-"));
 const placed=insertImagesAtLines(article,[
  {line:slots[0].line,markdown:imageMarkdown("https://example.com/first.png")},
  {line:slots[1].line,markdown:imageMarkdown("https://example.com/second.png")},
 ]);
 const images=getBodyImages(placed);
 assert.deepEqual(images.map(image=>image.url),["https://example.com/first.png","https://example.com/second.png"]);
 assert.equal(placed.match(/first\.png/g)?.length,1);assert.equal(placed.match(/second\.png/g)?.length,1);
});

test("images sharing one selected position keep selection order",()=>{
 const placed=insertImagesAtLines("본문",[
  {line:1,markdown:imageMarkdown("https://example.com/one.png")},
  {line:1,markdown:imageMarkdown("https://example.com/two.png")},
 ]);
 assert.deepEqual(getBodyImages(placed).map(image=>image.url),["https://example.com/one.png","https://example.com/two.png"]);
});

test("external image policy rejects local, credentialed, and non-HTTPS targets",()=>{
 assert.equal(isPublicImageHost("localhost"),false);assert.equal(isPublicImageHost("assets.example.com"),true);
 for(const address of ["127.0.0.1","10.0.0.2","169.254.169.254","192.168.1.2","::1","fd00::1"])assert.equal(isPublicIp(address),false);
 assert.equal(isPublicIp("8.8.8.8"),true);
 for(const url of ["http://example.com/a.png","https://localhost/a.png","https://user:pass@example.com/a.png","https://example.com:8443/a.png"])assert.throws(()=>validateRemoteImageUrl(url));
 assert.equal(validateRemoteImageUrl("https://images.example.com/a.png").hostname,"images.example.com");
});
