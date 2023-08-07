
const Main = () => {
  return (
    <main className="full-width-grid grid-cols-[1fr_min(theme(maxWidth.container),100%)_1fr] px-5 md:px-8 max-w-full overflow-x-hidden [margin-top:calc(0px-theme(height.header))]">
      <section
        className="hero flex flex-col justify-center relative overflow-y-hidden overflow-x-hidden col-start-1 col-end-4 px-5 -ml-5 -mr-5 md:px-8 md:-ml-8 md:-mr-8"
        style="
      background: var(--heroGradient);
      min-height: 100vh;
      clip-path: polygon(0px 0%, 100% 0px, 100% 100%, 0px 94%);
    "
      >
        <div className="w-full max-w-container mx-auto 3xl:max-w-[1800px]">
          <h1
            className="text-huge font-bold mb-6"
            style="font-size: clamp(34px, 6vw, 64px);"
          >
            Bring your code, <br />
            we{"'"}ll handle the rest.
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-xl">
            Made for any language, for projects big and small. Railway is the
            cloud that takes the complexity out of shipping software.
          </p>
          <div className="flex space-x-6 items-center">
            <a
              className="flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 border-pink-500 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 py-2 px-3 rounded-md text-base leading-6 space-x-3 !rounded-lg !py-3 !px-11 h-[50px] text-white font-semibold shadow-[0px_0px_24px_rgba(0,_0,_0,_0.04)] bg-[linear-gradient(76.35deg,_#801AE6_15.89%,_#A21AE6_89.75%)] hover:bg-[linear-gradient(76.35deg,_#660AC2_15.89%,_#850AC2_89.75%)] focus:bg-[linear-gradient(76.35deg,_#4D0891_15.89%,_#630891_89.75%)]"
              href="/new"
            >
              <span className="inline-block">Start a New Project</span>
            </a>
          </div>
        </div>
        <img
          src="/illustrations/computer-city-lines--dark.svg"
          alt=""
          className="absolute -z-1 right-0 hidden lg:block lg:right-[40%] 3xl:right-[50%]"
          style="
        bottom: 50%;
        transform: translateX(0px) translateY(90%) translateZ(0px);
        height: 40vh;
        opacity: 1;
      "
        />
        <img
          src="/illustrations/deployments-sc--dark.svg"
          alt=""
          className="absolute -z-1 hidden lg:block lg:left-[60%] h-[75vh] 3xl:left-[50%] 3xl:h-[88vh]"
          style="
        bottom: 50%;
        transform: translateX(0px) translateY(60%) translateZ(0px);
        opacity: 1;
      "
        />
      </section>
      <section className="col-start-1 col-end-4 px-5 -ml-5 -mr-5 md:px-8 md:-ml-8 md:-mr-8 relative -mt-8">
        <div className="text-center w-full max-w-container mx-auto">
          <p className="flex items-center justify-center mx-auto mb-16 rounded-full border-3 text-4xl w-[72px] h-[72px] border-blue-500 text-blue-500 bg-blue-100">
            1
          </p>
          <p className="text-h3 font-semibold mb-2 text-blue-500">
            Now Boarding, Local.
          </p>
          <h2 className="text-large font-bold">Start and Tinker</h2>
          <hr className="w-40 mx-auto my-6 border-blue-500" />
          <p className="text-lg max-w-4xl mx-auto">
            Begin with your repository, or start with a template. Our tooling
            extends your app with plugins and variable management so
            environments are the same live as local.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:px-0 lg:px-24 mt-24 pb-36">
            <div
              className="md:col-span-4 space-y-8"
              style="opacity: 0; transform: translateY(20px) translateZ(0px);"
            >
              <div
                className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-blue-100 dark:border-blue-200"
                style="box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-blue-700">
                    Solid Base
                  </p>
                  <p className="text-sm text-gray-600">
                    Start from scratch or pick a template to deploy instantly,
                    from bots to blogs.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(270deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-blue-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-blue-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-zap"
                      >
                        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-blue-100 dark:border-blue-200"
                style="box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-blue-700">
                    Infrastructure as Legos
                  </p>
                  <p className="text-sm text-gray-600">
                    Add a cron job, a database, or another (micro)service!
                    Railway grows with your application.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(180deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-blue-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-blue-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-grid"
                      >
                        <path d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 hidden md:block relative">
              <div
                className="w-4 -mt-12 h-[140%] mx-auto"
                style="background: var(--blue-track);"
              ></div>
              <img
                className="absolute top-0 bottom-0 w-6"
                src="/illustrations/trains/01-train-dark.svg"
                alt=""
                style="
              left: 50%;
              transform: translateX(-50%) translateY(0px) translateZ(0px);
            "
              />
            </div>
            <div
              className="md:col-span-4 space-y-8"
              style="opacity: 0; transform: translateY(20px) translateZ(0px);"
            >
              <div
                className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-blue-100 dark:border-blue-200"
                style="box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-blue-700">
                    Secrets Management
                  </p>
                  <p className="text-sm text-gray-600">
                    Keep Environment Variables and Secrets for your team,
                    securely, in one place.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(0deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-blue-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-blue-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-book"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-blue-100 dark:border-blue-200"
                style="box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-blue-700">
                    Railway CLI
                  </p>
                  <p className="text-sm text-gray-600">
                    Connect to your infrastructure + secrets, from any terminal
                    in the world.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(0deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--blue-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-blue-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-blue-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-terminal"
                      >
                        <path d="m4 17 6-6-6-6m8 14h8"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="col-start-1 col-end-4 px-5 -ml-5 -mr-5 md:px-8 md:-ml-8 md:-mr-8 relative z-0"
        style="
      background: linear-gradient(
          132.29deg,
          rgba(132, 200, 168, 0.08) 17.64%,
          rgba(114, 192, 156, 0) 66.58%
        ),
        var(--secondaryBg);
      clip-path: polygon(0px 0%, 100% 0px, 100% 100%, 0px 96%);
    "
      >
        <div
          className="bg-background h-16 w-full absolute left-0 right-0 top-0 -z-1"
          style="clip-path: polygon(0px 0px, 100% 0px, 100% 0%, 0px 100%);"
        ></div>
        <div className="text-center w-full max-w-container mx-auto">
          <p className="flex items-center justify-center mx-auto mb-16 rounded-full border-3 text-4xl w-[72px] h-[72px] border-green-500 text-green-500 bg-green-100">
            2
          </p>
          <p className="text-h3 font-semibold mb-2 text-green-500">
            Up and Running
          </p>
          <h2 className="text-large font-bold">Iterate and Accelerate</h2>
          <hr className="w-40 mx-auto my-6 border-green-500" />
          <p className="text-lg max-w-2xl mx-auto">
            From the first deploy, anything is possible. Railway helps you ship
            quickly by removing common developer hurdles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:px-0 lg:px-24 mt-24 pb-48">
            <div
              className="md:col-span-4 space-y-8"
              style="opacity: 0; transform: translateY(20px) translateZ(0px);"
            >
              <div
                color="green"
                className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-secondaryBg border-green-100 dark:border-green-200"
                style="box-shadow: rgba(66, 148, 110, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-green-700">
                    Automatic Builds
                  </p>
                  <p className="text-sm text-gray-600">
                    Say Bye to CI. Every push is built and deployed, including
                    dependent infrastructure.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(90deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-secondaryBg border-green-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-green-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28 0C12.53 0 0 12.53 0 28c0 12.39 8.015 22.855 19.145 26.565 1.4.245 1.925-.595 1.925-1.33 0-.665-.035-2.87-.035-5.215-7.035 1.295-8.855-1.715-9.415-3.29-.315-.805-1.68-3.29-2.87-3.955-.98-.525-2.38-1.82-.035-1.855 2.205-.035 3.78 2.03 4.305 2.87 2.52 4.235 6.545 3.045 8.155 2.31.245-1.82.98-3.045 1.785-3.745-6.23-.7-12.74-3.115-12.74-13.825 0-3.045 1.085-5.565 2.87-7.525-.28-.7-1.26-3.57.28-7.42 0 0 2.345-.735 7.7 2.87 2.24-.63 4.62-.945 7-.945s4.76.315 7 .945c5.355-3.64 7.7-2.87 7.7-2.87 1.54 3.85.56 6.72.28 7.42 1.785 1.96 2.87 4.445 2.87 7.525 0 10.745-6.545 13.125-12.775 13.825 1.015.875 1.89 2.555 1.89 5.18 0 3.745-.035 6.755-.035 7.7 0 .735.525 1.61 1.925 1.33C47.985 50.855 56 40.355 56 28 56 12.53 43.47 0 28 0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                // color="green"
                className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-secondaryBg border-green-100 dark:border-green-200"
                style="box-shadow: rgba(66, 148, 110, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-green-700">
                    Multiple Environments
                  </p>
                  <p className="text-sm text-gray-600">
                    Evolve your application over time, with fork joinable
                    environments.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(270deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-secondaryBg border-green-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-green-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-layers"
                      >
                        <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 justify-center space-x-8 hidden md:flex">
              <div
                className="relative w-4 -mt-12 h-[140%]"
                style="background: var(--green-track);"
              >
                <img
                  className="absolute w-6"
                  src="/illustrations/trains/02-train-b-dark.svg"
                  alt=""
                  style="
                left: 50%;
                max-width: initial;
                transform: translateX(-50%) translateY(0px) translateZ(0px);
              "
                />
              </div>
              <div
                className="relative w-4 -mt-12 h-[140%]"
                style="background: var(--green-track);"
              >
                <img
                  className="absolute w-6"
                  src="/illustrations/trains/02-train-a-dark.svg"
                  alt=""
                  style="
                left: 50%;
                max-width: initial;
                transform: translateX(-50%) translateY(0px) translateZ(0px);
              "
                />
              </div>
              <div
                className="relative w-4 -mt-12 h-[140%]"
                style="background: var(--green-track);"
              >
                <img
                  className="absolute w-6"
                  src="/illustrations/trains/02-train-c-dark.svg"
                  alt=""
                  style="
                left: 50%;
                max-width: initial;
                transform: translateX(-50%) translateY(0px) translateZ(0px);
              "
                />
              </div>
            </div>
            <div
              className="md:col-span-4 space-y-8"
              style="opacity: 0; transform: translateY(20px) translateZ(0px);"
            >
              <div
                // color="green"
                className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-secondaryBg border-green-100 dark:border-green-200"
                style="box-shadow: rgba(66, 148, 110, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-green-700">
                    Invite your team
                  </p>
                  <p className="text-sm text-gray-600">
                    Better, together. Onboard your team with invite links and
                    user role scopes.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(0deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-secondaryBg border-green-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-green-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-users"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                // color="green"
                className="grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-secondaryBg border-green-100 dark:border-green-200"
                style="box-shadow: rgba(66, 148, 110, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-green-700">
                    Deployment Rollbacks
                  </p>
                  <p className="text-sm text-gray-600">
                    Avoid derailments. One-click, instant rollbacks for every
                    change.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(180deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--green-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-secondaryBg border-green-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-green-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-rotate-ccw"
                      >
                        <path d="M1 4v6h6"></path>
                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="col-start-1 col-end-4 px-5 -ml-5 -mr-5 md:px-8 md:-ml-8 md:-mr-8 relative -mt-16"
        style="
      background: linear-gradient(
          343.07deg,
          rgba(132, 59, 206, 0.06) 5.71%,
          rgba(132, 59, 206, 0) 64.83%
        ),
        transparent;
    "
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden -z-1">
          <img
            src="/illustrations/trains/03-train-incoming-dark.svg"
            alt=""
            style="opacity: 0; transform: scale(0) translateZ(0px);"
          />
        </div>
        <div className="text-center w-full max-w-container mx-auto">
          <p className="flex items-center justify-center mx-auto mb-16 rounded-full border-3 text-4xl w-[72px] h-[72px] border-pink-500 text-pink-500 bg-pink-100">
            3
          </p>
          <p className="text-h3 font-semibold mb-2 text-pink-500">
            Next Stop, Production.
          </p>
          <h2 className="text-large font-bold">Launch and Scale</h2>
          <hr className="w-40 mx-auto my-6 border-pink-500" />
          <p className="text-lg max-w-3xl mx-auto">
            As you push the limits of what is possible, Railway keeps your
            applications on track. Keep your sites seen without costing a
            fortune.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:px-0 lg:px-24 mt-24 md:!grid-cols-12 md:!px-0 pb-44">
            <div
              className="md:col-span-4 space-y-8"
              style="opacity: 0; transform: translateY(20px) translateZ(0px);"
            >
              <div
                color="pink"
                className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-pink-100 dark:border-pink-200"
                style="box-shadow: rgba(132, 59, 206, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-pink-700">
                    Autoscaling
                  </p>
                  <p className="text-sm text-gray-600">
                    Railway scales apps to meet user demand, automagically,
                    based on load.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(90deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-pink-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-pink-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-maximize-2"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                // color="pink"
                className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-pink-100 dark:border-pink-200"
                style="box-shadow: rgba(132, 59, 206, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-pink-700">
                    Production-ready
                  </p>
                  <p className="text-sm text-gray-600">
                    Railway runs on Railway, join us and others serving requests
                    at web scale.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(270deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-pink-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-pink-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="md:col-span-4 space-y-8"
              style="opacity: 0; transform: translateY(20px) translateZ(0px);"
            >
              <div
                // color="pink"
                className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-pink-100 dark:border-pink-200"
                style="box-shadow: rgba(132, 59, 206, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-pink-700">
                    Safe and Sound
                  </p>
                  <p className="text-sm text-gray-600">
                    A secure mission control, without the policy headache.
                    Permissions, 2FA, and more.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(0deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-pink-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-pink-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-lock"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                // color="pink"
                className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-pink-100 dark:border-pink-200"
                style="box-shadow: rgba(132, 59, 206, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-pink-700">
                    +99% Uptime
                  </p>
                  <p className="text-sm text-gray-600">
                    Applications stay on the grid with high availability and
                    high uptime guarantees.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(270deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-pink-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-pink-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-up"
                      >
                        <path d="M12 19V5m-7 7 7-7 7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="md:col-span-4 space-y-8"
              style="opacity: 0; transform: translateY(20px) translateZ(0px);"
            >
              <div
                // color="pink"
                className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-pink-100 dark:border-pink-200"
                style="box-shadow: rgba(132, 59, 206, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-pink-700">
                    Usage Metrics
                  </p>
                  <p className="text-sm text-gray-600">
                    Real-time metrics to debug issues. Slow query added? We’ll
                    show you exactly where.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(180deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-pink-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-pink-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bar-chart-2"
                      >
                        <path d="M18 20V10m-6 10V4M6 20v-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                // color="pink"
                className="col-span-4 grid grid-cols-4 gap-8 relative px-8 pt-8 pb-14 rounded-xl border overflow-hidden text-left bg-background border-pink-100 dark:border-pink-200"
                style="box-shadow: rgba(132, 59, 206, 0.15) 0px 4px 24px;"
              >
                <div className="col-span-3">
                  <p className="text-h5 font-semibold mb-4 text-pink-700">
                    Supreme Support
                  </p>
                  <p className="text-sm text-gray-600">
                    Overcome any challenge with a supporting team ready to
                    respond.
                  </p>
                </div>
                <div className="absolute flex items-center justify-center -bottom-8 -right-8 w-32 h-32">
                  <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                    style="transform: rotate(0deg);"
                  >
                    <path
                      d="M73 6C73 3.23858 75.2386 1 78 1L122 1C124.761 1 127 3.23858 127 6V34C127 36.7614 124.761 39 122 39H78C75.2386 39 73 36.7614 73 34V6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M73 78C73 75.2386 75.2386 73 78 73H122C124.761 73 127 75.2386 127 78V122C127 124.761 124.761 127 122 127H78C75.2386 127 73 124.761 73 122V78Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 6C1 3.23858 3.23858 1 6 1L50 1C52.7614 1 55 3.23858 55 6V50C55 52.7614 52.7614 55 50 55H6C3.23858 55 1 52.7614 1 50L1 6Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M1 94C1 91.2386 3.23858 89 6 89H50C52.7614 89 55 91.2386 55 94V122C55 124.761 52.7614 127 50 127H6C3.23858 127 1 124.761 1 122L1 94Z"
                      stroke="var(--pink-100)"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex items-center justify-center z-10 rounded-full w-24 h-24 border bg-background border-pink-300">
                    <div
                      className="icon-container icon-md w-10 h-10 step-feature-card text-pink-500"
                      aria-hidden="true"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-life-buoy"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24m-4.24-9.9 4.24-4.24m-4.24 4.24 3.53-3.53M4.93 19.07l4.24-4.24"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark col-start-1 col-end-4 -ml-5 -mr-5 md:px-8 md:-ml-8 md:-mr-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 px-0 md:!px-0">
        <div
          as="div"
          className="flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 text-white bg-secondaryBg"
        >
          <p className="text-h3 font-semibold text-left">
            Ideal for any kind of product. <br />
            Such as...
          </p>
        </div>
        <a
          href="https://buildatmos.com/"
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 text-white"
          // style="background-color: rgb(224, 98, 84);"
        >
          <span
            style="
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          position: relative;
          max-width: 100%;
        "
          >
            <span
              style="
            box-sizing: border-box;
            display: block;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            max-width: 100%;
          "
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e"
                style="
              display: block;
              max-width: 100%;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
            "
              />
            </span>
            <img
              alt="Atmos logo"
              srcSet="
            /_next/image?url=%2Fcustomers%2Flogo--atmos.svg&amp;w=48&amp;q=75 1x,
            /_next/image?url=%2Fcustomers%2Flogo--atmos.svg&amp;w=96&amp;q=75 2x
          "
              src="/_next/image?url=%2Fcustomers%2Flogo--atmos.svg&amp;w=96&amp;q=75"
              decoding="async"
              data-nimg="intrinsic"
              style="
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
          "
            />
          </span>
          <p className="text-h5 font-bold mt-4 mb-2">Atmos</p>
          <p className="text-sm">
            Real estate <br />
            home customization
          </p>
        </a>
        <a
          href="https://zora.co/"
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 text-white"
          style="
        background: linear-gradient(
          245.33deg,
          rgb(106, 152, 190) 0%,
          rgb(56, 90, 164) 20.83%,
          rgb(53, 75, 107) 45.58%,
          rgb(71, 48, 36) 69.18%,
          rgb(42, 29, 20) 92.17%
        );
      "
        >
          <span
            style="
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          position: relative;
          max-width: 100%;
        "
          >
            <span
              style="
            box-sizing: border-box;
            display: block;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            max-width: 100%;
          "
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e"
                style="
              display: block;
              max-width: 100%;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
            "
              />
            </span>
            <img
              alt="Zora logo"
              srcSet="
            /_next/image?url=%2Fcustomers%2Flogo-zora.svg&amp;w=48&amp;q=75 1x,
            /_next/image?url=%2Fcustomers%2Flogo-zora.svg&amp;w=96&amp;q=75 2x
          "
              src="/_next/image?url=%2Fcustomers%2Flogo-zora.svg&amp;w=96&amp;q=75"
              decoding="async"
              data-nimg="intrinsic"
              style="
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
          "
            />
          </span>
          <p className="text-h5 font-bold mt-4 mb-2">Zora</p>
          <p className="text-sm">
            Decentralized auctions <br />
            house for NFTs
          </p>
        </a>
        <a
          href="https://www.fion.tech/"
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 text-white"
          // style="background-color: rgb(47, 45, 57);"
        >
          <span
            style="
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          position: relative;
          max-width: 100%;
        "
          >
            <span
              style="
            box-sizing: border-box;
            display: block;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            max-width: 100%;
          "
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e"
                style="
              display: block;
              max-width: 100%;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
            "
              />
            </span>
            <img
              alt="Fion Tech logo"
              srcSet="
            /_next/image?url=%2Fcustomers%2Flogo--fion-tech.svg&amp;w=48&amp;q=75 1x,
            /_next/image?url=%2Fcustomers%2Flogo--fion-tech.svg&amp;w=96&amp;q=75 2x
          "
              src="/_next/image?url=%2Fcustomers%2Flogo--fion-tech.svg&amp;w=96&amp;q=75"
              decoding="async"
              data-nimg="intrinsic"
              style="
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
          "
            />
          </span>
          <p className="text-h5 font-bold mt-4 mb-2">Fion Tech</p>
          <p className="text-sm">
            Machine learning models for <br />
            fire prediction and detection
          </p>
        </a>
        <a
          href="https://operand.ai/"
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 text-white"
          // style="background-color: rgb(83, 82, 96);"
        >
          <span
            style="
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          position: relative;
          max-width: 100%;
        "
          >
            <span
              style="
            box-sizing: border-box;
            display: block;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            max-width: 100%;
          "
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e"
                style="
              display: block;
              max-width: 100%;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
            "
              />
            </span>
            <img
              alt="Operand logo"
              srcSet="
            /_next/image?url=%2Fcustomers%2Flogo--operand.svg&amp;w=48&amp;q=75 1x,
            /_next/image?url=%2Fcustomers%2Flogo--operand.svg&amp;w=96&amp;q=75 2x
          "
              src="/_next/image?url=%2Fcustomers%2Flogo--operand.svg&amp;w=96&amp;q=75"
              decoding="async"
              data-nimg="intrinsic"
              style="
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
          "
            />
          </span>
          <p className="text-h5 font-bold mt-4 mb-2">Operand</p>
          <p className="text-sm">
            Reimagining natural <br />
            language interfaces
          </p>
        </a>
        <a
          href="https://stepzen.com/"
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 text-white"
          // style="background-color: rgb(25, 37, 63);"
        >
          <span
            style="
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          position: relative;
          max-width: 100%;
        "
          >
            <span
              style="
            box-sizing: border-box;
            display: block;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            max-width: 100%;
          "
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e"
                style="
              display: block;
              max-width: 100%;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
            "
              />
            </span>
            <img
              alt="Stepzen logo"
              srcSet="
            /_next/image?url=%2Fcustomers%2Flogo--stepzen.svg&amp;w=48&amp;q=75 1x,
            /_next/image?url=%2Fcustomers%2Flogo--stepzen.svg&amp;w=96&amp;q=75 2x
          "
              src="/_next/image?url=%2Fcustomers%2Flogo--stepzen.svg&amp;w=96&amp;q=75"
              decoding="async"
              data-nimg="intrinsic"
              style="
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
          "
            />
          </span>
          <p className="text-h5 font-bold mt-4 mb-2">StepZen</p>
          <p className="text-sm">
            Easy GraphQL endpoints <br />
            for application data
          </p>
        </a>
        <a
          href="https://www.slip.so/"
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 text-white"
          // style="background-color: rgb(41, 46, 76);"
        >
          <span
            style="
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          position: relative;
          max-width: 100%;
        "
          >
            <span
              style="
            box-sizing: border-box;
            display: block;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            max-width: 100%;
          "
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e"
                style="
              display: block;
              max-width: 100%;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
            "
              />
            </span>
            <img
              alt="Slip logo"
              srcSet="
            /_next/image?url=%2Fcustomers%2Flogo--slip.svg&amp;w=48&amp;q=75 1x,
            /_next/image?url=%2Fcustomers%2Flogo--slip.svg&amp;w=96&amp;q=75 2x
          "
              src="/_next/image?url=%2Fcustomers%2Flogo--slip.svg&amp;w=96&amp;q=75"
              decoding="async"
              data-nimg="intrinsic"
              style="
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
          "
            />
          </span>
          <p className="text-h5 font-bold mt-4 mb-2">Slip</p>
          <p className="text-sm">
            Easily build and sell interactive <br />
            programming courses
          </p>
        </a>
        <div
          id="div"
          className="flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 text-white bg-secondaryBg"
        >
          <p className="text-h3 font-semibold text-left">and many more...</p>
        </div>
      </section>
      <section className="py-16 md:py-44 light:bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FAFAFA_100%)] dark:background[none]">
        <div className="flex flex-col space-y-4 items-center mb-16 px-5 text-center">
          <p className="text-jumbo font-bold">First-Class Features</p>
          <p className="text-xl text-gray-600">
            A dashboard that provides unparalleled hospitality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 px-5 mx-auto max-w-container md:px-8">
          <div className="md:col-span-2 rounded-2xl overflow-hidden xl:min-h-[420px] px-8 pt-12 lg:pt-0 lg:px-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_1fr] gap-8 md:gap-8 lg:gap-24 items-center bg-[linear-gradient(125.85deg,_#E6F1F7_5.4%,_#E2E7F3_51.6%,_#E2E1F1_92.37%)] dark:bg-[linear-gradient(141.64deg,_#26066B_3.52%,_#0E3551_66.02%,_#052847_88.03%)]">
            <div className="md:pb-8 lg:py-12 lg:pb-12">
              <p className="text-h1 font-semibold mb-5">Keyboard Friendly</p>
              <p className="text-xl mb-7 text-gray-600">
                Command the interface at your fingertips. Go to any page, create
                an object, secret, and much more.
              </p>
              <button className="flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 font-medium">
                <span className="inline-block">
                  <p className="inline-block text-center rounded py-1 px-2 min-w-7 h-7 border border-gray-200 text-sm bg-white bg-opacity-25 border-none mr-2">
                    Ctrl+K
                  </p>
                  Show Palette
                </span>
              </button>
            </div>
            <div className="flex flex-col justify-end h-full md:pt-8">
              <img
                src="/illustrations/features/command palette - light.svg"
                alt="Railway Command Palette"
                className="max-w-full md:w-[500px] -mb-2 dark:hidden"
              />
              <img
                src="/illustrations/features/command palette - dark.svg"
                alt="Railway Command Palette"
                className="max-w-full md:w-[500px] -mb-2 hidden dark:block"
              />
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] rounded-lg gap-8 md:gap-10 overflow-hidden bg-[linear-gradient(166.95deg,_#F3E8ED_-2.86%,_#E9E7FD_139.46%)] dark:bg-[linear-gradient(200.41deg,_rgba(99,_29,_62,_0.4)_-5.53%,_rgba(35,_98,_111,_0.5)_97.77%)]">
            <div className="pt-11 px-8 md:px-10">
              <p className="text-h3 font-semibold mb-5">Secrets Management</p>
              <p className="text-lg text-gray-500 mb-6">
                Maintain and sync different variables from development, staging,
                to prod.
              </p>
              <a
                href="https://docs.railway.app"
                target="_blank"
                rel="noreferrer"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block max-w-max text-pink-600 hover:underline"
              >
                View Docs -&gt;
              </a>
            </div>
            <div className="relative flex justify-end items-end pl-10">
              <div className="max-w-full w-full h-full -mr-px dark:hidden">
                <span
                  style="
                box-sizing: border-box;
                display: block;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
                position: relative;
              "
                >
                  <span
                    style="
                  box-sizing: border-box;
                  display: block;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 1;
                  border: 0px;
                  margin: 0px;
                  padding: 56.746% 0px 0px;
                "
                  ></span>
                  <img
                    alt="Railway Secrets Management"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="responsive"
                    style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                "
                  />
                  <noscript></noscript>
                </span>
              </div>
              <div className="max-w-full w-full h-full -mr-px light:hidden">
                <span
                  style="
                box-sizing: border-box;
                display: block;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
                position: relative;
              "
                >
                  <span
                    style="
                  box-sizing: border-box;
                  display: block;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 1;
                  border: 0px;
                  margin: 0px;
                  padding: 56.746% 0px 0px;
                "
                  ></span>
                  <img
                    alt="Railway Secrets Management"
                    sizes="100vw"
                    srcSet="
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=640&amp;q=100   640w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=750&amp;q=100   750w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=828&amp;q=100   828w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=1080&amp;q=100 1080w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=1200&amp;q=100 1200w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=1920&amp;q=100 1920w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=2048&amp;q=100 2048w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=3840&amp;q=100 3840w
                "
                    src="/_next/image?url=%2Fillustrations%2Ffeatures%2Fvariables%20-%20dark.svg&amp;w=3840&amp;q=100"
                    decoding="async"
                    data-nimg="responsive"
                    style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                "
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] rounded-lg gap-8 md:gap-10 overflow-hidden bg-[linear-gradient(209.48deg,_#F3F2E9_-0.82%,_#E9F3E9_77.43%)] dark:bg-[linear-gradient(110.1deg,_rgba(46,_29,_99,_0.4)_0%,_#3D0F34_100%)]">
            <div className="pt-10 px-8 md:px-10">
              <p className="text-h3 font-semibold mb-5">Usage-based Pricing</p>
              <p className="text-lg text-gray-500 mb-6">
                Extend your runway. Railway bills only for compute performed on
                the platform.
              </p>
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block text-pink-600 hover:underline"
                href="/pricing"
              >
                View our Plans -&gt;
              </a>
            </div>
            <div className="relative px-10 flex items-end">
              <div className="max-w-full w-full h-full -mb-2 dark:hidden">
                <span
                  style="
                box-sizing: border-box;
                display: block;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
                position: relative;
              "
                >
                  <span
                    style="
                  box-sizing: border-box;
                  display: block;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 1;
                  border: 0px;
                  margin: 0px;
                  padding: 61.6379% 0px 0px;
                "
                  ></span>
                  <img
                    alt="Railway Project Usage"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="responsive"
                    style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                "
                  />
                  <noscript></noscript>
                </span>
              </div>
              <div className="max-w-full w-full h-full -mb-2 light:hidden">
                <span
                  style="
                box-sizing: border-box;
                display: block;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
                position: relative;
              "
                >
                  <span
                    style="
                  box-sizing: border-box;
                  display: block;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 1;
                  border: 0px;
                  margin: 0px;
                  padding: 61.6379% 0px 0px;
                "
                  ></span>
                  <img
                    alt="Railway Project Usage"
                    sizes="100vw"
                    srcSet="
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=640&amp;q=100   640w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=750&amp;q=100   750w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=828&amp;q=100   828w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=1080&amp;q=100 1080w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=1200&amp;q=100 1200w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=1920&amp;q=100 1920w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=2048&amp;q=100 2048w,
                  /_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=3840&amp;q=100 3840w
                "
                    src="/_next/image?url=%2Fillustrations%2Ffeatures%2Fproject%20usage%20-%20dark.svg&amp;w=3840&amp;q=100"
                    decoding="async"
                    data-nimg="responsive"
                    style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                "
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden md:col-span-2 rounded-2xl grid items-center grid-cols-1 gap-4 md:grid-cols-2 bg-[linear-gradient(293.27deg,_#F3E2E2_13.28%,_#E6EAE6_55.92%,_#DAF0F1_95.97%)] dark:bg-[linear-gradient(108.49deg,_rgba(3,_56,_99,_0.3)_0%,_rgba(20,_107,_77,_0.3)_100%);]">
            <div className="py-12 px-8 md:py-16 md:pl-16 md:pr-0">
              <p className="text-h2 font-semibold mb-5 max-w-md">
                Start or Extend your Infrastructure with One Click.
              </p>
              <p className="text-xl mb-7 text-gray-600">
                Choose a template from our selection of production-ready
                applications.
              </p>
              <a
                className="flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 max-w-max font-semibold"
                href="/templates"
              >
                <div
                  className="icon-container icon-md !w-5 !h-5 text-white"
                  aria-hidden="true"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"></path>
                  </svg>
                </div>
                <span className="inline-block">View our 75+ Templates</span>
              </a>
            </div>
            <div
              className="relative w-full h-full"
              style="
            background-image: url('/illustrations/features/logo grid - dark.svg');
            background-position-y: -16px;
          "
            ></div>
          </div>
        </div>
      </section>
      <section
        className="dark col-start-1 col-end-4 px-5 -ml-5 -mr-5 md:px-8 md:-ml-8 md:-mr-8 pt-24 text-white bg-background"
        style="
      background-image: linear-gradient(
          38.73deg,
          rgba(204, 0, 187, 0.25) 0%,
          rgba(201, 32, 184, 0) 50%
        ),
        linear-gradient(
          141.27deg,
          rgba(0, 70, 209, 0) 50%,
          rgba(0, 70, 209, 0.25) 100%
        );
    "
      >
        <header className="text-center">
          <h2 className="text-large font-bold mb-6">Loved by Developers</h2>
          <p className="text-lg text-gray-500 mb-16">
            Join 2,500+ Devs Building with Railway on
            <a
              href="https://discord.gg/railway"
              target="_blank"
              rel="noreferrer"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 underline hover:text-pink-600"
            >
              Discord -&gt;
            </a>
          </p>
        </header>
        <div className="w-full max-w-container mx-auto mb-24">
          <div className="dark">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center">
              <div className="space-y-8 md:block">
                <a
                  href="https://twitter.com/pulpmint/status/1388067007183028224"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for Manmohan Singh"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fpulpmint.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fpulpmint.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fpulpmint.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Manmohan Singh</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @pulpmint
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className="">I just tries </span>
                        <span className="text-pink-600">@Railway_App</span>
                        <span className=""> &amp; </span>
                        <span className="text-pink-600">@prisma</span>
                        <span className="">
                          for the very first time and it{"'"}s just so easy to use!
                          🔥💣✨
                        </span>
                      </span>
                      <br />
                      <span className="inline-block">
                        <span className="">Never found working with </span>
                        <span className="text-pink-600">#PostgreSQL</span>
                        <span className=""> so interesting! Love it!</span>
                      </span>
                    </p>
                  </article>
                </a>
                <a
                  href="https://twitter.com/CerchieLucia/status/1380269066129055744"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for Lucia Cerchie 🦎"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2FCerchieLucia.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2FCerchieLucia.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2FCerchieLucia.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Lucia Cerchie 🦎</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @CerchieLucia
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className="">exploring </span>
                        <span className="text-pink-600">@Railway_App</span>
                        <span className="">
                          for a project of mine-- pretty cool and the team is
                          super helpful. What new tools have ou used this week?
                          🤓
                        </span>
                      </span>
                    </p>
                  </article>
                </a>
                <a
                  href="https://twitter.com/flaviocopes/status/1381993265914855427"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for flavio"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fflaviocopes.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fflaviocopes.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fflaviocopes.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">flavio</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @flaviocopes
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className="">I{"["}m using </span>
                        <span className="text-pink-600">@Railway_App</span>
                        <span className="">
                          to get a PostgreSQL database in the cloud and tbh it
                          feels like magic
                        </span>
                      </span>
                    </p>
                  </article>
                </a>
              </div>
              <div className="space-y-8 md:block hidden">
                <a
                  href="https://twitter.com/steventey/status/1403389059834187784"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for Steven Tey"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fsteventey.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fsteventey.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fsteventey.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Steven Tey</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @steventey
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className="">
                          Just provisioned my first Postgres instance on{" "}
                        </span>
                        <span className="text-pink-600">@Railway_App</span>
                        <span className="">
                          and holy sh*t, the experience was incredible.
                        </span>
                      </span>
                      <br />
                      <span className="inline-block">
                        <span className="">
                          The fact that I was able to provision a DB in
                          literally 10 seconds without creating an account and
                          "claiming" it afterward is just *chef{"'"}s kiss*👌
                        </span>
                      </span>
                      <br />
                      <span className="inline-block">
                        <span className="">Amazing work, </span>
                        <span className="text-pink-600">@JustJake</span>
                        <span className="">!</span>
                      </span>
                    </p>
                  </article>
                </a>
                <a
                  href="https://twitter.com/jasonljin/status/1438626769209204740"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for Jason Jin 🌓"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fjasonljin.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fjasonljin.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fjasonljin.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Jason Jin 🌓</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @jasonljin
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className="">Have been using </span>
                        <span className="text-pink-600">@Railway</span>
                        <span className=""> for a new internal tool at </span>
                        <span className="text-pink-600">@BioloopSleep</span>
                        <span className="">.</span>
                      </span>
                      <br />
                      <span className="inline-block">
                        <span className="">It’s pure magic. 🤯</span>
                      </span>
                      <br />
                      <span className="inline-block">
                        <span className="">
                          Everything is one-click, and it just works. Excited
                          for the future of software! ⚡️
                        </span>
                      </span>
                    </p>
                  </article>
                </a>
                <a
                  href="https://twitter.com/faisal_sayed05/status/1390668404604891147"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for Fayd ⠕"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Ffaisal_sayed05.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Ffaisal_sayed05.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Ffaisal_sayed05.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Fayd ⠕</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @faisal_sayed05
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className="">WHATT </span>
                        <span className="text-pink-600">@Railway_App</span>
                        <span className="">
                          how are you so easy!! Loved it!
                        </span>
                      </span>
                    </p>
                  </article>
                </a>
              </div>
              <div className="space-y-8 md:block hidden">
                <a
                  href="https://twitter.com/mojombo/status/1381659529314590720"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for Tom Preston-Werner"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fmojombo.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fmojombo.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fmojombo.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Tom Preston-Werner</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @mojombo
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className="">
                          I dare you to set up a Postgres database faster than
                          you can with{" "}
                        </span>
                        <span className="text-pink-600">@Railway_App</span>
                        <span className="">
                          . You can even spin one up for free without a user
                          account (for 7 days).
                        </span>
                      </span>
                      <br />
                      <span className="inline-block">
                        <span className="">
                          I'm a happy investor; they are pushing the
                          infrastructure envelope big time!
                        </span>
                      </span>
                    </p>
                  </article>
                </a>
                <a
                  href="https://twitter.com/cusdis_hq/status/1385998841426550787"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for CusdisHQ"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fcusdis_hq.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fcusdis_hq.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2Fcusdis_hq.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">CusdisHQ</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @cusdis_hq
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className="">Hi. We recommend using </span>
                        <span className="text-pink-600">@Railway_App</span>
                        <span className="">
                          which is extremely easy to use! We are going to
                          migrate our hosted service to Railway too.
                        </span>
                      </span>
                    </p>
                  </article>
                </a>
                <a
                  href="https://twitter.com/FerryColum/status/1381403388798238722"
                  target="_blank"
                  rel="noreferrer"
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 block"
                >
                  <article className="p-6 rounded-lg border text-left border-gray-100 bg-background">
                    <header className="flex space-x-3 mb-4">
                      <img
                        alt="Twitter avatar for Colum Ferry"
                        loading="lazy"
                        width="39"
                        height="39"
                        decoding="async"
                        data-nimg="1"
                        className="w-8 h-8 my-[2px] rounded-full"
                        srcSet="
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2FFerryColum.jpg&amp;w=48&amp;q=75 1x,
                      /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2FFerryColum.jpg&amp;w=96&amp;q=75 2x
                    "
                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frailway%2Fimage%2Ftwitter_name%2FFerryColum.jpg&amp;w=96&amp;q=75"
                        // style="color: transparent;"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">Colum Ferry</p>
                        <p className="text-xs text-gray-600 font-medium">
                          @FerryColum
                        </p>
                      </div>
                    </header>
                    <p className="text-sm space-y-4">
                      <span className="inline-block">
                        <span className=""></span>
                        <span className="text-pink-600">@Railway_App</span>
                        <span className="">
                          deserves a lot more recognition! Out of the box
                          Blitz.js support?? Unreal 🙌
                        </span>
                      </span>
                    </p>
                  </article>
                </a>
              </div>
            </div>
            <button className="mt-8 block md:hidden shadow-dreamyDropShadow py-3 px-11 max-w-max mx-auto bg-transparent rounded-full focus:outline-none">
              View More
            </button>
          </div>
        </div>
        <div className="max-w-container mx-auto mb-24 flex flex-col items-center text-center w-full py-16 px-8 rounded-xl border border-white border-opacity-10 bg-white bg-opacity-5">
          <h2 className="text-large font-bold mb-6 max-w-md">
            Deploy an App to Production in Minutes
          </h2>
          <p className="text-xl text-gray-500 max-w-lg mb-8">
            Join thousands of people deploying hundreds of thousands of
            applications effortlessly on Railway
          </p>
          <a
            className="flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 max-w-max"
            href="/new"
          >
            <span className="inline-block">Click this Button</span>
          </a>
        </div>
        <footer className="pt-12 pb-12 sm:pb-14">
          <div className="px-5 md:px-8 grid grid-cols-2 sm:grid-cols-12 gap-8 sm:gap-4 lg:gap-16 max-w-container mx-auto">
            <div className="hidden sm:flex col-span-3 lg:col-span-4 flex-col justify-between">
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex items-center space-x-3"
                href="/"
              >
                <svg
                  className="min-w-[32px] min-h-[2.5rem] logo w-6 h-6 md:w-8 md:h-8"
                  aria-label="Railway Logo"
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                >
                  <path
                    d="M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z"
                    fill="#000"
                  ></path>
                  <path
                    d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z"
                    fill="#000"
                  ></path>
                </svg>
              </a>
              <div className="text-xs text-gray-500 w-full">
                Copyright © 2023 Railway Corp. <br />
                All rights reserved.
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-xs font-bold uppercase text-gray-500 mb-4">
                Product
              </p>
              <ul className="text-gray-500 space-y-4">
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/changelog"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/templates"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="https://feedback.railway.app"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/open-source-kickback"
                  >
                    OSS Kickback
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/heroku"
                  >
                    Migrate from Heroku
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-xs font-bold uppercase text-gray-500 mb-4">
                Company
              </p>
              <ul className="text-gray-500 space-y-4">
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.railway.app"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://shop.railway.app"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-xs font-bold uppercase text-gray-500 mb-4">
                Contact
              </p>
              <ul className="text-gray-500 space-y-4">
                <li>
                  <a
                    href="https://discord.gg/railway"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Railway"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/railwayapp"
                    target="_blank"
                    rel="noreferrer"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="mailto:team@railway.app"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <p className="text-xs font-bold uppercase text-gray-500 mb-4">
                Legal
              </p>
              <ul className="text-gray-500 space-y-4">
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/legal/fair-use"
                  >
                    Fair Use
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/legal/privacy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/legal/terms"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 hover:text-foreground"
                    href="/bug-bounty"
                  >
                    Bug Bounty Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:hidden mt-8 text-center space-y-4 items-center">
            <a
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex items-center space-x-3"
              href="/"
            >
              <svg
                className="min-w-[32px] min-h-[2.5rem] logo w-6 h-6 md:w-8 md:h-8"
                aria-label="Railway Logo"
                width="1024"
                height="1024"
                viewBox="0 0 1024 1024"
                fill="none"
              >
                <path
                  d="M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z"
                  fill="#000"
                ></path>
                <path
                  d="M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z"
                  fill="#000"
                ></path>
              </svg>
            </a>
            <div className="text-xs text-gray-500 w-full">
              Copyright © 2023 Railway Corp. <br />
              All rights reserved.
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Main;
