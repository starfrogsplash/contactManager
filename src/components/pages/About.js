import React from 'react'

const About = (props) => {
    console.log("match", props)
    return(
        <div>
            <h1 className="display-4"> About Contact Manager</h1>
            <p className="lead"> Simple App to manage components </p>
            <p className="text-secondary"> Verson 1.0.0 </p>
        </div>
        )
}

export default About



