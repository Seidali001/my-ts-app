import React from 'react';
import './App.css';

function App() {
    console.log("App rendering");
    return (
        <div className="App">
            This is App component
            <AppContent/>
            <Rating/>
            <Accordion/>
        </div>
    );
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

function Accordion() {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendering");
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <div>
            <ul className="lists">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
