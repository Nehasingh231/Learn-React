import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "hey neha"
// );


// JSX 

const heading = (<h1 id="heading"
 className="head">
 Namaste Everyone
 </h1>
);

const element = <span>I am react element</span>

const title = (
    <h4>Hey i am just a variable
    {element}
    </h4>
);

// React Functional Copmponent

const Title = () => {
   return <h1 className="head">
  Namaste Everyone...
 </h1>
}
 const number = 1000;
// Component Composition - component inside component

const HeadingComponent = ()=>(
    <div id = "container">
    <h2>{100 + 300}</h2>
   <h3>{console.log ("JSX is amazing")}</h3> 
  <Title /> 
  <Title></Title>
  {Title()} 
    {number}
    {title}
     <h1>Namaste React Functional Component</h1>
    </div>
);


// root.render(heading);
// root.render(heading);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)