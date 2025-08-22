const Footer = () => (
  <footer className="mt-20 p-3 pb-5 flex flex-col justify-center align-middle">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800 pt-12 text-gray-400 text-sm px-3 md:px-6 sm:px-12">
      <div className="space-y-6 flex flex-col justify-between">
        <img
          src="/logos/anvi-space.png"
          alt="anvi-space-logo"
          className="w-full max-w-[250px] -ml-5 object-cover"
        />
      </div>

      <div className="space-y-4 leading-snug order-2">
        <div>
          <span className="font-semibold text-gray-100">Email</span>
          <br />
          <a
            href="mailto:info@anvi.co"
            className="hover:underline text-gray-300"
          >
            info@anvi.co
          </a>
        </div>
        <div>
          <span className="font-semibold text-gray-100">Phone</span>
          <br />
          <span>+91**********</span>
        </div>
        <div>
          <span className="font-semibold text-gray-100">Address</span>
          <br />
          <span>
            Profound Builders, Whitefields, Kondapur, Telangana 500081.
          </span>
        </div>
      </div>

      <div className="space-y-6 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-4 text-gray-300 font-mono uppercase tracking-widest text-md text-center cursor-pointer select-none">
          <span className="hover:underline">Facebook</span>
          <span className="hover:underline">LinkedIn</span>
          <span className="hover:underline">Instagram</span>
        </div>
        <button
          className="self-center md:self-auto bg-white text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          onClick={() => alert("Contact us clicked")}
          type="button"
        >
          Contact US
        </button>
      </div>
    </div>
    <p className="text-center text-white mt-10">&copy; 2015 Anvi.co</p>
  </footer>
);

export default Footer;
