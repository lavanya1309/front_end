
// import { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";

// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Footer() {
//   const [openSections, setOpenSections] = useState({
//     general: false,
//     solutions: false,
//   });

//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   const toggleSection = (key) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
 
//   return (
//     <footer
//       className="bg-sky-100 bg-cover bg-no-repeat bg-bottom font-['Lato'] text-gray-700 pt-16"
//       style={{ backgroundImage: "url('/assets/bg-7.jpg')" }}
//     >
//       <div className="max-w-[1440px] mx-auto px-6">
//         <div className="hidden lg:grid grid-cols-[1fr_1.5fr] gap-12">
//           <div data-aos="fade-up">
//             <img src="/assets/logo.png" alt="Commnet Logo" className="w-[160px] mb-6" />
//             <p className="text-[17px] leading-relaxed max-w-md">
//               With more than 35 years of experience, 7 offices and over 1500 employees across the region - Commnet is a
//               leading end-to-end digital solutions provider...
//             </p>
//             <h4 className="text-xl font-bold mt-10 mb-3">Subscribe to our Newsletter</h4>
//             <div className="flex items-center border-b border-gray-400 pb-2 max-w-sm">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 outline-none bg-transparent text-sm"
//               />
//               <button className="bg-sky-600 text-white px-5 py-2 rounded ml-3 hover:bg-sky-700">Subscribe</button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
//             <div>
//               <h4 className="text-sky-700 font-semibold text-lg mb-3">Useful Links</h4>
//               <ul className="space-y-3">
//                 <li><a href="/" className="hover:underline">Home</a></li>
//                 <li><a href="/#about" className="hover:underline">About Us</a></li>
//                 <li><a href="/" className="hover:underline">Services</a></li>
//                 <li>
//                   <a href="/contactus" className="hover:underline">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sky-700 font-semibold text-lg mb-3">Social Media</h4>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <i className="fab fa-facebook-f text-sky-600 w-5"></i>
//                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                     Facebook
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <i className="fab fa-instagram text-sky-600 w-5"></i>
//                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                     Instagram
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <i className="fab fa-linkedin-in text-sky-600 w-5"></i>
//                   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                     LinkedIn
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lg:hidden flex flex-col gap-6 text-sm mt-10">
//           <img src="/assets/logo.png" alt="Commnet Logo" className="w-[140px]" data-aos="fade-up" />
//           <p className="text-[15px] leading-relaxed" data-aos="fade-up">
//             With more than 35 years of experience, 7 offices and over 1500 employees across the region - Commnet is a
//             leading end-to-end digital solutions provider...
//           </p>

//           <div className="mt-4" data-aos="fade-up">
//             <h4 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h4>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border-b border-gray-400 outline-none bg-transparent text-sm py-2"
//             />
//             <button className="bg-sky-600 text-white px-6 py-2 mt-4 rounded-full">Subscribe</button>
//           </div>

//           <div className="border-t border-gray-300 pt-4" data-aos="fade-up">
//             <button onClick={() => toggleSection("general")} className="w-full flex justify-between items-center py-3">
//               <span className="text-sky-700 font-semibold">Useful Links</span>
//               <ChevronDown className={`w-5 h-5 transition-transform ${openSections.general ? "rotate-180" : ""}`} />
//             </button>
//             {openSections.general && (
//               <ul className="space-y-3 pl-2 mt-2">
//                 <li><a href="/" className="hover:underline">Home</a></li>
//                 <li><a href="/#about" className="hover:underline">About Us</a></li>
//                 <li><a href="/" className="hover:underline">Services</a></li>
//                 <li>
//                  <a href="/contactus" className="hover:underline">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </div>

//           <div className="border-t border-gray-300 pt-6" data-aos="fade-up">
//             <h4 className="text-sky-700 font-semibold text-lg mb-3">Social Media</h4>
//             <div className="space-y-3">
//               <div className="flex items-center gap-3">
//                 <i className="fab fa-facebook-f text-sky-600 w-5"></i>
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                   Facebook
//                 </a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <i className="fab fa-instagram text-sky-600 w-5"></i>
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                   Instagram
//                 </a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <i className="fab fa-linkedin-in text-sky-600 w-5"></i>
//                 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="text-sm text-gray-600 border-t border-gray-300 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center px-6 max-w-[1440px] mx-auto pb-6">
//         <p>
//           © 2025 <span className="text-sky-700 font-semibold">Commnet</span>. All Rights Reserved.
//         </p>
//         <div className="flex gap-4 mt-3 md:mt-0">
//           <span>Privacy Policy</span>
//           <span>|</span>
//           <span>Terms & Conditions</span>
//         </div>
//       </div>
//     </footer>
//   );
// }
// import { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Footer() {
//   const [openSections, setOpenSections] = useState({
//     general: false,
//     solutions: false,
//   });

