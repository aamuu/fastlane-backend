/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('files', {
    fileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    linkText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    downloadable: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'files'
  });
};
