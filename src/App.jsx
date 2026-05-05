// // import React from 'react'
// import Footer from "./Componnents/Footer";
// import Navbar from "./Componnents/Navbar";

// const App = () => {
//     const username="Vish";
//     function greet(){
//         return "Welcome"
//     }
//   return(
//   <> 
//   <Navbar />   
//   <h1>I am a Component becoz i am a function </h1>
//   <h2>Hellllooooo</h2>
//   <h3>{greet()} {username}</h3>
//   <Footer/>
//   </> 
//   );
// };
import ClassBased from "./allTopics/01_Types-of-components/ClassBased";
import FunctionBased from "./allTopics/01_Types-of-components/FunctionBased";
import StatesInFBC from "./allTopics/02_States/StatesInFBC";

const App = () => {
  return (
    <>
      {/* <FunctionBased /> */}
      {/* <ClassBased /> */}
      <StatesInFBC />
    </>
  );
};

export default App;


// differece btw html nd xml--it is case sensitive 2) xml has to consist of one parent
//  3) it does not support unpaired tag nd it supports self closing tag
// in react first letter of files should be upper case.
//types of code-function based component and class based component.
// function based component--it is a simple js function that returns jsx. it is also called as stateless component.
// class based component--it is a js class that extends React.Component and has a render method that returns jsx.
//  it is also called as stateful component.
// in react we can use both function based component and class based component but function based component
//  is more popular and widely used in react development.