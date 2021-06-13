import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import UserForm from './Components/UserForm/UserForm.jsx'
import Lightbox from './Components/Lightbox/Lightbox';


function App() {
  const [comany, setCompany]  = useState('')
  return (
    <div>
      <Navbar setCompany={setCompany}/>
      <UserForm comany={comany} />
      <Lightbox />
    </div>
  );
}

export default App;
