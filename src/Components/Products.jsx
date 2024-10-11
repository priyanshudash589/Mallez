import React from "react";
import park from "../Assets/park2.png";

const Products = () => {
  return (
    <>
      <div className="w-screen bg-black">
        <div>
          <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-black dark:bg-dark">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="flex items-center -mx-3 sm:-mx-4">
                  <img src={park} alt="" className="w-full rounded-2xl" />
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <div className="mt-10 lg:mt-0">
                    <h2 className="mb-5 text-3xl font-bold text-white text-center sm:text-[40px]/[48px]">
                      DATATRIX 2024
                    </h2>
                    <p className=" text-white mb-8 text-center text-xl ">
                      The Datatrix '24 symposium, presented by the Department of
                      Computer Science and Engineering with a specialization in
                      Big Data Analytics at SRM Institute of Science and
                      Technology, Ramapuram, is set to be a landmark event for
                      tech enthusiasts and aspiring data scientists. Scheduled
                      for the 13th and 14th of September 2024, from 8:00 AM to
                      4:00 PM, this two-day event promises a dynamic blend of
                      competitions, workshops, and .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden pt-20 pb-6 lg:pt-[120px] lg:pb-[90px] bg-black dark:bg-dark">
            <div className="container mx-auto">
              <div className="flex flex-wrap flex-row-reverse items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="flex items-center -mx-3 sm:-mx-4">
                  <img src={park} alt="" className="w-full rounded-2xl" />                    
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <div className="mt-10 lg:mt-0">
                    <h2 className="mb-5 text-3xl font-bold text-center text-white sm:text-[40px]/[48px]">
                      SRMIST
                    </h2>
                    <p className=" text-white mb-8 text-center text-xl ">
                      SRM Institute of Science and Technology, Ramapuram campus,
                      is a premier educational institution located in Chennai,
                      Tamil Nadu. Known for its robust academic programs, the
                      campus offers a diverse range of undergraduate,
                      postgraduate, and doctoral courses in engineering,
                      management, science, and humanities. The Ramapuram campus
                      is equipped with state-of-the-art infrastructure, modern
                      laboratories, and a well-stocked library, providing
                      students with an enriching learning environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
