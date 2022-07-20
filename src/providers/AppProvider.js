import { createContext, useContext,useState } from "react";

const appContext = createContext();

export function AppProvider({children}){
    //const app = useAppProvider();
    const [category, setCategory] = useState('Beef');
    const [period,setPeriod] = useState('2:00 - 3:00 pm');
    const [day,setDay] = useState({
        name:'Jue',
        number:'02'
    });
    return <appContext.Provider value={{category,setCategory,period,setPeriod,day,setDay}}>{children}</appContext.Provider>
}


export function useAppContext(){
    return useContext(appContext);
}