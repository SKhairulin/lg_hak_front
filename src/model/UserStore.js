import {makeAutoObservable} from "mobx";

export default class UserStore {                     //Класс текущего пользователя
    constructor() {
        this._isAuth = false
        this._userName = ''
        this._wrongAuthData = false
        this._dostup = false
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUserName(name) {
        this._userName = name
    }
    setDostup(dostup){
        this._dostup = dostup
    }

    get isAuth() {
        return this._isAuth
    }
    get userName() {
        return this._userName
    }
    get wrongAuthData(){
        return this._wrongAuthData
    }

}