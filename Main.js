class Main {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    get nameValue() {
        return this.name;
    }
    set currentAge(age){
        this.age = age;
    }
    first(){
        console.log(this.name, this.lastName)
    }
}

class MainSecond extends Main {
    constructor(name, lastName){
        super(name, lastName);
        this.name = `First Name: ${name};`;
        this.lastName = `Last Name: ${lastName};`;
    }
}



