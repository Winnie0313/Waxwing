const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const { application } = require('express');
const PORT = 8001;
const knex = require('./db/knex');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// renders the homepage
// App.get('/', (req, res) => {
//   axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
//     .then((response) => {
//       console.log(response.data)
//     })
//     .catch((err) => 
//     console.log(err))
// })

const usersRoutes = require('./routes/users');
const favouritesRoutes = require('./routes/favourites');

var cors = require('cors');

App.use(cors());

// API Routes


App.use('/api/users', usersRoutes(knex));
App.use('/api/favourites', favouritesRoutes(knex));

// Server Activation

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
