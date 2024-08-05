const Hero = () => {
    return (
      <section className="relative py-20 text-white bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container flex flex-col items-center mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Welcome to Our School SaaS Platform
          </h1>
          <p className="mb-8 text-lg md:text-2xl">
            Empowering schools with seamless management solutions.
          </p>
          <div className="flex space-x-4">
            <a
              href="/signup"
              className="px-8 py-3 font-semibold text-blue-600 transition duration-300 bg-white rounded-lg shadow-md hover:bg-gray-100"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="px-8 py-3 font-semibold transition duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-600"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    );
  };
  
  export default Hero;
  