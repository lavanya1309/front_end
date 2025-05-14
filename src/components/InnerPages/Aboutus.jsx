import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
function Aboutus() {
  return (
    <>
      <div className="container mx-auto min-h-screen">
        <div
          className="h-[70vh] bg-gray-50 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/circuit-board-neon-background_23-2148335792.jpg?uid=R195687753&ga=GA1.1.1998257103.1744360169&semt=ais_hybrid&w=740')",
          }}
        >
          <div className="h-full flex justify-center items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white uppercase">
              About us
            </div>
          </div>
        </div>
        <div className="min-h-screen flex max-w-[1440px] mx-auto py-[6.25em] flex-col gap-6 xl:gap-20 lg:px-10 px-5 font-sans">
          <AboutDetails />
          <MissionAndVision />
          <AboutCards />
          <OurJourney />
          <div className="w-full flex justify-center items-center">
            <div className="hidden md:block">
              <PDFFlipbook />
            </div>
            <div className="md:hidden w-full flex justify-center">
              <a
                href={pdfFile}
                className=" mb-4 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition mt-6"
              >
                View Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;

const AboutDetails = () => {
  return (
    <div className="flex flex-col gap-4 font-sans">
      <div className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0">
        Who We Are
      </div>
      <p className="text-2xl font-semibold tracking-tight text-justify">
        At <span className="text-sky-600">Commnet</span> , we strive to deliver
        value through the combination of right people, processes, technologies
        and program management solutions. Our methods include- applying domain
        expertise in specific industry segments, utilizing a highly-skilled
        workforce, leveraging a proven global delivery model, implementing
        structured and scalable quality processes and methodologies and yet,
        staying cost-effective
      </p>
    </div>
  );
};

