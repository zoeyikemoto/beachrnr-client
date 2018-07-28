const express = require('express');
const path = require('path');
const helpers = require('./helpers/search');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/../client/theming/images`));
app.use(express.static(`${__dirname}/../client/src/data/assets`));

app.get('/api/listing/:location', (req, res) => {
  const queryString = req.url.split('/')[req.url.split('/').length - 1].toLowerCase();

  helpers.getSearchResult(queryString, (data) => {
    res.send(data);
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
