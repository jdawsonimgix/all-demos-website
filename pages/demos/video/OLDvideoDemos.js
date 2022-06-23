import React from 'react'
import Image from 'next/image'
import { ExternalLinkIcon } from '@heroicons/react/solid'

const ixvideo = () => {
  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      {/* ========Header======== */}
      <div className="relative bg-gray-800 sm:rounded-2xl">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            alt=""
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300"></h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your videos, faster.
            </p>
            <p className="mt-3 text-lg text-gray-300">
              imgix transforms, optimizes, and intelligently caches your entire
              asset library for faster pages, higher engagement, and a simpler
              workflow.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="https://dashboard.imgix.com/sign-up"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Try Imgix for FREE
                  <ExternalLinkIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========Cards======== */}
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href="https://gracious-gates-e1571d.netlify.app/"
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <Image src="/HLSvsMP4.png" alt="HLSvsMP4" layout="fill" />
                {/* <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                ></img> */}
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Video
                </span>
                <h2 className="mt-2 mb-2  font-bold">HLS vs MP4</h2>
                <p className="text-sm">
                  Compare the video experience between HLS and MP4
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href="https://github.com/jdawsonimgix/js-videojs-suggestedVideoEndcap-with-imgix"
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                ></img>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Video
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  HLS + Suggested Video Endcap Plugin
                </h2>
                <p className="text-sm">
                  Control ads at the end of your videos while using HLS video.
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href="https://codepen.io/jdawsonimgix/pen/OJjywgL"
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                ></img>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Video
                </span>
                <h2 className="mt-2 mb-2  font-bold">HLS using Plyr</h2>
                <p className="text-sm">
                  Play HLS videos with the Plyr media player so you can
                  customize the video overlay and add captioning.
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href="https://stackblitz.com/edit/react-ts-c3ncwn?file=App.tsx"
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                ></img>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Video
                </span>
                <h2 className="mt-2 mb-2  font-bold">ix-video for React</h2>
                <p className="text-sm">
                  Use the Imgix video player to quickly and easily add video to
                  your web application.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ixvideo
