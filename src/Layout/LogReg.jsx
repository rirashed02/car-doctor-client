import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';

const LogReg = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LogReg;