import React from 'react'

const ContactCard= (contact)=>{
    const {id,name,email}=contact.contact
    return (
        <div  className='item'>
        <div className='content'>
            <div className='header'>
                {name}
            </div>
            <div>
                {email}
            </div>
            <i className='trash alternate outline icon' style={{color:"red", marginTop:"7px"}}></i>
        </div>
        
    
             </div>
        
    );


}

export default ContactCard