import types from "./types";

export const listAll = () => {
    return {
        type: types.LIST_ALL
    };
}

export const saveMovimentacao = (data) => {
    return {
        type: types.SAVE_MOVIMENTACAO,
        payload: data
    };
}

export const updateApp = (data) => {
    return {
        type: types.UPDATE_APP,
        payload: data
    };
}

export const fetchCadastro = () => {
    return {
        type: types.FETCH_CADASTRO
    };
}

export const saveMaterial = (data) => {
    return {
        type: types.SAVE_MATERIAL,
        payload: data
    };
}

export const saveLote = (data) => {
    return {
        type: types.SAVE_LOTE,
        payload: data
    };
}

export const saveLaudo = (data) => {
    return {
        type: types.SAVE_LAUDO,
        payload: data
    };
}

export const saveCA = (data) => {
    return {
        type: types.SAVE_CA,
        payload: data
    };
}

export const saveNota = (data) => {
    return {
        type: types.SAVE_NOTA,
        payload: data
    };
}

export const saveCentro = (data) => {
    return {
        type: types.SAVE_CENTRO,
        payload: data
    };
}

export const saveFornecedor = (data) => {
    return {
        type: types.SAVE_FORNECEDOR,
        payload: data
    };
}

export const saveColaborador = (data) => {
    return {
        type: types.SAVE_COLABORADOR,
        payload: data
    };
}

export const autorizarMovimentacao = (data) => {
    return {
        type: types.AUTORIZAR_MOVIMENTACAO,
        payload: data
    };
}

export const getMovimentacao = (data) => {
    return {
        type: types.GET_MOVIMENTACAO,
        payload: data
    };
}

export const apiRequest = ({ method, endpoint, param } ) => {
    return {
        type: types.API_REQUEST,
        payload: { method, endpoint, param }
    };
}

export const saveTipoMovimentacao = (data) => { 
    return {
        type: types.SAVE_TIPO_MOVIMENTACAO,
        payload: data
    };
}

export const login = (data) => {
    return {
        type: types.LOGIN,
        payload: data
    };
}

export const getEstoque = (data) => {
    return {
        type: types.GET_ESTOQUE,
        payload: data
    };
};

export const excluirMovimentacao = (data) => {
    return {
        type: types.EXCLUIR_MOVIMENTACAO,
        payload: data
    };
};

export const saveCaMaterial = (data) => {
    return {
        type: types.SAVE_CA_MATERIAL,
        payload: data
    };
}