
// import { useState, useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Locations with coordinates for OpenStreetMap
// const locations = [
//   {
//     name: "Abu Dhabi - UAE",
//     address:
//       "30th Floor, Commercial Tower Al Wahda City 1 Hazza Bin Zayed Street, Abu Dhabi, United Arab Emirates",
//     lat: 25.13041002119675,
//     lon: 55.2306922373417,
//   },

//   {
//     name: "Dubai - UAE",
//     address:
//       "Emarat Atrium Building, Block B, 3rd floor, Sheikh Zayed Road, Dubai, UAE",
//     lat: 25.13041002119675,
//     lon: 55.2306922373417,
//   },

//   {
//     name: "Mumbai - India ",
//     address:
//       "5, Bandra Kurla Complex Rd, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India",
//     lat: 19.06020439782456,
//     lon: 72.8599431006252,
//   },
//   {
//     name: "Chennai - India",
//     address:
//       "No:5,Shiyam Mythri flats,Flat no :3B, PT Rajan Rd, K. K. Nagar, Chennai, Tamil Nadu 600078, India",
//     lat: 13.037027458861171,
//     lon: 80.20425420326066,
//   },
//   {
//     name: "Coimbatore - India",
//     address:
//       "464, Beema Naidu Rd, G.V. Residency, Uppilipalayam, Coimbatore, Tamil Nadu 641015, India",
//     lat: 11.045219431347462,
//     lon: 77.00765979385952,
//   },
// ];

// // Generate OpenStreetMap embed link with bounding box and marker
// const getMapEmbedUrl = (lat, lon) =>
//   `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.02},${
//     lat - 0.01
//   },${lon + 0.02},${lat + 0.01}&layer=mapnik&marker=${lat},${lon}`;

// export default function GlobalPresence() {
//   const [activeTab, setActiveTab] = useState(0);
//   const tabsRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-in-out",
//     });
//   }, []);

//   useEffect(() => {
//     if (tabsRef.current) {
//       const activeTabElement = tabsRef.current.children[activeTab];
//       if (activeTabElement) {
//         const container = tabsRef.current;
//         const scrollLeft =
//           activeTabElement.offsetLeft -
//           container.offsetWidth / 2 +
//           activeTabElement.offsetWidth / 2;
//         container.scrollLeft = scrollLeft;
//       }
//     }
//   }, [activeTab]);

//   return (
//     <section className="bg-gray-50 font-['Lato'] py-4 md:py-12 w-full overflow-hidden">
//       <div
//         className="text-center px-4 mb-2 max-w-screen-lg mx-auto"
//         data-aos="fade-up"
//       >
//         <div className="inline-block px-4 py-1 rounded-full border border-blue-500 text-blue-600 text-sm mb-2">
//           Our Global Presence
//         </div>
//         <h2 className="text-lg md:text-4xl font-bold text-gray-800 mb-1">
//           A local company with{" "}
//           <span className="text-blue-600 md:text-blue-600">
//             Global Standards
//           </span>
//         </h2>
//       </div>

//       {/* Mobile Tabs */}
//       <div
//         ref={tabsRef}
//         className="flex md:hidden overflow-x-auto whitespace-nowrap py-2 px-2 scrollbar-hide border-b"
//         style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
//       >
//         <div className="flex w-max">
//           {locations.map((loc, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTab(index)}
//               className={`py-1 px-3 text-sm font-medium focus:outline-none mx-1 ${
//                 activeTab === index
//                   ? "bg-sky-100 text-sky-700 rounded-md border border-sky-300"
//                   : "text-gray-700"
//               }`}
//             >
//               {loc.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Desktop Tabs */}
//       <div className="hidden md:flex justify-center space-x-6 mt-10 border-b overflow-x-auto">
//         {locations.map((loc, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`pb-2 text-lg font-semibold focus:outline-none ${
//               activeTab === index
//                 ? "border-b-4 border-sky-600 text-sky-600"
//                 : "text-gray-700"
//             }`}
//           >
//             {loc.name}
//           </button>
//         ))}
//       </div>

