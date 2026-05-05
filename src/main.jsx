//js way
// const divTag= document.getElementById("root");
// const h1tag=document.createElement("h1");
// h1tag.textContent="Hello react using js way";
// divTag.append(h1tag);

//React way
// create root krr rahe hai taaki index.html nd main.jsx ke beech connection ho jaye
// humne yaha pr createRoot ko curlybracecs me isliye likha hai kyuki createRoot ek named export hai react-dom se
// import { createRoot } from "react-dom/client";
// import App from "./App";
// createRoot(document.getElementById("root")).render(<App />);
//     <>
// <h1>Hello I am React</h1>
// </>
// )
//<></>--- it is called as react fragment, it is used to wrap multiple elements without adding extra nodes to the DOM.
//  It allows us to group a list of children without adding extra nodes to the DOM.
//  It is a common pattern in React when you want to return multiple elements from a 
// component without wrapping them in an additional DOM element like a div.
// components means functions or reusable code that we create in seperate files

//! REACT WAY
import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.getElementById("root")).render(<App />);

//<></> --> Fragments
//! JS WAY
// const divTag = document.getElementById("root");
// const h1tag = document.createElement("h1");
// h1tag.textContent = "Hello React! using JS way";
// divTag.append(h1tag);

