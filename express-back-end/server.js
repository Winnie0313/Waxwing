const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const { application } = require('express');
const PORT = 8001;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Routes

const usersRoutes = require('./routes/users');
const favouritesRoutes = require('./routes/favourites');

// API Routes

App.use('/api/users', usersRoutes(knex));
App.use('/api/favourites', favouritesRoutes(knex));

// Server Activation

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
