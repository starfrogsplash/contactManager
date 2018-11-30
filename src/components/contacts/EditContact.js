import React ,{Component} from 'react'
import {Consumer} from '../../Context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class EditContact extends Component{
    state= {
        name:'',
        email:'',
        phone:'',
        errors:{}
        }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }    

    async componentDidMount(){
        const {id} = this.props.match.params
       const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       const contact = result.data

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        })
    }



    onSubmit = async (e,dispatch ) => {
        e.preventDefault()

        const {id} = this.props.match.params
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

        const updateContact = {
            name,
            email,
            phone
        }

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact )

        dispatch({type: 'UPDATE_CONTACT', payload: res.data })
      
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
            Edit Contact
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
                            value="Edit Contact"
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


export default EditContact