import React from 'react';

export default function Footer() {
  return (
    <footer className="footer p-10 bg-slate-900 text-slate-200">
      <div>
        <span className="footer-title text-white opacity-90">Services</span> 
        <a className="link link-hover text-slate-400">Branding</a> 
        <a className="link link-hover text-slate-400">Design</a> 
        <a className="link link-hover text-slate-400">Marketing</a> 
        <a className="link link-hover text-slate-400">Advertisement</a>
      </div> 
      <div>
        <span className="footer-title text-white opacity-90">Company</span> 
        <a className="link link-hover text-slate-400">About us</a> 
        <a className="link link-hover text-slate-400">Contact</a> 
        <a className="link link-hover text-slate-400">Jobs</a> 
        <a className="link link-hover text-slate-400">Press kit</a>
      </div> 
      <div>
        <span className="footer-title text-white opacity-90">Legal</span> 
        <a className="link link-hover text-slate-400">Terms of use</a> 
        <a className="link link-hover text-slate-400">Privacy policy</a> 
        <a className="link link-hover text-slate-400">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title text-white opacity-90">Newsletter</span> 
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-slate-400">Enter your email address</span>
          </label> 
          <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 bg-slate-800 border-slate-700 text-white" /> 
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}