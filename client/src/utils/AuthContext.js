import {createContext, useContext} from 'react';

export const UserContext = createContext ({
    loggedin: false,
    cgloggedin: false,
    logIn: () => {},
    logOut: () => {},
    cgLogIn: () => {}

});

export function useUserContext () {
    const {loggedin, cgloggedin, logIn, logOut, cgLogIn} = useContext(UserContext)
    return {loggedin, cgloggedin, logIn, logOut, cgLogIn}
}