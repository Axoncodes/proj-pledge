import React from 'react';
import { Link } from 'react-router-dom';

// style
import './style.css';

export default function ForgotPass() {
    return (
        <section id="forgotpass">
            <Link to="/password-recovery">Forgot Pass?</Link>
        </section>
    )
}