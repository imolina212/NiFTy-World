const db = require("../db/dbConfig.js");

const getAllContent = async () => {
  try {
    const allContent = await db.any("SELECT * FROM content");
    return allContent;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllContent,
};
