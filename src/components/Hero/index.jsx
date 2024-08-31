import HeroImageDesk from "@/assets/imgs/heroImage_desktop.jpg";
import HeroImageMobile from "@/assets/imgs/heroImage_mobile.jpg";
import TweetJustin from "@/assets/imgs/tweetJustin.jpg";

export const Hero = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-local relative md:max-h-[90vh]">
      <img
        src={HeroImageDesk}
        alt="Wolf art"
        className="hidden md:block max-h-[90vh] object-cover w-full"
      />
      <img
        src={HeroImageMobile}
        alt="Mobile wolf art"
        className="md:hidden max-h-[90vh] object-cover w-full"
      />
      <div className="bg-black opacity-50 absolute top-0 left-0 right-0 bottom-0 z-10"></div>
      <div className="absolute top-0 left-0 right-0 bottom-[10%] md:bottom-[25%] z-20 flex justify-end items-center px-4 flex-col gap-8">
        <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold flex flex-col gap-4">
          SunPump + VanGogh
          <span className="block text-4xl md:text-5xl">SunGogh</span>
        </h1>
        <div className="h-24">
          <img src={TweetJustin} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};
