import { createContext, useCallback, useState } from "react";

interface ILoggedUserContextData {
    userName: string;
    setName: (name: string) => void;
    logOut: () => void;
}

interface ILoggedUserProviderProps {
    children: React.ReactNode;
}

export const LoggedUserContext = createContext<ILoggedUserContextData>({} as ILoggedUserContextData);

export const LoggedUserProvider: React.FC<ILoggedUserProviderProps> = ({ children }) => {
    
    const [name, setName] = useState("");

    const handleLogOut = useCallback(() => {
        alert("User logged out");
    }, []);
    
    return (
        <LoggedUserContext.Provider value={{ userName: name, setName, logOut: handleLogOut }}>
            {children}
        </LoggedUserContext.Provider>
    );
}