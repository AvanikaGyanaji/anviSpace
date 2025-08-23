import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full p-3 pt-20 pb-5 flex flex-col justify-center align-middle bg-black">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-gray-800 pt-12 text-white text-sm px-3 md:px-6 sm:px-12">
      <div className="space-y-6 flex flex-col order-0 justify-between">
        <img
          src="/logos/anvi-space.png"
          alt="anvi-space-logo"
          className="w-full max-w-[250px] -ml-5 object-cover"
        />
      </div>

      {/* Contact Infos */}
      <div className="space-y-8 leading-snug order-3 md:order-1 place-items-start">
        <div className="flex justify-center align-middle gap-3 place-items-center">
          <span className="font-semibold text-gray-100">
            <Mail />
          </span>
          <a
            href="mailto:info@anvi.co"
            className="hover:underline text-gray-300"
          >
            info@anvi.co
          </a>
        </div>
        <div className="flex justify-center align-middle gap-3 place-items-center">
          <span className="font-semibold text-gray-100">
            <Phone />
          </span>
          <span>+91**********</span>
        </div>
        <div className="flex justify-center align-middle gap-3 place-items-center">
          <span className="font-semibold text-gray-100 self-start">
            <MapPin />
          </span>
          <span>
            Profound Builders, Whitefields, Kondapur, Telangana 500081.
          </span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="space-y-2 order-2 max-md:text-center mb-auto place-items-start max-md:m-auto flex flex-col justify-start align-top md:w-max text-left gap-5 text-gray-300 font-[shinko sans] uppercase tracking-widest text-md text-center cursor-pointer select-none">
        {/* <span className="hover:underline h-max"><FaFacebook size={20} color="white" /> Facebook</span>
        <span className="hover:underline h-max"><FaLinkedin size={20} color="white" /> LinkedIn</span>
        <span className="hover:underline h-max"><FaInstagram size={20} color="white" /> Instagram</span> */}

        <span className="hover:underline h-max flex justify-start align-middle gap-3">
          <Facebook /> Facebook
        </span>
        <span className="hover:underline h-max flex justify-start align-middle gap-3">
          <Linkedin /> Linkedin
        </span>
        <span className="hover:underline h-max flex justify-start align-middle gap-3">
          <Instagram /> Instagram
        </span>
      </div>

      {/* Contact Us Button */}
      <button
        className="self-center order-1 md:order-3 h-max w-100% cursor-pointer hover:scale-102k md:self-auto bg-white hover:bg-black hover:text-white hover:border-1 hover:border-gray-50 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300"
        onClick={() => alert("Contact us clicked")}
        type="button"
      >
        Contact US
      </button>
    </div>
    <p className="text-center text-white mt-10">&copy; 2015 Anvi.co</p>
  </footer>
);

export default Footer;
