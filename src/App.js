import React, { useState ,useEffect} from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {v4 as uuidv4} from 'uuid';


function App() {
  const [contacts,setContact] = useState([]);
  const key="key";

  const addContact = (contact) =>{
    console.log(contact);
    setContact([...contacts,{id:uuidv4(),...contact}]);
  }
  
  useEffect(()=>{
    const retrieved=JSON.parse(localStorage.getItem(key));
    if(retrieved) setContact(retrieved);
  },[]);

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(contacts));
  },[contacts]);

const removeContact = (id) =>{
  const newcontacts = contacts.filter((contact)=>{
    return contact.id !== id;
  })
  setContact(newcontacts);
}

  return (<>
    <Header/>
    <AddContact handleContact={addContact}/>
    <ContactList contacts={contacts} getContactId={removeContact}/> 
    </>
  );
}

export default App;