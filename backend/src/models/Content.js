module.exports = (sequelize, DataTypes) => {

  const Content = sequelize.define("Content", {
    titulo: DataTypes.STRING,
    url: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  });
  
  return Content;
};