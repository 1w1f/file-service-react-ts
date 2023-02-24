interface userInfo {
    userName: string,
    passWord: string
}

interface IDispatchActionValue {
    type: string,
    payload: any
}

interface IUserInfo {
    userName: string,
    passWord: string
}


interface IAntdMenuItemOnClickArgs {
    item: any;
    key: any;
    keyPath: any;
    domEvent: any;
}