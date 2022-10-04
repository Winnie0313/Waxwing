import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';


const Favourites = () => {

    const { user, setUser } = useContext(UserContext);

    const [db, setDb] = useState([]);

    const drinkArray = [];

    useEffect(() => {
        fetchFavourites();
    }, []);

    const fetchFavourites = async () => {
        const response = await fetch('localhost:8001/api/favourites/1');
        const data = await response.json();
        console.log(data);
        setDb();
        console.log(db);
    };

    
    return (

        
            
        <div>
            <h1>Favourites</h1>
        </div>



        
      
    )
}

export default Favourites;