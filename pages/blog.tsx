import Navbar from './navbar'
import React, { useState } from 'react'

export default function Blog() {
  const [expand_0, setExpand_0] = useState(false);
  return (
    <>
      <Navbar home={false} games={false} blog={true} about={false} contact={true} />

      <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8  flex flex-col items-center justify-center">
        <div className="px-4 py-6 sm:px-0 flex items-center">
          <div className="sm:h-100 ">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-8xl font-bold tracking-tight text-white font-oswald flex items-center justify-center" >BLOG</h1>
            </div>
            {!expand_0 ?
              <button
                onClick={(e) => {
                  setExpand_0(true)
                }}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl m-8 flex items-center justify-center"
                style={{
                  height: '15vh',
                  width: '70vw'
                }}
              >
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white font-oswald flex items-center justify-center" >@react-native</h1>
                  <text className="mt-2 font-subtext">See More</text>
                </div>
              </button>
              :
              <div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl m-8 flex flex-col"
                style={{
                  height: '50vh',
                  width: '70vw'
                }}
              >
                <button
                  onClick={(e) => {
                    setExpand_0(false)
                  }}
                  className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 m-2"
                  style={{
                    borderRadius: '10vh',
                    // borderWidth: 2,
                    // borderColor: '#09e049',
                    opacity: 0.9,
                  }}
                >
                  <div>
                    <text
                      className="text-xl font-oswald"
                      style={{
                        color: 'white',
                        textAlign: 'center'
                      }}
                    >
                      Close
                    </text>
                  </div>
                </button>
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white font-oswald flex items-center justify-center" >@react-native-amateur</h1>
                  <text className="mt-1 font-oswald flex items-center justify-center">`not a real npm package`</text>
                </div>

              </div>
            }

            <div
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl m-8"
              style={{
                height: '10vh',
                width: '70vw'
              }}
            >
            </div>

            <div
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl m-8"
              style={{
                height: '10vh',
                width: '70vw'
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </>
  )
}