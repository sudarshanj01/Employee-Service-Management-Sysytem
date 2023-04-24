import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import NoPage from './components/NoPage';
import  Navbar  from './components/Navbar';
import LoginPage from './components/LoginPage';
import FootBar from './components/FootBar';


function App() {
  return (  
      <BrowserRouter>
      <Navbar/>
      <Routes>

          <Route index element={<LoginPage/>}/>
          <Route path='home' element={<EmployeeList />}/>
          <Route path="add" element={<AddEmployee />} />
          <Route path="update/:id" element={<UpdateEmployee />} />
          <Route path="*" element={<NoPage />} />
          <Route path='employeeList' element={<EmployeeList />}/>
        
      </Routes>
      <FootBar/>
    </BrowserRouter>

   
  );
}

export default App;
