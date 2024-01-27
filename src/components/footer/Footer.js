import "./style.css"

import facebook from "./../../img/icons/facebook.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";

import linkedIn from "./../../img/icons/linkedIn.svg";


const Footer = () => {
    return (   <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item"><a href="https://www.facebook.com/profile.php?id=100028230424212&locale=pl_PL"><img src={facebook} alt="Link" /></a></li>
                <li className="social__item"><a href="https://www.instagram.com/maksdachevskyi/?igsh=YzVkODRmOTdmMw%3D%3D"><img src={instagram} alt="Link" /></a></li>
                <li className="social__item"><a href="https://github.com/Maksymus333333"><img src={gitHub} alt="Link" /></a></li>
                <li className="social__item"><a href="https://www.linkedin.com/in/maksym-dachevskyi-093692296/"><img src={linkedIn} alt="Link" /></a></li>
            </ul>
            <div className="copyright">
                 <p>© 2024 mdachevskyi@edu.cdv.pl</p>
            </div>
        </div>
    </div>
</footer>
);
}
 
export default Footer;