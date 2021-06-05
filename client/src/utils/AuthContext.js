import {createContext, useContext} from 'react';

export const UserContext = createContext ({
    loggedin: false,
    logIn: () => {},
    logOut: () => {}
});

export function useUserContext () {
    const {loggedin, logIn, logOut} = useContext(UserContext)
    return {loggedin, logIn, logOut}
}