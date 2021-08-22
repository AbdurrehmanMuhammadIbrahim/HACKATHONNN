// function addlist(item,price,){
//     var data = document.getElementById("data")
//     var items = document.getElementById("data")
//     // var header = document.createElement("h1")
//     var _itemname = document.createElement("h1")
//     var _image = document.createElement("img")
//     var _price = document.createElement("H3")
   

//     // header.innerHTML=
//     _itemname.innerHTML =  "  "+item;
//     // _image.innerHTML = "image"+"  "+link;
//     _image.src = link;
//      // ImgName = document.getElementById("namebox").value
 
//   _price.innerHTML = "Rs:"+"  "+price +"<hr>";

//   items.appendChild(_itemname)
//   data.appendChild(_image)
//   data.appendChild(_price)


// // }
// function FetchAllData(){
// firebase.database().ref("Admins").on("value",function(snapshot){
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

function get(){
    
firebase.database().ref("Admins").on("child_added",function(data){
    a=data.val()
console.log(a)
document.getElementById("get").innerHTML+=
`
<div class="card-body" id="restcard">
<div class="card" style="width: 18rem;">
<img src="./" class="card-img-top" alt="..."> 

          <h5 class="card-title" id="name">${a.name}</h5><br>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div><br>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="li">${a.city}</li>
          <li class="list-group-item" id="li">${a.country}</li>
          <li class="list-group-item" id="li">${a.email}</li>
        </ul>
        <button id="btn"><a href="./userhome.html" id="btn">VISIT</a></button><br><br>

      </div> 
`
})

}
// var uploadTask = firebase.storage().ref("Image/"+imgname+".png").put(image)
get()