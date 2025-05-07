// // import { useRef, useState } from "react";
// // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// // import { FaLinkedin } from "react-icons/fa6";

// // export default function SocialMediaSection() {
// //   const containerRef = useRef(null);
// //   const [startIndex, setStartIndex] = useState(0);

// //   const visibleCount = 5;
// //   const posts = [
// //     {
// //       logo: "/assets/logo.png",
// //       time: "8 hours ago",
// //       text: "We are thrilled to announce that COMMNET Pakistan has been honored with the Top",
// //       image: "/assets/social-1.jpg",
// //       likes: 80,
// //     },
// //     {
// //       logo: "/assets/logo.png",
// //       time: "April 28",
// //       text: "We're proud to share that COMMNET Abu Dhabi has been recognized with two",
// //       image: "/assets/social-4.jpg",
// //       likes: 108,
// //     },
// //     {
// //       logo: "/assets/logo.png",
// //       time: "April 25",
// //       text: "The Kuwait Innovation Summit is just around the corner. COMMNET and IBM, in",
// //       image: "/assets/social-3.jpg",
// //       likes: 111,
// //     },
// //     {
// //       logo: "/assets/logo.png",
// //       time: "April 22",
// //       text: "COMMNET was proud to take part in shaping the future of IT at Red Hat Summit: Connect",
// //       image: "/assets/social-2.jpg",
// //       likes: 217,
// //     },
// //     {
// //       logo: "/assets/logo.png",
// //       time: "April 16",
// //       text: "COMMNET is proud to be a strategic sponsor of the Cyber First Kuwait",
// //       image: "/assets/social-1.jpg",
// //       likes: 69,
// //     },
// //     {
// //       logo: "/assets/logo.png",
// //       time: "April 10",
// //       text: "Another exciting milestone for COMMNET and partners in digital leadership!",
// //       image: "/assets/social-4.jpg",
// //       likes: 145,
// //     },
// //   ];

// //   const handleNext = () => {
// //     if (startIndex + visibleCount < posts.length) {
// //       setStartIndex(startIndex + 1);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (startIndex > 0) {
// //       setStartIndex(startIndex - 1);
// //     }
// //   };

// //   const visiblePosts = posts.slice(startIndex, startIndex + visibleCount);

// //   return (
// //     <section className="bg-[#f8f4fa] py-16 font-['Lato'] relative overflow-hidden">
// //       <h2 className="text-center text-3xl md:text-4xl font-semibold font-['Plus Jakarta Sans'] text-[#3b0b6e]">
// //         <span className="text-[#8d3dae]">Connect</span> and follow us on{" "}
// //         <span className="text-[#222]">social media</span>
// //       </h2>

// //       {/* Arrows */}
// //       <button
// //         onClick={handlePrev}
// //         className="absolute left-2 top-[50%] -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 disabled:opacity-30"
// //         disabled={startIndex === 0}
// //       >
// //         <FaChevronLeft size={18} />
// //       </button>
// //       <button
// //         onClick={handleNext}
// //         className="absolute right-2 top-[50%] -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 disabled:opacity-30"
// //         disabled={startIndex + visibleCount >= posts.length}
// //       >
// //         <FaChevronRight size={18} />
// //       </button>

// //       {/* Cards */}
// //       <div className="flex justify-center gap-6 mt-12 px-6 flex-wrap">
// //         {visiblePosts.map((post, index) => (
// //           <div
// //             key={index}
// //             className="w-[270px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
// //           >
// //             <div className="p-4">
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-2">
// //                   <img
// //                     src={post.logo}
// //                     alt="COMMNET"
// //                     className="w-10 h-10 object-contain rounded-full"
// //                   />
                  
// //                 </div>
// //                 <FaLinkedin className="text-[#0A66C2]" size={20} />
// //               </div>
// //               <div className="text-xs text-gray-500 mt-1">{post.time}</div>
// //               <p className="text-sm text-gray-800 mt-2 leading-snug">{post.text}</p>
// //               <div className="text-sm text-[#666] mt-2 underline">Read more</div>
// //             </div>

// //             <img
// //               src={post.image}
// //               alt="post"
// //               className="w-full h-[150px] object-cover border-t"
// //             />

// //             <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
// //               <div className="flex items-center gap-1">❤️ {post.likes}</div>
// //               <div>🔁 Share</div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// import { useRef, useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// // Import AOS if not already imported in the main app file
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// export default function SocialMediaSection() {
//   const containerRef = useRef(null);
//   const mobileCardRef = useRef(null);
//   const [startIndex, setStartIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   // Check for mobile viewport on mount and resize
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     // Initialize AOS
//     if (typeof AOS !== 'undefined') {
//       AOS.init({
//         duration: 800,
//         once: false,
//         mirror: true
//       });
//     }
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Adjust visible count based on screen size
//   const visibleCount = isMobile ? 1 : 5;
  