//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   const toggleSection = (key) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <footer
//       className="bg-sky-100 bg-cover bg-no-repeat bg-bottom font-['Lato'] text-gray-700 pt-16"
//       style={{ backgroundImage: "url('/assets/bg-7.jpg')" }}
//     >
//       <div className="max-w-[1440px] mx-auto px-6">
//         {/* Desktop View */}
//         <div className="hidden lg:grid grid-cols-[1fr_1.5fr] gap-12">
//           <div data-aos="fade-up">
//             <img src="/assets/logo.png" alt="Commnet Logo" className="w-[160px] mb-6" />
//             <p className="text-[17px] leading-relaxed max-w-md" data-aos="fade-up">
//               With more than 35 years of experience, 7 offices and over 1500 employees across the region - Commnet is a
//               leading end-to-end digital solutions provider...
//             </p>
//             <h4 className="text-xl font-bold mt-10 mb-3" data-aos="fade-up">Subscribe to our Newsletter</h4>
//             <div className="flex items-center border-b border-gray-400 pb-2 max-w-sm" data-aos="fade-up">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 outline-none bg-transparent text-sm"
//               />
//               <button className="bg-sky-600 text-white px-5 py-2 rounded ml-3 hover:bg-sky-700">Subscribe</button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
//             <div data-aos="fade-up">
//               <h4 className="text-sky-700 font-semibold text-lg mb-3">Useful Links</h4>
//               <ul className="space-y-3">
//                 <li><a href="/" className="hover:underline">Home</a></li>
//                 <li><a href="/#about" className="hover:underline">About Us</a></li>
//                 <li><a href="/" className="hover:underline">Services</a></li>
//                 <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
//               </ul>
//             </div>

//             <div data-aos="fade-up">
//               <h4 className="text-sky-700 font-semibold text-lg mb-3">Social Media</h4>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <i className="fab fa-facebook-f text-sky-600 w-5"></i>
//                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <i className="fab fa-instagram text-sky-600 w-5"></i>
//                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <i className="fab fa-linkedin-in text-sky-600 w-5"></i>
//                   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
//                 </div>
//               </div>
//             </div>

//             <div data-aos="fade-up">
//               <img src="/assets/sira-right.png" alt="SIRA Approved" className="w-full max-w-[220px] mt-2 rounded-md" />
//             </div>
//           </div>
//         </div>

//         {/* Mobile View */}
//         <div className="lg:hidden flex flex-col gap-6 text-sm mt-10">
//           <img src="/assets/logo.png" alt="Commnet Logo" className="w-[140px]" data-aos="fade-up" />
//           <img src="/assets/sira-right.png" alt="SIRA Approved" className="w-[110px] ml-[200px] mt-[-80px]" />
//           <p className="text-[15px] leading-relaxed" data-aos="fade-up">
//             With more than 25 years of experience, 7 offices and over 1500 employees across the region - Commnet is a
//             leading end-to-end digital solutions provider...
//           </p>

//           <div className="mt-4" data-aos="fade-up">
//             <h4 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h4>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border-b border-gray-400 outline-none bg-transparent text-sm py-2"
//             />
//             <button className="bg-sky-600 text-white px-6 py-2 mt-4 rounded-full">Subscribe</button>
//           </div>

//           <div className="border-t border-gray-300 pt-4" data-aos="fade-up">
//             <button onClick={() => toggleSection("general")} className="w-full flex justify-between items-center py-3">
//               <span className="text-sky-700 font-semibold">Useful Links</span>
//               <ChevronDown className={`w-5 h-5 transition-transform ${openSections.general ? "rotate-180" : ""}`} />
//             </button>
//             {openSections.general && (
//               <ul className="space-y-3 pl-2 mt-2">
//                 <li><a href="/" className="hover:underline">Home</a></li>
//                 <li><a href="/#about" className="hover:underline">About Us</a></li>
//                 <li><a href="/" className="hover:underline">Services</a></li>
//                 <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
//               </ul>
//             )}
//           </div>

//           <div className="border-t border-gray-300 pt-6" data-aos="fade-up">
//             <h4 className="text-sky-700 font-semibold text-lg mb-3">Social Media</h4>
//             <div className="space-y-3">
//               <div className="flex items-center gap-3">
//                 <i className="fab fa-facebook-f text-sky-600 w-5"></i>
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <i className="fab fa-instagram text-sky-600 w-5"></i>
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <i className="fab fa-linkedin-in text-sky-600 w-5"></i>
//                 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
//               </div>
//             </div>

