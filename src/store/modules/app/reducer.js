import produce from 'immer';
import types from './types';

const INITIAL_STATE = {
    usuario: {
        name: 'Usuário',
        func: 'Funcionário',
    },
    components: {
        pagina: '1',
        saidaModal: false,
        modalAutorizar: false,
    },
    movimentacaoASerAutorizada: {},
    material: {},
    materials: [],
    cadastro: {
        components: {
            activeTab: 'material',
            cadastroModal: false,
            cadastroModalData: {},
        },
        cadastros: {
            material: [
                {}
            ],
        },
    },
    movimentacoes: []
}

const app = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {

        case types.UPDATE_APP:
            return produce(state, draft => {
                draft = { ...draft, ...action.payload }
                return draft;
            });

        case types.LIST_ALL:
            return produce(state, draft => {
                draft = { ...draft, movimentacoes: action.payload };
                return draft;
            });
        
        case types.SAVE_MOVIMENTACAO:
            return produce(state, draft => {
                draft = { ...draft, movimentacoes: action.payload };
                return draft;
            });

        default:
            return state;

    }
}

export default app;