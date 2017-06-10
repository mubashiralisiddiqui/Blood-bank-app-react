
export default class AuthAction {

  static SIGNUP = "SIGNUPE";
  static SIGNUPSUCCESSFUL='SIGNUPSUCCESSFUL';
  static SIGNUPFAILED= 'SIGNUPFAILED';

  static LOGIN= 'LOGIN';
  static LOGINSUCCESS='LOGINSUCCESS';
  static LOGINFAILED='LOGINFAILED';

  static LOGOUT='LOGOUT'
  static LOGOUTSUCCESSFUL='LOGOUT';

 static ISLOGGEDIN='ISLOGGEDIN';
  
static signup(){
    return{
        type:AuthAction.SIGNUP
    }
}

static signupsuccessful(payload){
    console.log(payload)
    return{
        type:AuthAction.SIGNUPSUCCESSFUL,
        payload
    }
}
static signupsfailed(payload){
    return{
        type:AuthAction.SIGNUPFAILED,
        payload
    }
}

static login(payload){
    return{
        type:AuthAction.LOGIN,
        payload
    }
}

static loginsuccess(payload){
    return{
        type:AuthAction.LOGINSUCCESS,
        payload
    }
}
static loginfailed(payload){
    return{
        type:AuthAction.LOGINFAILED,
        payload
    }
}
static logout(){
    return{
        type:AuthAction.LOGOUT
    }
}

static logoutsuccess(){
    return{
        type:AuthAction.LOGOUTSUCCESSFUL
    }
}
static islogin(){
    return{
         type:AuthAction.ISLOGGEDIN
    }
}

}













