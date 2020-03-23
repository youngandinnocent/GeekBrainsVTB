import React from 'react';
import './NotFoundPage.css';

export function NotFoundPage() {
    return (
        <div className="container">
            <div id="number">404</div>
            <div className="text">Page not found</div>
            <div className="div-btn">
                <a className="button" href="http://localhost:8080/">Go to main page</a>
            </div>
        </div>
    );
}