const MissionAndVision = () => {
  return (
    <div className="h-full text-black flex flex-col lg:flex-row gap-6">
      <div className=" h-full w-full flex flex-col items-start ">
        <div className="p-8 flex flex-col gap-4 bg-sky-100 rounded-2xl">
          <h3 className="text-3xl font-bold">Our Mission</h3>
          <p className="text-xl font-medium">
            Advancing our vision through strategy, <br /> innovation, and
            purposeful execution.
          </p>
        </div>
        <div className="p-8 flex flex-col gap-4 ">
          <h3 className="text-3xl font-bold">Our Vision</h3>
          <p className="text-xl">
            Inspiring lasting impact through purpose, <br /> passion, and
            unwavering commitment.
          </p>
        </div>
      </div>
      <div className="bg-green-50 w-full ">
        {/* <iframe
          src="https://www.commnetsysconsult.com/wp-content/uploads/2023/02/Commnet-LLC-Video-Whatsapp.mp4"
          className="min-w-full h-[400px] object-cover rounded-xl"
          width="100%"
          frameBorder={0}
          
        ></iframe> */}

        <video
          src="https://www.commnetsysconsult.com/wp-content/uploads/2023/02/Commnet-LLC-Video-Whatsapp.mp4"
          className="min-w-full h-[400px] object-cover rounded-xl"
          width="100%"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const AboutCards = () => {
  const CardDatas = [
    {
      id: "01",
      title: "Industry-Specific Expertise",
      description:
        "Applying deep domain knowledge across various industry sectors.",
    },
    {
      id: "02",
      title: "Skilled Workforce",
      description:
        "Leveraging a team of highly experienced professionals to drive innovation.",
    },
    {
      id: "03",
      title: "Structured & Scalable Processes",
      description:
        "Implementing best practices to maintain efficiency and quality.",
    },
    {
      id: "04",
      title: "Cost-Effective Solutions",
      description:
        " Delivering high-value outcomes without compromising on quality.",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {CardDatas.map((data, index) => (
        <div
          className="p-10 flex flex-col gap-8 hover:bg-blue-100 rounded-lg shadow-lg hover:shadow-blue-100"
          key={index}
        >
          <p className="text-5xl font-sans font-bold text-neutral-800">
            {data.id}
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold tracking-tight capitalize leading-7 mt-6 text-sky-600">
              {data.title}
            </p>
            <p className="text-lg leading-6 line-clamp-3">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};



const OurJourney = () => {
  const Datas = [
    {
      count: "25+ Years",
      description: "Started in the early 2000s as a 2-member consulting team.",
      title: "Years of Experience",
    },
    {
      count: "200%",
      description:
        "Achieved rapid growth and became a well-known IT consulting firm.",
      title: "Consistent Growth",
    },
    {
      count: "5 Countries",
      description:
        "Headquartered in Dubai with branches in India, Muscat, Qatar, and Singapore.",
      title: " Global Reach",
    },
  ];

  return (
    <section
      className="min-h-screen h-full bg-cover bg-no-repeat bg-bottom rounded-3xl flex flex-col bg-blend-saturation"
      style={{ backgroundImage: "url('/assets/press-2.jpg')" }}
    >
      <div className="h-[200px] lg:h-[500px] "></div>
      <div className="p-6 lg:p-12 flex flex-col lg:flex-row gap-8 h-full justify-between max-w-screen-xl mx-auto">
        <header className="text-white">
          <h1 className="text-4xl font-bold mb-4">Our Journey</h1>
          <p className="text-lg lg:text-xl font-medium font-sans max-w-2xl text-justify">
            Commnet started in the early 2000s as a two-member IT consulting
            firm and rapidly grew into a well-known company with offices in
            Dubai, India, Muscat, Qatar, and Singapore, employing hundreds
            today.
          </p>
        </header>

        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 w-full">
          {Datas.map((data, index) => (
            <div
              key={index}
              className="p-6 bg-blue-600/10 backdrop-blur-md text-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <p className="text-3xl font-bold">{data.count}</p>
              <p className="text-xl font-medium">{data.title}</p>
              <p className="text-sm opacity-80 mt-2">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import pdfFile from "/assets/Commnet.pdf";
// import pdfFile from "../../public/assets/Commnet.pdf";
// import pdfFile from "../assets/Commnet.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {/* <h1>Page Header</h1> */}
      <div>{props.children}</div>
      {/* <p>Page number: {props.number}</p> */}
    </div>
  );
});

Pages.displayName = "Pages";

function PDFFlipbook() {
  const [numPages, setNumPages] = useState();
  // const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-hidden">
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={550}
        minHeight={420}
        maxHeight={633}
        maxShadowOpacity={0.5}
        // showCover={true}
        mobileScrollSupport={true}
        className="w-full"
      >
        {[...Array(numPages).keys()].map((pg) => (
          <Pages key={pg} number={pg + 1}>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pg} width={500} />
            </Document>
            <p>{/* Page {pg + 1} of {numPages} */}</p>
          </Pages>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

// import React, { useState } from "react";
// import HTMLFlipBook from "react-pageflip";
// import { Document, Page, pdfjs } from "react-pdf";
// import pdfFile from "/assets/Commnet.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// function Aboutus() {
//   return (
//     <>
//       <div className="container mx-auto min-h-screen">
//         <div
//           className="h-[70vh] bg-gray-50 bg-cover bg-no-repeat"
//           style={{
//             backgroundImage:
//               "url('https://img.freepik.com/free-vector/circuit-board-neon-background_23-2148335792.jpg')",
//           }}
//         >
//           <div className="h-full flex justify-center items-center">
//             <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white uppercase">
//               About us
//             </div>
//           </div>
//         </div>

//         <div className="min-h-screen flex max-w-[1440px] mx-auto py-[6.25em] flex-col gap-6 xl:gap-20 lg:px-10 px-5 font-sans">
//           <AboutDetails />
//           <MissionAndVision />
//           <AboutCards />
//           <OurJourney />

//           <div className="w-full flex justify-center items-center">
//             <div className="hidden md:block w-full">
//               <PDFFlipbook />
//             </div>
//             <div className="md:hidden w-full flex justify-center">
//               <a
//                 href={pdfFile}
//                 download
//                 className="mb-4 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition mt-6"
//               >
//                 Download Brochure
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Aboutus;

// const AboutDetails = () => (
//   <div className="flex flex-col gap-4 font-sans">
//     <div className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0">
//       Who We Are
//     </div>
//     <p className="text-2xl font-semibold tracking-tight text-justify">
//       At <span className="text-sky-600">Commnet</span>, we strive to deliver
//       value through the combination of right people, processes, technologies
//       and program management solutions...
//     </p>
//   </div>
// );

// const MissionAndVision = () => (
//   <div className="h-full text-black flex flex-col lg:flex-row gap-6">
//     <div className="h-full w-full flex flex-col items-start">
//       <div className="p-8 flex flex-col gap-4 bg-sky-100 rounded-2xl">
//         <h3 className="text-3xl font-bold">Our Mission</h3>
//         <p className="text-xl font-medium">
//           Advancing our vision through strategy, innovation, and execution.
//         </p>
//       </div>
//       <div className="p-8 flex flex-col gap-4">
//         <h3 className="text-3xl font-bold">Our Vision</h3>
//         <p className="text-xl">
//           Inspiring lasting impact through purpose, passion, and commitment.
//         </p>
//       </div>
//     </div>
//     <div className="bg-green-50 w-full">
//       <video
//         src="https://www.commnetsysconsult.com/wp-content/uploads/2023/02/Commnet-LLC-Video-Whatsapp.mp4"
//         className="min-w-full h-[400px] object-cover rounded-xl"
//         width="100%"
//         autoPlay
//         muted
//         loop
//         playsInline
//       />
//     </div>
//   </div>
// );

// const AboutCards = () => {
//   const CardDatas = [
//     {
//       id: "01",
//       title: "Industry-Specific Expertise",
//       description:
//         "Applying deep domain knowledge across various industry sectors.",
//     },
//     {
//       id: "02",
//       title: "Skilled Workforce",
//       description:
//         "Leveraging a team of highly experienced professionals to drive innovation.",
//     },
//     {
//       id: "03",
//       title: "Structured & Scalable Processes",
//       description:
//         "Implementing best practices to maintain efficiency and quality.",
//     },
//     {
//       id: "04",
//       title: "Cost-Effective Solutions",
//       description:
//         "Delivering high-value outcomes without compromising on quality.",
//     },
//   ];
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {CardDatas.map((data, index) => (
//         <div
//           className="p-10 flex flex-col gap-8 hover:bg-blue-100 rounded-lg shadow-lg hover:shadow-blue-100"
//           key={index}
//         >
//           <p className="text-5xl font-sans font-bold text-neutral-800">
//             {data.id}
//           </p>
//           <div className="flex flex-col gap-4">
//             <p className="text-2xl font-semibold tracking-tight capitalize leading-7 mt-6 text-sky-600">
//               {data.title}
//             </p>
//             <p className="text-lg leading-6">{data.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const OurJourney = () => {
//   const Datas = [
//     {
//       count: "25+ Years",
//       description: "Started in the early 2000s as a 2-member consulting team.",
//       title: "Years of Experience",
//     },
//     {
//       count: "200%",
//       description:
//         "Achieved rapid growth and became a well-known IT consulting firm.",
//       title: "Consistent Growth",
//     },
//     {
//       count: "5 Countries",
//       description:
//         "Headquartered in Dubai with branches in India, Muscat, Qatar, and Singapore.",
//       title: "Global Reach",
//     },
//   ];

//   return (
//     <section
//       className="min-h-screen h-full bg-cover bg-no-repeat bg-bottom rounded-3xl flex flex-col bg-blend-saturation"
//       style={{ backgroundImage: "url('/assets/press-2.jpg')" }}
//     >
//       <div className="h-[200px] lg:h-[500px]" />
//       <div className="p-6 lg:p-12 flex flex-col lg:flex-row gap-8 h-full justify-between max-w-screen-xl mx-auto">
//         <header className="text-white">
//           <h1 className="text-4xl font-bold mb-4">Our Journey</h1>
//           <p className="text-lg lg:text-xl font-medium font-sans max-w-2xl text-justify">
//             Commnet started in the early 2000s as a two-member IT consulting
//             firm...
//           </p>
//         </header>
//         <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 w-full">
//           {Datas.map((data, index) => (
//             <div
//               key={index}
//               className="p-6 bg-blue-600/10 backdrop-blur-md text-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
//             >
//               <p className="text-3xl font-bold">{data.count}</p>
//               <p className="text-xl font-medium">{data.title}</p>
//               <p className="text-sm opacity-80 mt-2">{data.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Pages = React.forwardRef((props, ref) => (
//   <div className="demoPage p-4 bg-white" ref={ref}>
//     {props.children}
//   </div>
// ));

// Pages.displayName = "Pages";

// function PDFFlipbook() {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div className="w-full flex justify-center items-center py-8">
//       <div className="w-[550px] h-[733px]">
//         <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//           {numPages && (
//             <HTMLFlipBook
//               width={550}
//               height={733}
//               size="fixed"
//               maxShadowOpacity={0.5}
//               mobileScrollSupport={false}
//               className="w-full h-full"
//             >
//               {Array.from({ length: numPages }, (_, index) => (
//                 <Pages key={index}>
//                   <Page pageNumber={index + 1} width={500} />
//                 </Pages>
//               ))}
//             </HTMLFlipBook>
//           )}
//         </Document>
//       </div>
//     </div>
//   );
// }

 