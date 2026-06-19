const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "asc" },
    });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = { getProducts };
