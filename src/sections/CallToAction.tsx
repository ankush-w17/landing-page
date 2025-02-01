import Arrow from "@/assets/arrow-right.svg";
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from "next/image";


export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2CCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="heading-gradient">Sign up for free today</h2>
          <p className="para">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image src={starImage} alt="Star Image" className="absolute -left-[350px] -top-[137px]" width={360}/>
          <Image src={springImage} alt="Spring Image" className="absolute -right-[331px] -top-[19px]" width={360}/>
          <div className="flex justify-center gap-4 mt-8">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn">
              Learn More <Arrow className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
