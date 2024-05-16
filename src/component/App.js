import React ,{useState,useEffect}from 'react'

import Header from './header'
import Contactcard from './contactCard'
import AddContact from './addContact'
import ContactList from './contactList'


function App() {
  const LOCAL_KEY="contact";

  const [contacts, setContacts] = useState([]);

  const addContactHandler=(contact)=>{
    
    setContacts([...contacts,contact])
  };

  useEffect(()=>{
    const localstorageContacts=JSON.parse(localStorage.getItem(LOCAL_KEY));
    console.log(localstorageContacts)
   if(localstorageContacts){
    setContacts(localstorageContacts);
   } 
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_KEY,JSON.stringify(contacts))
  },[contacts]);

 
  return (
   

    <div className='ui container'>
<Header/>
<hr/>
<AddContact addContactHandler={addContactHandler}/>
<hr></hr>
<ContactList contacts={contacts}/>

    </div>
  );
}



export default App;
