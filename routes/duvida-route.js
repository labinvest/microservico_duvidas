const express = require('express');
const duvidaController = require('../controllers/duvida-controller');
const router = express.Router();

router.post("/enviar", duvidaController.enviarDuvida);
router.get("/listar", duvidaController.listarDuvidas);
router.post("/responder/:id", duvidaController.responderDuvida);

module.exports = router;