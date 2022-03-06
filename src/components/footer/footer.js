import { CustomLink } from '../../utility/activeLink';
import './footer.css';

const Footer = () => {
    return (
        <div className="Footer-Container">
            <div className="left-Footer">
            <button className="button">
                Import Talento Periodisering
            </button>
            
            </div>
            <div className="right-Footer">
            <button className="button">  <CustomLink to='/schedule-club'> Kalendar </CustomLink> </button>
            <button className="button">  <CustomLink to='/line-view'> Line </CustomLink>  </button>
            <button className="button">  <CustomLink to='list-view'> List </CustomLink> </button>
            </div>
        </div>
    );
}

export default Footer;