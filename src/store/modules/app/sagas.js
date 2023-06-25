import { all, takeLatest, put, select, call, take } from 'redux-saga/effects';
import types from './types';
import { listAll, updateApp } from './actions';

import api from '../../../services/api';

export function* fetchApp() { // função que faz a requisição para a api

    const { components } = yield select(state => state.app); // pega o estado atual da aplicação

    try {

        yield put(updateApp({components: {...components, movLoading: true }})); // loading true

        const {data: res} = yield api.get('/movimentacoes'); // faz a requisição para a api

        if(res.error) {
            alert(res.message);
            yield put(updateApp({components: {...components, movLoading: false }})); // loading false
            return;
        }

        yield put(updateApp({ movimentacoes: res.data})); // dispara a action UPDATE_APP com o resultado da requisição

        yield put(updateApp({components: {...components, movLoading: false }})); // loading false

    } // retorna o resultado da requisição

    catch (error) {
        console.log(error);
    } // retorna o erro

}

export function* apiRequest( {payload }) {

    try {

        const param = payload.param !== `undefined` ? `/${payload.param}` : ``;
        
        switch(payload.method) {
            case 'GET':
                const { data: res} = yield api.get(`${payload.endpoint}${param}`);
                return yield put(updateApp({[`${payload.endpoint}`.replace('/', '')]: res}));
            case 'POST':
                const { data: res2 } = yield api.post(payload.endpoint);
                return yield put(updateApp({ [payload.endpoint]: res2.data}));
            case 'PUT':
                const { data: res3 } = yield api.put(payload.endpoint);
                return yield put(updateApp({ [payload.endpoint]: res3.data}));
            case 'DELETE':
                const { data: res4 } = yield api.delete(payload.endpoint);
                return yield put(updateApp({ [payload.endpoint]: res4.data}));
            default:
                return console.log(`Método ${payload.method} não encontrado!`);

        }
    }

    catch (error) {

        alert(JSON.stringify(error.message));
    }

}

export function* saveMovimentacao({ payload }) { // função que faz a requisição para a api

    try {

        const { data: res } = yield api.post('/movimentacoes', payload); // faz a requisição para a api

        if(res.error) {
            alert(res.message);
            return;
        } // se houver erro, retorna o erro

        alert('Movimentação salva com sucesso!'); // alerta de sucesso
        
        yield call(fetchApp); // chama a função fetchApp para atualizar as movimentações
        
    } // salva a movimentação

    catch (error) {
        alert(JSON.stringify(error.message));
        console.log(error);
    } // retorna o erro

}

export function* getOneMovimentacao({ payload }) { // função que faz a requisição para a api

    try {
            
            const { data: res } = yield api.get(`/movimentacoes/${payload}`); // faz a requisição para a api
    
            if(res.error) {
                alert(res.message);
                return;
            } // se houver erro, retorna o erro
    
            yield put(updateApp({ movimentacaoToPrint: res.data})); // dispara a action UPDATE_APP com o resultado da requisição
    
        } // retorna o resultado da requisição

        catch (error) {
            alert(JSON.stringify(error.message));
            console.log(error);
        } // retorna o erro

} // retorna uma movimentação

export function* fetchCadastro() { // função que faz a requisição de todos os cadstros para a api

    const { cadastro } = yield select(state => state.app); // pega o estado atual da aplicação

    
    try {
        
        const { data: res } = yield api.get('/cadastro'); // faz a requisição para a api
        
        yield put(updateApp({cadastro: {...cadastro, cadastros: res}})); // dispara a action UPDATE_APP com o resultado da requisição
    } // tenta executar

    catch (error) {

        alert(error.response); // retorna erro

    } // retorna erro
}

// cria um novo material
export function* saveMaterial({ payload }) { // função que faz a requisição para a api

    try{ 

        const { data: res } = yield api.post('/materials', payload); // faz a requisição para a api

        alert('Material salvo com sucesso!'); // alerta de sucesso

        yield call(fetchCadastro); // chama a função fetchCadastro para atualizar os cadastros


    } // tenta executar

    catch (error) {
            
            alert(JSON.stringify(error)); // retorna erro
            console.log(error);
    
    } // retorna erro
}

// cria um novo colaborador
export function* saveColaborador({ payload }) { // função que faz a requisição para a api

    try{
            
            const { data: res } = yield api.post('/colaboradors', payload); // faz a requisição para a api
    
            alert('Colaborador salvo com sucesso!'); // alerta de sucesso
    
            yield call(fetchCadastro); // chama a função fetchCadastro para atualizar os cadastros
    
        } // tenta executar

    catch (error) {
                
                alert(JSON.stringify(error)); // retorna erro
        
        } // retorna erro
}

