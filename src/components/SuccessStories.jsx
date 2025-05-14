// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Stories = [
//   {
//     logo: "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F634%2Fimage-61.png&w=256&q=75",
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F633%2Fimage-60.png&w=1920&q=75",
//     title: "Allied Bank",
//     description:
//       "Allied Bank speaks about the successful relationship between the Bank & COMMNET",
//   },
//   {
//     logo: "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F636%2FLayer-0-1.png&w=256&q=75",
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F635%2Fpexels-mayofi-5912322-1.png&w=1200&q=75",
//     title: "Brokerage House Securities",
//     description:
//       "COMMNET supports Brokerage House Securities on their Digital Transformation Journey",
//   },
//   {
//     logo: "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F688%2Flogo.png&w=256&q=75",
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F637%2Fimage-56.png&w=1200&q=75",
//     title: "Oman Arab Bank",
//     description:
//       "COMMNET Supports Oman Arab Bank on their digital transformation.",
//   },
//   {
//     logo: "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F698%2FKuwait_Airways_logo.svg.png&w=256&q=75",
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F708%2Fkuwait-airways---shutterstock---small.jpg&w=1920&q=75",
//     title: "Kuwait Airways",
//     description:
//       "COMMNET implements integrated Human Capital Management system for Kuwait Airways",
//   },
//   {
//     logo: "https://gbm-bucket-storage.s3.me-central-1.amazonaws.com/642/image-54.svg",
//     image:
//       "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F742%2Ftapal-tea-1.jpg&w=1200&q=75",
//     title: "Tapal Tea",
//     description: "COMMNET in Tapal Tea’s Digital Transformation Journey",
//   },
// ];
// const SuccessStories = () => {
//   return (
//     <>
//       <div className="flex max-w-[1440px] mx-auto py-[6.25em] flex-col gap-6 xl:gap-20 lg:px-10 px-5">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="w-full md:w-1/2 flex items-start">
//             <div
//               data-aos="fade-right"
//               className="border px-4 py-2 rounded-xl font-medium lg:text-2xl"
//             >
//               Success Stories
//             </div>
//           </div>
//           <h2
//             data-aos="fade-left"
//             className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
//           >
//             <span className="text-blue-700"> Inspiring Success</span> through
//             Technological Excellence!
//           </h2>
//         </div>
//         <div className="flex xl:hidden">
//           <Swiper
//             modules={[Pagination]}
//             //   navigation
//             //   pagination={{ clickable: true }}
//             spaceBetween={24}
//             breakpoints={{
//               320: { slidesPerView: 1.1 },
//               640: { slidesPerView: 1.5 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 3.2 },
//             }}
//             className="transition-transform duration-300"
//           >
//             {Stories.map((story, index) => (
//               <SwiperSlide key={index} className="rounded-2xl">
//                 <div
//                   data-aos="fade-up"
//                   data-aos-delay={index * 100}
//                   className="relative h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-500 to-blue-500"
//                 >
//                   <img
//                     src={story.image}
//                     alt={story.title}
//                     className="w-full h-full absolute inset-0 object-cover object-center opacity-55 "
//                   />
//                   <div className="p-6 relative z-10 h-full flex flex-col justify-between items-center text-center">
//                     <h3 className="text-2xl font-bold text-white">
//                       {story.title}
//                     </h3>
//                     <p className="text-xl font-semibold tracking-tight text-white">
//                       {story.description}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//       <div className=" hidden xl:flex">
//         {Stories.map((story, index) => (
//           <div
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//             className="w-[25%] relative group transition ease-in-out duration-300 bg-gradient-to-b from-neutral-500/0 to-purple-500/0 saturate-0  hover:saturate-100 hover:from-neutral-500 hover:to-blue-500"
//             key={index}
//           >
//             <img
//               src={story.image}
//               alt={story.title}
//               className="w-full h-full object-cover object-center opacity-10 group-hover:opacity-50"
//             />
//             <div className="absolute inset-0">
//               <div className="h-full w-full flex flex-col justify-between items-center p-6">
//                 <div className="">
//                   <h4 className="hidden group-hover:block text-xl font-semibold text-center transition ease-in-out duration-300 text-white">
//                     {story.title}
//                   </h4>
//                 </div>
//                 <div className="">
//                   <p className="hidden group-hover:block text-center text-lg font-medium transition ease-in-out duration-300 text-white">
//                     {story.description}
//                   </p>
//                   <img
//                     src={story.logo}
//                     alt={story.title}
//                     width={60}
//                     className="grayscale-100 block group-hover:hidden transition ease-in-out duration-300"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SuccessStories;



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
          <span className="text-sky-600 block sm:inline">Connect</span> <span className="text-sky-600">and follow us on </span>
          
          <span className="text-red-600 block sm:inline">social media</span>
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
                      <span className="font-medium text-sky-600">
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