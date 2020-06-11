/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contributors', {
    contributorsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    contributorsName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'contributors'
  });
};
