// Global scope
 let a = 304
//  const b = 29
  var c = 43


  //block scope
 if(true){
    let a = 30
    const b = 29
    var c = 47
 }

 //console.log(a);  //304
// console.log(b);
 //console.log(c);   //47


 function one(){
    const username = "Saniya"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);

    two()
 }
// one()


if(true){
    const username = "Saniya"
    if(username == "Saniya"){
        const website = " YOUtube"
       // console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);



//+++++++++++++++++ Interesting++++++++++++++++++//


console.log(addone(5));      //gives value 6
function addone(num){
    return num + 1
}


console.log(addTwo(5));      //gives error
const addTwo = function(num){
    return num + 2
}
