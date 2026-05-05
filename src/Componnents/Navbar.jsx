import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <a href="">Home</a>
         <a href="">Login</a>
          <a href="">Signup</a>
          <hr />
    </nav>
  )
}

export default Navbar
// fragments  me css create nahi hota nd isme className hota hai
// navbar ki return value jayegi app.jsx me nd app.jsx ki return value jayegi 
// main.jsx me nd main.jsx me render hoke index.html me show hoga. 
// App is a parent component of Navbar and main.jsx is a parent component of App.
// components are reusable pieces of code that can be used to build the user interface of a React application. 
// They are typically defined as JavaScript functions or classes that return JSX, which is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. 
// Components can be nested inside other components, allowing you to create complex user interfaces by combining simpler components together.  