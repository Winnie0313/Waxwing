import { useState } from "react";

export default function useModal() {

    const [modalView, setModalView] = useState(false);
    const [drinkObject, setDrinkObject] = useState({});
    const [popular, setPopular] = useState([]);

    const singleDrinkId = (id) => {
    
        const drink = popular.find((drink) => drink.idDrink === id);
    
        setDrinkObject(drink)
    }

    const handleModal = (id) => {
        singleDrinkId(id);
        setModalView(true);
    }

    return [modalView, setModalView, handleModal, drinkObject];

}


