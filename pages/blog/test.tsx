import React, { useState } from 'react'

export default function Test(){
  const [expand_0, setExpand_0] = useState(false);

    return (
        <>
        {!expand_0 ?
              <button
                onClick={(e) => {
                  setExpand_0(true)
                }}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl my-8 flex items-center justify-center"
                style={{
                  height: '15vh',
                  width: '100vw'
                }}
              >
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white font-oswald flex items-center justify-center" >@react-native</h1>
                  <text className="mt-2 font-subtext">See More</text>
                </div>
              </button>
              :
              <div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl my-8 flex flex-col"
                style={{
                  height: '50vh',
                  width: '100vw'
                }}
              >
                <div className="flex justify-end">
                  <button
                    onClick={(e) => {
                      setExpand_0(false)
                    }}
                    className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 m-2 w-40 flex items-center justify-center"
                    style={{
                      borderRadius: '10vh',
                      opacity: 0.9,
                    }}
                  >
                    <div>
                      <text
                        className="text-xl font-oswald"
                        style={{
                          color: 'white',
                          textAlign: 'center',
                        }}
                      >
                        Close
                      </text>
                    </div>
                  </button>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white font-oswald flex items-center justify-center" >@react-native</h1>
                </div>

              </div>
            }
        </>
    )
}