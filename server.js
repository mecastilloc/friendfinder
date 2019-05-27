

// Dependencies
// =============================================================
var express = require("express");
//var path = require("path");
const html = require("./routing/htmlRoutes");
const friends = require("./routing/apiRoutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


var actual = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

//app.use("/api", apiR)
app.use("/api/friends", friends);
app.use("/", html);


// var friendsA =[
  
//     {
//       "name": "Ahmed",
//       "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
//       "scores": [
//       "5",
//       "1",
//       "4",
//       "4",
//       "5",
//       "1",
//       "2",
//       "5",
//       "4",
//       "1"
//       ]
//       },
//       {
//       "name": "Jacob Deming",
//       "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
//       "scores": [
//       "4",
//       "2",
//       "5",
//       "1",
//       "3",
//       "2",
//       "2",
//       "1",
//       "3",
//       "2"
//       ]
//       },
//       {
//       "name": "Jeremiah Scanlon",
//       "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
//       "scores": [
//       "5",
//       "2",
//       "2",
//       "2",
//       "4",
//       "1",
//       "3",
//       "2",
//       "5",
//       "5"
//       ]
//       },
//       {
//       "name": "Louis T. Delia",
//       "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
//       "scores": [
//       "3",
//       "3",
//       "4",
//       "2",
//       "2",
//       "1",
//       "3",
//       "2",
//       "2",
//       "3"
//       ]
//       },
//       {
//       "name": "Lou Ritter",
//       "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
//       "scores": [
//       "4",
//       "3",
//       "4",
//       "1",
//       "5",
//       "2",
//       "5",
//       "3",
//       "1",
//       "4"
//       ]
//       },
//       {
//       "name": "Jordan Biason",
//       "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
//       "scores": [
//       "4",
//       "4",
//       "2",
//       "3",
//       "2",
//       "2",
//       "3",
//       "2",
//       "4",
//       "5"
//       ]
//       },
    
// ];



// function matchFind(){
// var userS=friendsA[5].scores;
// var control=false;
// var matchIn=false;
// console.log (matchIn);
// for (var i=0; i<friendsA.length; i++){
//   var tempS=friendsA[i].scores;
//   var int=0;
//   var sum = 0;
  
  

//   //console.log (friendsA);
//   //temp.push();
//   console.log (userS);
//   console.log (tempS);
 
  
  
  
//   for (var ii = 0 ; ii<tempS.length; ii++){
//   int= Math.abs(parseInt(tempS[ii])-parseInt(userS[ii]));
//   // console.log("res "+ ii +"  " + int);
//   sum += int
 
  
  
//   }
//   console.log("sum" +sum) 
//   if(control===false & matchIn===false){
//     control=sum;
//     matchIn=i;
//     console.log("entro la primera")
//   }else if(sum<control){
//   control=sum;
//     matchIn=i;
// }
// console.log(control);


// }

// console.log(control);
// console.log(matchIn);

// var match = {
//   "name" : friendsA[matchIn].name,
//   "photo": friendsA[matchIn].photo
// }

// console.log(match);
// console.log(match.name);
//     console.log(match.photo);

// }
