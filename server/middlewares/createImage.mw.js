const { HeroImage } = require("../db/models");

module.exports = async (req, res, next) => {
  try {
    const {
      file: { filename },
      params: { id },
    } = req;
    console.log(filename, " ||AND|| ", id);
    const image = await HeroImage.create({path: filename, heroId: id})
    res.send({message: "image was saved"});
  } catch (err) {
    next(err);
  }
};