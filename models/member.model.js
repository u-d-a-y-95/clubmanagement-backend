class Member {
    constructor(obj){
        this.name=obj?.name ;
        this.email=obj?.email ||"";
        this.password=obj?.password || "";
        this.mobile = obj?.mobile || "",
        this.address = obj?.address || "",
        this.imgUrl = obj?.imgUrl
        this.status = 1;

    }

    
}

module.exports = Member