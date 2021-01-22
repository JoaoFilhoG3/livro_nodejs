function StormtrooperController() { }

/** Método controller responsável por chamar a rota que obtém todos os Stormtroopers */
StormtrooperController.prototype.getAll = function (request, response, next) {
    response.send("Obter todos os Stormtroopers");
};

/** Método controller responsável por chamar a rota que obtém um Stormtrooper específico 
 * de acordo com seu Id */
StormtrooperController.prototype.getById = function (request, response, next) {
    response.send("Obter Stormtrooper específico");
};

/** Método controller responsável por chamar a rota que cria um Stormtrooper */
StormtrooperController.prototype.create = function (request, response, next) {
    response.send("Criar novo Stormtrooper");
};

/** Método controller responsável por chamar a rota que altera um Stormtrooper específico 
 * de acordo com seu Id */
StormtrooperController.prototype.update = function (request, response, next) {
    response.send("Alterando Stormtrooper específico");
};

/** Método controller responsável por chamar a rota que remove um Stormtrooper específico 
 * de acordo com seu Id */
StormtrooperController.prototype.update = function (request, response, next) {
    response.send("Removendo Stormtrooper específico");
};

module.exports = new StormtrooperController();