var debug = require("debug")("livro_nodejs:controller");

function StormtrooperController(StormtrooperModel) {
    this.model = StormtrooperModel;
}

/** Método controller responsável por obter todos os Stormtroopers */
StormtrooperController.prototype.getAll = function (request, response, next) {
    this.model.find({}, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
    });
};

/** Método controller responsável por obter um Stormtrooper específico 
 * de acordo com seu Id */
StormtrooperController.prototype.getById = function (request, response, next) {
    var _id = request.params._id;
    this.model.findOne(_id, function(err, data){
        if(err){
            return next(err);
        }
        if(!data){
            var err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        response.json(data);
    });
};

/** Método controller responsável por criar um Stormtrooper */
StormtrooperController.prototype.create = function (request, response, next) {
    var body = request.body;
    this.model.create(body, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
    });
};

/** Método controller responsável por alterar um Stormtrooper específico 
 * de acordo com seu Id */
StormtrooperController.prototype.update = function (request, response, next) {
    var _id = request.params._id;
    var body = request.body;
    this.model.update(_id, body, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
    });
};

/** Método controller responsável por remover um Stormtrooper específico 
 * de acordo com seu Id */
StormtrooperController.prototype.remove = function (request, response, next) {
    var _id = request.params._id;
    this.model.remove(_id, function(err, data){
        if(err){
            return next(err);
        }
        response.json(data);
    });
};

module.exports = function(StormtrooperModel){
    return new StormtrooperController(StormtrooperModel);
}