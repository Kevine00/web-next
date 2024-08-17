import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Discover from "./components/Discover"
import Post from "./components/post"
import Footer from "./components/Footer";

export default function Home() {
  return (
 <div>
<Navbar/>
<Hero/>
<Discover/>
<Post/>
<Footer/>
 </div>
  );
}
