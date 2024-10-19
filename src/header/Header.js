import React from 'react';
import { Stack } from 'react-bootstrap';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <Stack direction='horizontal' gap={5}>
                <div className='p2'><h1>TWC Architects</h1></div>
                <div className='p2 ms-auto'>Architecture</div>
                <div className='p2'>About</div>
                <div className='p2'>Contact</div>
                <div className='p2'></div>
            </Stack>
        </div>
    );
}

export default Header;