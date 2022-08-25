import React from "react"
import { s1 } from "../common/utils/dummy/linksfooter"

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="fortex-container py-16 mx-auto px-10 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <div className=" text-left lg:text-left sm:text-left border-t border-gray-400 ">
            <nav className="pt-4 pb-10">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-white text-left w-full transition hover:text-white/75"
                    href="#"
                  >
                    Platform
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-left lg:text-left border-t border-gray-400 mb-20 lg:mb-0">
            <nav className="pt-4">
              <ul className="space-y-4 text-sm">
                {s1.map(item => (
                  <li className="border-b border-gray-400 pb-4">
                    <a
                      className="text-white transition hover:text-white/75"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="text-left lg:text-left border-t border-gray-400 md:ml-0 lg:ml-20 ">
            <nav className="pt-4">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    Platform
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-left lg:text-left sm:text-left border-t border-gray-400">
            <nav className="pt-4">
              <ul className="space-y-4 text-sm">
                {s1.map(item => (
                  <li className="border-b border-gray-400 pb-4">
                    <a
                      className="text-white transition hover:text-white/75"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
