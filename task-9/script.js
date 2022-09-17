var arr=[]
var data1=document.getElementById("id").value;
var data2=document.getElementById("name1").value;
var data2=document.getElementById("sal").value;
  function fun(){
    
    try {
      if(data2=="") 
      {
      throw "Empty";
      }
      if(!isNaN(data1))
      {
        throw "you"
      }
      var obj={
        data1:id,
        data2:name1,
        data3:sal
      }
      arr.push(obj)
    }
       catch (error) {
      document.getElementById("p1").innerHTML= "input is"+error 
    }
    var table="<table><tr><th>id</th><th>name</th><th>Salary</th></tr>"
    arr.forEach((element) => {
      table+=
      '<tr><td>'+
        element.data1 +
        '</td><td>' +
        element.data2 +
        '</td><td>'
        +element.data3+
        '</td></tr>'
    
    });
    table+="</table>"
    document.getElementById("Demo1").innerHTML=table;
    
  }