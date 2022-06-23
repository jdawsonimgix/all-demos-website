import React from 'react'
import Image from 'next/image'
import { ExternalLinkIcon } from '@heroicons/react/solid'

const demosList = [
  {
    header: 'React SDK + LazysizesJS',
    href:
      'https://codesandbox.io/s/lazysizesjs-and-react-imgix-hvdnh?file=/src/App.js',
    description:
      'An example of how to easily add lazy loading to your website with LazysizesJS.',
    image: '/mountains.avif',
    tag: 'SDK',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
  {
    header: 'Angular and Imgix',
    href: 'https://codesandbox.io/s/angular-sdk-imgix-iygbq',
    description: 'An example of how to use Imgix with Angular',
    image: '/mountains.avif',
    tag: 'SDK',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
  {
    header: 'img-Management',
    href:
      'https://codesandbox.io/s/compassionate-jackson-c25j2l?file=/src/App.js',
    description:
      'An example for how to call the management API using imgix-management-js to programmatically configure Sources and perform activities related to their assets',
    image: '/mountains.avif',
    tag: 'SDK',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
]

const sdkDemos = () => {
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

      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* ========Cards======== */}
          {demosList.map((demo) => (
            <div
              key={demo.header}
              className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
            >
              <a
                href={demo.href}
                className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div className="relative pb-48 overflow-hidden">
                  <Image
                    src={demo.image}
                    alt="DemoImage"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 leading-none bg-purple-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {demo.tag}
                  </span>
                  <h2 className="mt-2 mb-2  font-bold">{demo.header}</h2>
                  <p className="text-sm">{demo.description}</p>
                  <div className="pt-2 flex items-center">
                    <img
                      className="w-9 h-9 rounded-full mr-4"
                      src={demo.authorImage}
                      alt="AuthorImage"
                    ></img>
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        {demo.author}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default sdkDemos
