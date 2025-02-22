import { useState } from "react";
import "./About.css";

function About() {
    const [showEmail, setShowEmail] = useState(false);

    function toggleEmail() {
        setShowEmail(!showEmail);
    }

    return (
        <div className="about-container">
            <h1>ABOUT US</h1>

            <p className="about-text">
                We are a passionate team dedicated to delivering the best services and experiences to our customers.
            </p>

            <div className="email-section">
                {showEmail ? (
                    <h5 className="email-text">aramburoeduardo972@gmail.com</h5>
                ) : (
                    <p>Click the button to see Email</p>
                )}

                <button className="btn-toggle-email" onClick={toggleEmail}>
                    {showEmail ? "Hide Email" : "Show My Email"}
                </button>
            </div>
        </div>
    );
}

export default About;
