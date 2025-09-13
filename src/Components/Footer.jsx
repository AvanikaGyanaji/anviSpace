import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full p-3 pt-20 pb-5 z-50 flex flex-col justify-center align-middle bg-black">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-gray-800 pt-12 text-white text-sm px-3 md:px-6 sm:px-12">
      <div className="space-y-6 flex flex-col order-0 justify-between">
        <img
          src="/logos/anvi-space.png"
          alt="anvi-space-logo"
          className="w-full max-w-[250px] -ml-5 object-cover"
        />
      </div>

      {/* Contact Infos */}
      <div className="space-y-5 leading-normal order-3 md:order-1 place-items-start">
        <a
          href="mailto:info@anvi.co"
          className="flex justify-center align-middle gap-3 place-items-center"
        >
          <span className="font-semibold text-gray-100">
            <Mail size={18} />
          </span>
          <span className="hover:underline text-gray-300">info@anvi.co</span>
        </a>
        <Link
          to="https://maps.app.goo.gl/rGCJomuj6BP18opS9"
          target="_blank"
          rel="noopener"
          className="flex justify-center align-middle gap-3 place-items-center"
        >
          <span className="font-semibold text-gray-100 self-start">
            <MapPin size={18} />
          </span>
          <span>
            Profound Builders, Whitefields, Kondapur, Telangana 500081.
          </span>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="space-y-2 order-2 max-md:text-center mb-auto place-items-start max-md:m-auto flex flex-col justify-start align-top md:w-max text-left gap-5 text-gray-300 font-[shinko sans] uppercase tracking-widest text-md text-center cursor-pointer select-none">
        {/* <span className="hover:underline h-max"><FaFacebook size={20} color="white" /> Facebook</span>
        <span className="hover:underline h-max"><FaLinkedin size={20} color="white" /> LinkedIn</span>
        <span className="hover:underline h-max"><FaInstagram size={20} color="white" /> Instagram</span> */}

        <Link
          to=""
          className="hover:underline h-max text-[12px] place-items-center flex justify-start align-middle gap-3 underline-offset-5"
        >
          <Facebook size={18} /> Facebook
        </Link>
        <Link
          to="https://www.linkedin.com/company/anvispace/"
          target="_blank"
          rel="noopener"
          className="hover:underline h-max text-[12px] place-items-center flex justify-start align-middle gap-3 underline-offset-5"
        >
          <Linkedin size={18} /> Linkedin
        </Link>
        <Link
          to=""
          className="hover:underline h-max text-[12px] place-items-center flex justify-start align-middle gap-3 underline-offset-5"
        >
          <Instagram size={18} /> Instagram
        </Link>
      </div>

      {/* Contact Us Button */}
      <Link
        to="/#contact"
        target="_self"
        className="self-center text-center order-1 md:order-3 h-max w-100% cursor-pointer hover:scale-102k md:self-auto bg-white hover:bg-black hover:text-white hover:border-1 hover:border-gray-50 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300"
        // onClick={() => alert("Contact us clicked")}
        type="button"
      >
        Contact US
      </Link>
    </div>
    <p className="text-center text-white mt-10">&copy; 2025 anvispace.co</p>
  </footer>
);

export default Footer;
