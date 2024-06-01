import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",
{id: "heading",XYZ: "abc"},
"Hello people from React"
);

console.log(heading);

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);