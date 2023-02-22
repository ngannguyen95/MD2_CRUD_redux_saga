import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import NewUser from './components/NewUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListUsers />}></Route >
      <Route path='/newUser' element={<NewUser />}></Route>
      <Route path='/updateUser' element={<UpdateUser />}></Route>
    </Routes >
  );
}

export default App;
