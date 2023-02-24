import { createContext, useContext, useMemo, useReducer } from "react"

interface IDispatchActionValue {
    type: string,
    payload: any
}

interface IUserInfo {
    userName: string,
    passWord: string
}

const Context = createContext(null);

const reducer = (state: any, action: IDispatchActionValue) => {
    console.log(state, action);
    return state;
}

export function Provider(props: any): any {
    const initValue: IUserInfo = {
        userName: "",
        passWord: ""
    }

    const [state, dispatch] = useReducer(reducer, initValue);

    const value = useMemo(() => ({
        ...state,
        setUserName(val: any) {
            dispatch({ type: "SETUSERNAME", payload: val })
        }
    }), [state])


    return <Context.Provider value={value}>{props.Children}</Context.Provider>;
}


export const UserContext = (props: any) => {
    const context = useContext(Context);
    if (context) {
        throw Error("必须在UserContext上下文中使用！")
    }
    return context
}