import { useState } from "react";

export default function NavBar(){
    // script
      const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
  };

    return (
        <div className="Nav-wrap">
            <nav className="nav-class">
                {/* first div */}
                <div className="nav-action">
                    <p className="logo">svermash</p>
                    <div className="Ham">
                        <div className={`ham-menu ${menuOpen ? "active" : ""}`}onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                {/* second div */}
                <div className={`off-screen-menu ${menuOpen ? "active" : ""}`}>
                    <ul className="nav-ul">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT</a></li>
                        <li><a href="#">DETAILS</a></li>
                    </ul>
                </div>
                {/* third div  */}
                <div className="login-btn">
                    <button >LOGIN</button>
                </div>
                
            </nav><hr></hr>
        </div>
         
);
}

export function Footer(){
    return (
        <div className="footer-wrap"><hr></hr>
            <nav className="footer">
                <div className="li-wrap about-us">
                    <p id="footer-p">ABOUT US</p>
                    <li><a href="#">Our vision</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Privacy</a></li>
                </div>
                <div className="li-wrap our-social">
                    <p id="footer-p">OUR SOCIAL </p>
                    <li><a href="https://github.com/svermash" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/sver/" target="_blank" rel="noopener noreferrer">LinkedIN</a></li>
                </div>
            </nav>
            <nav className="footer-bottom">
                <div>
                    <p id="footer-p">made with &#10084; by svermash</p>
                </div>
                <div className="footer-bm-a">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Helpdesk</a>
                </div>
            </nav><hr/><hr/><hr/><hr/>
    </div>
    );
}