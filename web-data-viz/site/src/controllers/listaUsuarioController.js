var listaUsuarioModel = require("../models/listaUsuarioModel");

function testar(req, res) {
    console.log("ENTRAMOS NO avisoController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function exibirUsuarios(req, res) {
    listaUsuarioModel.exibirUsuarios().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function deletarUsuario(req, res) {
    var fkSuperior = req.params.fkSuperior;

    listaUsuarioModel.deletarUsuario(fkSuperior)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    testar,
    exibirUsuarios,
    deletarUsuario
}