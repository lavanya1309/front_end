
// // import { useState, useEffect } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// // import {
// //   User,
// //   Server,
// //   Shield,
// //   Code2,
// //   MonitorSmartphone,
// //   Lock,
// //   Globe,
// //   Cpu,
// //   Menu,
// //   Phone,
// //   X,
// // } from "lucide-react";

// // export default function Navbar() {
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     AOS.init({ duration: 600, once: true });

// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const services = [
// //     { icon: <Server />, label: "Enterprise Systems Group" },
// //     { icon: <Shield />, label: "Information Security" },
// //     { icon: <Globe />, label: "IoT Services" },
// //     { icon: <Cpu />, label: "Power Solutions" },
// //     { icon: <MonitorSmartphone />, label: "AV Solutions" },
// //     { icon: <Code2 />, label: "Professional IT Services" },
// //     { icon: <Server />, label: "Infrastructure Systems Group" },
// //     { icon: <Code2 />, label: "Website Development" },
// //     { icon: <Code2 />, label: "Software Development" },
// //     { icon: <Lock />, label: "Security Systems" },
// //     { icon: <Shield />, label: "Cyber Security Services" },
// //   ];

// //   return (
// //     <div className="relative font-['Lato'] " data-aos="fade-down">
// //       {/* Navbar */}
// //       <nav
// //         className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 animate-fadeDown ${
// //           scrolled
// //             ? "bg-white/80 backdrop-blur-md shadow-md text-black"
// //             : "bg-transparent text-white"
// //         }`}
// //       >
// //         <img src="/assets/logo.png" alt="COMMNET Logo" className="h-12 w-auto" />

// //         {/* Desktop Links */}
// //         <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
// //           <li><a href="#">Home</a></li>
// //           <li><a href="#">About Us</a></li>
// //           <li
// //             onMouseEnter={() => setShowDropdown(true)}
// //             onMouseLeave={() => setShowDropdown(false)}
// //             className="relative"
// //           >
// //             <a href="#">Services</a>
// //           </li>
// //           <li><a href="#">Contact Us</a></li>
// //         </ul>

// //         {/* Right Side */}
// //         <div className="hidden lg:flex items-center space-x-4">
// //           <button className={`px-4 py-2 rounded-full text-sm font-semibold ${
// //             scrolled ? "bg-black text-white" : "bg-white/10 backdrop-blur-md text-white"
// //           }`}>
// //             Contact Us
// //           </button>
// //           <div className={`w-9 h-9 flex items-center justify-center border rounded-full ${
// //             scrolled ? "border-black text-black" : "border-white text-white"
// //           }`}>
// //             <User className="w-5 h-5" />
// //           </div>
// //         </div>

// //         {/* Mobile Menu Icon */}
// //         <div className="lg:hidden flex space-x-2">
// //           <div className={`w-9 h-9 flex items-center justify-center border rounded-full ${
// //             scrolled ? "border-black text-black" : "border-white text-white"
// //           }`}>
// //             <Phone className="w-5 h-5" />
// //           </div>
// //           <div className={`w-9 h-9 flex items-center justify-center border rounded-full ${
// //             scrolled ? "border-black text-black" : "border-white text-white"
// //           }`}>
// //             <User className="w-5 h-5" />
// //           </div>
// //           <div
// //             onClick={() => setMobileMenuOpen(true)}
// //             className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
// //               scrolled ? "border-black text-black" : "border-white text-white"
// //             }`}
// //           >
// //             <Menu className="w-5 h-5" />
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Dropdown for desktop */}
// //       {showDropdown && (
// //         <div
// //           onMouseEnter={() => setShowDropdown(true)}
// //           onMouseLeave={() => setShowDropdown(false)}
// //           className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-sky-600 text-white grid-cols-12 gap-6"
// //           data-aos="fade-down"
// //         >
// //           {/* Left */}
// //           <div className="col-span-3 border-r pr-6" data-aos="fade-down" data-aos-delay="100">
// //             <h2 className="text-2xl font-bold mb-4">Solutions</h2>
// //             <p className="text-sm leading-relaxed text-white/90">
// //               We offer the region's broadest portfolio of solutions, including industry-leading technology,
// //               security and infrastructure solutions.
// //             </p>
// //             <button className="mt-6 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">Read More</button>
// //           </div>

