import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import Invoicing from '../Pages/Invoicing';
import Management from '../Pages/Management';
import Tables from '../Pages/Tables';

export default function ApplicationRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Tables' element={<Tables/>}/>
                <Route path='/Management' element={<Management/>}/>
                <Route path='/Invoicing' element={<Invoicing/>}/>
            </Routes>
        </BrowserRouter>
    )
}