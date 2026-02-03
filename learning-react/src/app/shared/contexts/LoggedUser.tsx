import { createContext } from "react";

interface ILoggedUserContextData {
    userName: string;
}

interface ILoggedUserProviderProps {
    children: React.ReactNode;
}

export const LoggedUserContext = createContext<ILoggedUserContextData>({} as ILoggedUserContextData);

export const LoggedUserProvider: React.FC<ILoggedUserProviderProps> = ({ children }) => {
    return (
        <LoggedUserContext.Provider value={{ userName: "Luiz" }}>
            {children}
        </LoggedUserContext.Provider>
    );
}