// //           {/* Middle */}
// //           <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r" data-aos="fade-down" data-aos-delay="200">
// //             {services.map((service, index) => (
// //               <div key={index} className="flex items-center space-x-3">
// //                 <div>{service.icon}</div>
// //                 <div className="text-sm font-medium">{service.label}</div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Right */}
// //           <div className="col-span-3" data-aos="fade-down" data-aos-delay="300">
// //             <h2 className="text-xl font-bold mb-4">Latest from COMMNET</h2>
// //             <div className="space-y-4">
// //               <div className="flex items-start space-x-3">
// //                 <img src="/assets/press-4.jpg" className="w-12 h-12 object-cover rounded-md" />
// //                 <div>
// //                   <p className="text-sm font-semibold">Technology Solutions</p>
// //                   <p className="text-xs text-white/80">Bring your digital agenda to reality.</p>
// //                 </div>
// //               </div>
// //               <div className="flex items-start space-x-3">
// //                 <img src="/assets/press-3.jpg" className="w-12 h-12 object-cover rounded-md" />
// //                 <div>
// //                   <p className="text-sm font-semibold">Security Solutions</p>
// //                   <p className="text-xs text-white/80">Next-Gen Cyber Defense For A Safer Digital Tomorrow.</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Mobile Sidebar */}
// //       {mobileMenuOpen && (
// //         <div className="fixed top-0 left-0 w-full h-screen z-50 bg-sky-700 text-white p-6 transition-all duration-300 animate-fadeDown">
// //           <div className="flex justify-between items-center mb-6">
// //             <img src="/assets/logo.png" alt="COMMNET" className="h-10" />
// //             <button
// //               onClick={() => setMobileMenuOpen(false)}
// //               className="w-9 h-9 border border-white rounded-full flex items-center justify-center"
// //             >
// //               <X className="w-5 h-5" />
// //             </button>
// //           </div>

