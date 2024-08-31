import Slider from "react-slick";

export const CustomSlider = ({ settings, slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-96">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center text-lg text-gray-800 font-bold">
              {slide.text}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
