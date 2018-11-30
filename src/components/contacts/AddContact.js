import React ,{Component} from 'react'
import {Consumer} from '../../Context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class AddContact extends Component{

    state= {
        name:'',
        email:'',
        phone:'',
        errors:{}
        }


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }    

    onSubmit = async (e,dispatch ) => {
        e.preventDefault()
        const {name, email, phone} = this.state

        if (name === ""){
            return this.setState({errors: {name: "please enter a name"} })
            
        }
        if (email === ""){
            return  this.setState({errors: {email: "please enter an email"} })
      
        }
        if (phone === ""){
            return  this.setState({errors: {phone: "please enter a phone Number"} })
            
        }

       const newContact = {
           name,
           email,
           phone
       }

       await axios.post(`https://jsonplaceholder.typicode.com/users/`, newContact)

       dispatch({type:"ADD_CONTACT", payload:newContact})

       //clear the fields
       this.setState({
           name:'',
           email:'',
           phone:'',
           errors:{}
       })

       this.props.history.push('/')

    }   

    render(){
        const {name,email,phone, errors} = this.state
        return(
            <Consumer>
                {value => {
                    const {dispatch} = value
                return(
                    <div className="card mb-3">
                <div className="card-header">
                    AddContact
                </div>
                <div className="card-body">
                    <form onSubmit={(e)=>this.onSubmit(e,dispatch)}>
                        <TextInputGroup
                            name= "name"
                            label= "name"
                            type= "text"
                            value= {name}
                            placeholder= "enter name"
                            onChange= {this.onChange}
                            error={errors.name}
                        />
                        <TextInputGroup
                            name= "email"
                            label= "Email"
                            type= "email"
                            value= {email}
                            placeholder= "enter email"
                            onChange= {this.onChange}
                            error={errors.email}
                        />
                        <TextInputGroup
                            name= "phone"
                            label= "Phone Number"
                            type= "text"
                            value= {phone}
                            placeholder= "enter Phone Number"
                            onChange= {this.onChange}
                            error={errors.phone}
                        />
                        <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-light btn-block"
                        />
                    </form>
                 </div>
            </div>
                )
                }
            }  
        </Consumer>
        )
    }
}


export default AddContact