// //           <ul className="space-y-6 text-lg font-semibold">
// //             <li>About Us</li>
// //             <li>Solutions</li>
// //             <li>Resources</li>
// //             <li>Careers</li>
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import {
//   User,
//   Server,
//   Shield,
//   Code2,
//   MonitorSmartphone,
//   Lock,
//   Globe,
//   Cpu,
//   Menu,
//   Phone,
//   X,
// } from "lucide-react";

// export default function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     // AOS.init({ duration: 600, once: true });

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const services = [
//     { icon: <Server />, label: "Enterprise Systems Group" },
//     { icon: <Shield />, label: "Information Security" },
//     { icon: <Globe />, label: "IoT Services" },
//     { icon: <Cpu />, label: "Power Solutions" },
//     { icon: <MonitorSmartphone />, label: "AV Solutions" },
//     { icon: <Code2 />, label: "Professional IT Services" },
//     { icon: <Server />, label: "Infrastructure Systems Group" },
//     { icon: <Code2 />, label: "Website Development" },
//     { icon: <Code2 />, label: "Software Development" },
//     { icon: <Lock />, label: "Security Systems" },
//     { icon: <Shield />, label: "Cyber Security Services" },
//   ];

//   return (
//     <div className="relative font-['Lato']">
//       {/* Navbar */}
//       <nav
//         data-aos="fade-down"
//         className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 animate-fadeDown ${
//           scrolled
//             ? "bg-white/80 backdrop-blur-md shadow-md text-black"
//             : "bg-transparent text-white"
//         }`}
//       >
//         <img
//           src="/assets/logo.png"
//           alt="COMMNET Logo"
//           className="h-12 w-auto"
//         />

//         {/* Desktop Links */}
//         <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About Us</a>
//           </li>
//           <li
//             onMouseEnter={() => setShowDropdown(true)}
//             onMouseLeave={() => setShowDropdown(false)}
//             className="relative"
//           >
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <a href="#">Contact Us</a>
//           </li>
//         </ul>

//         {/* Right Side */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <button
//             className={`px-4 py-2 rounded-full text-sm font-semibold ${
//               scrolled
//                 ? "bg-black text-white"
//                 : "bg-white/10 backdrop-blur-md text-white"
//             }`}
//           >
//             Contact Us
//           </button>
//           <div
//             className={`w-9 h-9 flex items-center justify-center border rounded-full ${
//               scrolled ? "border-black text-black" : "border-white text-white"
//             }`}
//           >
//             <User className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="lg:hidden flex space-x-2">
//           <div
//             className={`w-9 h-9 flex items-center justify-center border rounded-full ${
//               scrolled ? "border-black text-black" : "border-white text-white"
//             }`}
//           >
//             <Phone className="w-5 h-5" />
//           </div>
//           <div
//             className={`w-9 h-9 flex items-center justify-center border rounded-full ${
//               scrolled ? "border-black text-black" : "border-white text-white"
//             }`}
//           >
//             <User className="w-5 h-5" />
//           </div>
//           <div
//             onClick={() => setMobileMenuOpen(true)}
//             className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
//               scrolled ? "border-black text-black" : "border-white text-white"
//             }`}
//           >
//             <Menu className="w-5 h-5" />
//           </div>
//         </div>
//       </nav>

//       {/* Dropdown for desktop */}
//       {showDropdown && (
//         <div
//           onMouseEnter={() => setShowDropdown(true)}
//           onMouseLeave={() => setShowDropdown(false)}
//           className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-sky-600 text-white grid-cols-12 gap-6"
//           data-aos="fade-down"
//         >
//           {/* Left */}
//           <div
//             className="col-span-3 border-r pr-6"
//             data-aos="fade-down"
//             data-aos-delay="100"
//           >
//             <h2 className="text-2xl font-bold mb-4">Solutions</h2>
//             <p className="text-sm leading-relaxed text-white/90">
//               We offer the region's broadest portfolio of solutions, including
//               industry-leading technology, security and infrastructure
//               solutions.
//             </p>
//             <button className="mt-6 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
//               Read More
//             </button>
//           </div>

//           {/* Middle */}
//           <div
//             className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r"
//             data-aos="fade-down"
//             data-aos-delay="200"
//           >
//             {services.map((service, index) => (
//               <div key={index} className="flex items-center space-x-3">
//                 <div>{service.icon}</div>
//                 <div className="text-sm font-medium">{service.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Right */}
//           <div className="col-span-3" data-aos="fade-down" data-aos-delay="300">
//             <h2 className="text-xl font-bold mb-4">Latest from COMMNET</h2>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <img
//                   src="/assets/press-4.jpg"
//                   className="w-12 h-12 object-cover rounded-md"
//                 />
//                 <div>
//                   <p className="text-sm font-semibold">Technology Solutions</p>
//                   <p className="text-xs text-white/80">
//                     Bring your digital agenda to reality.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <img
//                   src="/assets/press-3.jpg"
//                   className="w-12 h-12 object-cover rounded-md"
//                 />
//                 <div>
//                   <p className="text-sm font-semibold">Security Solutions</p>
//                   <p className="text-xs text-white/80">
//                     Next-Gen Cyber Defense For A Safer Digital Tomorrow.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Mobile Sidebar */}
//       {mobileMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-screen z-50 bg-sky-700 text-white p-6 transition-all duration-300 animate-fadeDown">
//           <div className="flex justify-between items-center mb-6">
//             <img src="/assets/logo.png" alt="COMMNET" className="h-10" />
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="w-9 h-9 border border-white rounded-full flex items-center justify-center"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           <ul className="space-y-6 text-lg font-semibold">
//             <li>About Us</li>
//             <li>Solutions</li>
//             <li>Resources</li>
//             <li>Careers</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import {
  User,
  Server,
  Shield,
  Code2,
  MonitorSmartphone,
  Lock,
  Globe,
  Cpu,
  Menu,
  Phone,
  X,
} from "lucide-react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    if (showDropdown) {
      setShowDropdown(false); // Auto-close Services dropdown
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [showDropdown]);


  const services = [
    { icon: <Server />, label: "Enterprise Systems Group", link: "/enterprise-systems-group" },
    { icon: <Shield />, label: "Information Security", link: "/informationsecurity" },
    { icon: <Globe />, label: "IoT Services", link: "/iotservices" },
    { icon: <Cpu />, label: "Power Solutions", link: "/powersolutions" },
    { icon: <MonitorSmartphone />, label: "AV Solutions", link: "/avsolutions" },
    { icon: <Code2 />, label: "Professional IT Services", link: "/professionalitservices" },
    { icon: <Server />, label: "Infrastructure Systems Group", link: "/infrastructuresystemgroup" },
    { icon: <Code2 />, label: "Website Development", link: "/websitedevelopment" },
    { icon: <Code2 />, label: "Software Development", link: "/softwaredevelopment" },
    { icon: <Lock />, label: "Security Systems", link: "/securitysystems" },
    { icon: <Shield />, label: "Cyber Security Services", link: "/cybersecurityservices" },
  ];

  return (
    <div className="relative font-['Lato']">
      <nav
        data-aos="fade-down"
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 animate-fadeDown ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        <img
          src="/assets/logo.png"
          alt="COMMNET Logo"
          className="h-12 w-auto"
        />

        <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li
            onClick={() => setShowDropdown(!showDropdown)}
            className="relative cursor-pointer"
          >
            <span>Services</span>
          </li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              scrolled
                ? "bg-black text-white"
                : "bg-white/10 backdrop-blur-md text-white"
            }`}
          >
            Contact Us
          </button>
          <div
            className={`w-9 h-9 flex items-center justify-center border rounded-full ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <User className="w-5 h-5" />
          </div>
        </div>

        <div className="lg:hidden flex space-x-2">
          <div
            className={`w-9 h-9 flex items-center justify-center border rounded-full ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <Phone className="w-5 h-5" />
          </div>
          <div
            className={`w-9 h-9 flex items-center justify-center border rounded-full ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <User className="w-5 h-5" />
          </div>
          <div
            onClick={() => setMobileMenuOpen(true)}
            className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {showDropdown && (
        <div
          className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-sky-600 text-white grid-cols-12 gap-6"
          data-aos="fade-down"
        >
          <div className="col-span-3 border-r pr-6" data-aos="fade-down" data-aos-delay="100">
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <p className="text-sm leading-relaxed text-white/90">
              We offer the region's broadest portfolio of solutions, including
              industry-leading technology, security and infrastructure
              solutions.
            </p>
            <button className="mt-6 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
              Read More
            </button>
          </div>

          <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r" data-aos="fade-down" data-aos-delay="200">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="flex items-center space-x-3 hover:underline"
              >
                <div>{service.icon}</div>
                <div className="text-sm font-medium">{service.label}</div>
              </a>
            ))}
          </div>

          <div className="col-span-3" data-aos="fade-down" data-aos-delay="300">
            <h2 className="text-xl font-bold mb-4">Latest from COMMNET</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <img
                  src="/assets/press-4.jpg"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm font-semibold">Technology Solutions</p>
                  <p className="text-xs text-white/80">
                    Bring your digital agenda to reality.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <img
                  src="/assets/press-3.jpg"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm font-semibold">Security Solutions</p>
                  <p className="text-xs text-white/80">
                    Next-Gen Cyber Defense For A Safer Digital Tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 bg-sky-700 text-white p-6 transition-all duration-300 animate-fadeDown">
          <div className="flex justify-between items-center mb-6">
            <img src="/assets/logo.png" alt="COMMNET" className="h-10" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 border border-white rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul className="space-y-6 text-lg font-semibold">
            <li>About Us</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Careers</li>
          </ul>
        </div>
      )}
    </div>
  );
}
