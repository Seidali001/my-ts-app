import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    console.log("App rendering");
    return (
        <div className="App">
            This is App component
            <AppContent/>
            <Rating/>
            <Accordion/>
        </div>
    )
}

function AppContent() {
    console.log("AppContent rendering");
    return (
        <> which contains other components, that return JSX:</>
    )
}



export default App;
