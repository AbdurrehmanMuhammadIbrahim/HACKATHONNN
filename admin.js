let signup=()=>{
    var email= document.getElementById("email").value
    var password= document.getElementById("pass").value
    firebase.auth().createUserWithEmailAndPassword(email, password)  
       .then((data) => {
    // Signed in 
    // var user = userCredential.user;
    // ...
    console.log(data)
    window.location.href="./adminhome.html"
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
console.log(errorMessage)
alert(errorMessage)
    
  });
  var image =document.getElementById("image").files[0]
var imgname = image.name 
console.log(image)
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var pass = document.getElementById("pass").value
  var country = document.getElementById("country").value
  var city = document.getElementById("city").value
  var admin ={
      name : name,
      email :email,
      password :pass,
      country : country,
      city : city,
    
  
  }
//   console.log(admin)
//   var uploadTask = firebase.storage().ref("Images/"+imgname+".png").put(image)
// uploadTask.ref.getDownloadURL().then(function(url){
//     ImgUrl = url;
//     admin.link = ImgUrl;
    // firebase.database().ref("data").push(obj)

// })
  firebase.database().ref("Admins").push(admin)
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
    window.location.href="./adminhome.html"
  })
  .catch((error) => {
    // var errorCode = error.code;
    var errorMessage = error.message;
console.log(errorMessage)
alert(errorMessage)
    
  });

 
}

// let signup=()=>{
//     var email= document.getElementById("email").value
//   var password= document.getElementById("pass").value
// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((data) => {
//       console.log(data)
//     // Signed in 
//     // var user = userCredential.user;
//     // ...
//     window.location.href="./user.html"
//   })
//   .catch((error) => {
//     // var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//     // ..
//   });
// }
// let signup =()=>{
 
//     var email = document.getElementById("email").value
//       var password= document.getElementById("pass").value
// firebase.auth().createUserWithEmailAndPassword(email, password)


// .then((data) => {
//   console.log(data)
//   const email = data.user.email;
//   window.location.href=`./quiz.html?email=${email}`;
//   var user ={
//      email:email
//   }
  
//   localStorage.setItem("user",JSON.stringify(user))

// })
// .catch((error) => {
 
//   var errorMessage = error.message;
//   console.log(errorMessage)
//   alert(errorMessage)
 
// });

// }

// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

// let save =()=>{
//     var items =document.getElementById("page-title").value 
// var price =document.getElementById("page-main-content").value
// var image =document.getElementById("page-url").files[0]
// var imgname = image.name 
// // localStorage.setItem("item",items)
// // localStorage.setItem("image",image)
// // localStorage.setItem("iteghn",price)
// // console.log(items,image,price)
// // document.write(image,items,price)
// var obj={
//     itemname : items,
//     image:imgname, 
//     price:price
 
// }
// var uploadTask = firebase.storage().ref("Image/"+imgname+".png").put(image)
// uploadTask.on("state_changed",function(snapshot){
//     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//     document.getElementById("upProgress").innerHTML="upload"+progress+"%";

//     uploadTask.snapshot.ref.getDownloadURL().then(function(url){
//         ImgUrl = url;
//         obj.link = ImgUrl;
//         firebase.database().ref("data").push(obj)

//       //  firebase.database().ref("data/"+imgname).set({
//       //      Name : ImgName,
//       //      link: ImgUrl
//       //  })
//        alert ("image is added")
//        }
//            );
//        })


// }

  
  
let save =()=>{
    var items =document.getElementById("page-title").value 
var price =document.getElementById("page-main-content").value
// var restName=document.getElementById("dropdownMenuButton1").value
// var delType =document.getElementById("dropdownMenuButton1").value
var image =document.getElementById("page-url").files[0]
var imgname = image.name 
// localStorage.setItem("item",items)
// localStorage.setItem("image",image)
// localStorage.setItem("iteghn",price)
// console.log(items,image,price)
// document.write(image,items,price)
var obj={
    itemname : items,
    image:imgname, 
    price:price,
    // restName:restName,
    // delivery:delType,
 
}
// console.log(obj)
var uploadTask = firebase.storage().ref("Image/"+imgname+".png").put(image)
      uploadTask.on("state_changed",function(snapshot){
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          document.getElementById("upProgress").innerHTML="upload"+progress+"%";
  
          uploadTask.snapshot.ref.getDownloadURL().then(function(url){
              ImgUrl = url;
              obj.link = ImgUrl;
              firebase.database().ref("data").push(obj)

            //  firebase.database().ref("data/"+imgname).set({
            //      Name : ImgName,
            //      link: ImgUrl
            //  })
             alert ("image is added")
             }
                 );
             })

}

// function signin(){
// var name = document.getElementById("name").value
// var email = document.getElementById("email").value
// var pass = document.getElementById("pass").value
// var country = document.getElementById("country").value
// var city = document.getElementById("city").value
// var admin ={
//     name : name,
//     email :email,
//     password :pass,
//     country : country,
//     city : city,

// }
// console.log(admin)
// }



