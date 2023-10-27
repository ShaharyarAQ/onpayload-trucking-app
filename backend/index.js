const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require("./models");

const users = require('./controllers/users.controller');
const clients = require('./controllers/clients.controller');
const vehicles = require('./controllers/vehicles.controller');
const incomes = require('./controllers/incomes.controller');
const expenses = require('./controllers/expenses.controller');
const ifta = require('./controllers/ifta.controller');
const loads = require('./controllers/loads.controller');
const members = require('./controllers/members.controller')

const port = 3000;

// Body parser to accept JSON data
app.use(bodyParser.json());

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

app.get('/getUsers', users.getUsers);



app.post('/addLoad', loads.addLoad);
app.get('/getLoads', loads.getLoads);
app.get('/getLoadInfo', loads.getLoadInfo);
app.delete('/deleteLoad', loads.deleteLoad);

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
  console.log(`\n======\nExample app listening on port ${port}\n======\n`);
})
