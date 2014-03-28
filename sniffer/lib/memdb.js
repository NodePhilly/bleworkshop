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

var instance = new Memdb();

module.exports = instance;