// cria um novo fornecedor
export function* saveFornecedor({ payload }) { // função que faz a requisição para a api

    try{

        const { data: res } = yield api.post('/fornecedores', payload); // faz a requisição para a api

        alert('Fornecedor salvo com sucesso!'); // alerta de sucesso

        yield call(fetchCadastro); // chama a função fetchCadastro para atualizar os cadastros

    } // tenta executar

    catch (error) {

        alert(JSON.stringify(error)) // retorna erro

    } // retorna erro
}

// cria um novo centro 
export function* saveCentro({ payload }) { // função que faz a requisição para a api

    try{

        const { data: res } = yield api.post('/centros', payload); // faz a requisição para a api

        alert('Centro salvo com sucesso!'); // alerta de sucesso

        yield call(fetchCadastro); // chama a função fetchCadastro para atualizar os cadastros

    } // tenta executar

    catch (error) {

        alert(JSON.stringify(error)) // retorna erro

    } // retorna erro
}

// cria uma nova nota fiscal
export function* saveNota({ payload }) { // função que faz a requisição para a api

    try{

        const { data: res } = yield api.post('/notas', payload); // faz a requisição para a api

        alert('Nota salva com sucesso!'); // alerta de sucesso

        yield call(fetchCadastro); // chama a função fetchCadastro para atualizar os cadastros

    } // tenta executar

    catch (error) {

        alert(JSON.stringify(error)) // retorna erro

    } // retorna erro
}

// cria um noco certificado de autenticacao
export function* saveCa({ payload }) { // função que faz a requisição para a api

    try{

        const { data: res } = yield api.post('/c_as', payload); // faz a requisição para a api

        alert('Certificado salvo com sucesso!'); // alerta de sucesso

        yield call(fetchCadastro); // chama a função fetchCadastro para atualizar os cadastros

    } // tenta executar

    catch (error) {

        alert(JSON.stringify(error)) // retorna erro

    } // retorna erro

}

// cria um novo lote
export function* saveLote({ payload }) { // função que faz a requisição para a api

    try{

        const { data: res } = yield api.post('/lotes', payload); // faz a requisição para a api

        alert('Lote salvo com sucesso!'); // alerta de sucesso

        yield call(fetchCadastro); // chama a função fetchCadastro para atualizar os cadastros

    } // tenta executar

    catch (error) {

        alert(JSON.stringify(error)) // retorna erro

    } // retorna erro
}

// cria um novo laudo
export function* saveLaudo({ payload }) { // função que faz a requisição para a api

    try{

        const { data: res } = yield api.post('/laudos', payload); // faz a requisição para a api

        alert('Laudo salvo com sucesso!'); // alerta de sucesso

        yield call(fetchCadastro); // chama a função fetchCadastro para atualizar os cadastros

    } // tenta executar

    catch (error) {

        alert(JSON.stringify(error)) // retorna erro

    } // retorna erro

}

// autorizar movimentação
export function* autorizarMovimentacao({ payload }) { // função que faz a requisição para a api

    
    try{

        const { data: res } = yield api.put(`/movimentacoes/${payload.id_mov}`, payload); // faz a requisição para a api

        alert('Movimentação autorizada com sucesso!'); // alerta de sucesso

        yield call(fetchApp); // chama a função fetchApp para atualizar as movimentações

    } // tenta executar

    catch (error) {

        alert(JSON.stringify(error)) // retorna erro

    } // retorna erro

}

export default all([
    
    takeLatest(types.LIST_ALL, fetchApp),
    takeLatest(types.SAVE_MOVIMENTACAO, saveMovimentacao),
    takeLatest(types.FETCH_CADASTRO, fetchCadastro),
    takeLatest(types.SAVE_MATERIAL, saveMaterial),
    takeLatest(types.SAVE_COLABORADOR, saveColaborador),
    takeLatest(types.SAVE_FORNECEDOR, saveFornecedor),
    takeLatest(types.SAVE_CENTRO, saveCentro),
    takeLatest(types.SAVE_NOTA, saveNota),
    takeLatest(types.SAVE_CA, saveCa),
    takeLatest(types.SAVE_LOTE, saveLote),
    takeLatest(types.SAVE_LAUDO, saveLaudo),
    takeLatest(types.AUTORIZAR_MOVIMENTACAO, autorizarMovimentacao),
    takeLatest(types.GET_MOVIMENTACAO, getOneMovimentacao),
    takeLatest(types.API_REQUEST, apiRequest)

]); // dispara a função fetchApp quando a action LIST_ALL for disparada