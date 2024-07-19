import { Route } from "next";
import type { NextAuthConfig } from "next-auth";

const authConfig = {
  pages: {
    signIn: "/dashboard-example/login" as Route,
  },
  providers: [],
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
