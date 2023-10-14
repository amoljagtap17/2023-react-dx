import bcrypt from "bcrypt";

class BcryptService {
  private static instance: BcryptService;
  private constructor() {}

  static getInstance(): BcryptService {
    if (!BcryptService.instance) {
      BcryptService.instance = new BcryptService();
    }

    return BcryptService.instance;
  }

  async hashPassword(
    password: string,
    saltRounds: number = 10
  ): Promise<string> {
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      return hashedPassword;
    } catch (error) {
      throw new Error(`Error hashing password: ${(error as Error).message}`);
    }
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    try {
      const isValid = await bcrypt.compare(password, hash);

      return isValid;
    } catch (error) {
      throw new Error(`Error verifying password: ${(error as Error).message}`);
    }
  }
}

export const bcryptService = BcryptService.getInstance();
