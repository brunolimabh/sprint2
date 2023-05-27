var acompanharModel = require("../models/acompanharModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idDados = req.params.idDados;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    acompanharModel.buscarUltimasMedidas(idDados, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idDados = req.params.idDados;

    console.log(`Recuperando medidas em tempo real`);

    acompanharModel.buscarMedidasEmTempoReal(idDados).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}