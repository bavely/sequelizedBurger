var express = require("express");
var router = express.Router();
var db = require("../models")



router.get("/", function(req, res) {

  db.burgers.findAll({}).then(function(data){
      console.log(data+ "line 10 ==============================>");
      var dataObj = {
      burgers:data
      }
      res.render("index", dataObj);
  });

});



router.post("/", function(req,res){
db.burgers.create({
  burger_name:req.body.newBur
}).then(function(){  
  res.redirect("/");});
});


router.put("/:id", function(req,res){
  if (req.body.devoured === "true"){
    req.body.devoured = true;
    }else{req.body.devoured= false}
    console.log(req.body.devoured, req.params.id)
  db.burgers.update({
    devoured: req.body.devoured,
  }, {
    where: {
      id:req.params.id,
      }
    
    }).then(function(){  
      res.redirect("/");
    });


});

module.exports = router;
