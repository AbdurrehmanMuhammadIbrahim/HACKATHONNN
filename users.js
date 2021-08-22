let signup=()=>{
    var email= document.getElementById("email").value
  var password= document.getElementById("pass").value
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((data) => {
      console.log(data)
    // Signed in 
    // var user = userCredential.user;
    // ...
    // alert(data)
    window.location.href="./restturants.html"
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}

let signin=()=>{
    var email= document.getElementById("email").value
    var password= document.getElementById("pass").value
    firebase.auth().signInWithEmailAndPassword(email, password) 
     .then((data) => {
    // Signed in 
    // var user = userCredential.user;
    // ...
    console.log(data)
    window.location.href="./restturants.html"
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
console.log(errorMessage)
alert(errorMessage)
    
  });
}



// function addlist(item,image,price, link){
//     var data = document.getElementById("data")
//     var items = document.getElementById("data")
//     // var header = document.createElement("h1")
//     var _itemname = document.createElement("p")
//     var _image = document.createElement("img")
//     var _price = document.createElement("h1")

//     // header.innerHTML=
//     _itemname.innerHTML = "itemName =" +"  "+item;
//     // _image.innerHTML = "image"+"  "+link;
//     _image.src = link;
//      // ImgName = document.getElementById("namebox").value
 
//   _price.innerHTML = "price"+"  "+price +"<hr>";

//   items.appendChild(_itemname)
//   data.appendChild(_image)
//   data.appendChild(_price)


// }
// function FetchAllData(){
// firebase.database().ref("data").on("value",function(snapshot){
//  snapshot.forEach(
//      function(childSnapshot) {
//    var item = childSnapshot.val().itemname;
//   var image = childSnapshot.val().image;  
//       var link = childSnapshot.val().link;

//   var price = childSnapshot.val().price;  

//      addlist(item,image,price, link)          
//  }
//  )
// })
// }
// window.onload(FetchAllData())

function addlist(item,image,price, link ){
    var data = document.getElementById("data")
    var items = document.getElementById("data")
    // var header = document.createElement("h1")
    
    var _itemname = document.createElement("h1")
    var _image = document.createElement("img")
    var _price = document.createElement("H3")
    // var _btn =document.createElement("BUTTON") 
   

    // header.innerHTML=
    _itemname.innerHTML =  "  "+item;
    // _image.innerHTML = "image"+"  "+link;
    _image.src = link;
     // ImgName = document.getElementById("namebox").value
 
  _price.innerHTML = "Rs:"+"  "+price +"<hr>";
//   _btn.innerHTML = "order now"+ btn  ;
  items.appendChild(_itemname)
  data.appendChild(_image)
  data.appendChild(_price)
//   btn.appendChild(_btn)


}
function FetchAllData(){
firebase.database().ref("data").on("value",function(snapshot){
 snapshot.forEach(
     function(childSnapshot) {
   var item = childSnapshot.val().itemname;
  var image = childSnapshot.val().image;  
      var link = childSnapshot.val().link;
  var price = childSnapshot.val().price;  
//   var  btn= childSnapshot.val().btn;  
     addlist(item,image,price, link)          
 }
 )
})
}
window.onload(FetchAllData())

