import { getPublicPost } from "@/lib/blog/repository";
import { getLegacyCommentsEnabled, listApprovedComments } from "@/lib/comments/repository";
import CommentDeleteButton from "./CommentDeleteButton";
import CommentForm from "./CommentForm";

export default async function CommentsGate({ path }: { path: string }) {
  if (!/^\/(?:ko\/)?insights\/[a-z0-9-]+$/.test(path)) return null;
  const slug = path.split("/").pop()!;
  if (slug === "guides" || slug === "news") return null;
  const cms = path.startsWith("/ko/") ? await getPublicPost(slug) : null;
  const enabled = cms ? cms.commentsEnabled : await getLegacyCommentsEnabled(path);
  if (!enabled) return cms ? <section className="mx-auto max-w-3xl px-6 pb-16"><p className="rounded-2xl bg-[#f2e8dc] p-5 font-bold">이 글의 댓글 작성이 중단되었습니다.</p></section> : null;
  const comments = await listApprovedComments(path);
  const parents = comments.filter((comment) => !comment.parentId);
  return <section className="mx-auto max-w-3xl px-6 pb-20"><h2 className="text-3xl font-black">댓글 {comments.length}</h2><div className="mt-6 space-y-4">{parents.map((comment) => <article key={comment.id} className="rounded-2xl border border-[#eadfce] bg-white p-5"><div className="flex items-center gap-2 font-black">{comment.nickname}{comment.isAdminReply ? <span className="rounded-full bg-[#6f4e37] px-2 py-1 text-xs text-white">관리자</span> : null}</div><p className="mt-3 whitespace-pre-wrap leading-7">{comment.body}</p><CommentDeleteButton id={comment.id} />{comments.filter((reply) => reply.parentId === comment.id).map((reply) => <div key={reply.id} className="ml-4 mt-4 border-l-2 border-[#d8c3ad] pl-4"><p className="font-black">{reply.nickname}{reply.isAdminReply ? <span className="ml-2 rounded-full bg-[#6f4e37] px-2 py-1 text-xs text-white">관리자</span> : null}</p><p className="mt-2 whitespace-pre-wrap">{reply.body}</p></div>)}</article>)}</div><CommentForm articlePath={path} /></section>;
}
