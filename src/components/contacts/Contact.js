import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Consumer} from '../../Context'
import axios from 'axios'

class Contact extends Component {

    state = {
        showContactInfo: false
    }

    showClick = (e) => {
        console.log(e.target)
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    }

    onDeleteClick = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({type:"DELETE_CONTACT", payload: id})
    }

    render() {
        const {id, name, email, phone} = this.props.contact
        const {showContactInfo} = this.state
        return (

            <Consumer>
                {value => {
                    const {dispatch} = value
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <i
                                    className="fas fa-sort-down"
                                    style={{cursor: "pointer"}}
                                    onClick={this.showClick}/>
                                <i
                                    className="fas fa-times"
                                    style={{cursor: "pointer",float: "right",color: "red"}}
                                    onClick={()=>this.onDeleteClick(id, dispatch)}/>

                                    <Link to={`contact/edit/${id}`} >
                                        <i
                                            className="fas fa-pencil-alt"
                                            style={{cursor: "pointer",float: "right",color: "black", marginRight:"1rem"}}
                                            // onClick={()=>this.onDeleteClick(id, dispatch)}
                                        />

                                    </Link>

                            </h4>
                            {showContactInfo
                                ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">{phone}</li>
                                        <li className="list-group-item">{email}</li>
                                    </ul>

                                )
                                : null}
                        </div>
                    )
                }
            }
            </Consumer>

        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact