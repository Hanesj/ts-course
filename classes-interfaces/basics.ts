type UserProps = {
    name: string
    role: string
}

class User {
    name: string;
    role: string


    constructor(user: UserProps){
        this.name = user.name
        this.role = user.role
    }
}

const user1 = new User({name: 'Hej', role: 'admin'})

console.log(user1)

// public shortcut for att initialisera properties av objekt,
// public properties kan anvandas med punknotation till exempel <User>.name
// #private kan bara hamtas via klassmetod
class Area {
    readonly #area: number
   private readonly area2: number
    constructor(public h: number, public w: number){
        this.#area = h * w
        this.area2 = h * w
    }
    get(){
        return this.#area
    }
    getPrivate(){
       return this.area2 
    }
}

const m = new Area(10, 5)
const n = new Area(3, 3)


console.log(m.get())
console.log(n.getPrivate());
