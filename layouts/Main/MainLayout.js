import React from 'react';
import Link from 'next/link'
import ButtonAppBar from "../components/ButtonAppBar";

function MainLayout(props) {
    return (
        <div >
            <ButtonAppBar />
            <div id='content'>
                {props.children}
            </div>
            <footer id='footer'>
                <div>Logo</div>
                <div>Light Nav list</div>
            </footer>
        </div>
    );
}

export default MainLayout;