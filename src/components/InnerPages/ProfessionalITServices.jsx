
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import { FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";

// import HeroBg from "/assets/press-5.jpg";
// import OverviewImg from "/assets/press-4.jpg";

// const TechnologyData = [
//   {
//     id: "01",
//     image: "/assets/sample-1.jpg",
//     title: "Enterprise Systems Group",
//     description:
//       "Delivering agility and innovation through optimized enterprise IT infrastructure.",
//     link: "/enterprise-systems-group",
//   },
//   {
//     id: "02",
//     image: "/assets/swiper/cyber-security.jpg",
//     title: "Information Security",
//     description:
//       "Protect your business with proactive strategies against cyber threats and data breaches.",
//     link: "/informationsecurity",
//   },
//   {
//     id: "03",
//     image: "/assets/swiper/Iot.jpg",
//     title: "IoT Services",
//     description:
//       "Integrate smart IoT solutions to drive automation and intelligent decision-making.",
//     link: "/iotservices",
//   },
//   {
//     id: "04",
//     image: "/assets/swiper/power.jpg",
//     title: "Power Solutions",
//     description:
//       "Reliable and efficient power backup and distribution systems for critical operations.",
//     link: "/powersolutions",
//   },
//   {
//     id: "05",
//     image: "/assets/swiper/av.jpg",
//     title: "AV Solutions",
//     description:
//       "Engaging audio-visual systems for modern conference, training, and collaboration needs.",
//     link: "/avsolutions",
//   },
//   {
//     id: "06",
//     image: "/assets/swiper/it.jpg",
//     title: "Professional IT Services",
//     description:
//       "Expert consulting, deployment, and managed services to support your IT landscape.",
//     link: "/professionalitservices",
//   },
//   {
//     id: "07",
//     image: "/assets/swiper/infra-2.jpg",
//     title: "Infrastructure Systems Group",
//     description:
//       "Build and scale IT infrastructure aligned with your enterprise growth strategy.",
//     link: "/infrastructuresystemgroup",
//   },
//   {
//     id: "08",
//     image: "/assets/swiper/program.jpg",
//     title: "Website Development",
//     description:
//       "Crafting responsive, secure, and scalable websites tailored to your business goals.",
//     link: "/websitedevelopment",
//   },
//   {
//     id: "09",
//     image: "/assets/swiper/software.jpg",
//     title: "Software Development",
//     description:
//       "End-to-end software solutions from concept to deployment and support.",
//     link: "/softwaredevelopment",
//   },
//   {
//     id: "10",
//     image: "/assets/swiper/security.jpg",
//     title: "Security Systems",
//     description:
//       "Comprehensive physical and digital security solutions for businesses of all sizes.",
//     link: "/securitysystems",
//   },
//   {
//     id: "11",
//     image: "/assets/swiper/cyber.jpg",
//     title: "Cyber Security Services",
//     description:
//       "Advanced protection strategies to secure networks, endpoints, and data assets.",
//     link: "/cybersecurityservices",
//   },
// ];

// export default function EnterpriseSystemsGroup() {
//   const NavigationRef = useRef(null);

//   return (
//     <div className="w-full font-sans text-black">
//       {/* Hero Section */}
//       <section
//         className="w-full min-h-[90vh] bg-cover bg-center relative flex items-start justify-start"
//         style={{ backgroundImage: `url(${HeroBg})` }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div
//           className="relative z-10 px-4 md:px-10 pt-[250px] text-white w-full max-w-7xl"
//           data-aos="fade-up"
//         >
//           <div className="space-y-4 max-w-xl">
//             <p className="inline-block border border-white px-4 py-1 rounded-full text-sm font-medium">
//               Solutions
//             </p>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               Professional Service Group
//             </h1>
//             <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-full text-sm">
//               Get in touch
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section
//         className="w-full py-16 px-4 md:px-6 bg-cover bg-center relative"
//         style={{ backgroundImage: "url('/assets/bg-8.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-white/80"></div>
//         <div
//           className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
//           data-aos="fade-up"
//         >
//           {/* Left: Text */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Systems</h2>
//             <p className="text-gray-600 mb-4">
//              Our Staffing division places top technology professionals in contract, contract-to-hire, direct hire and SOW / Statement of Work based positions with industry leaders and innovative start-ups that are developing the next generation of technology solutions. Commnet’s flexible cost-effective delivery models feature dedicated account teams, skill-based recruiters and proven systems and processes. Our Consultant care teams are unique in the industry and ensure a satisfactory assignment for both Consultant and Client.

 
//             </p>
//             <p className="text-gray-600 mb-4">
//               Our mission is to be the premier global supplier to the Electronic Security Industry by responding on time,
//               to our customer’s requirements with the most innovative and cost effective products of the highest quality.
//             </p>
           

//             <h3 className="text-lg font-semibold mb-4">Types of Security</h3>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-gray-800 text-base md:text-lg">
//               {[
//                 "Long/Short term IT/ITES",
//                 "Project Staffing",
//                 "Contract Hire Staffing",
//                 "Rebadging",
                
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <FaCheckCircle className="text-blue-500 mt-1" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right: Image */}
//           <div className="w-full">
//             <img
//               src={OverviewImg}
//               alt="Security Overview"
//               className="rounded-2xl shadow-lg w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Swiper Section */}
//       <div className="relative px-4 py-16 bg-gray-100">
//         <Swiper
//           effect="coverflow"
//           coverflowEffect={{
//             scale: 0.8,
//             slideShadows: false,
//             depth: 100,
//             modifier: 1,
//           }}
//           spaceBetween={10}
//           breakpoints={{
//             320: { slidesPerView: 1.1 },
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 2.5 },
//             1280: { slidesPerView: 3 },
//           }}
//           modules={[Navigation, EffectCoverflow, Autoplay]}
//           centeredSlides={true}
//           loop={true}
//           autoplay={{
//             delay: 3500,
//             disableOnInteraction: false,
//           }}
//           onSwiper={(swiper) => {
//             NavigationRef.current = swiper;
//           }}
//         >
//           {TechnologyData.map((technology) => (
//             <SwiperSlide key={technology.id}>
//               <div
//                 className="bg-neutral-50 p-10 rounded-4xl text-white flex flex-col justify-end items-center h-[500px] bg-no-repeat bg-center bg-cover"
//                 style={{ backgroundImage: `url(${technology.image})` }}
//               >
//                 <div className="h-[100px]"></div>
//                 <h1 className="text-4xl font-semibold mb-4">
//                   {technology.title}
//                 </h1>
//                 <p className="text-center text-base font-medium mb-8">
//                   {technology.description}
//                 </p>
//                 <a
//                   href={technology.link}
//                   className="bg-blue-600 px-5 py-2 rounded-xl"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <button
//           className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 text-black"
//           onClick={() => NavigationRef.current?.slidePrev()}
//         >
//           <FaChevronLeft size={20} />
//         </button>

