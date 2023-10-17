import axios from "axios";
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

        const loginMutation: any = `
          mutation Mutation($signInInput: SignInInput!) {
            login(signInInput: $signInInput) {
              accessToken
            }
          }
        `;

        axios.defaults.baseURL = process.env.GRAPHQL_ENDPOINT!;
        axios.defaults.headers.common["Content-Type"] = "application/json";

        const { data } = await axios.post("/", {
          query: loginMutation,
          variables: {
            signInInput: {
              email,
              password,
            },
          },
        });

        const accessToken = data.data.login.accessToken;

        console.log("user::", accessToken);

        if (!accessToken) {
          return null;
        }

        if (accessToken) {
          return { accessToken };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt(params) {
      // console.log("jwt::", params);

      // @ts-ignore
      if (params.user && params.user.accessToken) {
        // @ts-ignore
        params.token = params.user.accessToken;
      }

      return params.token;
    },
    session(params) {
      // console.log("session::", params);

      return params.session;
    },
  },
  jwt: {
    // @ts-ignore
    async encode(params) {
      return params.token;
    },
    // @ts-ignore
    async decode(params) {
      return params.token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 15 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
};
