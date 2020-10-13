var wrapperEle = document.body.querySelector(".wrapper");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for(var i=0; i<list.length; i++){
  if(list[i].name){
    
  var personEle = document.createElement("div");
  personEle.innerHTML=list[i].name;
  personEle.style.color="red";
  wrapperEle.appendChild(personEle);
  }
}
var buttonTarget = document.getElementsByClassName("Number")[0];
var counter = 1;

function incrementer(){
  buttonTarget.innerHTML=counter.toString();
  counter++;
  return counter;
}