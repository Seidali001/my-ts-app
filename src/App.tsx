import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";


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
        <> which contains other components, that return elements:</>
    )
}

function Rating() {
    console.log("Rating rendering");
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log("Star rendering");
    return (
        <div>
            <>Star</>
        </div>
    )
}



export default App;