//   const posts = [
//     {
//       logo: "/assets/logo.png",
//       time: "8 hours ago",
//       text: "We are thrilled to announce that COMMNET Pakistan has been honored with the Top",
//       image: "/assets/social-1.jpg",
//       likes: 80,
//     },
//     {
//       logo: "/assets/logo.png",
//       time: "April 28",
//       text: "We're proud to share that COMMNET Abu Dhabi has been recognized with two",
//       image: "/assets/social-4.jpg",
//       likes: 108,
//     },
//     {
//       logo: "/assets/logo.png",
//       time: "April 25",
//       text: "The Kuwait Innovation Summit is just around the corner. COMMNET and IBM, in",
//       image: "/assets/social-3.jpg",
//       likes: 111,
//     },
//     {
//       logo: "/assets/logo.png",
//       time: "April 22",
//       text: "COMMNET was proud to take part in shaping the future of IT at Red Hat Summit: Connect",
//       image: "/assets/social-2.jpg",
//       likes: 217,
//     },
//     {
//       logo: "/assets/logo.png",
//       time: "April 16",
//       text: "KBM-GBM is proud to be a strategic sponsor of the Cyber First Kuwait Conference on April 22 at the Radisson Blu Hotel organized by",
//       image: "/assets/social-1.jpg",
//       likes: 69,
//     },
//     {
//       logo: "/assets/logo.png",
//       time: "April 10",
//       text: "Another exciting milestone for COMMNET and partners in digital leadership!",
//       image: "/assets/social-4.jpg",
//       likes: 145,
//     },
//   ];

//   const handleNext = () => {
//     if (startIndex + visibleCount < posts.length) {
//       setStartIndex(startIndex + 1);
//       if (typeof AOS !== 'undefined') {
//         setTimeout(() => {
//           AOS.refresh();
//         }, 100);
//       }
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//       if (typeof AOS !== 'undefined') {
//         setTimeout(() => {
//           AOS.refresh();
//         }, 100);
//       }
//     }
//   };
  
//   // Handle touch events for mobile swipe
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };
  
//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const isSignificantSwipe = Math.abs(distance) > 50;
    
//     if (isSignificantSwipe) {
//       if (distance > 0) {
//         // Swipe left (next)
//         handleNext();
//       } else {
//         // Swipe right (prev)
//         handlePrev();
//       }
//     }
    
//     // Reset values
//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   const visiblePosts = posts.slice(startIndex, startIndex + visibleCount);

//   // Pagination dots for mobile
//   const renderPaginationDots = () => {
//     if (!isMobile) return null;
    
//     return (
//       <div className="flex justify-center gap-2 mt-6 mr-[150px]">
//         {posts.map((_, index) => (
//           <button 
//             key={index}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${index === startIndex ? 'bg-gray-800 w-3' : 'bg-gray-300'}`}
//             onClick={() => setStartIndex(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="bg-[#f8f4fa] py-16 font-['Lato'] relative overflow-hidden">
//       <div className="container mx-auto" data-aos="fade-up">
//       <h2 className="text-left sm:text-center text-xl sm:text-2xl md:text-3xl font-semibold font-['Plus Jakarta Sans'] text-[#3b0b6e] leading-snug px-4 mb-10 break-words">
//   <span className="text-[#8d3dae] block sm:inline">Connect</span> and follow us on{" "}
//   <span className="text-[#222] block sm:inline">social media</span>
// </h2>

//       </div>

//       {/* Arrows - Hide on mobile */}
//       {!isMobile && (
//         <>
//           <button
//             onClick={handlePrev}
//             className="absolute left-2 top-[50%] -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 disabled:opacity-30 hover:bg-gray-100 transition-all"
//             disabled={startIndex === 0}
//           >
//             <FaChevronLeft size={18} />
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-2 top-[50%] -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 disabled:opacity-30 hover:bg-gray-100 transition-all"
//             disabled={startIndex + visibleCount >= posts.length}
//           >
//             <FaChevronRight size={18} />
//           </button>
//         </>
//       )}

//       {/* Mobile Arrows - Only show on mobile */}
//       {isMobile && (
//         <>
//           <button
//             onClick={handlePrev}
//             className="absolute left-2 top-[45%] -translate-y-1/2 bg-white/70 p-1 rounded-full z-10 disabled:opacity-30 hover:bg-white"
//             disabled={startIndex === 0}
//           >
//             {/* <FaChevronLeft size={16} /> */}
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-2 top-[45%] -translate-y-1/2 bg-white/70 p-1 rounded-full z-10 disabled:opacity-30 hover:bg-white"
//             disabled={startIndex + 1 >= posts.length}
//           >
//             {/* <FaChevronRight size={16} /> */}
//           </button>
//         </>
//       )}

