import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { REDUX_ACTION } from '../enums/reduxActionEnum';
import { isUndefinedNullOrEmpty } from '../utils/checking';

export function useAuth() {
    const { user } = useSelector(({ user }) => ({ user }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logout = () => {
        dispatch({
            type: REDUX_ACTION.SET_USER,
            payload: {}
        });
        navigate('/');
    };

    return { user, logout, userType: !isUndefinedNullOrEmpty(user) ? user.UserType : 0 };
}