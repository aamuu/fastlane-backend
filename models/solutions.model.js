/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('solutions', {
    solutionsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shortDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    longDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'images',
        key: 'imageId'
      }
    },
    fileId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'files',
        key: 'fileId'
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contributorsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contributors',
        key: 'contributorsId'
      }
    },
    thumbnails: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'solutions'
  });
};
