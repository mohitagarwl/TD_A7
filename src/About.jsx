import React from "react";

function About() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>About This App</h1>
            <h2>This is a simple React app demonstrating routing, form validation, lazy loading, and Bootstrap styling.</h2>

            <div style={{ display: "flex", justifyContent: "center",fontSize:"18px" }}>
                <ol style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
                    <li><strong>Functionality:</strong>
                        <ul>
                            <li>The app should have at least <strong>three pages:</strong></li>
                            <ul>
                                <li><strong>Home Page:</strong> A simple welcome screen with navigation links to other pages.</li>
                                <li><strong>Form Page:</strong> A page with a form that validates user inputs.</li>
                                <li><strong>About Page:</strong> A static page with information about the app.</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Implement form validation to ensure:</li>
                            <ul>
                                <li>Required fields are filled.</li>
                                <li>The email field has a valid email format.</li>
                                <li>The password field has at least 8 characters</li>
                            </ul>
                        </ul>
                    </li>
                    <li><strong>React Router:</strong>
                        <ul>
                            <li>Use React Router to navigate between pages.</li>
                            <li>Include a Navbar with links to the Home, Form, and About pages.</li>
                        </ul>
                    </li>
                    <li><strong>Lazy Loading:</strong>
                        <ul>
                            <li>Use React’s lazy and Suspense to lazy load the Form and About pages.</li>
                        </ul>
                    </li>
                    <li><strong>Styling:</strong>
                        <ul>
                            <li>Use React Bootstrap for styling.</li>
                        </ul>
                    </li>

                </ol>
            </div>
        </div>
    );
}

export default About;