import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })

            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-500'>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={handleLogOut}>Sign Out</button>
        </div>
    );
};

export default DisplayError;