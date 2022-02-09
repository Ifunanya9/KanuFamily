import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
      <div style={{maxWidth: "50%",
      margin: "8rem auto 0"}}>
      <h1>404 - Page not Found</h1>
      <p>The page you were looking for does not exist.</p>
      <Link to="/"><button className="btn-primary">Go to Home page</button></Link>
    </div>
        );
      }

export default NotFound;
