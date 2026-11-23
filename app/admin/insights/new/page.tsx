import { redirect } from "next/navigation"; import { auth,isAdminEmail } from "@/auth"; import PostEditor from "@/components/blog/PostEditor";
export default async function Page(){const s=await auth();if(!isAdminEmail(s?.user?.email))redirect("/admin/login");return <PostEditor/>}
