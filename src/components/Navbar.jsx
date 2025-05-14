
// // import { useState, useEffect } from "react";
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
// //   ChevronDown,
// // } from "lucide-react";

// // export default function Navbar() {
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10);
// //       if (showDropdown) {
// //         setShowDropdown(false);
// //       }
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [showDropdown]);

// //   const services = [
// //     { icon: <Server />, label: "Enterprise Systems Group", link: "/enterprise-systems-group" },
// //     { icon: <Shield />, label: "Information Security", link: "/informationsecurity" },
// //     { icon: <Globe />, label: "IoT Services", link: "/iotservices" },
// //     { icon: <Cpu />, label: "Power Solutions", link: "/powersolutions" },
// //     { icon: <MonitorSmartphone />, label: "AV Solutions", link: "/avsolutions" },
// //     { icon: <Code2 />, label: "Professional IT Services", link: "/professionalitservices" },
// //     { icon: <Server />, label: "Infrastructure Systems Group", link: "/infrastructuresystemgroup" },
// //     { icon: <Code2 />, label: "Website Development", link: "/websitedevelopment" },
// //     { icon: <Code2 />, label: "Software Development", link: "/softwaredevelopment" },
// //     { icon: <Lock />, label: "Security Systems", link: "/securitysystems" },
// //     { icon: <Shield />, label: "Cyber Security Services", link: "/cybersecurityservices" },
// //   ];

// //   return (
// //     <div className="relative font-['Lato']">
// //       {/* Navbar */}
// //       <nav
// //         data-aos="fade-down"
// //         className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 animate-fadeDown ${
// //           scrolled
// //             ? "bg-white/80 backdrop-blur-md shadow-md text-black"
// //             : "bg-transparent text-white"
// //         }`}
// //       >
// //         <img src="/assets/logo-newone.png" alt="COMMNET Logo" className="h-12 w-auto" />

// //         {/* Desktop Menu */}
// //         <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
// //           <li><a href="#">Home</a></li>
// //           <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
// //           <li
// //             onClick={() => setShowDropdown(!showDropdown)}
// //             className="relative cursor-pointer"
// //           >
// //             <span>Services</span>
// //           </li>
// //           <li>
// //             <a
// //               href="https://wa.me/+97142955299"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="hover:underline"
// //             >
// //               Contact Us
// //             </a>
// //           </li>
// //         </ul>

// //         {/* Desktop Buttons */}
// //         <div className="hidden lg:flex items-center space-x-4">
// //           <a
// //             href="https://wa.me/914442612928"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className={`px-4 py-2 rounded-full text-sm font-semibold ${
// //               scrolled ? "bg-black text-white" : "bg-white/10 backdrop-blur-md text-white"
// //             }`}
// //           >
// //             Contact Us
// //           </a>
// //           <div
// //             className={`w-9 h-9 flex items-center justify-center border rounded-full ${
// //               scrolled ? "border-black text-black" : "border-white text-white"
// //             }`}
// //           >
// //             <User className="w-5 h-5" />
// //           </div>
// //         </div>

// //         {/* Mobile Icons */}
// //         <div className="lg:hidden flex space-x-2">
// //           {/* <div className={`w-9 h-9 flex items-center justify-center border rounded-full ${
// //             scrolled ? "border-black text-black" : "border-white text-white"
// //           }`}>
// //             <Phone className="w-5 h-5" />
// //           </div>
// //           <div className={`w-9 h-9 flex items-center justify-center border rounded-full ${
// //             scrolled ? "border-black text-black" : "border-white text-white"
// //           }`}>
// //             <User className="w-5 h-5" />
// //           </div> */}
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

// //       {/* Desktop Services Dropdown */}
// //       {showDropdown && (
// //         <div className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-sky-600 text-white grid-cols-12 gap-6" data-aos="fade-down">
// //           <div className="col-span-3 border-r pr-6">
// //             <h2 className="text-2xl font-bold mb-4">Solutions</h2>
// //             <p className="text-sm text-white/90">
// //               We offer the region's broadest portfolio of solutions, including
// //               industry-leading technology, security and infrastructure solutions.
// //             </p>
// //             <button className="mt-6 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
// //               Read More
// //             </button>
// //           </div>
// //           <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
// //             {services.map((service, index) => (
// //               <a key={index} href={service.link} className="flex items-center space-x-3 hover:underline">
// //                 <div>{service.icon}</div>
// //                 <div className="text-sm font-medium">{service.label}</div>
// //               </a>
// //             ))}
// //           </div>
// //           <div className="col-span-3">
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

