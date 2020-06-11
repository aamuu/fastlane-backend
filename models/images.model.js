/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'images'
  });
};
