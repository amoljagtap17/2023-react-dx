import { faker } from "@faker-js/faker";
import { prisma } from "../src/lib/prisma";
import { bcryptService } from "../src/server/services/auth/bcrypt.service";

async function main() {
  console.log("starting seed..");

  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  const email = faker.internet.email().toLowerCase();
  const password = await bcryptService.hashPassword("test123");

  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  const title = faker.lorem.lines();
  const content = faker.lorem.paragraph();
  const authorId = user.id;

  await prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });

  console.log("completed seed..");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
