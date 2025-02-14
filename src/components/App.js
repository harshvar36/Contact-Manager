import React, {useState,useEffect} from "react";
import './App.css';
import Header from './header';
import Addcontact from './Addcontact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const[contacts,setContacts]= useState([]);

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,contacts]);
  };
  useEffect(()=>{
    const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,));
    if (retriveContacts) setContacts(retriveContacts);
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return(
   <div>
    <Header />
    <Addcontact addContactHandler={addContactHandler}/>
    <ContactList contacts={ contacts}/>
   </div>
    
  );
}


export default App;
