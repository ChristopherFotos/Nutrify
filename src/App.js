import React, { useState, useEffect } from "react";
import SearchBar from "./searchComponent";
import SearchSummary from "./searchSummary";
import LoginDropdown from "./loginDropdown";
import './styles.css'

import CardContainer from "./cardContainer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState(null)
  const [loggedIn, setLoggedIn] = useState(null)
  const [searched, setSearched] = useState(false)
  const APP_ID = "75c55f11";
  const APP_KEY = "85c90ba0da33bd59f927417d3d72febe";

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (dropdown === 'login' || dropdown === 'signup') {
        if (e.target.id !== 'login-dropdown' &&
          e.target.id !== 'login-button' &&
          e.target.id !== 'signup-button' &&
          e.target.id !== 'login-dropdown' &&
          !e.target.dataset.dropdown) {
          setDropdown(null)
        }
      }
    })
  })

  useEffect(() => { // Check if a user is logged in, change logged in if so
    const req = async () => {
      let res = await fetch('http://localhost:3000/user/verify',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        }
      )
      if (res.status === 200) { setLoggedIn(true); console.log('FROM UE', loggedIn); console.log('FROM UE 2', loggedIn) }
    }
    req()
  }, [loggedIn])

  const isLoggedIn = (user) => { // This function is passed down the component tree to the loginDropdown. When a user successfully log in this function is run with the the argument 'true'
    setLoggedIn(user)
    console.log(loggedIn)
  }

  const loginDropdown = (target) => {  // Toggling the signup dropdown
    if (target === 'signup') {
      if (dropdown === 'signup') {
        setDropdown(null)
      } else { setDropdown('signup') }
    }

    if (target === 'login') {   // Toggling the login dropdown
      if (dropdown === 'login') {
        setDropdown(null)
      } else { setDropdown('login') }
    }
  };

  const logout = async () => {  // Making the logout request 
    let res = await fetch('http://localhost:3000/user/logout',
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      }
    )
    console.log(res)
    if (res.status === 200) {
      window.location.reload()
    }
  }

  const getRecipes = (input, options) => {    // Building the request string and sending the request with fetch
    console.log(options, input);
    let req = `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;

    // The following conditionals add the user's diet type selections to the request string (above)
    if (options.lowCarb) {
      req += `&diet=low-carb`;
    }
    if (options.lowFat) {
      req += `&diet=low-fat`;
    }

    if (options.balanced) {
      req += `&diet=balanced`;
    }

    if (options.highProtein) {
      req += `&diet=high-protein`;
    }

    if (options.highFiber) {
      req += `&diet=high-fiber`;
    }

    if (options.lowSodium) {
      req += `&diet=low-sodium`;
    }

    if ((options.calFrom && options.calTo) && (options.calFrom < options.calTo)) {
      req += `&calories=${options.calFrom}-${options.calTo}`
    }

    console.log(req)

    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(data.hits);
        setSearched(true)
        console.log('SEARCHED: ', searched)
        console.log('SEARCHED: ', searched)
      });

    console.log(req);

    // setQuery();
  };

  const renderSearchSummary = () => {   // Render the search summary 
    if (query) {
      return <SearchSummary queries={null}></SearchSummary>;
    } else return null;
  };

  return (
    <React.Fragment>
      <div className="navbar">
        {!loggedIn &&
          <div className="navbar-button-container" id='guest-navbar'>
            <span className="navbar-button" id="login-button" onClick={() => loginDropdown('login')}>login</span>
            <span className="navbar-button" id="signup-button" onClick={() => loginDropdown('signup')}>sign up</span>
            {dropdown === 'login' &&
              <LoginDropdown render='login' isLoggedIn={isLoggedIn}></LoginDropdown>
            }
            {dropdown === 'signup' &&
              <LoginDropdown render='signup' isLoggedIn={isLoggedIn}></LoginDropdown>
            }
          </div>
        }

        {loggedIn &&
          <div className="navbar-button-container" id='guest-navbar'>
            <a href="http://localhost:5001/" className="navbar-button" id="dashboard-button">dashboard</a>
            <span className="navbar-button" id="login-button" onClick={logout}>logout</span>
          </div>
        }
      </div>
      <div className="app-container">
        <SearchBar onClick={getRecipes} setSearched={() => { setSearched(true) }}></SearchBar>
        {renderSearchSummary()}
        <CardContainer recipes={recipes} searched={searched} isLoggedIn={loggedIn}></CardContainer>
      </div>
    </React.Fragment>
  );
};

export default App;
