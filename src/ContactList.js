import React from 'react';
import ContactCard from "./ContactCard";

const ContactList = (props)=>{
    const deleteContact = (id)=>{
        props.getContactId(id);
    }
    const renderList = props.contacts.map((contact) =>{
        return <ContactCard contact={contact} key={contact.id} clickHandler={deleteContact}/>;
    });
   return (
        <div className='ui celled list'> 
                {renderList}
        </div>
   );
}
export default ContactList;