const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/theming/images'));
app.use(express.static(__dirname + '/../client/src/data/assets'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));