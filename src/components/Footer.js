import '../views/footer.css';

const Footer = () => {
    return(
        <div className='footerContainer'>
            <a id='contact_us'></a>
            <div className='logosContainer'>
                <b>Connect with us:</b>
                <br />
                <img className='socialMediaLogos' src={require('../images/fb.png')} alt="Facebook Logo"/>
                <img className='socialMediaLogos' src={require('../images/x.png')} alt="X Logo"/>
                <img className='socialMediaLogos' src={require('../images/linkedin.png')} alt="LinkedIn Logo"/>
                <img className='socialMediaLogos' src={require('../images/instagram.png')} alt="Instagram Logo"/>
                <img className='socialMediaLogos' src={require('../images/tiktok.png')} alt="TikTok Logo"/>
            </div>
            <h3>Contact Us</h3>
            <b>NLR Remodeling & General Contracting Services</b>
            <br />
            Fort Worth, TX
            <br />
            Natasha Rogers
            <br />
            <a href="tel:817-938-5217">(817)-938-5217</a>
            <br />
            <a href="mailto:nlrremodelinggc@gmail.com">nlrremodelinggc@gmail.com</a>
        </div>
    )
}

export default Footer;