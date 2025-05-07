import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Responsibility = [
  {
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F475%2FUntitled-3.png&w=640&q=75",
    title: "COMMNET TSS Support During COVID-19 Pandemic",
  },
  {
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F489%2Fthum.png&w=640&q=75",
    title:
      "We're here to support: Cisco Webex Calling, Meeting and Customer Experience Free Enterprise Trial & COMMNET Services",
  },
  {
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F494%2Fthum-3.png&w=640&q=75",
    title: "Work remotely like a pro during the COVID-19 crisis",
  },
  {
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F475%2FUntitled-3.png&w=640&q=75",
    title: "COMMNET TSS Support During COVID-19 Pandemic",
  },
  {
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F489%2Fthum.png&w=640&q=75",
    title:
      "We're here to support: Cisco Webex Calling, Meeting and Customer Experience Free Enterprise Trial & COMMNET Services",
  },
  {
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F494%2Fthum-3.png&w=640&q=75",
    title: "Work remotely like a pro during the COVID-19 crisis",
  },
];

const SocialResponsibility = () => {
  return (
    <div className="bg-blue-100">
      <div className="flex max-w-[1440px] mx-auto py-[6.25em] flex-col gap-6 xl:gap-20 lg:px-10 px-5">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 flex items-start">
            <div
              data-aos="fade-right"
              className="border px-4 py-2 rounded-xl font-medium lg:text-2xl"
            >
              Our Social Responsibility
            </div>
          </div>
          <h2
            data-aos="fade-left"
            className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
          >
            Empowering Communities, Building a
            <span className="text-blue-700"> Better World</span> Together
          </h2>
        </div>

        <div className="flex flex-wrap">
          <Swiper
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
          >
            {Responsibility.map((res, index) => (
              <SwiperSlide key={index} className="">
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="border border-gray-300 rounded-2xl overflow-hidden group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={res.image}
                      alt={res.title}
                      className="object-cover w-full object-center will-change-transform ease-in-out duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-4 items-start bg-white">
                    <p className="text-2xl font-semibold line-clamp-2">
                      {res.title}
                    </p>
                    <p className="px-4 py-2 rounded-2xl bg-blue-900 text-white">
                      Read More
                    </p>
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

export default SocialResponsibility;
