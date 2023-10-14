import { faker } from "@faker-js/faker";
import { prisma } from "../src/lib/prisma";

async function main() {
  await prisma.user.deleteMany();

  const email = faker.internet.email().toLowerCase();
  const password = "test123";

  await prisma.user.create({
    data: {
      email,
      password,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
