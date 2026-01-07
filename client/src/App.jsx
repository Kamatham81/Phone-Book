import React, { useEffect, useState } from 'react'
import API from '../api';
import "./App.css"
import ContactForm from './ContactForm';
import ContactList from './ContactList';
const App=()=>{
  const [contacts,setContacts]=useState([]);
  const [editContact,setEditContact]=useState(null);
   console.log(editContact)
  //Load all Contacts
  const fetchContacts=async()=>{
    const res=await API.get("/")
    setContacts(res.data);
  }
  useEffect(()=>{
    fetchContacts();
  },[])
  //Add new Contact 
   const addContact=async(data)=>{
    await API.post("/",data)
    fetchContacts();
   
  }
  //Delete Contact
       const deleteContact=async(id)=>{
        await API.delete(`/${id}`)
        fetchContacts();
       }
   //Update Contact 
   const UpdateContact=async(data)=>{
    await API.put(`/${editContact._id}`,data)
    setEditContact(null);
    fetchContacts();
   }
    return(
        <div>
            <ContactForm onSubmit={editContact ? UpdateContact:addContact} existing={editContact}/>
            <ContactList contacts={contacts}  onDelete={deleteContact} onEdit={setEditContact}/>
        </div>
    );
};
export default App;