//       {/* Cards Container */}
//       <div 
//         ref={containerRef}
//         className={`flex justify-center ${isMobile ? 'px-4' : 'gap-6 px-6 flex-wrap'} mt-8`}
//       >
//         {/* Mobile View - Single Card */}
//         {isMobile ? (
//           <div 
//             ref={mobileCardRef}
//             className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 mr-[160px]"
//             data-aos="fade-up"
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div className="p-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={visiblePosts[0].logo}
//                     alt="GBM"
//                     className="w-8 h-8 object-contain"
//                   />
//                   <span className="font-medium text-purple-800">COMMNET</span>
//                 </div>
//                 <FaLinkedin className="text-[#0A66C2]" size={20} />
//               </div>
//               <div className="text-xs text-gray-500 mt-1">{visiblePosts[0].time}</div>
//               <p className="text-sm text-gray-800 mt-2 leading-snug line-clamp-3">{visiblePosts[0].text}</p>
//               <div className="text-sm text-[#666] mt-2 underline cursor-pointer">Read more</div>
//             </div>

//             <img
//               src={visiblePosts[0].image}
//               alt="post"
//               className="w-full h-[180px] object-cover border-t"
//             />

//             <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
//               <div className="flex items-center gap-1">❤️ {visiblePosts[0].likes}</div>
//               <div className="flex items-center gap-1">
//                 <span>↪️</span> Share
//               </div>
//             </div>
//           </div>
//         ) : (
//           // Desktop View - Multiple Cards
//           visiblePosts.map((post, index) => (
//             <div
//               key={index}
//               className="w-[270px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="p-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src={post.logo}
//                       alt="COMMNET"
//                       className="w-10 h-10 object-contain rounded-full"
//                     />
//                     <span className="font-medium text-purple-800">COMMNET</span>
//                   </div>
//                   <FaLinkedin className="text-[#0A66C2]" size={20} />
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">{post.time}</div>
//                 <p className="text-sm text-gray-800 mt-2 leading-snug line-clamp-3">{post.text}</p>
//                 <div className="text-sm text-[#666] mt-2 underline cursor-pointer">Read more</div>
//               </div>

//               <img
//                 src={post.image}
//                 alt="post"
//                 className="w-full h-[150px] object-cover border-t"
//               />

//               <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
//                 <div className="flex items-center gap-1">❤️ {post.likes}</div>
//                 <div className="cursor-pointer">🔁 Share</div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Pagination Dots for Mobile */}
//       {renderPaginationDots()}
//     </section>
//   );
// }


import { FaLinkedin } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SocialMediaSection = () => {
  const posts = [
    {
      logo: "/assets/logo.png",
      time: "8 hours ago",
      text: "We are thrilled to announce that COMMNET Pakistan has been honored with the Top",
      image: "/assets/social-1.jpg",
      likes: 80,
    },
    {
      logo: "/assets/logo.png",
      time: "April 28",
      text: "We're proud to share that COMMNET Abu Dhabi has been recognized with two",
      image: "/assets/social-4.jpg",
      likes: 108,
    },
    {
      logo: "/assets/logo.png",
      time: "April 25",
      text: "The Kuwait Innovation Summit is just around the corner. COMMNET and IBM, in",
      image: "/assets/social-3.jpg",
      likes: 111,
    },
    {
      logo: "/assets/logo.png",
      time: "April 22",
      text: "COMMNET was proud to take part in shaping the future of IT at Red Hat Summit: Connect",
      image: "/assets/social-2.jpg",
      likes: 217,
    },
    {
      logo: "/assets/logo.png",
      time: "April 16",
      text: "KBM-GBM is proud to be a strategic sponsor of the Cyber First Kuwait Conference on April 22 at the Radisson Blu Hotel organized by",
      image: "/assets/social-1.jpg",
      likes: 69,
    },
    {
      logo: "/assets/logo.png",
      time: "April 10",
      text: "Another exciting milestone for COMMNET and partners in digital leadership!",
      image: "/assets/social-4.jpg",
      likes: 145,
    },
  ];
  return (
    <section className="bg-[#f8f4fa] py-16 font-['Lato'] relative overflow-hidden px-6 md:px-16">
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="text-left sm:text-center text-xl sm:text-2xl md:text-3xl font-semibold font-['Plus Jakarta Sans'] text-[#3b0b6e] leading-snug px-4 mb-10 break-words">
          <span className="text-[#8d3dae] block sm:inline">Connect</span> and
          follow us on
          <span className="text-[#222] block sm:inline">social media</span>
        </h2>
      </div>

      <div className="">
        <Swiper
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index} className="">
              <div
                key={index}
                className=" bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.logo}
                        alt="COMMNET"
                        className="w-10 h-10 object-contain rounded-full"
                      />
                      <span className="font-medium text-purple-800">
                        COMMNET
                      </span>
                    </div>
                    <FaLinkedin className="text-[#0A66C2]" size={20} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{post.time}</div>
                  <p className="text-sm text-gray-800 mt-2 leading-snug line-clamp-3">
                    {post.text}
                  </p>
                  <div className="text-sm text-[#666] mt-2 underline cursor-pointer">
                    Read more
                  </div>
                </div>

                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-[150px] object-cover border-t"
                />

                <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">❤️ {post.likes}</div>
                  <div className="cursor-pointer">🔁 Share</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SocialMediaSection;
