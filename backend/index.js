const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Include models
const db = require("./models");

// Include controllers
const users = require('./controllers/users.controller');
const clients = require('./controllers/clients.controller');
const vehicles = require('./controllers/vehicles.controller');
const incomes = require('./controllers/incomes.controller');
const expenses = require('./controllers/expenses.controller');
const ifta = require('./controllers/ifta.controller');
const loads = require('./controllers/loads.controller');
const members = require('./controllers/members.controller');

// Server start port
const port = 3000;

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

// Allow CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// Users
app.get('/getUsers', users.getUsers);
app.post('/auth/login', users.login);

// loads
app.get('/loads/', loads.get);
app.get('/loads/hashed/:hashedId', loads.getHashed);
app.get('/loads/:id', loads.getOne);
app.post('/loads/', loads.add);
app.delete('/loads/:id', loads.delete);

app.post('/addIncome', incomes.addIncome);
app.get('/getIncomes', incomes.getIncomes);
app.get('/getIncomeInfo', incomes.getIncomeInfo);
app.delete('/deleteIncome', incomes.deleteIncome);

app.post('/addExpense', expenses.addExpense);
app.get('/getExpenses', expenses.getExpenses);
app.get('/getExpenseInfo', expenses.getExpenseInfo);
app.delete('/deleteExpense', expenses.deleteExpense);

app.post('/addMember', members.addMember);
app.get('/getMembers', members.getMembers);
app.get('/getMemberInfo', members.getMemberInfo);
app.delete('/deleteMember', members.deleteMember);

app.post('/addVehicle', vehicles.addVehicle);
app.get('/getVehicles', vehicles.getVehicles);
app.get('/getVehicleInfo', vehicles.getVehicleInfo);
app.delete('/deleteVehicle', vehicles.deleteVehicle);

app.get('/getClients', clients.getClients);
app.post('/addClient', clients.addClient);

app.post('/addIfta', ifta.addIfta);

// Start server
app.listen(port, () => {
  console.log(`\n=================`);
  console.log(`Example app listening on port ${port}`);
  console.log(`=================\n`);
})
