// // Helper for Favourites page, finds the drink object from the database and sets it to the drinkObject state
// export function favouriteDrinkId(id) {
//     const properDrink = db.find((drink) => drink.idDrink === id);

//     setDrinkObject(properDrink);
//   };

// // Gets the ingredients for the drink object

// export function ingredientsForDrink() {
//     const ingredientsArray = [];

//     for (let i = 1; i < 16; i++) {
//       if (drinkObject[`strIngredient${i}`] !== null) {
//         ingredientsArray.push(drinkObject[`strIngredient${i}`]);
//       }
//     }
//     return ingredientsArray;
//   };

// // Gets the measurements for the drink object

// export function measurementsForDrink()  {
//     const measurementsArray = [];

//     for (let i = 1; i < 16; i++) {
//       if (drinkObject[`strMeasure${i}`] !== null) {
//         measurementsArray.push(drinkObject[`strMeasure${i}`]);
//       }
//     }
//     return measurementsArray;
//   };

