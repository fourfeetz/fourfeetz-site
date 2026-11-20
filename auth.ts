import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

function adminEmails() {
  return new Set((process.env.ADMIN_EMAILS ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean));
}

export function isAdminEmail(email: string | null | undefined) {
  return Boolean(email && adminEmails().has(email.toLowerCase()));
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  trustHost: true,
  pages: { signIn: "/admin/login" },
  callbacks: {
    signIn({ user, account }) {
      return account?.provider === "google" && isAdminEmail(user.email);
    },
    authorized({ auth: session }) {
      return isAdminEmail(session?.user?.email);
    },
    session({ session }) {
      if (session.user) Object.assign(session.user, { isAdmin: isAdminEmail(session.user.email) });
      return session;
    },
  },
});