//             {/* Mobile-specific image placement */}
          
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="text-sm text-gray-600 border-t border-gray-300 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center px-6 max-w-[1440px] mx-auto pb-6" data-aos="fade-up">
//         <p>
//           © 2025 <span className="text-sky-700 font-semibold">Commnet</span>. All Rights Reserved.
//         </p>
//         <div className="flex gap-2 mt-3 md:mt-0">
//           <a href="/PrivacyPolicy" className="hover:underline text-sky-700">Privacy Policy</a>
//           <span>|</span>
//           <a href="/TermsAndConditions" className="hover:underline text-sky-700">Terms & Conditions</a>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  const [openSections, setOpenSections] = useState({
    general: false,
    solutions: false,
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer
      className="bg-sky-100 bg-cover bg-no-repeat bg-bottom font-['Lato'] text-gray-700 pt-16 overflow-hidden"
      style={{ backgroundImage: "url('/assets/bg-7.jpg')" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 overflow-hidden">
        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div data-aos="fade-up">
            <img src="/assets/logo.png" alt="Commnet Logo" className="w-[160px] mb-6 max-w-full" />
            <p className="text-[17px] leading-relaxed max-w-md" data-aos="fade-up">
              With more than 25 years of experience, 7 offices across the region - Commnet is a
              leading end-to-end digital solutions provider...
            </p>
            <h4 className="text-xl font-bold mt-10 mb-3" data-aos="fade-up">Subscribe to our Newsletter</h4>
            <div className="flex flex-wrap items-center border-b border-gray-400 pb-2 max-w-sm" data-aos="fade-up">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 outline-none bg-transparent text-sm min-w-[150px]"
              />
              <button className="bg-sky-600 text-white px-5 py-2 rounded hover:bg-sky-700 mt-2 lg:mt-0">Subscribe</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div data-aos="fade-up">
              <h4 className="text-sky-700 font-semibold text-lg mb-3">Useful Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/aboutus" className="hover:underline">About Us</a></li>
                <li><a href="/" className="hover:underline">Services</a></li>
                <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h4 className="text-sky-700 font-semibold text-lg mb-3">Social Media</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fab fa-facebook-f text-sky-600 w-5"></i>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fab fa-instagram text-sky-600 w-5"></i>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fab fa-linkedin-in text-sky-600 w-5"></i>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>

            <div data-aos="fade-up">
              <img src="/assets/sira-right.png" alt="SIRA Approved" className="max-w-[180px] w-full mt-2 rounded-md" />
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col gap-6 text-sm mt-10">
          <img src="/assets/logo.png" alt="Commnet Logo" className="w-[140px] max-w-full" data-aos="fade-up" />
          <p className="text-[15px] leading-relaxed" data-aos="fade-up">
            With more than 35 years of experience, 7 offices and over 1500 employees across the region - Commnet is a
            leading end-to-end digital solutions provider...
          </p>

          <div className="mt-4" data-aos="fade-up">
            <h4 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-gray-400 outline-none bg-transparent text-sm py-2"
            />
            <button className="bg-sky-600 text-white px-6 py-2 mt-4 rounded-full">Subscribe</button>
          </div>

          <div className="border-t border-gray-300 pt-4" data-aos="fade-up">
            <button onClick={() => toggleSection("general")} className="w-full flex justify-between items-center py-3">
              <span className="text-sky-700 font-semibold">Useful Links</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openSections.general ? "rotate-180" : ""}`} />
            </button>
            {openSections.general && (
              <ul className="space-y-3 pl-2 mt-2">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/aboutus" className="hover:underline">About Us</a></li>
                <li><a href="/" className="hover:underline">Services</a></li>
                <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
              </ul>
            )}
          </div>

          <div className="border-t border-gray-300 pt-6" data-aos="fade-up">
            <h4 className="text-sky-700 font-semibold text-lg mb-3">Social Media</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="fab fa-facebook-f text-sky-600 w-5"></i>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-instagram text-sky-600 w-5"></i>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-linkedin-in text-sky-600 w-5"></i>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </div>
            </div>
            <div className="flex justify-center mt-6 " >
              <img src="/assets/sira-right.png" alt="SIRA Approved" className="w-[110px] max-w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-sm text-gray-600 border-t border-gray-300 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center px-6 max-w-[1440px] mx-auto pb-6">
        <p>
          © 2025 <span className="text-sky-700 font-semibold">Commnet</span>. All Rights Reserved.
        </p>
        <div className="flex gap-2 mt-3 md:mt-0 mr-5">
          <a href="/PrivacyPolicy" className="hover:underline text-sky-700">Privacy Policy</a>
          <span>|</span>
          <a href="/TermsAndConditions" className="hover:underline text-sky-700">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
