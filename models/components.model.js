module.exports = function (sequelize, DataTypes) {
    return sequelize.define('components', {
        componentsId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        Images: {
            type: DataTypes.STRING,
            get: function () {
                return JSON.parse(this.getDataValue("Images"));
            },
            set: function (value) {
                return this.setDataValue("Images", JSON.stringify(value));
            }
        },
        files: {
            type: DataTypes.STRING,
            get: function () {
                return JSON.parse(this.getDataValue("files"));
            },
            set: function (value) {
                return this.setDataValue("files", JSON.stringify(value));
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
        contributors: {
            type: DataTypes.STRING,
            get: function () {
                return JSON.parse(this.getDataValue("contributors"));
            },
            set: function (value) {
                return this.setDataValue("contributors", JSON.stringify(value));
            }
        },
        thumbnails: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'components'
    });
};
