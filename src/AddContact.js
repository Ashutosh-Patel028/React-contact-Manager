import React, { Component } from 'react';
import  "./App.css";
class AddContact extends Component {
    state={
        name :"",
        email :""
    }
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.handleContact(this.state);
        this.setState({name:"",email:""});
        console.log(this.state);
    }
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name' onChange={(e)=>this.setState({name : e.target.value})} value={this.state.name}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' onChange={(e)=>this.setState({email : e.target.value})} value={this.state.email}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}
export default AddContact;