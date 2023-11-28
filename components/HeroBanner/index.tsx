export default function Hero() {
  return (
    <main className="animate-fade-in bg-light-cyan-500 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-0">
      <div className="bg-light-cyan-500 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-0">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-maroon sm:mt-5 sm:text-4xl lg:mt-6 xl:text-5xl">
                  <span className="block">Heya! I&apos;m Arvin</span>
                  <span className="block text-rich-black">
                    & I&apos;m a Software Engineer
                  </span>
                </h1>
                <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-2xl lg:text-xl xl:text-2xl">
                  Exploring technology to impact my world.
                  Building products that empower and inspire.
                </p>
                {/* <div className="mt-8 sm:mt-12">
                  <a href="about" className="inline-block text-lg font-medium text-maroon bg-white px-5 py-3 rounded shadow hover:bg-gray-100">
                    LinkedIn
                  </a>
                </div> */}
              </div>
            </div>
            <div className="relative mt-12 -mb-16 sm:mb-0 lg:flex lg:items-center lg:justify-end">
              <img
                className="w-3/4 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-auto lg:max-w-none hover:scale-105 transition-transform"
                src="/images/transparent-eric-profile.png"
                alt="Arvin"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
