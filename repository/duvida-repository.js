const duvidasDB = [];
let idGerador = 1;

const criarDuvida = async (dados) => {
    const novaDuvida = {
        id: idGerador++,
        usuario: dados.usuario,
        categoria: dados.categoria,
        pergunta: dados.pergunta,
        respondida: false,
        resposta: null,
        idVoluntario: null,
        dataCriacao: new Date().toISOString()
    };
    
    duvidasDB.push(novaDuvida);
    return novaDuvida;
};

const listarDuvidas = async () => {
    return duvidasDB;
};

const responderDuvida = async (id, resposta, idVoluntario) => {
    const index = duvidasDB.findIndex(d => d.id == id);
    
    duvidasDB[index].respondida = true;
    duvidasDB[index].resposta = resposta;
    duvidasDB[index].idVoluntario = idVoluntario;
    
    return duvidasDB[index];
};

module.exports = { criarDuvida, listarDuvidas, responderDuvida };