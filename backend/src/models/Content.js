module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define("Content", {
    titulo: DataTypes.STRING,
    url: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  });

  Content.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.password_hash)
  }

  Content.prototype.generateToken = function(password) {
    
    //Secret é algo único da aplicação e serve para diferenciar tokens de aplicações diferentes
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  }

  return Content;
};