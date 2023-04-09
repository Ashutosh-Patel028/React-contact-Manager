import React from 'react';
import ContactCard from "./ContactCard";

const ContactList = (props)=>{
    const renderList = props.contacts.map((contact) =>{
        return <ContactCard contact={contact} key={contact.id}/>;
    });
   return (
        <div className='ui celled list'> 
                {renderList}
        </div>
   );
}
export default ContactList;