import { createContext, useState } from "react";

const AuthContext = createContext({
    login : () => {},
    logout : () => {},
    user : null
});

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const login = ( isLogin ) => {
        setUser(isLogin);
    }

    const logout = ( isLogout ) => {
        setUser(isLogout);
    }

    return (
        <AuthContext.Provider value={{login,logout,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

