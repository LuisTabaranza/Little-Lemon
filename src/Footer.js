import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333333', color: '#EDEFEE', padding: '20px', marginTop: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <div>
                    <h4>Navigation</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><a href="/" style={{ color: '#A1A1A1' }}>Home</a></li>
                        <li><a href="#about" style={{ color: '#A1A1A1' }}>About</a></li>
                        <li><a href="#menu" style={{ color: '#A1A1A1' }}>Menu</a></li>
                        <li><a href="#reservations" style={{ color: '#A1A1A1' }}>Reservations</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p style={{ color: '#A1A1A1', margin: '5px 0' }}>123 Restaurant Row, Chicago</p>
                    <p style={{ color: '#A1A1A1', margin: '5px 0' }}>(312) 555-0199</p>
                    <p style={{ color: '#A1A1A1', margin: '5px 0' }}>info@littlelemon.com</p>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><a href="#facebook" style={{ color: '#A1A1A1' }}>Facebook</a></li>
                        <li><a href="#instagram" style={{ color: '#A1A1A1' }}>Instagram</a></li>
                    </ul>
                </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>© 2026 Little Lemon Restaurant</p>
        </footer>
    );
}

export default Footer;