import produce from 'immer';
import types from './types';


const INITIAL_STATE = {
    usuario: {},
    components: {
        pagina: '1',
        saidaModal: false,
        modalAutorizar: false,
        movLoading: false,
        pendLoading: false,
        headerVisible: true,
    },
    movimentacaoASerAutorizada: {},
    movimentacaoToPrint: {},
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
    movimentacoes: [],
    online: false,
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

        default:
            return state;

    }
}

export default app;