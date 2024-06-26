import React from 'react'


class AddContact extends React.Component{
    state ={
        name :"",
        email :""
    }

    add= (e)=>{
        e.preventDefault();
        if(this.state.name ==='' || this.state.email===''){
            alert("All fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""})
        console.log(this.state)
        
    }
   render(){
    return (
      <div className='ui main' onSubmit={this.add}>
        <h2>Add Contacts</h2>
        <form className='ui form'>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' placeholder='Name' 
                value={this.state.name}
                onChange={(e) =>{
                    this.setState({name:e.target.value})
                }}></input>
                <label>Email</label>
                <input type='email' name='email' placeholder='Email'
                value={this.state.email}
                onChange={(e) =>{
                    this.setState({email:e.target.value})
                }}
                ></input>

            </div>
            <button className='ui button blue'>Add</button>
        </form>
      </div>
        
    );
   }

}

export default AddContact