// //       {/* Mobile Menu */}
// //       {mobileMenuOpen && (
// //         <div className="fixed top-0 left-0 w-full h-screen z-50 bg-sky-700 text-white p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
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
// //             <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
// //             <li className="cursor-pointer" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
// //               <div className="flex items-center justify-between">
// //                 <span>Services</span>
// //                 <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
// //               </div>
// //             </li>
// //             {mobileServicesOpen && (
// //               <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
// //                 {services.map((service, index) => (
// //                   <li key={index}>
// //                     <a href={service.link} className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
// //                       <span>{service.icon}</span>
// //                       <span>{service.label}</span>
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //             <li>
// //               <a
// //                 href="https://wa.me/914442612928"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 Contact Us
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       )}

// //       {/* ✅ Floating WhatsApp Button */}
// //       <a
// //         href="https://wa.me/914442612928?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="fixed z-50 right-6 bottom-6 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg transition"
// //       >
// //         <img src="/assets/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
// //       </a>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
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
//   ChevronDown,
// } from "lucide-react";

// export default function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//       if (showDropdown) {
//         setShowDropdown(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [showDropdown]);

//   const services = [
//     { icon: <Server />, label: "Enterprise Systems Group", link: "/enterprise-systems-group" },
//     { icon: <Shield />, label: "Information Security", link: "/informationsecurity" },
//     { icon: <Globe />, label: "IoT Services", link: "/iotservices" },
//     { icon: <Cpu />, label: "Power Solutions", link: "/powersolutions" },
//     { icon: <MonitorSmartphone />, label: "AV Solutions", link: "/avsolutions" },
//     { icon: <Code2 />, label: "Professional IT Services", link: "/professionalitservices" },
//     { icon: <Server />, label: "Infrastructure Systems Group", link: "/infrastructuresystemgroup" },
//     { icon: <Code2 />, label: "Website Development", link: "/websitedevelopment" },
//     { icon: <Code2 />, label: "Software Development", link: "/softwaredevelopment" },
//     { icon: <Lock />, label: "Security Systems", link: "/securitysystems" },
//     { icon: <Shield />, label: "Cyber Security Services", link: "/cybersecurityservices" },
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
//         <img src="/assets/logo-newone.png" alt="COMMNET Logo" className="h-12 w-auto" />

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
//           <li><a href="#">Home</a></li>
//           <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
//           <li
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="relative cursor-pointer"
//           >
//             <span>Services</span>
//           </li>
//           <li>
//             <Link to="/contactus" className="hover:underline">
//               Contact Us
//             </Link>
//           </li>
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <Link
//             to="/contactus"
//             className={`px-4 py-2 rounded-full text-sm font-semibold ${
//               scrolled ? "bg-black text-white" : "bg-white/10 backdrop-blur-md text-white"
//             }`}
//           >
//             Contact Us
//           </Link>
//           <div
//             className={`w-9 h-9 flex items-center justify-center border rounded-full ${
//               scrolled ? "border-black text-black" : "border-white text-white"
//             }`}
//           >
//             <User className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Mobile Icons */}
//         <div className="lg:hidden flex space-x-2">
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

