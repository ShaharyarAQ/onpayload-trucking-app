const config = require('../config/config.json');

// 1.) Access the Node File System package
//const fs = require("fs");

// 2.) Retrieve the Certificate Authority chain file (wherever you placed it - notice it's just in the Node project root here)
//const cert = [fs.readFileSync("skysql_chain.pem", "utf8")];

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  port: 5432,
  dialect: config.development.dialect,
  // 3.) Add an "ssl" property to the dialectOptions configuration, using the serverCert const defined above
  /*dialectOptions: {
    ssl: {
      ca: cert
    }
  },*/
  define: {
    timestamps: false
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User")(sequelize, Sequelize);
db.session = require("./Session")(sequelize, Sequelize);
db.client = require("./Client")(sequelize, Sequelize);
db.vehicle = require("./Vehicle")(sequelize, Sequelize);
db.income = require("./Income")(sequelize, Sequelize);
db.expense = require("./Expense")(sequelize, Sequelize);
db.ifta = require("./Ifta")(sequelize, Sequelize);
db.load = require("./Load")(sequelize, Sequelize);
db.member = require("./Member")(sequelize, Sequelize);

// Relations


module.exports = db;