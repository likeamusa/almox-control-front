
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCadastro, listAll, getEstoque } from '../../store/modules/app/actions';

const Requester = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCadastro());
        dispatch(listAll());
        dispatch(getEstoque());
    }, []);

    return <></>
};

export default Requester