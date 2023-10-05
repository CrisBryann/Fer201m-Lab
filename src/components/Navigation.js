import React from "react";
import Icon from '@mui/material/Icon';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="header">
            <nav>
                <a class="logo">
                    <p>ME PHIM</p>
                </a>
                <ul>
                    <li>
                        <Link to="/">
                            <Icon className="menu-icon">
                                <HomeIcon />
                            </Icon>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <Icon className="menu-icon">
                                <InfoIcon />
                            </Icon>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            <Icon className="menu-icon">
                                <ArticleIcon />
                            </Icon>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <Icon className="menu-icon">
                                <PhoneIcon />
                            </Icon>
                            About Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}


        // <div className="header">
        //     <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color}} >
        //         <ul>
        //             <li><a className="active" href="#home" style={{ color: theme.color}} >Home</a></li>
        //             <li><a href="#news" style={{ color: theme.color}}>News</a></li>
        //             <li><a href="#about" style={{ color: theme.color}}>About</a></li>
        //             <li><a href="#contact" style={{ color: theme.color}}>Contact</a></li>
        //             <li></li>
        //         </ul>
        //         {<div style={{ position: 'relative' }}>
        //             <a className='switch-mode' href='#' onClick={toggle}
        //                 style={{
        //                     backgroundColor: theme.backgroundColor,
        //                     color: theme.color,
        //                     outline: 'none'
        //                 }} data-testid="toggle-theme-btn"
        //             >
        //                 Switch Nav to {!dark ? 'Dark' : 'Light'} mode
        //             </a>
        //         </div> }
        //     </nav>
        // </div>


//     )

// }

