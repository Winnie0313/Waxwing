import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export default function UserProvider(props) {

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`/api/users/`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data[0]);
            })
            .catch((err) => console.log(err));
    }, []);

    const userData = { user, setUser };

    return (

        <UserContext.Provider value={userData}>
            {props.children}
        </UserContext.Provider>
    );

}