import React, { Component, useState, useEffect } from "react";


const LoginDropdown = (props) => {

    const [emailValue, setEmailValue] = useState('');   // value of the email input
    const [passwordValue, setPasswordValue] = useState('');   // value of the input 
    const [verifyPasswordValue, setVerifyPasswordValue] = useState('');   // value of the verify password input
    const [invalidLogin, setInvalidLogin] = useState(false) // following hooks are set to true when the user's input is invalid or empty
    const [noPassword, setNoPassword] = useState(false)
    const [noEmail, setNoEmail] = useState(false)
    const [noVerifyPassword, setNoVerifyPassword] = useState(false)
    const [mismatchedPasswords, setMismatchedPasswords] = useState(false) // set to true when passwords don't match while registering 

    // The following 3 functions sync the value of the login inputs
    // with their respective state hooks.  

    let emailChange = (e) => {
        setEmailValue(e.target.value)
        console.log('Email value ', emailValue)
    }

    let passwordChange = (e) => {
        setPasswordValue(e.target.value)
        console.log('Password value ', passwordValue)
    }
    let verifyPasswordChange = (e) => {
        setVerifyPasswordValue(e.target.value)
        console.log('verify password value ', verifyPasswordValue)
    }

    // The following function returns the value of the render prop 

    const checkRenderProp = () => {
        if (props.render === 'login') {
            return 'login'
        } else { return 'signup' }
    }

    //  The following function handles logging in and signing up. It runs
    //  when the login or signup button is clicked.  

    async function loginFunction() {

        let creds = JSON.stringify({ // get and stringify the value of the inputs
            email: emailValue,
            password: passwordValue,
            verifyPassword: verifyPasswordValue
        })

        if (checkRenderProp() === 'signup' && passwordValue !== verifyPasswordValue) {
            setMismatchedPasswords(true)
            return
        }

        if (emailValue === '') {
            setNoEmail(true)
            return
        }

        if (passwordValue === '') {
            setNoPassword(true)
            return
        }

        if (checkRenderProp() === 'signup' && verifyPasswordValue === '') {
            setNoVerifyPassword(true)
        }

        const res = await fetch(`http://localhost:3000/user/${checkRenderProp()}`, { // use those values to send a request to the login or signup route, depending on the value of props.render. 
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: creds


        })

        if (res.status === 401) {
            setInvalidLogin(true)
            props.isLoggedIn(false)
            return
        }

        console.log(res.status)

        if (res.status === 201 || res.status === 200) { // if the response is OK, run the props.loggedIn function with argument 'true'. This will set the isLoggedIn to true in the app component. 
            console.log('RUNNING IF STATEMENT 0')
            props.isLoggedIn(true)
            setInvalidLogin(false)

            if (checkRenderProp() === 'signup' && !invalidLogin) { // if props.render is 'signup' and invalidLogin is false, login to the account the user just created. 
                console.log('RUNNING IF STATEMENT 1')
                const res2 = await fetch('http://localhost:3000/user/login', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: creds
                })

                if (res2.status === 409) {
                    console.log('RUNNING IF STATEMENT 2')
                    setInvalidLogin(true)
                    console.log('409 RUNNING')
                } else if (res2.status === 200) {
                    console.log('RUNNING IF STATEMENT 3')
                    setInvalidLogin(false)
                    window.location.reload()
                    props.isLoggedIn(true)
                }
            }
        } else if (res.status === 409) {
            setInvalidLogin(true)
        }


        console.log(emailValue)
    }

    let handleEnter = (e) => {
        if (e.key === 'Enter') {
            loginFunction()
        }
    }

    // The return statement begins below

    return (
        <div className="login-dropdown" id="login-dropdown" data-dropdown='true'>
            <h4 data-dropdown='true'>
                {props.render === 'login' && 'login'}
                {props.render === 'signup' && 'signup'}
            </h4>
            <form data-dropdown='true'>
                <label for='email' data-dropdown='true'>Email</label>
                <input type='text' name='email' data-dropdown='true' className="login-input" onChange={emailChange} onKeyPress={(e) => { handleEnter(e) }} />
                <label for='password' data-dropdown='true'>Password</label>
                <input type='password' name='password' data-dropdown='true' className="login-input" onChange={passwordChange} onKeyPress={(e) => { handleEnter(e) }} />
                {props.render === 'signup' &&
                    <React.Fragment>
                        <label for='verify-password' data-dropdown='true'>Verify password</label>
                        <input type='password' name='verify-password' data-dropdown='true' className="login-input" onChange={verifyPasswordChange} onKeyPress={(e) => { handleEnter(e) }} />
                    </React.Fragment>
                }
                <span className="login-button" onClick={loginFunction} data-dropdown='true'>
                    {props.render === 'login' && 'login'}
                    {props.render === 'signup' && 'sign up'}
                </span>
            </form>
            {(invalidLogin && props.render === 'signup') &&
                <p>Whoops! That email is already being used.</p>
            }
            {(invalidLogin && props.render === 'login') &&
                <p>Whoops! Invalid email or password.</p>
            }
            {mismatchedPasswords &&
                <p>Whoops! Those passwords don't match.</p>
            }
            {noEmail &&
                <p>Whoops! Please provide an email address</p>
            }
            {noPassword &&
                <p>Whoops! Please provide a password</p>
            }

        </div>
    )
}

export default LoginDropdown