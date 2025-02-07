import React from 'react';
import { Button } from '../ui/button';

function Header() {
    return (
        <header>
            <div className='p-2 shadow-sm flex justify-between items-center px-5'>
                {/* Logo is accessed automatically from the public folder */}
                <img src="/logo.svg" alt="Logo" />
                <Button>Sign In</Button>
            </div>
        </header>
    );
}

export default Header;
