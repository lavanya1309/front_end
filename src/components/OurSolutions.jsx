import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurSolutionsData = [
  {
    title: "Technology Solutions",
    description:
      "Leaders in the digital economy are able to stay ahead by embracing the opportunities that are made possible by digital transformation.",
    links: [
      { link: "IBM Solutions" },
      { link: "Digital Automation" },
      { link: "AIOps" },
      { link: "Enterprise Application Solution" },
    ],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure, and reliable cloud platforms to support your digital growth and operational resilience.",
    links: [
      { link: "Hybrid Cloud" },
      { link: "Public Cloud" },
      { link: "Private Cloud" },
      { link: "Cloud Security" },
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Protect your digital assets and ensure compliance with industry standards using modern cybersecurity frameworks.",
    links: [
      { link: "Risk Management" },
      { link: "Zero Trust Security" },
      { link: "Threat Detection" },
    ],
  },
  {
    title: "AI & Data Analytics",
    description:
      "Protect your digital assets and ensure compliance with industry standards using modern cybersecurity frameworks.",
    links: [
      { link: "Predictive Analytics" },
      { link: "Natural Language Processing" },
      { link: "Data Lakes" },
    ],
  },
];

const OurSolutions = () => {
  return (
    <div className="overflow-hidden relative">

<img src="/assets/bg-7.jpg" className="absolute inset-0  w-full h-full " />
    <div className="flex max-w-[1440px]   mx-auto py-[6.25em] flex-col gap-6 xl:gap-20 lg:px-10 px-5"
    
    >

      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 flex items-start">
          <div
            data-aos="fade-right"
            className="border px-4 py-2 rounded-xl font-medium lg:text-2xl"
          >
            Our Solutions
          </div>
        </div>
        <h2
          data-aos="fade-left"
          className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
        >
          Turn your business vision into reality with end-to-end{" "}
          <span className="text-blue-700">IT Solutions</span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-6">
        <Swiper
          modules={[Pagination]}
          //   navigation
          //   pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.2 },
          }}
          className="transition-transform duration-300"
        >
          {OurSolutionsData.map((solution, index) => (
            <SwiperSlide key={index} className="rounded-2xl">
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-2xl transition ease-in-out duration-300 h-full group"
              >
                <p className="text-sm text-gray-500 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-[2em] leading-tight font-semibold mb-2">
                    {solution.title}
                  </p>
                  <p className="text-gray-700 text-base tracking-tight mb-4">
                    {solution.description}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-4 mt-4">
                  <ul className="text-sm space-y-1 grid-cols-2 grid">
                    {solution.links.map((item, i) => (
                      <li
                        key={i}
                        className="text-blue-700 hover:underline cursor-pointer line-clamp-1"
                      >
                        {item.link}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-700 hover:underline cursor-pointer">
                    Find More
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default OurSolutions;
