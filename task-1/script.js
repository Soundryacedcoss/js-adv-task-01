var arr = [];
function add() {
var data1 = document.getElementById("ID").value;
var data2 = document.getElementById("name").value;
var data3 = document.getElementById("sal").value;
  
    // console.log(data1);
  var obj = {
    data1: data1,
    data2: data2,
    data3: data3,
  };
  arr.push(obj);
  fun();
}
// console.log(data1);
function fun() {
  let table='<table id="table1"><tr><th>id</th><th>Name</th><th>Salery</th><th>Action</th></tr>'
  arr.forEach((element) => {
    table+=
    '<tr><td>'+
      element.data1 +
      '</td><td>' +
      element.data2 +
      '</td><td>'
      +element.data3+
      '</td><td>'
      +'<a href="#" id="del" onclick="fun1()" >delete</a>'+
      '</td></tr>'
      // str+='</table>';
  });
  table+='</table>';
  document.getElementById("Demo1").innerHTML=table;
}


