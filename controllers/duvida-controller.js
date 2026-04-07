const duvidaService = require("../services/duvida-services");

const enviarDuvida = async (req, res) => {
    try {
        const novaDuvida = await duvidaService.enviarDuvida(req.body);
        return res.status(201).send(novaDuvida);
    } catch (error) {
        return res.status(400).send({ erro: error.message });
    }
};

const listarDuvidas = async (req, res) => {
    const duvidas = await duvidaService.listarDuvidas();
    return res.status(200).send(duvidas);
};

const responderDuvida = async (req, res) => {
    try {
        const id = req.params.id;
        const { resposta, idVoluntario } = req.body;
        
        const duvidaRespondida = await duvidaService.responderDuvida(id, resposta, idVoluntario);
        return res.status(200).send(duvidaRespondida);
    } catch (error) {
        return res.status(404).send({ erro: error.message });
    }
};

module.exports = { enviarDuvida, listarDuvidas, responderDuvida };