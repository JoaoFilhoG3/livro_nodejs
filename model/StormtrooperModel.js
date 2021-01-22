function StormtrooperModel(mongo){
    this.mongo = mongo;
}

/** Método responsável por retornar os dados dos Stormtroopers do banco de dados */
StormtrooperModel.prototype.find = function(query, callback){
    this.mongo.collection("stormtroopers").find(query, callback);
};

/** Método responsável por retornar os dados de um Stormtrooper específico do banco de dados */
StormtrooperModel.prototype.find = function(_id, callback){
    var query = {
        _id: this.mongo.ObjectId(_id)
    };
    this.mongo.collection("stormtroopers").find(query, callback);
};

/** Método responsável por adicionar um Stormtrooper no banco de dados */
StormtrooperModel.prototype.create = function(data, callback){
    this.mongo.collection("stormtroopers").insert(data, callback);
};

/** Método responsável por alterar um Stormtrooper do banco de dados */
StormtrooperModel.prototype.update = function(_id, data, callback){
    var query = {
        _id: this.mongo.ObjectId(_id)
    };
    this.mongo.collection("stormtroopers").update(query, data, callback);
};

/** Método responsável por remover um Stormtrooper do banco de dados */
StormtrooperModel.prototype.remove = function(_id, callback){
    var query = {
        _id: this.mongo.ObjectId(_id)
    };
    this.mongo.collection("stormtroopers").remove(query, callback);
};

module.exports = function(mongo){
    return new StormtrooperModel(mongo);
}