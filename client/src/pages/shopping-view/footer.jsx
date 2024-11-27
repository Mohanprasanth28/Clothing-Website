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
        </div>
      </div>
    </footer>
  );
}

export default Footer;