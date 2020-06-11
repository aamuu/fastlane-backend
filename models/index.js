const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/users.model")(sequelize, Sequelize);
db.component = require("../models/components.model")(sequelize, Sequelize);
db.solution = require("../models/solutions.model")(sequelize, Sequelize);
db.bestPractice = require("../models/bestpractices.model")(sequelize, Sequelize);
db.contributor = require("../models/contributors.model")(sequelize, Sequelize);
db.file = require("../models/files.model")(sequelize, Sequelize);
db.image = require("../models/images.model")(sequelize, Sequelize);


module.exports = db;