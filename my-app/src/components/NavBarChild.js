import React from 'react'

function NavBarChild(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <span>Welcome to the site!</span>
                        <button onClick={props.handleClick}>Log Out</button>
                    </div>
                ) : (
                    <div>
                        <label>Username</label>
                        <input type="text" placeholder="Enter your name"></input>
                        <label>Password</label>
                        <input type="text" placeholder="Enter your password"></input>
                        <button onClick={props.handleClick}>Log In</button>
                    </div>
                )
            }
        </div>
    )
}

export default NavBarChild