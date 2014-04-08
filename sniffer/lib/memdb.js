function Memdb(){
  this.db = {};
}

Memdb.prototype.get = function(id){
  return this.db[id];
};

Memdb.prototype.set = function(id, obj){
  this.db[id] = obj;
};

Memdb.prototype.clear = function(id){
  delete this.db[id];
};

// Instead of creating multiple instances of Memdb in our app
// use this pattern so any library would be picking up the same instance
var instance = new Memdb();

module.exports = instance;
