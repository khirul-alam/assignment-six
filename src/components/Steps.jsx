
import { FaUserCircle } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { LiaRocketSolid } from "react-icons/lia";

export default function Steps() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        
       
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Get Started in 3 Steps</h2>
          <p className="text-slate-500 text-[16px]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          
         
          <div className="card bg-base-100 w-full max-w-sm shadow-sm relative border border-slate-100 hover:shadow-md transition-all">
           
            <div className="absolute top-5 right-5 w-10 h-10 bg-[#7c3aed] text-white text-sm font-bold rounded-full flex justify-center items-center shadow-md">
              01
            </div>
            
            <figure className="text-6xl pt-12 flex justify-center">
              <div className="w-24 h-24 bg-[#7c3aed1a] rounded-full flex justify-center items-center">
                <FaUserCircle className="text-[#7c3aed]" />
              </div>
            </figure>
            
            <div className="card-body items-center text-center pt-4">
              <h2 className="card-title text-xl font-bold text-slate-800">Create Account</h2>
              <p className="text-slate-500 text-sm">
                Sign up for free in seconds. No credit card required to get started.
              </p>
            </div>
          </div>

          
          <div className="card bg-base-100 w-full max-w-sm shadow-sm relative border border-slate-100 hover:shadow-md transition-all">
           
            <div className="absolute top-5 right-5 w-10 h-10 bg-[#7c3aed] text-white text-sm font-bold rounded-full flex justify-center items-center shadow-md">
              02
            </div>
            
            <figure className="text-6xl pt-12 flex justify-center">
              <div className="w-24 h-24 bg-[#7c3aed1a] rounded-full flex justify-center items-center">
                <AiFillProduct className="text-[#7c3aed]" />
              </div>
            </figure>
            
            <div className="card-body items-center text-center pt-4">
              <h2 className="card-title text-xl font-bold text-slate-800">Choose Products</h2>
              <p className="text-slate-500 text-sm">
                Browse our catalog and select the tools that fit your needs. 
              </p>
            </div>
          </div>

          
          <div className="card bg-base-100 w-full max-w-sm shadow-sm relative border border-slate-100 hover:shadow-md transition-all">
           
            <div className="absolute top-5 right-5 w-10 h-10 bg-[#7c3aed] text-white text-sm font-bold rounded-full flex justify-center items-center shadow-md">
              03
            </div>
            
            <figure className="text-6xl pt-12 flex justify-center">
              <div className="w-24 h-24 bg-[#7c3aed1a] rounded-full flex justify-center items-center">
                <LiaRocketSolid className="text-[#7c3aed]" />
              </div>
            </figure>
            
            <div className="card-body items-center text-center pt-4">
              <h2 className="card-title text-xl font-bold text-slate-800">Start Creating</h2>
              <p className="text-slate-500 text-sm">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}