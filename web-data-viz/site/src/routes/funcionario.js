var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.get("/", function (req, res) {
    funcionarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    funcionarioController.listar(req, res);
});

router.get("/listarEmpresa/:idFilial", function (req, res) {
    funcionarioController.listarEmpresa(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de funcionarioController.js
router.post("/cadastrar", function (req, res) {
    funcionarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    funcionarioController.entrar(req, res);
});

module.exports = router;