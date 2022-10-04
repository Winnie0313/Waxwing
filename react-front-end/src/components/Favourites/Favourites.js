import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';


const Favourites = () => {

    const { user } = useContext(UserContext);

    const [db, setDb] = useState([]);

    useEffect(() => {
        fetchFavourites();
    }, []);

    const fetchFavourites = async () => {

        const response = await fetch('/api/favourites/1');
        const data = await response.json();
        
        const drinkArray = await Promise.all(
            data.map(async (drink) => {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drink.api_cocktail_id}`);
                const drinkData = await response.json();
                return drinkData.drinks[0];
            })
        );

        setDb(drinkArray);
        
    };

    return (

        
            
        <div>
            <h1>Favourites</h1>
        </div>

        

        
      
    )
}

export default Favourites;