class User{
    constructor(email,password){
        this.email=email,
       this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
       // return this._password.toUpperCase()
       return `${this._password}shreya`
    }
    set password(value){
        this._password=value
    }
}
const shreya=new User("shreya@ai","abc")
console.log(shreya.password)
console.log(shreya.email)