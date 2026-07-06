import React from 'react';

function Nav() {
    return (
        <nav style={{ backgroundColor: '#495E57', padding: '10px' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
                <li><a href="/" style={{ color: '#EDEFEE', textDecoration: 'none', fontWeight: 'bold' }}>Home</a></li>
                <li><a href="#about" style={{ color: '#EDEFEE', textDecoration: 'none', fontWeight: 'bold' }}>About</a></li>
                <li><a href="#menu" style={{ color: '#EDEFEE', textDecoration: 'none', fontWeight: 'bold' }}>Menu</a></li>
                <li><a href="#reservations" style={{ color: '#EDEFEE', textDecoration: 'none', fontWeight: 'bold' }}>Reservations</a></li>
                <li><a href="#order" style={{ color: '#EDEFEE', textDecoration: 'none', fontWeight: 'bold' }}>Order Online</a></li>
                <li><a href="#login" style={{ color: '#EDEFEE', textDecoration: 'none', fontWeight: 'bold' }}>Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;