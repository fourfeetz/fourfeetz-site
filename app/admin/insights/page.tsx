import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, isAdminEmail, signOut } from "@/auth";
import { blogDatabaseConfigured, listAdminPosts } from "@/lib/blog/repository";

export const dynamic="force-dynamic";
export default async function AdminInsightsPage(){
 const session=await auth(); if(!isAdminEmail(session?.user?.email)) redirect("/admin/login"); const posts=await listAdminPosts();
 return <main className="mx-auto max-w-6xl px-5 py-12"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm font-black text-[#a67c52]">관리자 · {session?.user?.email}</p><h1 className="mt-2 text-4xl font-black">인사이트 글 관리</h1></div><div className="flex gap-3"><Link href="/admin/insights/new" className="rounded-full bg-[#6f4e37] px-6 py-3 font-black text-white">새 글</Link><Link href="/admin/comments" className="rounded-full border border-[#6f4e37] px-6 py-3 font-black">댓글 관리</Link><form action={async()=>{"use server";await signOut({redirectTo:"/admin/login"});}}><button className="rounded-full border px-5 py-3 font-bold">로그아웃</button></form></div></div>{!blogDatabaseConfigured()?<p className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5 font-bold text-amber-900">DATABASE_URL이 없어 글 저장 기능이 닫혀 있습니다. Preview Neon 브랜치를 연결하고 마이그레이션을 먼저 실행하세요.</p>:null}<div className="mt-8 space-y-3">{posts.map(p=><Link key={p.id} href={`/admin/insights/${p.id}`} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#eadfce] bg-white p-5"><div><p className="text-sm font-bold text-[#a67c52]">{p.category} · {p.status}</p><h2 className="mt-1 text-xl font-black">{p.title}</h2><p className="mt-1 text-sm text-[#76685d]">/ko/insights/{p.slug} · 버전 {p.version}</p></div><span className="font-black text-[#6f4e37]">편집 →</span></Link>)}</div></main>;
}
