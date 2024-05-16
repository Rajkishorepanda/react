import React from 'react'

import ContactCard from './contactCard'

const ContactList = (contacts)=>{
   

    const renderContactList=contacts.contacts.map((contact)=>{
      return (
        <ContactCard contact={contact}/>

      );
    }
);
   return (
<div className='ui celled list'>
   {renderContactList}


</div>

   )
}

export default ContactList;