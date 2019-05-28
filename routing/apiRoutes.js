// Dependencies
// =============================================================
const express = require ("express");
const path = require("path");
const router = express.Router ();
var app = express();
var friends = require ("../app/data/friends");


router.get("/", function (req, res) {
   res.json(friends);
});

router.post("/", function (req, res) {
    var userData = req.body;
    

        var userS=userData.scores;
        var control=false;
        var matchIn=false;
      
        for (var i=0; i<friends.length; i++){
          var tempS=friends[i].scores;
          var int=0;
          var sum = 0;
    
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


module.exports = router;