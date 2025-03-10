import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container mt-10 lg:mt-24 bg-primary rounded-lg relative overflow-hidden">
      <div className="lg:bg-banner py-10 lg:py-14 lg:px-7 bg-cover bg-center rounded-3xl">
        <div className="lg:w-1/2">
          <h1 className="lg:text-6xl text-3xl  lg:leading-[70px] font-black my-5">
            مع شياكتك، تألق بأسلوبك الخاص!
          </h1>
          <p className="text-lg text-gray my-4">
            أزياء تعكس شخصيتك! استمتع بتجربة تسوّق فريدة في شياكتك، حيث نقدم لك
            تشكيلة واسعة من الملابس التي تجمع بين الأناقة والراحة
          </p>
          <button className="bg-black block lg:w-fit w-full transition-all duration-300 hover:scale-110 text-white font-bold  px-5 py-3 mt-5 rounded-lg">
            <Link className="block w-full" to={"/shop"}>
              {" "}
              التسوق الان{" "}
            </Link>
          </button>
        </div>
      </div>
      <div className="block lg:hidden">
        <img src="/images/hero.png" alt="" />
      </div>
      <span className="absolute block lg:hidden w-28 h-3 rounded-full bg-[#ccc] -left-10 top-2/3 rotate-45"></span>
      <span className="absolute block lg:hidden w-28 h-3 rounded-full bg-white top-[53%] -right-10 rotate-45"></span>
      <span className="absolute block lg:hidden w-28 h-3 rounded-full bg-black -right-10 top-2/3 rotate-45"></span>
    </section>
  );
};

export default Hero;
