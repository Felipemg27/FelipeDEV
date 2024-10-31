import React,{createContext,useContext,useEffect,useRef} from "react";

export const AuthContextList:any= createContext({});

export const AuthProviderList = (props:any):any=>{

    const onOpen  = () =>{
        alert('ABRIR MODAL')
    }

    return(
        <AuthContextList.Provider value={{onOpen}}>
            {props.children}            
        </AuthContextList.Provider>
    );
};
export const useAuth= () => useContext(AuthContextList)