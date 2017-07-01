module.exports = function(seuelize,Datatypes){

var burger = seuelize.define('burgers', {
  burger_name: {
    type: Datatypes.STRING
  },
  devoured: {
    type:Datatypes.BOOLEAN, allowNull: false, defaultValue: false
  }
});

return burger;

}
