import React from "react";
import Link from "next/link";

export const NavBar = () => {
  const data = [
    {
      id: 1,
      heading: "Home",
      link: "/",
    },
    {
      id: 2,
      heading: "About",
      link: "/aboutPage/about",
    },
    {
      id: 3,
      heading: "Blogs",
      link: "/blogPage/blog",
    },
    {
      id: 4,
      heading: "Contact",
      link: "/contactPage/contact",
    },
    {
      id: 5,
      heading: "Services",
      link: "/servicesPage/services",
    },
  ];
  // function handleClick(elem) {
  //   alert("You can access " + elem.heading + "Page");
  // }

  return (
    <div>
      <div className="flex justify-around bg-gray-400 p-3 items-center text-xl max-md:block text-center  shadow-md">
        {data.map((elem, index) => {
          return (
            <>
              <Link
                href={elem.link}
                key={elem.id}
                onClick={() => {
                  elem.onclick(elem);
                }}
              >
                <div className="hover:text-white cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-gray-500 px-4 py-1 rounded-md">
                  {elem.heading}
                </div>
              </Link>
            </>
          );
        })}

        <div className="flex justify-center  max-md:block ">
          <button className=" px-4 py-2 rounded-full bg-purple-500 text-white cursor-pointer hover:bg-purple-600 hover:translate-y-1 hover:scale-110 duration-300">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
