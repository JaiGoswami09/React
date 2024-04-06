import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> It creates an Object(JS Object). ==> 
//when we render that object on DOM it becomes HTML Element.
//ReactDOM.createRoot will display it onto the browser.

/** 
 
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

*/

//JSX( JSX code is transpiled(converted to a code) before reaching the Javascript engine so that the browser can understand that react can understand.)
// This transpilation is done by parcel but parcel itself doesn't do this transpilation it gives this responsibility to a package called Babel.
// JSX ==> React.createElement ==> ReactElement-JS Object ==> HTMLElement(render).

// To give attributes in JSX we need to use CamelCase.
// If JSX code is in single line then its the perfect JSX Code but if it is in multiple line the we need to wrap the code inside small brackets for babel to understand from where is JSX starting and where it is ending.
/** 
*
*
const jsxHeading = <h1 id="heading">Hello World from React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
*
*
*/

const jsxHeading = <h1 className="heading">Hello World from React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

 