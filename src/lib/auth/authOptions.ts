import { bcryptService, loginService } from "@/server/services";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        const user = await loginService.findUniqueUser(email);

        if (user) {
          const isValidPassword = await bcryptService.verifyPassword(
            password,
            user.password
          );

          return isValidPassword ? { id: user.id, email: user.email } : null;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 15 * 60 * 60,
  },
};
