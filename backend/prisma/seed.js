const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.product.deleteMany();

  // Seed products
  const products = [
    {
      name: "Choco Bronie Cookies",
      description: "Rich chocolate brownie cookies with a soft center and crispy edges",
      price: 45000,
      image_url: null,
    },
    {
      name: "Choco Bronie Cookies",
      description: "Classic artisan sourdough bread with wild yeast fermentation",
      price: 38000,
      image_url: null,
    },
    {
      name: "Choco Bronie Cookies",
      description: "Buttery flaky croissant made with premium French butter",
      price: 32000,
      image_url: null,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log("✓ Seeded 3 products successfully");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
