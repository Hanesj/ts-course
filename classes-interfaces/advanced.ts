class User {
    private _role: string = ''
    // protected kan nas fran subklasser men inte fran utanfor klassen
    constructor(private firstName: string, private lastName:string){}

    get fullName(){
        return this.firstName + ' ' + this.lastName + this._role
    }

    set role(role1: string){
        this._role = role1
        
    }

    static eid = 'USER'

    static greet(){
        console.log('Hello from static');
        
    }

}

const user1 = new User('Hej', 'Last')

console.log(user1.fullName);

user1.role = 'Admin'

console.log(user1.fullName);
console.log(User.eid);

User.greet()


class Employee extends User{
    constructor(public title: string){
        super('Super', ' class');

    }

    work(){
        console.log('working...');
        
    }
}

const e1 = new Employee('Cleaner')
e1.work()

abstract class UIElement{
    constructor(public identifier: string){}

    clone(target: string){

    }
}
// abstract klasser kan inte instantieras
class SideElement extends UIElement{
    constructor(public identifier: string, public position: 'left'| 'right'){
        super(identifier)
    }
}