// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const Responsibility = [
//   {
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F475%2FUntitled-3.png&w=640&q=75",
//     title: "COMMNET TSS Support During COVID-19 Pandemic",
//   },
//   {
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F489%2Fthum.png&w=640&q=75",
//     title:
//       "We're here to support: Cisco Webex Calling, Meeting and Customer Experience Free Enterprise Trial & COMMNET Services",
//   },
//   {
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F494%2Fthum-3.png&w=640&q=75",
//     title: "Work remotely like a pro during the COVID-19 crisis",
//   },
//   {
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F475%2FUntitled-3.png&w=640&q=75",
//     title: "COMMNET TSS Support During COVID-19 Pandemic",
//   },
//   {
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F489%2Fthum.png&w=640&q=75",
//     title:
//       "We're here to support: Cisco Webex Calling, Meeting and Customer Experience Free Enterprise Trial & COMMNET Services",
//   },
//   {
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F494%2Fthum-3.png&w=640&q=75",
//     title: "Work remotely like a pro during the COVID-19 crisis",
//   },
// ];

// const SocialResponsibility = () => {
//   return (
//     <div className="bg-blue-100">
//       <div className="flex max-w-[1440px] mx-auto py-[6.25em] flex-col gap-6 xl:gap-20 lg:px-10 px-5">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="w-full md:w-1/2 flex items-start">
//             <div
//               data-aos="fade-right"
//               className="border px-4 py-2 rounded-xl font-medium lg:text-2xl"
//             >
//               Our Social Responsibility
//             </div>
//           </div>
//           <h2
//             data-aos="fade-left"
//             className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
//           >
//             Empowering Communities, Building a
//             <span className="text-blue-700"> Better World</span> Together
//           </h2>
//         </div>

//         <div className="flex flex-wrap">
//           <Swiper
//             spaceBetween={24}
//             breakpoints={{
//               320: { slidesPerView: 1.1 },
//               640: { slidesPerView: 1.5 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 3 },
//             }}
//           >
//             {Responsibility.map((res, index) => (
//               <SwiperSlide key={index} className="">
//                 <div
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                   className="border border-gray-300 rounded-2xl overflow-hidden group"
//                 >
//                   <div className="overflow-hidden">
//                     <img
//                       src={res.image}
//                       alt={res.title}
//                       className="object-cover w-full object-center will-change-transform ease-in-out duration-300 group-hover:scale-110"
//                     />
//                   </div>
//                   <div className="p-4 flex flex-col gap-4 items-start bg-white">
//                     <p className="text-2xl font-semibold line-clamp-2">
//                       {res.title}
//                     </p>
//                     <p className="px-4 py-2 rounded-2xl bg-blue-900 text-white">
//                       Read More
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SocialResponsibility;
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiBriefcase,
  FiZap,
  FiShield,
  FiShoppingCart,
  FiCpu,
  FiHardDrive,
} from "react-icons/fi";

const industries = [
  {
    icon: FiBriefcase,
    title: "Banking & Financial",
    description:
      "Helping financial institutions digitize, secure, and scale with modern cloud-native solutions.",
  },
  {
    icon: FiZap,
    title: "Energy & Utilities",
    description:
      "Empowering clean energy and sustainable tech with smart monitoring systems.",
  },
  {
    icon: FiShield,
    title: "Public Sector",
    description:
      "Enabling secure, citizen-focused digital services for government bodies.",
  },
  {
    icon: FiShoppingCart,
    title: "Retail & eCommerce",
    description:
      "Modern platforms for personalization, security, and omnichannel fulfillment.",
  },
  {
    icon: FiCpu,
    title: "Technology Providers",
    description:
      "Supporting SaaS, platform teams, and tech innovators with robust infrastructure.",
  },
  {
    icon: FiHardDrive,
    title: "Private Workstations",
    description:
      "Accelerating performance with isolated, secure, high-speed environments.",
  },
];

export default function IndustriesModern() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      className="relative py-20 px-6 md:px-20 bg-cover bg-center bg-no-repeat font-sans overflow-hidden"
      style={{ backgroundImage: "url('/assets/bg-8.jpg')" }}
    >
      {/* White overlay for readability */}
      <div className="absolute inset-0 bg-white/50  z-0"></div>

      <div className="relative z-10">
        <h2
          className="text-4xl font-bold text-center mb-16"
          data-aos="fade-down"
        >
          <span className="text-sky-600">Industries</span> We Work
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg border border-gray-200 hover:shadow-xl transition rounded-2xl p-6 flex flex-col justify-between h-full"
            >
              {/* Icon Badge */}
              <div className="w-12 h-12 flex items-center justify-center bg-sky-100 rounded-xl border border-sky-200 mb-4">
                <item.icon size={24} className="text-sky-600" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Read More */}
              <div className="pt-5">
                <a
                  href="#"
                  className="inline-block px-4 py-1 text-sm bg-sky-50 text-sky-700 rounded-full font-medium hover:bg-sky-100 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
