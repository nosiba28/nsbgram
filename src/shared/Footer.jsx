
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaGoogle, FaTwitter, FaSkype } from "react-icons/fa";
const Footer = () => {
    return (
        <>
        <footer className="lg:footer p-10 bg-base-300 text-base-content rounded-lg">
            <div className=''>
                {/* <img className='w-1/5 mx-auto lg:w-1/6 lg:mx-3 rounded-full' src={logo} alt="" /> */}
                <h3 className='text-4xl text-center text-back font-bold'>nsbGram</h3>
            </div>
            <div className='text-center my-5 lg:mx-3'>
                <span className="footer-title text-xl text-black">Contact</span>
                <a className="link link-hover flex text-lg items-center justify-center text-black"><FaMapMarkerAlt></FaMapMarkerAlt>353/A, New Market, Dhanmondi, Dhaka.</a>
                <a className="link link-hover flex text-lg items-center justify-center text-black"><FaPhone></FaPhone> 01990000000</a>
                <a className="link link-hover flex text-lg items-center justify-center text-black"><FaEnvelope></FaEnvelope> nsb@gmail.com</a>
            </div>
            <div className='text-center my-5 lg:mx-3'>
            <span className="footer-title text-xl text-black">Social</span>
                <a href='https://www.google.com/' target='_blank' className="link link-hover flex text-lg items-center justify-center text-black"><FaGoogle></FaGoogle> Google</a>
                <a href='https://www.facebook.com/' target='_blank' className="link link-hover flex text-lg items-center justify-center text-black"><FaFacebook></FaFacebook>Facebook</a>
                <a href='https://www.skype.com/' target='_blank' className="link link-hover flex text-lg items-center justify-center text-black"><FaSkype></FaSkype>Skype</a>
                <a href='https://twitter.com/' target='_blank' className="link link-hover flex text-lg items-center justify-center text-black"><FaTwitter></FaTwitter>Twitter</a>
            </div>
            <div className='text-center my-5 lg:mx-3'>
                <p><span className="footer-title text-xl text-back">Legal</span></p>
                <p><a href='#' className="link link-hover text-lg text-black">Terms of use</a></p>
                <p><a className="link link-hover text-lg text-black">Privacy policy</a></p>
                <p><a className="link link-hover text-lg text-black">Cookie policy</a></p>
            </div>
           
        </footer>
         <p className='text-center text-lg text-warning'>Copyright © 2023 - All right reserved</p>
        </>
        
    );
};

export default Footer;