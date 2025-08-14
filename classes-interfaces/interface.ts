interface Authenticatable{
    email: string
    password?: string
    login(): void
    logout(): void
}

interface Authenticatable{
    role: string
}

let user: Authenticatable

user = {
    email: 'Test@',
    password: '123',
    login(){
        console.log(this.email, ' Logged in');
        
    },
    logout() {
        
    },
    role: 'admin'
}

user.login()


class AuthenticatableUser implements Authenticatable {
    private _nickname: string | undefined
    constructor(public email: string, public password: string, public role: string, public userName: string){
       if(this.email){
           this._nickname = this.email.split('@')[0]

       }else{
        this._nickname = ''
       }
    }

    login(){
        console.log(this.email, ' just logged in ', this._nickname);
        
    }
    logout(){}
}

const authenticate =(user: Authenticatable): void =>{
    user.login()
}

const u1 = new AuthenticatableUser('test123@@', '123', 'user', 'test')
u1.login()

interface AuthenticatableAdmin extends Authenticatable{
    isAdmin: boolean
    role: 'admin' | 'root'
}