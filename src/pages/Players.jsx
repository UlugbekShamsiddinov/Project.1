import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function Players() {
  const [data_Sourse, set_dataSourse] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPlayer = () => {
    axios
      .get("https://67659546410f849996558f85.mockapi.io/athlets")
      .then((res) => {
        // console.log(res?.data);
        set_dataSourse(res?.data);
      })
      .catch((err) => {
        // console.log(err.message);
      })
      .finally(() => {
        // console.log("Finally api get request");
        setLoading(false);
      });
  };

  useEffect(() => {
    getPlayer();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="text-gray-600 body-font bg-[#1a1a1a] dark:bg-white ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data_Sourse?.map((item, id) => {
            return (
              <div className="p-4 md:w-1/3 " key={item?.id}>
                <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300">
                  <img
                    className="lg:h-72 md:h-36 w-full object-cover object-center"
                    src={item?.avatar}
                    alt="blog"
                  />
                  <div className="p-6 ">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-black">
                      Football Player
                    </h2>
                    <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-black">
                      Tugilgan sanasi: {item?.birthday}
                    </p>
                    <h1 className="title-font text-lg font-medium text-white mb-3 dark:text-black">
                      {item?.full_name}
                    </h1>
                    <p className="leading-relaxed mb-3 text-gray-400 group-hover:text-white transition duration-300 dark:text-black dark:hover:text-black">
                      {item?.bio}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-white inline-flex items-center md:mb-2 lg:mb-0">
                        <Link to={`/player/${item?.id}`}>
                          <button className="w-[130px] h-[40px] border-[1px] rounded-lg hover:bg-gray-600 duration-300 active:bg-gray-500 dark:text-black dark:border-black">
                            Learn More
                          </button>
                        </Link>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
