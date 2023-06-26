import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from '../containers/AddStudent';
import Registration from '../containers/Registration';
import Dashboard from '../containers/Dashboard';
import CreateClasses from '../containers/CreateClasses';
import RemoveStudent from '../containers/RemoveStudent';

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/removestudent' element={<RemoveStudent />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/createclasses' element={<CreateClasses />} />
    </Routes>
};

export default AppRoutes;