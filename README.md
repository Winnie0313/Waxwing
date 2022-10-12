# Waxwing

This is a single page app that allows users to search, create and share cocktail recipes.
users can:

- search cocktal recipies by category (Alcoholic, Non-alcoholic , Shot ...)
- serach by name , fisrt letter and ingredients
- Add drinks to their favorite list
- Share drink recipes link
- Create their own cocktail recipe and image and video to it

# Tech Stack:

- Front-end : React, Bootstrap, Styled components, MaterialUi
- Back-end : PSQL , Express, Axios, Knex.js

## Setup

- Clone the repository
- Copy .env.example to .env in react-fron-end and express-back-end
- Add DataBase information, and TheCocktailDB.com API key

### DataBase Setup :

- cd express-back-end
- `sh npm install `
- `sh psql -h <localhost> -p<5432> -U <labber> -d <nameOfYouDb> `
- `sh npm run migrate `
- `sh npm run seed `
- `sh npm start `

Front-end setup

- cd react-fron-end
- `sh npm install `
- `sh npm start `

## Final Product

#### Home page

!["Home Page](screenshots/Homepage.png)

#### Categories

!["Category](screenshots/Categories.png)

#### Search Coktail By

![Search cocktail by](screenshots/search%20cocktail%20by.png)

#### My Bar

![My Bar](screenshots/my%20bar.png)

#### Modal

![Modal](screenshots/Modal.png)

#### Details page

![Details page](screenshots/details%20page.png)

#### Add new cocktail form

![Add new cocktail form](screenshots/new%20cocktail%20form.png)

#### My cocktails page

![My cocktails page](screenshots/my%20cocktails%20page.png)
