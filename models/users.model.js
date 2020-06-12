/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        role: {
            type: DataTypes.ENUM,
            values: ["0", "1", "2"],
        }
    }, {
        tableName: 'users'
    }, {timestamps: false});
};
