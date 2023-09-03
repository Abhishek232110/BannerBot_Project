import { NavBar } from "@/components/navBar";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";

import ProjectPage from "./servicesPage/projectPage";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Component {...pageProps} />; */}
      <div>
        <ProjectPage />
      </div>
    </>
  );
}
