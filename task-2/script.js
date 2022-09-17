class emp{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
}
var Data=[{"id":1,"name":"x","salary":200},{"id":2,"name":"y","salary":400},{"id":3,"name":"z","salary":500}];
document.getElementById("p1").innerHTML=JSON.stringify(Data);
