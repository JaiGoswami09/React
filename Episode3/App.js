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


// React Element

const element2 = <span><h1 className="reactelement2" tabIndex="5">Hello World from React using JSX Element2</h1></span>;

const jsxHeading = <h1 className="heading" tabIndex="5"> {element2} Hello World from React using JSX</h1>;



/**
 * How to put a React Element inside another React Element?
 * -- Add a curly bracket and write react variable name.
 */

//React Component
  //-- There are 2 types of components in react i.e 1) Class Based Components.(Old way of writing code.)
  //                                                2) Functional Components.(New way of writing code.)

   
  // Whenever we are creating a Functional component or any React Component we should name it with a capital letter only otherwise we will get an error.

/**
 * 
 * const HeadingComponent = () => {
 * return <h1 className="heading">My React Functional Component.</h1>
 * };
 * 
 * //We can write the above code in another way as well i.e:
 */

//Creating another Component Title.
/**
 * We can create a normal function as well it is not mandatory to use arrow function but we write it because it is a newer way
 * and acc. to industry standards everywhere we will see arrow function only.
 * 
const Title = function () { return (
  <h1 className="head" tabIndex= "5"> Hello World from Title Component</h1>
 )};

 */

 const Title = () =>  (
  <h1 className="head" tabIndex= "5"> Hello World from Title Component</h1>
 );

 // If we want to render this title component inside our heading component then we can render it
 // by writing <Title/> in HeadingComponent.

 /** JSX Power-- JSX in a component starts from small bracket "(" after => to ")". If we write "{}"  anywhere inside JSX so inside this "{}" 
  * we can run any piece of Javascript expression/Javascript code.
  * == We can inject any Javascript code inside these curly braces it will run.
  * */ 

 /**
  * How can we put our React Element inside React Component?
  *  just add curly brackets inside the JSX of react component and put the javascript variable i.e jsxHeading(In this case) in that curly bracket.
  * 
  */
 
 const number = 10000;

const HeadingComponent = () => (
    <div id="container">
      <Title/>
      <Title></Title>
      {Title()}
      <h2>{number}</h2>
      <h2>{9+25}</h2>
      {jsxHeading}
    <h1 className="heading">My React Functional Component.</h1>
    </div>
  );

  
 // To render our Heading Component there is a different way i.e root.render(<HeadingComponent />);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  const root2 = ReactDOM.createRoot(document.getElementById("root2"));

  root.render(jsxHeading);
  root2.render(<HeadingComponent />)

  //Component Composition: Composing two components into one another like we Composed Title Component inside Heading Component is Component Composition.
   

 