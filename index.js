const express = require('express');
const cors = require("cors");
const db = require("./models");
const app = express();

app.use(cors());

app.use(express.json());

//Database initialization
db.sequelize.sync();

// Define Routes
app.use('/fastlane', require('./routes/faslane'));
app.use('/fastlane/components', require('./routes/components'));
app.use('/fastlane/solutions', require('./routes/solutions'));
app.use('/fastlane/bestPractices', require('./routes/bestPractices'));
app.use('/fastlane/admin', require('./routes/admin'));

app.get('/', function (req, res) {
  res.redirect('/fastlane');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Express server currently running on port ${PORT}`)
);
