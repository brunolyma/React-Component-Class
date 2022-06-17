import React from 'react'
import Planets from '../planets'
import './index.css'

class HelloWorld extends React.Component {
    render() {
        return (
            <div className='container'>
                <h2>Planet List</h2>
                <hr />
                <Planets/>
            </div>
        )
    }
}

export default HelloWorld
