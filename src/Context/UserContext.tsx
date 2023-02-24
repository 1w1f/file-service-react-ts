import { createContext, useContext, useEffect, useMemo, useReducer } from "react"
import { AUTH } from "../softWareEnv";
import { local } from "../utils/store";


const Context = createContext(null);

const reducer = (state: any, action: IDispatchActionValue) => {
    console.log(`reducerchuli${action.payload}`);

    switch (action.type) {
        case "SET_USER_NAME":
            state = { ...state, userName: action.payload }
            break;
        case "SET_USER_PASSWORD":
            state = { ...state, passWord: action.payload }
        default: break;
    }
    return state;
}

export const Provider = (props: any): any => {
    const initValue: IUserInfo = {
        userName: "",
        passWord: ""
    }


    const [state, dispatch] = useReducer(reducer, initValue);

    const value = useMemo(() => ({
        ...state,
        setUserName(val: any) {
            dispatch({ type: "SET_USER_NAME", payload: val })
        },
        setPassWord(val: any) {
            dispatch({ type: "SET_USER_PASSWORD", payload: val })
        }
    }), [state])


    useEffect(() => {
        const auth = local.get(AUTH);
        if (auth) {
            let value = JSON.parse(auth);
            dispatch({ type: "SET_USER_NAME", payload: value.userName });
            dispatch({ type: "SET_USER_PASSWORD", payload: value.passWord })
        }
    }, [])


    return <Context.Provider value={value}>{props.children}</Context.Provider>;
}


export const useUserContext = () => {
    const context: any = useContext(Context);
    if (!context) {
        throw Error("必须在UserContext上下文中使用！")
    }
    return context
}