const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['fsafasdfdsafdsfsfsad', 'asdfasdfasgafdgrt423r'],
  })
);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.use(express.static('public'));
