import React, { Component, useState, useEffect } from "react";


const LoginDropdown = (props) => {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [verifyPasswordValue, setVerifyPasswordValue] = useState('');

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

    const checkRenderProp = () => {
        if (props.render === 'login') {
            return 'login'
        } else { return 'signup' }
    }

    async function loginFunction() {

        let creds = JSON.stringify({
            email: emailValue,
            password: passwordValue,
            verifyPassword: verifyPasswordValue
        })

        const res = await fetch(`http://localhost:3000/user/${checkRenderProp()}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: creds
        })

        console.log(emailValue)

        if (res.status === 200) {
            props.isLoggedIn(true)
        }
    }

    return (
        <div className="login-dropdown" id="login-dropdown" data-dropdown='true'>
            <h4 data-dropdown='true'>
                {props.render === 'login' && 'login'}
                {props.render === 'signup' && 'signup'}
            </h4>
            <form data-dropdown='true'>
                <label for='email' data-dropdown='true'>Email</label>
                <input type='text' name='email' data-dropdown='true' onChange={emailChange} />
                <label for='password' data-dropdown='true'>Password</label>
                <input type='password' name='password' data-dropdown='true' onChange={passwordChange} />
                {props.render === 'signup' &&
                    <React.Fragment>
                        <label for='verify-password' data-dropdown='true'>Verify password</label>
                        <input type='password' name='verify-password' data-dropdown='true' onChange={verifyPasswordChange} />
                    </React.Fragment>
                }
                <span className="login-button" onClick={loginFunction} data-dropdown='true'>
                    {props.render === 'login' && 'login'}
                    {props.render === 'signup' && 'sign up'}
                </span>
            </form>
        </div>
    )
}

export default LoginDropdown