const express = require('express');
const bodyParser = require('body-parser');
const googleSheets = require('gsa-sheets');

const key = require('./privateSettings.json');
const SPREADSHEET_ID ='1N2yhwayaB9-8rhTMU_g0Ah0P3IVvR71INsdIOtEAzNI';

// TODO(you): Update the contents of privateSettings accordingly, as you did
// in HW5, then uncomment this line.
//const key = require('./privateSettings.json');

// TODO(you): Change the value of this string to the spreadsheet id for your
// GSA spreadsheet, as you did in HW5, then uncomment these lines.
// const SPREADSHEET_ID = '__YOUR__SPREADSHEET__ID__HERE__';
const sheet = googleSheets(key.client_email, key.private_key, SPREADSHEET_ID);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

async function onGet(req, res) {
    const result = await sheet.getRows();
    console.log(result);
    const rows = result.rows;
    res.json(rows);
}
app.get('/api', onGet);

async function onPost(req, res){
  const target = req.body;
    const result = await sheet.getRows();
  var ans=[target.stage , target.link];
  console.log(ans);
  sheet.appendRow(ans);
  res.json(ans);
}
app.post('/api', jsonParser, onPost);

// Please don't change this; this is needed to deploy on Heroku.
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});
