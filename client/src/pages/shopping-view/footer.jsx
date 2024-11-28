<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">Fashion Store</h2>
            <p className="mt-4 max-w-xs text-gray-300">
              Your one-stop destination for trendy and fashionable clothing.
            </p>
            <div className="mt-8 flex gap-6">
              <Link to="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            <div>
              <h3 className="font-medium text-white">Company</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
                <Link to="/about" className="hover:text-white">About</Link>
                <Link to="/contact" className="hover:text-white">Contact</Link>
                <Link to="/careers" className="hover:text-white">Careers</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium text-white">Services</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
                <Link to="/shipping" className="hover:text-white">Shipping</Link>
                <Link to="/returns" className="hover:text-white">Returns</Link>
                <Link to="/warranty" className="hover:text-white">Warranty</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium text-white">Helpful Links</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
                <Link to="/faqs" className="hover:text-white">FAQs</Link>
                <Link to="/support" className="hover:text-white">Support</Link>
                <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium text-white">Contact</h3>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
                <p>Email: info@fashionstore.com</p>
                <p>Phone: +91 9876543210</p>
                <p>Address: Tirupur, Tamil Nadu, India</p>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="text-sm text-gray-300 text-center">
            © {new Date().getFullYear()} Fashion Store. All rights reserved.
          </div>
=======
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: ecommerce@shop.com</li>
            <li>Phone: +91 9876543210</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We are a leading online store providing the best fashion products at
            affordable prices.
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FaTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
            <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500 transition-colors duration-300" />
            <FaWhatsapp className="w-6 h-6 cursor-pointer hover:text-green-500 transition-colors duration-300" />
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Address</h3>
          <ul className="space-y-2 text-sm">
            <li>Ecommerce</li>
            <li>Tirupur , Tamil nadu</li>
            <li>India</li>
          </ul>
>>>>>>> 62f2dbb935ae610dba9b8214a236b5ab264b4df2
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}

export default Footer;
=======
};

export default Footer;
>>>>>>> 62f2dbb935ae610dba9b8214a236b5ab264b4df2
