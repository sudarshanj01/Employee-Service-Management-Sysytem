import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import NoPage from './components/NoPage';
import  Navbar  from './components/Navbar';

function App() {
  return (  
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
          <Route index element={<EmployeeList />}/>
          <Route path="add" element={<AddEmployee />} />
          <Route path="update/:id" element={<UpdateEmployee />} />
          <Route path="*" element={<NoPage />} />
          <Route path='employeeList' element={<EmployeeList />}/>
        
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
