
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCadastro, listAll } from '../../store/modules/app/actions';

const Requester = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCadastro());
        dispatch(listAll());
    }, []);

    return <></>
};

export default Requester