const { Router } = require("express");
const { addAbilityToDB } = require("../middlewares/addAbilityToDB.mw");
const HeroController = require("../controllers/hero.controller");
const paginate = require("../middlewares/paginate.mw");
const upload = require("../middlewares/saveImage.mw");
const createImage = require("../middlewares/createImage.mw");

const heroRouter = Router();

heroRouter.post("/", addAbilityToDB, HeroController.createHero);
heroRouter.post("/:id/hero_image", upload.single("image"), createImage);
heroRouter.post("/:id/add_ability", addAbilityToDB, HeroController.addAbilityToHero);
heroRouter.delete("/delete_hero/:id", HeroController.deleteHero);
heroRouter.delete("/delete_ability/:id", HeroController.deleteAbility);
heroRouter.get("/", paginate, HeroController.getHeroes);
heroRouter.patch("/:id/updated", HeroController.changeHeroInfo);

module.exports = heroRouter;