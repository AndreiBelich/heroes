const { Ability } = require("../db/models");

module.exports.addAbilityToDB = async (req, res, next) => {
  try{
    const {
      body: { heroAbilities: { abilities } }
    } = req;
    console.log(abilities);
    const allAbilities = await Ability.findAll();
    const dbAbilities = allAbilities.map((ability) => ability.dataValues.name);

    const newAbilities = abilities.filter((ability) => !dbAbilities.includes(ability));

    if(newAbilities.length){
      const insAbilities = newAbilities.map((ability) => ({name: ability.toLowerCase()}));
      await Ability.bulkCreate(insAbilities);
    }
    next();
  }catch(error){
    next(error);
  }
}