import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <section>
          <div className="h-full px-8 py-24 mx-auto lg:py-32 md:px-12 lg:px-32 max-w-7xl">
            <div className="text-center">
              <p className="text-4xl font-semibold leading-relaxed tracking-tighter text-gray-800 lg:text-7xl">
                Help to build Bootstrap startup together,
                <span className="text-[#ED9B40] lg:block">
                  for everyone by everyone
                </span>
              </p>
              <p className="mt-4 text-base text-gray-500">
                The fastest method for working together
                <span className="lg:block">
                  {" "}
                  on staging and temporary environments.
                </span>
              </p>
              <div className="flex flex-col items-center justify-center gap-3 mt-10 md:flex-row">
                {/* <a
                  className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600 md:w-auto"
                  href="/#features"
                >
                  Learn more
                </a> */}
                <a
                  className="flex items-center justify-center w-full h-10 px-4 py-2 text-sm text-blue-500 transition-all bg-white border border-gray-300 rounded-lg md:w-auto md:font-semibold hover:text-blue-400"
                  href="/homepage"
                >
                  Get Started Now →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="scroll-mt-12" id="features">
          <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl font-semibold tracking-tighter text-gray-900">
                Meet InventorSpott.
              </h2>
              <p className="mt-4 text-base text-gray-500">
                A platform to sell your valuable assets
                <br />
                to potential Startup Founders
              </p>
            </div>
            <div className="grid gap-4 mt-12 md:grid-cols-3">
              <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                <div className="flex items-center justify-center size-12 font-semibold text-white bg-blue-500 rounded-full">
                  1
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Enlist the best !!
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Assets like your best project which can help startups to
                    bootstrap their MVP. Let's help each and everyone to grow ❤️
                    <br />
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                <div className="flex items-center justify-center size-12 font-semibold text-white bg-blue-500 rounded-full">
                  2
                </div>
                <div>
                  <div className="font-medium text-gray-900">Rank up !!</div>
                  <p className="mt-2 text-sm text-gray-500">
                    Pop out in the eyes of the founders through upvotes !! Rank
                    up your best assets and make them visible to everyone.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8 rounded-xl bg-gray-50">
                <div className="flex items-center justify-center size-12 font-semibold text-white bg-blue-500 rounded-full">
                  3
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Discuss, Consult & Buy !!
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Discuss about the present features of the project, prices of
                    the asset and buy them with a single click. it's that simple
                    with @InventorSpott !!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="max-w-xl mx-auto">
              <div>
                <h2 className="text-4xl font-semibold tracking-tighter text-gray-900">
                  A quicker way for awareness.
                </h2>
                <p className="mt-4 text-base text-gray-500">
                  Reasons why InventorSpott exists.
                </p>
              </div>
              <div className="flex flex-col gap-8 mt-12">
                <div>
                  <p className="font-medium text-gray-900">
                    ⏤ Building exceptional products requires collaboration
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Achieving excellence in developing a SaaS necessitates a
                    collaborative effort, and InventorSpot unites your team to refine
                    the actual product delivered to users.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    ⏤ Blazing fast discussions and callouts
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    InventorSpott streamlines the iterative process for SaaS creators
                    and stakeholders, reducing the dependency on prolonged
                    meetings and extensive review cycles.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    ⏤ Diversify the culture of bootstrapping
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    InventorSpott dosen't only have place for SaaS founders and developers, we got some video creators and many more professions to help any startup bootstrap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="p-8 text-center border lg:p-20 bg-gray-50 rounded-xl">
              <p className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-7xl">
                We are about <span className="md:block">to launching soon</span>
              </p>
              <p className="mt-4 text-base text-gray-500">
                We're onboarding users soon !!
                <span className="md:block">
                  Join the waitlist to be the first to try out Saasify.
                </span>
              </p>
              <form className="max-w-sm mx-auto mt-8">
                <div className="flex flex-col gap-2 lg:flex-row">
                  <label className="sr-only" htmlFor="email-address">
                    Email address
                  </label>
                  <input
                    autoComplete="email"
                    className="block w-full h-10 px-4 py-2 text-blue-500 placeholder-gray-300 duration-200 border border-gray-300 rounded-lg appearance-none bg-chalk focus:border-gray-300 focus:outline-none focus:ring-gray-300 sm:text-sm"
                    id="email-address"
                    name="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                  <button
                    className="flex items-center justify-center h-10 px-4 py-2 text-sm font-semibold text-white transition-all bg-[#ED9B40] rounded-lg shrink-0 hover:bg-blue-600"
                    type="submit"
                  >
                    Join the waitlist
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer>
          <div className="h-full px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="pt-12 border-t border-gray-300 xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="text-black">
                <div className="inline-flex items-center gap-3">
                  <p className="text-2xl font-bold uppercase">InventorSpott</p>
                </div>
                
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12 lg:grid-cols-3 lg:mt-0 xl:col-span-2">
                <div>
                  <h3 className="text-black">Information</h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <a
                        href="#_"
                        className="text-sm text-gray-500 hover:text-black"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-black">Socials</h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <a
                        href="https://twitter.com/lexingtonthemes"
                        className="text-sm text-gray-500 hover:text-black"
                      >
                        @inventorspott
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/Mike_Andreuzza"
                        className="text-sm text-gray-500 hover:text-black"
                      >
                        @Hi_Mrinal
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-black">Premium Membership</h3>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <a
                        href="https://lexingtonthemes.com/"
                        className="text-sm text-gray-500 hover:text-black"
                      >
                        More Info in About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-12 md:flex-row md:items-center md:justify-between">
              <p className="text-left">
                <span className="mx-auto mt-2 text-sm text-gray-500 lg:mx-0">
                  Made by : {" "}
                  <a
                    className="text-blue-500 hover:text-blue-600"
                    href="https://mrinal-portfolio.vercel.app"
                  >
                    Mrinal Pramanick
                  </a>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
