const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Upload middleware
const upload = require('./services/uploads');

// Load enviromental variables
require('dotenv').config();

// Include models
const db = require("./models");

// Include controllers
const users = require('./controllers/users.controller');
const clients = require('./controllers/clients.controller');
const vehicles = require('./controllers/vehicles.controller');
const incomes = require('./controllers/incomes.controller');
const expenses = require('./controllers/expenses.controller');
const iftas = require('./controllers/ifta.controller');
const loads = require('./controllers/loads.controller');
const members = require('./controllers/members.controller');
const weather = require('./controllers/weather.controller');

const businessDetails = require('./controllers/business-details.controller');
const iftaSettings = require('./controllers/ifta-settings.controller');

// const { validateSession } = require('./middlewares/session');

// Server start port
const port = process.env.APP_PORT || 3000;

// Body parser to accept JSON data
app.use(bodyParser.json());

// Initialize all models
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Relations
db.load.belongsTo(db.member, { as: "driver", foreignKey: "driverId" });
db.load.belongsTo(db.member, { as: "dispatcher", foreignKey: "dispatcherId" });
db.load.belongsTo(db.client, { as: "client", foreignKey: "clientId" });
db.load.belongsTo(db.vehicle, { as: "vehicle", foreignKey: "vehicleId" });
db.load.belongsTo(db.vehicle, { as: "trailer", foreignKey: "trailerId" });

db.expense.belongsTo(db.vehicle, { as: "vehicle", foreignKey: "vehicleId" });
db.income.belongsTo(db.vehicle, { as: "vehicle", foreignKey: "vehicleId" });
db.vehicle.belongsTo(db.member, { as: "driver", foreignKey: "driverId" });

// Allow CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// users
app.get('/getUsers', users.getUsers);
app.post('/auth/login', users.login);

// incomes
app.post('/addIncome', incomes.addIncome);
app.get('/getIncomes', incomes.getIncomes);
app.get('/getIncomeInfo', incomes.getIncomeInfo);
app.put('/updateIncome', incomes.updateIncome);
app.delete('/deleteIncome', incomes.deleteIncome);

// expenses
app.post('/addExpense', expenses.addExpense);
app.get('/getExpenses', expenses.getExpenses);
app.get('/getExpenseInfo', expenses.getExpenseInfo);
app.put('/updateExpense', expenses.updateExpense);
app.delete('/deleteExpense', expenses.deleteExpense);

// members
app.post('/addMember', upload.single('file'), members.addMember);
app.get('/getMembers', members.getMembers);
app.get('/getMemberInfo', members.getMemberInfo);
app.put('/updateMember', members.updatemember);
app.delete('/deleteMember', members.deleteMember);

// vehicles
app.post('/addVehicle', vehicles.addVehicle);
app.get('/getVehicles', vehicles.getVehicles);
app.get('/getVehicleInfo', vehicles.getVehicleInfo);
app.put('/updateVehicle', vehicles.updateVehicle);
app.delete('/deleteVehicle', vehicles.deleteVehicle);

// clients
app.get('/getClients', clients.getClients);
app.post('/addClient', clients.addClient);

// loads
app.get('/loads/', loads.get);
app.get('/loads/hashed/:hashedId', loads.getHashed);
app.get('/loads/:id', loads.getOne);
app.post('/loads/', loads.add);
app.put('/loads/', loads.update);
app.delete('/loads/:id', loads.delete);
app.patch('/loads/:hashedId', loads.updateWithHashedId);
app.get('/loads/start-load/:hashedId', loads.startLoad);

// ifta
app.get('/iftas/', iftas.get);
app.get('/iftas/:id', iftas.getOne);
app.post('/iftas/', iftas.add);
app.put('/iftas/', iftas.update);
app.delete('/iftas/:id', iftas.delete);

// weather data
app.get('/weather/:location', weather.getWeather);

// business details
app.get('/getBusinessDetails', businessDetails.getBusinessDetails);
app.put('/editBusinessDetails',businessDetails.editBusinessDetails);

// ifta settings
app.get('/getIftaSettings', iftaSettings.getIftaSettings);
app.put('/editIftaSettings', iftaSettings.editIftaSettings);


///////////////
// Start server
///////////////
app.listen(port, () => {
  console.log(`\n=================`);
  console.log(`Example app listening on port ${port}`);
  console.log(`=================\n`);
});