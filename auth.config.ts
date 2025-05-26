import { Route } from "next";
import type { NextAuthConfig } from "next-auth";

const authConfig = {
  pages: {
    signIn: "/dashboard-example/login" as Route,
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized: ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;

      const isOnDashboard = nextUrl.pathname.startsWith(
        "/dashboard-example/dashboard" as Route,
      );

      if (isOnDashboard) {
        return isLoggedIn;
      }

      if (!isOnDashboard && isLoggedIn) {
        return Response.redirect(
          new URL("/dashboard-example/dashboard" as Route, nextUrl),
        );
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export { authConfig };
