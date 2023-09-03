import Image from "next/image";
// import Head from "next/head";
// import { Inter } from "next/font/google";
// import Script from "next/script";
// import { NavBar } from "@/components/navBar";
import indexImage from "../assest/banner.jpeg";

// import style from "../styles/navbarcss/nav.module.css";

export default function Home() {
  return (
    <>
      <div className="py-20  mx-6">
        <Image src={indexImage} className=" "></Image>
      </div>
    </>
  );
}
