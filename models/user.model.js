class User {
    constructor(name,email,password,status=1){
        this.name=name;
        this.email=email;
        this.password=password;
        this.status = status;
    }

    
}

module.exports = User