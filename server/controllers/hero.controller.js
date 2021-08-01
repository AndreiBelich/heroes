const { Op } = require("sequelize");
const createError = require("http-errors");
const { Hero, Ability, HeroToAbility } = require("../db/models");


module.exports.createHero = async (req, res, next) => {
  try{
    const {
      body: {
        heroInfo ,
        heroAbilities: { abilities = [] },
        heroImages 
      }
    } = req;
    console.log(heroInfo);
    const hero = await Hero.create(heroInfo);
    console.log("HERO: ", hero);
    console.log("ABILITIES:", abilities);
    if(abilities.length){
      const insertAbilities = await Ability.findAll({
        where: {
          name: {
            [Op.in] : abilities
          }
        }
      });
      await hero.addAbilities(insertAbilities);
    }
    res.status(200).send({ message: "Hero was created", data: hero });
  }catch(error){
    return (next(createError(400,error)));
  }
}

module.exports.deleteHero = async (req, res, next) => {
  try{
    const { params: { id } } = req;
    const deletedHero = await Hero.destroy({
      where: {
        id: id
      }
    });
    if(deletedHero !== 1){
      return next(createError(404, "Hero wasn't deleted"));
    }
    res.send({data: `Hero was deleted!`});
  }catch(error){
    next(error);
  }
}

module.exports.deleteAbility = async (req, res, next) => {
  try{
    const { 
      params : { id },
      body: { ability }
    } = req;
    const findAbility = await Ability.findOne({
      where: {
        name: ability
      }
    });
    if(!findAbility){
      return next(createError(404, `Can't find ability ${ability}`));
    }
    const deleteAbility = await HeroToAbility.destroy({
      where: {
        heroId: id,
        abilityId: findAbility.dataValues.id
      }
    });
    if(deleteAbility !== 1){
      return next(createError(404, "Ability not found and not deleted!" ));
    }
    res.send({data: "ok"});
  }catch(error){
    next(error);
  }
}

module.exports.getHeroes = async (req, res, next) => {
  try{
    const {
      paginate
    } = req;
    const heroes = await Hero.findAll({
      ...paginate
    });
    res.status(200).send({data: heroes});
  }catch(error){
    next(error);
  }
}

module.exports.changeHeroInfo = async (req, res, next) => {
  try{
    const {
      body,
      params: { id }
    } = req;
    const updatedHero = await Hero.update(body, {
      where: {
        id
      }
    });
    console.log(updatedHero);
    res.status(200).send({message: "Hero was updated", data: updatedHero});
  }catch(error){
    next(error);
  }
}

module.exports.addAbilityToHero = async (req, res, next) => {
  try{
    const {
      body: { heroAbilities : { abilities } },
      params: { id }
    } = req;
    console.log("Abilities: ", abilities);
    const hero = await Hero.findByPk(id);
    const insertAbilities = await Ability.findAll({
      where: {
        name: {
          [Op.in] : abilities
        }
      }
    });
    console.log("Insert Abilities", insertAbilities);
    await hero.addAbilities(insertAbilities);
    res.status(200).send({message: "ability was added to hero", data: hero});
  }catch(error){
    next(error);
  }
}