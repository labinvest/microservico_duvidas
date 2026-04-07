const duvidaRepository = require("../repository/duvida-repository");

const enviarDuvida = async (dados) => {
    if (!dados.usuario || !dados.pergunta || !dados.categoria) {
        throw new Error("Os campos 'usuario', 'pergunta' e 'categoria' são obrigatórios.");
    }
    return await duvidaRepository.criarDuvida(dados);
};

const listarDuvidas = async () => {
    return await duvidaRepository.listarDuvidas();
};

const responderDuvida = async (id, resposta, idVoluntario) => {
    if (!resposta || !idVoluntario) {
        throw new Error("É necessário fornecer a 'resposta' e o 'idVoluntario'.");
    }
    return await duvidaRepository.responderDuvida(id, resposta, idVoluntario);
};

module.exports = { enviarDuvida, listarDuvidas, responderDuvida };