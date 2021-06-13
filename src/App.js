import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import UserForm from './Components/UserForm/UserForm.jsx'

function App() {
  const [comany, setCompany]  = useState('')
  return (
    <div>
      <Navbar setCompany={setCompany}/>
      <UserForm comany={comany} />
      
    </div>
  );
}

export default App;
