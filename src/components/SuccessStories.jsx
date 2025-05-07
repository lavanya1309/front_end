import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Stories = [
  {
    logo: "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F634%2Fimage-61.png&w=256&q=75",
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F633%2Fimage-60.png&w=1920&q=75",
    title: "Allied Bank",
    description:
      "Allied Bank speaks about the successful relationship between the Bank & COMMNET",
  },
  {
    logo: "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F636%2FLayer-0-1.png&w=256&q=75",
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F635%2Fpexels-mayofi-5912322-1.png&w=1200&q=75",
    title: "Brokerage House Securities",
    description:
      "COMMNET supports Brokerage House Securities on their Digital Transformation Journey",
  },
  {
    logo: "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F688%2Flogo.png&w=256&q=75",
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F637%2Fimage-56.png&w=1200&q=75",
    title: "Oman Arab Bank",
    description:
      "COMMNET Supports Oman Arab Bank on their digital transformation.",
  },
  {
    logo: "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F698%2FKuwait_Airways_logo.svg.png&w=256&q=75",
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F708%2Fkuwait-airways---shutterstock---small.jpg&w=1920&q=75",
    title: "Kuwait Airways",
    description:
      "COMMNET implements integrated Human Capital Management system for Kuwait Airways",
  },
  {
    logo: "https://gbm-bucket-storage.s3.me-central-1.amazonaws.com/642/image-54.svg",
    image:
      "https://www.gbmme.com/_next/image?url=https%3A%2F%2Fgbm-bucket-storage.s3.me-central-1.amazonaws.com%2F742%2Ftapal-tea-1.jpg&w=1200&q=75",
    title: "Tapal Tea",
    description: "COMMNET in Tapal Tea’s Digital Transformation Journey",
  },
];
const SuccessStories = () => {
  return (
    <>
      <div className="flex max-w-[1440px] mx-auto py-[6.25em] flex-col gap-6 xl:gap-20 lg:px-10 px-5">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 flex items-start">
            <div
              data-aos="fade-right"
              className="border px-4 py-2 rounded-xl font-medium lg:text-2xl"
            >
              Success Stories
            </div>
          </div>
          <h2
            data-aos="fade-left"
            className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
          >
            <span className="text-blue-700"> Inspiring Success</span> through
            Technological Excellence!
          </h2>
        </div>
        <div className="flex xl:hidden">
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
            {Stories.map((story, index) => (
              <SwiperSlide key={index} className="rounded-2xl">
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative h-[420px] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-500 to-blue-500"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full absolute inset-0 object-cover object-center opacity-55 "
                  />
                  <div className="p-6 relative z-10 h-full flex flex-col justify-between items-center text-center">
                    <h3 className="text-2xl font-bold text-white">
                      {story.title}
                    </h3>
                    <p className="text-xl font-semibold tracking-tight text-white">
                      {story.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className=" hidden xl:flex">
        {Stories.map((story, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="w-[25%] relative group transition ease-in-out duration-300 bg-gradient-to-b from-neutral-500/0 to-purple-500/0 saturate-0  hover:saturate-100 hover:from-neutral-500 hover:to-blue-500"
            key={index}
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover object-center opacity-10 group-hover:opacity-50"
            />
            <div className="absolute inset-0">
              <div className="h-full w-full flex flex-col justify-between items-center p-6">
                <div className="">
                  <h4 className="hidden group-hover:block text-xl font-semibold text-center transition ease-in-out duration-300 text-white">
                    {story.title}
                  </h4>
                </div>
                <div className="">
                  <p className="hidden group-hover:block text-center text-lg font-medium transition ease-in-out duration-300 text-white">
                    {story.description}
                  </p>
                  <img
                    src={story.logo}
                    alt={story.title}
                    width={60}
                    className="grayscale-100 block group-hover:hidden transition ease-in-out duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SuccessStories;
