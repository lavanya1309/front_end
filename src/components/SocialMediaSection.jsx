

// import { FaLinkedin } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const SocialMediaSection = () => {
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
//   return (
//     <section className="bg-[#f8f4fa] py-16 font-['Lato'] relative overflow-hidden px-6 md:px-16">
//       <div className="container mx-auto" data-aos="fade-up">
//         <h2 className="text-left sm:text-center text-xl sm:text-2xl md:text-3xl font-semibold font-['Plus Jakarta Sans'] text-[#3b0b6e] leading-snug px-4 mb-10 break-words">
//           <span className="text-[#8d3dae] block sm:inline">Connect</span> and
//           follow us on
//           <span className="text-[#222] block sm:inline">social media</span>
//         </h2>
//       </div>

//       <div className="">
//         <Swiper
//           spaceBetween={24}
//           breakpoints={{
//             320: { slidesPerView: 1.5 },
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 5 },
//           }}
//         >
//           {posts.map((post, index) => (
//             <SwiperSlide key={index} className="">
//               <div
//                 key={index}
//                 className=" bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="p-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={post.logo}
//                         alt="COMMNET"
//                         className="w-10 h-10 object-contain rounded-full"
//                       />
//                       <span className="font-medium text-purple-800">
//                         COMMNET
//                       </span>
//                     </div>
//                     <FaLinkedin className="text-[#0A66C2]" size={20} />
//                   </div>
//                   <div className="text-xs text-gray-500 mt-1">{post.time}</div>
//                   <p className="text-sm text-gray-800 mt-2 leading-snug line-clamp-3">
//                     {post.text}
//                   </p>
//                   <div className="text-sm text-[#666] mt-2 underline cursor-pointer">
//                     Read more
//                   </div>
//                 </div>

//                 <img
//                   src={post.image}
//                   alt="post"
//                   className="w-full h-[150px] object-cover border-t"
//                 />

//                 <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">❤️ {post.likes}</div>
//                   <div className="cursor-pointer">🔁 Share</div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SocialMediaSection;
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { FaQuoteLeft, FaQuoteRight, FaUserTie, FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Mr. Kamel Abdullah",
    position: "Group Director - IT, NAFFCO",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "Commnet has proven their commitment to be a reliable and consistent contractor. Their expertise and responsiveness give them an edge in project execution.",
  },
  {
    name: "Biju Alex",
    position: "Regional IT Manager, Aptec - Ingram Micro",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "We engaged Commnet for multiple IT projects including structured cabling and data centers. Their execution and professionalism exceeded expectations.",
  },
  {
    name: "Mohammad Raffi. A",
    position: "Senior IT Consultant, Jotun UAE",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "Commnet is our trusted partner in Enterprise Network. They ensure high availability and timely delivery with top-notch service quality.",
  },
  {
    name: "Ahmad Abou Dakka",
    position: "Head of Infrastructure & Information Security, UAEFA (Dubai)",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "Commnet is very Agile to our IT requirements. Commnet works the best possible IT solutions while reducing the down time and cost. Commnet manages our complete IT Infrastructure including servers, storage, cybersecurity, networks and computers. We are working together for years and would recommend Commnet anytime.",
  },
  {
    name: "Paranth.L",
    position: "Group IT Manager - Das Holding",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "We would like to express our sincere appreciation for your service to us as one of our most reliable regular suppliers since 2008. You have provided the highest level of support and quality of work & products with even better customer service. Deliveries are often received earlier than expected, and you are quick to resolve any issues that arise. We look forward to extending our contract with you for years to come and hope you will continue to provide such excellent service to us.",
  },
  {
    name: "Sandiip Chhabra",
    position: "Founder – Goodlife Technologies",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "Commnet accepted the challenge and worked as a team player, owing responsibilities even beyond their scope. Their professionalism and commitment to successful project delivery is outstanding.",
  },
  {
    name: "Mohammed Aleemuddin",
    position: "IT Administrator, Al Rawabi Dairy Co. L.L.C.",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "They do an excellent job and are always punctual. We’ve collaborated on numerous projects and they never compromise on quality. Their client dedication surpasses the competition.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-20 px-4 md:px-20 font-sans">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        <span className="text-blue-600">Our</span> Client Says
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Words from our trusted partners and clients who've walked the journey with us.
      </p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[400px] w-full">
                <FaQuoteLeft className="text-blue-500 text-2xl absolute top-4 left-4" />
                <div>
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-500 w-14 h-14 flex items-center justify-center rounded-full shadow-md">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-center text-lg font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-center text-sm text-gray-500 mb-3">
                    {item.position}
                  </p>
                  <div className="flex justify-center text-yellow-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-center overflow-y-auto max-h-[120px] px-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {item.feedback}
                  </p>
                </div>
                <FaQuoteRight className="text-blue-500 text-2xl absolute bottom-4 right-4" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