//       {/* Mobile Layout */}
//       <div
//         className="md:hidden px-4 pb-6 mt-1"
//         data-aos="fade-up"
//         data-aos-delay="100"
//       >
//         <div className="bg-white rounded-lg overflow-hidden shadow-sm">
//           <div className="w-full h-40 overflow-hidden">
//             <iframe
//               src={getMapEmbedUrl(
//                 locations[activeTab].lat,
//                 locations[activeTab].lon
//               )}
//               className="w-full h-full border-0"
//               loading="lazy"
//               title={`Map of ${locations[activeTab].name}`}
//             ></iframe>
//           </div>
//           <div className="p-4">
//             <h3 className="text-base font-semibold text-gray-800 mb-3 truncate">
//               {locations[activeTab].name}
//             </h3>
//             <div className="flex items-start space-x-2">
//               <svg
//                 className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <div className="flex-1 overflow-hidden">
//                 <span className="text-blue-600 font-medium block mb-1 text-sm">
//                   Office Address
//                 </span>
//                 <p className="text-gray-700 text-xs leading-relaxed break-words pr-2">
//                   {locations[activeTab].address}
//                 </p>
//               </div>
//             </div>
//             <button className="mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-center w-full rounded">
//               Explore
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Layout */}
//       <div
//         className="hidden md:flex mt-10 max-w-7xl mx-auto flex-col md:flex-row items-start gap-12 px-6"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         <div className="flex-1">
//           <h3 className="text-3xl font-bold text-gray-800">
//             {locations[activeTab].name}
//           </h3>
//           <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold">
//             <svg
//               className="w-5 h-5 text-red-600"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
//             </svg>
//             <span>Office Address</span>
//           </div>
//           <p className="mt-2 text-gray-700 leading-relaxed">
//             {locations[activeTab].address}
//           </p>
//           <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold">
//             Explore
//           </button>
//         </div>
//         <div className="flex-1">
//           <div className="rounded-lg overflow-hidden shadow">
//             <iframe
//               src={getMapEmbedUrl(
//                 locations[activeTab].lat,
//                 locations[activeTab].lon
//               )}
//               className="w-full h-[300px] border-0"
//               loading="lazy"
//               title={`Map of ${locations[activeTab].name}`}
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
  {
    name: "Abu Dhabi - UAE",
    address:
      "30th Floor, Commercial Tower Al Wahda City 1 Hazza Bin Zayed Street, Abu Dhabi, United Arab Emirates",
    lat: 25.13041002119675,
    lon: 55.2306922373417,
  },
  {
    name: "Dubai - UAE",
    address:
      "Emarat Atrium Building, Block B, 3rd floor, Sheikh Zayed Road, Dubai, UAE",
    lat: 25.13041002119675,
    lon: 55.2306922373417,
  },
  {
    name: "Mumbai - India ",
    address:
      "5, Bandra Kurla Complex Rd, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India",
    lat: 19.06020439782456,
    lon: 72.8599431006252,
  },
  {
    name: "Chennai - India",
    address:
      "No:5,Shiyam Mythri flats,Flat no :3B, PT Rajan Rd, K. K. Nagar, Chennai, Tamil Nadu 600078, India",
    lat: 13.037027458861171,
    lon: 80.20425420326066,
  },
  {
    name: "Coimbatore - India",
    address:
      "464, Beema Naidu Rd, G.V. Residency, Uppilipalayam, Coimbatore, Tamil Nadu 641015, India",
    lat: 11.045219431347462,
    lon: 77.00765979385952,
  },
];

const getMapEmbedUrl = (lat, lon) =>
  `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.02},${
    lat - 0.01
  },${lon + 0.02},${lat + 0.01}&layer=mapnik&marker=${lat},${lon}`;

export default function GlobalPresence() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.children[activeTab];
      if (activeTabElement) {
        const container = tabsRef.current;
        const scrollLeft =
          activeTabElement.offsetLeft -
          container.offsetWidth / 2 +
          activeTabElement.offsetWidth / 2;
        container.scrollLeft = scrollLeft;
      }
    }
  }, [activeTab]);

  return (
    <section className="bg-gray-50 font-['Lato'] py-4 md:py-12 w-full overflow-hidden">
      <div
        className="text-center px-4 mb-2 max-w-screen-lg mx-auto"
        data-aos="fade-up"
      >
        <div className="inline-block px-4 py-1 rounded-full border border-sky-500 text-sky-600 text-sm mb-2">
          Our Global Presence
        </div>
        <h2 className="text-lg md:text-4xl font-bold text-sky-600 mb-1">
          A local company with{" "}
          <span className="text-sky-600 md:text-red-600">
            Global Standards
          </span>
        </h2>
      </div>

      <div
        ref={tabsRef}
        className="flex md:hidden overflow-x-auto whitespace-nowrap py-2 px-2 scrollbar-hide border-b"
        style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex w-max">
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-1 px-3 text-sm font-medium focus:outline-none mx-1 ${
                activeTab === index
                  ? "bg-sky-100 text-sky-700 rounded-md border border-sky-300"
                  : "text-gray-700"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center space-x-6 mt-10 border-b overflow-x-auto">
        {locations.map((loc, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 text-lg font-semibold focus:outline-none ${
              activeTab === index
                ? "border-b-4 border-sky-600 text-sky-600"
                : "text-gray-700"
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      <div
        className="md:hidden px-4 pb-6 mt-1"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="w-full h-40 overflow-hidden">
            <iframe
              src={getMapEmbedUrl(
                locations[activeTab].lat,
                locations[activeTab].lon
              )}
              className="w-full h-full border-0"
              loading="lazy"
              title={`Map of ${locations[activeTab].name}`}
            ></iframe>
          </div>
          <div className="p-4">
            <h3 className="text-base font-semibold text-gray-800 mb-3 truncate">
              {locations[activeTab].name}
            </h3>
            <div className="flex items-start space-x-2">
              <svg
                className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex-1 overflow-hidden">
                <span className="text-sky-600 font-medium block mb-1 text-sm">
                  Office Address
                </span>
                <p className="text-gray-700 text-xs leading-relaxed break-words pr-2">
                  {locations[activeTab].address}
                </p>
              </div>
            </div>
            <button className="mt-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium text-center w-full rounded">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div
        className="hidden md:flex mt-10 max-w-7xl mx-auto flex-col md:flex-row items-start gap-12 px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-800">
            {locations[activeTab].name}
          </h3>
          <div className="mt-4 flex items-center gap-2 text-sky-600 font-semibold">
            <svg
              className="w-5 h-5 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            <span>Office Address</span>
          </div>
          <p className="mt-2 text-gray-700 leading-relaxed">
            {locations[activeTab].address}
          </p>
          <button className="mt-6 px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold">
            Explore
          </button>
        </div>
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              src={getMapEmbedUrl(
                locations[activeTab].lat,
                locations[activeTab].lon
              )}
              className="w-full h-[300px] border-0"
              loading="lazy"
              title={`Map of ${locations[activeTab].name}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
