import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export default function UserProvider(props) {

    const [user, setUser] = useState({});

    useEffect(() => {
        document.cookie = "user_id=1";
        const user_id = document.cookie
            .split("; ")
            .find((row) => row.startsWith("user_id="))
            .split("=")[1];
        fetch(`/api/users/${user_id}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    const userData = { user, setUser };

    return (

        <UserContext.Provider value={userData}>
            {props.children}
        </UserContext.Provider>
    );

}