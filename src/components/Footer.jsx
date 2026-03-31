import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-slate-900 text-slate-200">
      <footer className="footer p-10 flex justify-between container mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-white">DigiTools</h2>
          <p className="text-slate-400 mt-2">
            Premium digital tools for creators,
            <br />
            professionals, and businesses. Work smarter
            <br />
            with our suite of powerful tools.
          </p>
        </div>

        <div>
          <span className="footer-title text-white opacity-90">Product</span>
          <a className="link link-hover text-slate-400">Features</a>
          <a className="link link-hover text-slate-400">Pricing</a>
          <a className="link link-hover text-slate-400">Templates</a>
          <a className="link link-hover text-slate-400">Integrations</a>
        </div>

        <div>
          <span className="footer-title text-white opacity-90">Company</span>
          <a className="link link-hover text-slate-400">About</a>
          <a className="link link-hover text-slate-400">Blog</a>
          <a className="link link-hover text-slate-400">Careers</a>
          <a className="link link-hover text-slate-400">Press</a>
        </div>

        <div>
          <span className="footer-title text-white opacity-90">Resources</span>
          <a className="link link-hover text-slate-400">Documentation</a>
          <a className="link link-hover text-slate-400">Help Center</a>
          <a className="link link-hover text-slate-400">Community</a>
          <a className="link link-hover text-slate-400">Contact</a>
        </div>

        <div>
          <span className="footer-title text-white opacity-90">
            Social Links
          </span>
          <div className="flex justify-between gap-4 text-2xl mt-2">
            <TiSocialFacebookCircular className="text-3xl text-slate-400 hover:text-[#1877F2] cursor-pointer transition-colors" />
            <FaInstagram className="text-slate-400 hover:text-[#E4405F] cursor-pointer transition-colors" />
            <FaXTwitter className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="link link-hover hover:text-slate-300">
              Privacy Policy
            </a>
            <a className="link link-hover hover:text-slate-300">
              Terms of Service
            </a>
            <a className="link link-hover hover:text-slate-300">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
}
