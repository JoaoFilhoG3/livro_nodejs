function StormtrooperDAO(model) {
    this.model = model;
}

/** Método responsável por adicionar um Stormtrooper no banco de dados */
StormtrooperDAO.prototype.create = function (data, callback) {
    var model = new this.model(data);
    model.save(function (err, result) {
        callback(err, result);
    });
};

/** Método responsável por retornar os dados dos Stormtroopers do banco de dados */
StormtrooperDAO.prototype.find = function (query, callback) {
    this.model.find(query).exec(callback);
};

/** Método responsável por retornar os dados de um Stormtrooper específico do banco de dados */
StormtrooperDAO.prototype.find = function (_id, callback) {
    var query = {
        _id: _id
    };
    this.model.find(query).exec(callback);
};

/** Método responsável por alterar um Stormtrooper do banco de dados */
StormtrooperDAO.prototype.update = function (_id, data, callback) {
    var query = {
        _id: _id
    };
    this.model.update(query, data).exec(function (err, result) {
        callback(err, result);
    });
};

/** Método responsável por remover um Stormtrooper do banco de dados */
StormtrooperDAO.prototype.remove = function (_id, callback) {
    var query = {
        _id: _id
    };
    this.model.remove(query).exec(function (err, callback) {
        callback(err, result);
    });
};

module.exports = function (mongoose) {
    var Stormtrooper = mongoose.model(
        "Stormtrooper",
        {
            name:String,
            nickname:String,
            divisions:[String],
            patent: String
        });
        return new StormtrooperDAO(Stormtrooper);
}