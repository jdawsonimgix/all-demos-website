import React from 'react'

const sdk_examples = () => {
  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href="https://codesandbox.io/s/lazysizesjs-and-react-imgix-hvdnh?file=/src/App.js"
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
                <span className="inline-block px-2 py-1 leading-none bg-purple-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  SDK
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  React SDK + LazysizesJS
                </h2>
                <p className="text-sm">
                  An example of how to easily add lazy loading to your website
                  with LazysizesJS.
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href="https://codesandbox.io/s/angular-sdk-imgix-iygbq"
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
                <span className="inline-block px-2 py-1 leading-none bg-purple-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  SDK
                </span>
                <h2 className="mt-2 mb-2  font-bold">Angular and Imgix</h2>
                <p className="text-sm">
                  An example of how to use Imgix with Angular
                </p>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href="https://codesandbox.io/s/compassionate-jackson-c25j2l?file=/src/App.js"
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
                <span className="inline-block px-2 py-1 leading-none bg-purple-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  SDK
                </span>
                <h2 className="mt-2 mb-2  font-bold">img-Management</h2>
                <p className="text-sm">
                  An example for how to call the management API using
                  imgix-management-js to programmatically configure Sources and
                  perform activities related to their assets
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sdk_examples
