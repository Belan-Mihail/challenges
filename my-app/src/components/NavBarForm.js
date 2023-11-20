import React, { Component } from 'react'
import css from  './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
    super(props)
    
    this.state = {
        isLoggedIn: false,
        buttonText: "Log in"
    }
}

handleClick = () => {
    this.setState((prevState) => {
        return {
            buttonText: prevState.buttonText === "Log Out" ? "Log In" : "Log Out",
            isLoggedIn: prevState.isLoggedIn === true ? false : true,
        }
    }, () => {
        console.log(this.state.isLoggedIn)
    });
}

render() {
    return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <NavBarChild
            isLoggedIn={this.state.isLoggedIn} 
            handleClick={this.handleClick} 
            />
        </div>
    )
  }
}

export default NavBarForm