//       {/* Desktop Services Dropdown */}
//       {showDropdown && (
//         <div className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-sky-600 text-white grid-cols-12 gap-6" data-aos="fade-down">
//           <div className="col-span-3 border-r pr-6">
//             <h2 className="text-2xl font-bold mb-4">Solutions</h2>
//             <p className="text-sm text-white/90">
//               We offer the region's broadest portfolio of solutions, including
//               industry-leading technology, security and infrastructure solutions.
//             </p>
//             <button className="mt-6 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
//               Read More
//             </button>
//           </div>
//           <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
//             {services.map((service, index) => (
//               <a key={index} href={service.link} className="flex items-center space-x-3 hover:underline">
//                 <div>{service.icon}</div>
//                 <div className="text-sm font-medium">{service.label}</div>
//               </a>
//             ))}
//           </div>
//           <div className="col-span-3">
//             <h2 className="text-xl font-bold mb-4">Latest from COMMNET</h2>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <img src="/assets/press-4.jpg" className="w-12 h-12 object-cover rounded-md" />
//                 <div>
//                   <p className="text-sm font-semibold">Technology Solutions</p>
//                   <p className="text-xs text-white/80">Bring your digital agenda to reality.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <img src="/assets/press-3.jpg" className="w-12 h-12 object-cover rounded-md" />
//                 <div>
//                   <p className="text-sm font-semibold">Security Solutions</p>
//                   <p className="text-xs text-white/80">Next-Gen Cyber Defense For A Safer Digital Tomorrow.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-screen z-50 bg-sky-700 text-white p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
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
//             <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
//             <li className="cursor-pointer" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
//               <div className="flex items-center justify-between">
//                 <span>Services</span>
//                 <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
//               </div>
//             </li>
//             {mobileServicesOpen && (
//               <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
//                 {services.map((service, index) => (
//                   <li key={index}>
//                     <a href={service.link} className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
//                       <span>{service.icon}</span>
//                       <span>{service.label}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <li>
//               <Link to="/contactus" onClick={() => setMobileMenuOpen(false)}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Optional: Floating WhatsApp Button (can be removed or modified) */}
//       <Link
//         to="/contactus"
//         className="fixed z-50 right-6 bottom-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition"
//       >
//         <img src="/assets/whatsapp-icon.png" alt="Contact Us" className="w-6 h-6" />
//       </Link>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll handler for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (showDropdown) setShowDropdown(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showDropdown]);

  // Scroll to About section logic
  const handleAboutClick = () => {
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

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
        <Link to="/">
          <img src="/assets/logo-newone.png" alt="COMMNET Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/aboutus" className="hover:underline">
              About Us
            </Link>
          </li>
          <li
            onClick={() => setShowDropdown(!showDropdown)}
            className="relative cursor-pointer"
          >
            <span>Services</span>
          </li>
          <li>
            <Link to="/contactus" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* <Link
            to="/contactus"
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              scrolled ? "bg-black text-white" : "bg-white/10 backdrop-blur-md text-white"
            }`}
          >
            Contact Us
          </Link> */}
          {/* <div
            className={`w-9 h-9 flex items-center justify-center border rounded-full ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <User className="w-5 h-5" />
          </div> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex space-x-2">
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

      {/* Services Dropdown */}
      {showDropdown && (
        <div className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-sky-600 text-white grid-cols-12 gap-6" data-aos="fade-down">
          <div className="col-span-3 border-r pr-6">
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <p className="text-sm text-white/90">
              We offer the region's broadest portfolio of solutions, including
              industry-leading technology, security and infrastructure solutions.
            </p>
            <button className="mt-6 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
              Read More
            </button>
          </div>
          <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="flex items-center space-x-3 hover:underline">
                <div>{service.icon}</div>
                <div className="text-sm font-medium">{service.label}</div>
              </Link>
            ))}
          </div>
          <div className="col-span-3">
            <h2 className="text-xl font-bold mb-4">Latest from COMMNET</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <img src="/assets/press-4.jpg" className="w-12 h-12 object-cover rounded-md" />
                <div>
                  <p className="text-sm font-semibold">Technology Solutions</p>
                  <p className="text-xs text-white/80">Bring your digital agenda to reality.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <img src="/assets/press-3.jpg" className="w-12 h-12 object-cover rounded-md" />
                <div>
                  <p className="text-sm font-semibold">Security Solutions</p>
                  <p className="text-xs text-white/80">Next-Gen Cyber Defense For A Safer Digital Tomorrow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 bg-sky-700 text-white p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
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
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><button onClick={() => { setMobileMenuOpen(false); handleAboutClick(); }}>About Us</button></li>
            <li className="cursor-pointer" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
              <div className="flex items-center justify-between">
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </div>
            </li>
            {mobileServicesOpen && (
              <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to={service.link} className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                      <span>{service.icon}</span>
                      <span>{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <li><Link to="/contactus" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}

      {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/914442612928?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed z-50 right-6 bottom-6 transition"
>
  <img src="/assets/watsapp-1.png" alt="WhatsApp" className="w-10 h-10" />
</a>
</div>
  );
}
