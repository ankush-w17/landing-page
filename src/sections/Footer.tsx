import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/80">
      <div className="container flex flex-col items-center pt-10">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full  before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
        <Image src={logo} height={40} alt="logo" className="relative"/>
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="socials flex gap-4 mt-5">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="text-sm mt-5 mb-8">© 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
