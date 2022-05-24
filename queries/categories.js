const db = require("../db/dbConfig.js");

const getAllCategories = async () => {
  try {
    const categories = await db.any("SELECT * FROM categories");
    return categories;
  } catch (error) {
    return error;
  }
};

const getCategory = async (id) => {
  try {
    const oneCategory = await db.one(
      "SELECT * FROM categories WHERE id=$1",
      id
    );
    return oneCategory;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategories,
  getCategory,
};
