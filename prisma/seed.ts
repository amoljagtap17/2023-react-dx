import { faker } from "@faker-js/faker";
import { prisma } from "../src/lib/prisma";
import { bcryptService } from "../src/server/services/auth/bcrypt.service";

async function main() {
  console.log("starting seed..");

  await prisma.user.deleteMany();

  const email = faker.internet.email().toLowerCase();
  const password = await bcryptService.hashPassword("test123");

  await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  console.log("completed seed..");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
