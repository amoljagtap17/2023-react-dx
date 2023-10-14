import { prisma } from "@/lib/prisma";

class LoginService {
  private static instance: LoginService;
  private constructor() {}

  static getInstance(): LoginService {
    if (!LoginService.instance) {
      LoginService.instance = new LoginService();
    }

    return LoginService.instance;
  }

  async findUniqueUser(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}

export const loginService = LoginService.getInstance();