//         <button
//           className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 text-black"
//           onClick={() => NavigationRef.current?.slideNext()}
//         >
//           <FaChevronRight size={20} />
//         </button>
//       </div>
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when route changes
useEffect(() => {
  const servicePaths = services.map((s) => s.link);
  if (servicePaths.includes(location.pathname)) {
    setShowDropdown(false); // closes after route change
  }
}, [location.pathname]);

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
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        <Link to="/">
          <img src="/assets/logo-newone.png" alt="COMMNET Logo" className="h-12 w-auto" />
        </Link>

        <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
          <li onClick={() => setShowDropdown(!showDropdown)} className="relative cursor-pointer">
            <span>Services</span>
          </li>
          <li><Link to="/contactus" className="hover:underline">Contact Us</Link></li>
        </ul>

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

      {showDropdown && (
        <div className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-sky-600 text-white grid-cols-12 gap-6" data-aos="fade-down">
          <div className="col-span-3 border-r pr-6">
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <p className="text-sm text-white/90">
              We offer the region's broadest portfolio of solutions, including industry-leading technology, security and infrastructure solutions.
            </p>
            <button className="mt-6 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
              Read More
            </button>
          </div>
          <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                onClick={() => setShowDropdown(false)}
                className="flex items-center space-x-3 hover:underline"
              >
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

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 bg-sky-700 text-white p-6 overflow-y-auto">
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
                    <Link
                      to={service.link}
                      className="flex items-center space-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
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

      <a
        href="https://wa.me/914442612928?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-6 bottom-6"
      >
        <img src="/assets/watsapp-1.png" alt="WhatsApp" className="w-10 h-10" />
      </a>
    </div>
  );
}
