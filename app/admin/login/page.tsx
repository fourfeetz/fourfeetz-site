import { redirect } from "next/navigation";
import { auth, isAdminEmail, signIn } from "@/auth";

export default async function LoginPage() {
  const session=await auth(); if(isAdminEmail(session?.user?.email)) redirect("/admin/insights");
  return <main className="mx-auto max-w-lg px-6 py-24"><div className="rounded-[32px] border border-[#eadfce] bg-white p-8 shadow-xl"><p className="text-sm font-black uppercase tracking-[.25em] text-[#a67c52]">FourFeetz</p><h1 className="mt-3 text-4xl font-black">인사이트 관리자</h1><p className="mt-4 leading-7 text-[#76685d]">허용된 Google 관리자 계정만 로그인할 수 있습니다.</p><form action={async()=>{"use server";await signIn("google",{redirectTo:"/admin/insights"});}}><button className="mt-8 w-full rounded-full bg-[#6f4e37] px-6 py-4 font-black text-white">Google로 로그인</button></form></div></main>;
}
