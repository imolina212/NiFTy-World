const db = require("../db/dbConfig.js");

const getAllContent = async () => {
  try {
    const allContent = await db.any("SELECT * FROM content");
    return allContent;
  } catch (error) {
    return error;
  }
};

const getContent = async (id) => {
  try {
    const content = await db.one("SELECT * FROM content WHERE id=$1", id)
    return content
  } catch (error) {
      throw error;
  }
}

module.exports = {
  getAllContent,
  getContent
};
