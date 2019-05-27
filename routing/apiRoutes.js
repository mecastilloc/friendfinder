// Dependencies
// =============================================================
const express = require ("express");
const path = require("path");
const router = express.Router ();
var app = express();
var friends = require ("../app/data/friends");
// var match ={
//     "type": "html/ïmage",
//     "name": "match name",
//     "photo": "https://ichef.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg"
// };

router.get("/", function (req, res) {
   res.json(friends);
});

// router.get("/api/friends", function (req, res) {
//     res.json(friends);
// });


router.post("/", function (req, res) {
    var userData = req.body;
    

        var userS=userData.scores;
        var control=false;
        var matchIn=false;
      
        for (var i=0; i<friends.length; i++){
          var tempS=friends[i].scores;
          var int=0;
          var sum = 0;
          
          
        
          //console.log (friendsA);
          //temp.push();
          console.log (userS);
          console.log (tempS);
         
          
          
          
          for (var ii = 0 ; ii<tempS.length; ii++){
          int= Math.abs(parseInt(tempS[ii])-parseInt(userS[ii]));
          // console.log("res "+ ii +"  " + int);
          sum += int
         
          
          
          }
          console.log("sum" +sum) 
          if(control===false & matchIn===false){
            control=sum;
            matchIn=i;
            console.log("entro la primera")
          }else if(sum<control){
          control=sum;
            matchIn=i;
        }
        console.log(control);
        
        
        }
        
        console.log(control);
        console.log(matchIn);
        
        var match = {
          "name" : friends[matchIn].name,
          "photo": friends[matchIn].photo
        }
        
        console.log(match);
        console.log(match.name);
            console.log(match.photo);
        
            friends.push(userData);
     res.json(match);
 });

// router.post("/api/friends", function(req, res){
//     var userData = req.body;
//     friends.push(userData);
//     console.log(data.name);
//     console.log(data.photo);
//     res.json(data);
  
        
// });



module.exports = router;