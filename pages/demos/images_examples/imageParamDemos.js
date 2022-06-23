import React from 'react'
import Image from 'next/image'
import { ExternalLinkIcon } from '@heroicons/react/solid'

const demosList = [
  {
    header: '3D View',
    href: 'https://codesandbox.io/s/imgix-calling-multiple-images-chakra-vu6to',
    description:
      'Use 3rd Party Chakra UI to call on multiple images to create a spinning 3D image',
    image: '/mountains.avif',
    tag: 'Image-Parameters',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
  {
    header: 'Custom Borders',
    href: 'https://codesandbox.io/s/cnizz',
    description: 'Easily add borders to images with simple parameters',
    image: '/mountains.avif',
    tag: 'Image-Parameters',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
  {
    header: 'Unsplash Borders',
    href:
      'https://sandbox.imgix.com/view?url=https%3A%2F%2Ftom.imgix.net%2F1x1_motif.png%3Ftxt-align%3Dtop%252Cleft%26txt-pad%3D25%26txt-color%3Dgrey%26txt64%3DQ29sbGVjdGlvbg%26blend-pad%3D50%26blend-align%3Dmiddle%252Cright%26blend64%3DaHR0cHM6Ly90b20uaW1naXgubmV0LzF4MV91bnNwbGFzaC5wbmc_dz0zMzQmYmc9d2hpdGUmZml0PWNyb3AmYXI9MSUzQTImbWFyazY0PWFIUjBjSE02THk5cGJXRm5aWE11ZFc1emNHeGhjMmd1WTI5dEwzQm9iM1J2TFRFMk16UTNPVEEzTmpreU16WXRNbUU0TWpRM016Vm1NelV4UDJacGREMWpjbTl3Sm1OeWIzQTlabUZqWlhNc1pXUm5aWE1tWVhJOU1Ub3gmbWFyay13PTEmbWFyay1hbGlnbj1ib3R0b20lMkNjZW50ZXImYmxlbmQ2ND1hSFIwY0hNNkx5OXBiV0ZuWlhNdWRXNXpjR3hoYzJndVkyOXRMM0JvYjNSdkxURTJNelEzTWpVek5qSXdPRE10TURrd04ySXpZVGxpTlRreFAyWnBkRDFqY205d0ptTnliM0E5Wm1GalpYTXNaV1JuWlhNbVlYSTlNVG94JmJsZW5kLXc9MSZibGVuZC1hbGlnbj10b3AlMkNjZW50ZXImYmxlbmQtbW9kZT1ub3JtYWwmYmxlbmQtcGFkPTU%26blend-mode%3Dnormal%26mark-pad%3D50%26mark-align%3Dmiddle%252Cleft%26mark-w%3D.72%26mark64%3DaHR0cHM6Ly91bnNwbGFzaC5pbWdpeC5uZXQvcGhvdG8tMTYzNDgyNDQxOTQxMC04NTk0YWE2NTY2NjE_dz02MDAmYXI9NCUzQTMmY3JvcD1mYWNlcyUyQ2VkZ2VzJmZpdD1jcm9wJm1hcms2ND1hSFIwY0hNNkx5OTBiMjB1YVcxbmFYZ3VibVYwTDFWdWMzQnNZWE5vWDB4dloyOWZSblZzYkY5WGFHbDBaVjlYWldJdWNHNW4mbWFyay13PS4yJm1hcmstYWxpZ249dG9wJTJDbGVmdCZtYXJrLXBhZD0xMA%26bg%3Dwhite%26w%3D1318%26h%3D742%26fit%3Dcrop',
    description:
      'Create layer on layer of multiple images and display them as a collage',
    image: '/mountains.avif',
    tag: 'Image-Parameters',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
  {
    header: 'Multiple Lines of Text on Images',
    href:
      'https://sandbox.imgix.com/view?hasAgreedToUploadTerms=1&url=https%3A%2F%2Fsandbox-uploads.imgix.net%2Fu%2F1636068636-9db46d2b915af6f18a2747608d7648a0%3Fw%3D900%26txt64%3DQ29va3dhcmUgc2V0cw%26txt-size%3D40%26txt-align%3Dtop%252Cleft%26fm%3Dpng%26txt-font%3DAvenir%2520Next%2520Condensed%26txt-pad%3D20%26blend64%3DaHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L350ZXh0P2ZtPXBuZyZ3PTYwMCZ0eHQtZm9udD1BdmVuaXIlMjBOZXh0JTIwQ29uZGVuc2VkJnR4dDY0PWRXNWtaWElnSkRFd01BJnR4dC1wYWQ9MjAmdHh0LXNpemU9NDA%26blend-mode%3Dnormal%26blend-align%3Dtop%252Cleft%26blend-y%3D30',
    description: 'Easily add multiple lines of text to an image',
    image: '/mountains.avif',
    tag: 'Image-Parameters',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
  {
    header: 'Add Logo to Images',
    href:
      'https://sandbox.imgix.com/view?hasAgreedToUploadTerms=1&url=https%3A%2F%2Fsandbox-uploads.imgix.net%2Fu%2F1637015137-42c88ce1d8a4bbc16ec3322e523a1c41%3Fmark-pad%3D10%26mark64%3DaHR0cHM6Ly9zYW5kYm94LXVwbG9hZHMuaW1naXgubmV0L3UvMTYzNzAxNTIxMi01ODZjOGFjMDFlYmI0ZTBiNGM2MTI3MDljMjVjNDgwOT93PTEwMA%26w%3D600',
    description: 'Easily add a logo to an existing image',
    image: '/mountains.avif',
    tag: 'Image-Parameters',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
  {
    header: 'Remove Empty Space and Aspect Ratio',
    href:
      'https://jdawson.imgix.net/1x1_motif.png?w=687&h=687&bg=white&mark64=aHR0cHM6Ly9wcm9mb3J0by13ZWJzaG9wLmltZ2l4Lm5ldC9tZWRpYS9jYXRhbG9nL3Byb2R1Y3QvNS8wLzUwMjAxMGJsYWNrZnJvbnQucG5nP2F1dG89Zm9ybWF0LGNvbXByZXNzJmZpdD1maWxsJmZpbGwtY29sb3I9MGZmZiZ0cmltPWNvbG9yJnRyaW1jb2xvcj0jZmZm&mark-align=center%2Cmiddle',
    description:
      'Remove all the white space in an image and then change it to a 1:1 Aspect Ratio',
    image: '/mountains.avif',
    tag: 'Image-Parameters',
    author: 'Jamie Dawson',
    authorImage: '/authorImages/jamieprofile.jpeg',
  },
]

const imageParamsDemo = () => {
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
                  <span className="inline-block px-2 py-1 leading-none bg-blue-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
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

export default imageParamsDemo
