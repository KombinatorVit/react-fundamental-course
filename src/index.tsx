import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <App/>
);


async function getData() {
    try {
        fetch("https://jsonplaceholder.typicode.com/posts");
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}