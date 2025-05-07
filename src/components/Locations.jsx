// import { useState } from "react";

// const API_KEY = "YOUR_API_KEY"; // ⬅️ Replace this with your real API key

// const locations = [
//   {
//     name: "Abu Dhabi - UAE",
//     address:
//       "30th Floor, Commercial Tower Al Wahda City 1 Hazza Bin Zayed Street P.O. Box 37543 Abu Dhabi, United Arab Emirates",
//     mapQuery: "Abu+Dhabi,UAE",
//   },
//   {
//     name: "Bahrain",
//     address:
//       "MS Center Office 51, 5th Floor Building, 22 Avenue 58, Al Seef District, 436 P.O. Box 10554 Manama, Kingdom of Bahrain",
//     mapQuery: "Manama,Bahrain",
//   },
//   {
//     name: "Dubai - UAE",
//     address:
//       "Emarat Atrium Building, Block B, 3rd floor, Sheikh Zayed Road, P.O. Box 9226, Dubai, UAE",
//     mapQuery: "Dubai,UAE",
//   },
//   {
//     name: "Oman",
//     address:
//       "Al Rawaq, Building No: 7/1, Block 205, Way No: 58, Al Qurum, Muscat, Sultanate of Oman.",
//     mapQuery: "Muscat,Oman",
//   },
//   {
//     name: "Kuwait",
//     address: "Baitak Tower 14th Floor PO BOX 4175 Safat 13042, Kuwait",
//     mapQuery: "Kuwait+City,Kuwait",
//   },
//   {
//     name: "Pakistan",
//     address:
//       "1st Floor, Dadex House, 34-A/1 PECHS Block 6, Shahrah-e-Faisal, Karachi 75400, Pakistan",
//     mapQuery: "Karachi,Pakistan",
//   },
// ];

// export default function GlobalPresence() {
//   const [activeTab, setActiveTab] = useState(0);

//   const getMapUrl = (query) =>
//     `https://maps.googleapis.com/maps/api/staticmap?center=${query}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C${query}&key=${API_KEY}`;

//   return (
//     <section className="bg-[#f8f3fb] font-['Lato'] py-12 w-full">
//       <div className="text-center">
//         <button className="px-4 py-1 rounded-full border border-[#00A6A6] text-[#00A6A6] text-sm mb-4">
//           Our Global Presence
//         </button>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           A local company with <span className="text-[#00A6A6]">Global Standards</span>
//         </h2>
//       </div>

//       <div className="flex justify-center space-x-6 mt-10 border-b">
//         {locations.map((loc, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`pb-2 text-lg font-semibold focus:outline-none focus:ring-0 ${
//               activeTab === index
//                 ? "border-b-4 border-[#00A6A6] text-[#00A6A6]"
//                 : "text-gray-700"
//             }`}
//           >
//             {loc.name}
//           </button>
//         ))}
//       </div>

//       <div className="mt-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 px-6">
//         <div className="flex-1">
//           <h3 className="text-3xl font-bold text-gray-800">{locations[activeTab].name}</h3>
//           <div className="mt-4 flex items-center gap-2 text-[#00A6A6] font-semibold">
//             <svg
//               className="w-5 h-5 text-[#00A6A6]"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
//             </svg>
//             <span>Office Address</span>
//           </div>
//           <p className="mt-2 text-gray-700 leading-relaxed">{locations[activeTab].address}</p>

//           <button className="mt-6 px-6 py-2 bg-[#00A6A6] hover:bg-[#008080] text-white rounded-full font-semibold">
//             Explore
//           </button>
//         </div>

//         <div className="flex-1">
//           <div className="rounded-lg overflow-hidden shadow">
//             <img
//               src={getMapUrl(locations[activeTab].mapQuery)}
//               alt={`Map of ${locations[activeTab].name}`}
//               className="w-full h-[300px] object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Locations with coordinates for OpenStreetMap
const locations = [
  {
    name: "Abu Dhabi - UAE",
    address:
      "30th Floor, Commercial Tower Al Wahda City 1 Hazza Bin Zayed Street, Abu Dhabi, United Arab Emirates",
    lat: 24.4667,
    lon: 54.3667,
  },
  {
    name: "Bahrain",
    address:
      "MS Center Office 51, 5th Floor Building, 22 Avenue 58, Al Seef District, Manama, Kingdom of Bahrain",
    lat: 26.2285,
    lon: 50.5861,
  },
  {
    name: "Dubai - UAE",
    address:
      "Emarat Atrium Building, Block B, 3rd floor, Sheikh Zayed Road, Dubai, UAE",
    lat: 25.2048,
    lon: 55.2708,
  },
  {
    name: "Oman",
    address:
      "Al Rawaq, Building No: 7/1, Block 205, Way No: 58, Al Qurum, Muscat, Sultanate of Oman.",
    lat: 23.5859,
    lon: 58.4059,
  },
  {
    name: "Singapore",
    address:
      "Level 5, Marina Bay Financial Centre Tower 3, Singapore 018982",
    lat: 1.2833,
    lon: 103.8600,
  },
  {
    name: "India",
    address:
      "Commnet House, Sector 62, Noida, Uttar Pradesh, India",
    lat: 28.6270,
    lon: 77.3750,
  },
];

// Generate OpenStreetMap embed link with bounding box and marker
const getMapEmbedUrl = (lat, lon) =>
  `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.02},${lat - 0.01},${lon + 0.02},${lat + 0.01}&layer=mapnik&marker=${lat},${lon}`;

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
        <div className="inline-block px-4 py-1 rounded-full border border-sky-500 text-sky-500 text-sm mb-2">
          Our Global Presence
        </div>
        <h2 className="text-lg md:text-4xl font-bold text-gray-800 mb-1">
          A local company with{" "}
          <span className="text-sky-500 md:text-[#00A6A6]">Global Standards</span>
        </h2>
      </div>

      {/* Mobile Tabs */}
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

      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-center space-x-6 mt-10 border-b overflow-x-auto">
        {locations.map((loc, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 text-lg font-semibold focus:outline-none ${
              activeTab === index
                ? "border-b-4 border-[#00A6A6] text-[#00A6A6]"
                : "text-gray-700"
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Mobile Layout */}
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
                className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0"
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
                <span className="text-sky-500 font-medium block mb-1 text-sm">
                  Office Address
                </span>
                <p className="text-gray-700 text-xs leading-relaxed break-words pr-2">
                  {locations[activeTab].address}
                </p>
              </div>
            </div>
            <button className="mt-4 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium text-center w-full rounded">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div
        className="hidden md:flex mt-10 max-w-7xl mx-auto flex-col md:flex-row items-start gap-12 px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-800">
            {locations[activeTab].name}
          </h3>
          <div className="mt-4 flex items-center gap-2 text-[#00A6A6] font-semibold">
            <svg
              className="w-5 h-5 text-[#00A6A6]"
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
          <button className="mt-6 px-6 py-2 bg-[#00A6A6] hover:bg-[#008080] text-white rounded-full font-semibold">
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
