/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.getElementById("hej1").style.backgroundColor = "red";
document.getElementById("hej2").style.backgroundColor = "blue";
document.getElementById("hej3").style.backgroundColor = "green";

function Loop(){
    
    var Persons = 
        [{Name :"asd", Last:"asd", Phone:50208545, Email:"asdahscb@gmail.com"}
    , {Name :"dasd", Last:"fghf", Phone:53667688, Email:"hzc2@gmail.com"},
    {Name :"Omar", Last:"gangster", Phone:49263919, Email:"hej3@gmail.com"}];

}
function InsertTable(){
 var Persons = 
        [{Name :"asdzxc", Last:"xcv", Phone:50208545, Email:"hej1@gmail.com"}
    , {Name :"xcvn", Last:"xcv", Phone:53667688, Email:"hej2@gmail.com"},
    {Name :"xcjnxc", Last:"El-xcv", Phone:49263919, Email:"hej3@gmail.com"}];
    var myTableDiv = document.getElementById("myDynamicTable");
 var table = document.createElement('TABLE');
    table.border='1';
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

        for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
      
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
     myTableDiv.appendChild(table);
//
//var row = x.insertRow(0);

}
console.log(InsertTable());