import StartButton from "./startButton";

function About() {
  return (
    <div className="flex flex-col sm:flex-row items-center px-4 sm:px-[160px] h-fit justify-between pt-[400px] md:pt-[160px]">
        <div>
            <img src="assets/about.png" alt="" className="rounded-xl w-[320px] md:w-[240px] lg:w-[320px] xl:w-[360px] object-covers"/>
        </div>
        <div className="text-wrap font-pop sm:w-1/2 flex flex-col gap-[16px]">
          <h1 className="text-4xl md:text-3xl lg:text-4xl font-semibold ">
            Finances, made easy. Track, manage & reach your financial goals.
          </h1>
          <h4 className="text-xl md:text-lg">
            Designed to help you take control of your finances and achieve your
            financial goals. Our app is easy to use and provides a complete
            overview of your finances, allowing you to manage your money with
            confidence.
          </h4>
          <StartButton/>
        </div>
    </div>
  );
}

export default About;
