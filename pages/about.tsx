import Navbar from './navbar'
import Image from 'next/image'
import cosmic_icon from '../public/cosmic_icon.png'
import wordlit_icon from '../public/wordlit_icon.png'



export default function About() {
  return (
    <>
      <Navbar home={false} games={false} blog={false} about={true} contact={false} />
      <header>

        <div className="flex items-center justify-center" >
          <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold tracking-tight text-white font-oswald text-center">MORE INFO</h1>
            <h2 className="text-3xl font-bold tracking-tight text-white font-subtext text-center m-4">
              the who and the why
            </h2>
          </div>
        </div>
      </header>


      <main>
        <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0 flex items-center">
            <div className="sm:h-50 ">
              <h2
                className="animate__animated animate__bounce sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 mx-8 m-4"
                style={{ color: '#09e049' }}
              >
                Welcome to Riley Games, the passion project of a quirky, independent game developer.
              </h2>

              <h2
                className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 mx-8 m-4"
                style={{  }}
              >
                Yep, that's me!
              </h2>
              <h2
                className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 mx-8 m-4"
                style={{  }}
              >
                I build unique mobile games from scratch, pouring my heart and soul into every pixel and line of code -
                with a little help from ChatGPT and MidJourney AI tools for inspiration (and let's be real, to speed things up).
              </h2>
              <h2
                className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 mx-8 m-4"
                style={{  }}
              >
                But don't just take my word for it, try them out for yourself!
              </h2>


              <div className="flex flex-row flex-wrap mx-8">
                <div className="justify-self-auto flex flex-col align-middle" style={{  }}>
                  <Image
                    src={cosmic_icon}
                    alt={"Cosmic Scramble icon"}
                    className="sm: w-24 md:w-40 lg:w-40 rounded-3xl m-2"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://play.google.com/store/apps/details?id=com.cosmicscramble&hl=en_US&gl=US';
                    }}
                    className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 sm:w-20 md:w-40 m-2"
                    style={{
                      borderRadius: '0.5vh',
                      borderWidth: 2,
                      borderColor: '#09e049',
                      opacity: 0.9,
                    }}
                  >
                    <div>
                      <text
                        className="sm:text-l md:text-xl font-oswald"
                        style={{
                          color: 'white',
                          textAlign: 'center'
                        }}
                      >
                        Download Now
                      </text>
                    </div>
                  </button>
                </div>

                <div className="justify-self-auto flex flex-col align-middle" style={{  }}>
                  <Image
                    src={wordlit_icon}
                    alt={"Cosmic Scramble icon"}
                    className="sm: w-24 md:w-40 lg:w-40 rounded-3xl m-2"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://play.google.com/store/apps/details?id=com.WordLit&hl=en_US&gl=US';
                    }}
                    className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 sm:w-20 md:w-40 m-2"
                    style={{
                      borderRadius: '0.5vh',
                      borderWidth: 2,
                      borderColor: '#09e049',
                      opacity: 0.9,
                    }}
                  >
                    <div>
                      <text
                        className="sm:text-l md:text-xl font-oswald"
                        style={{
                          color: 'white',
                          textAlign: 'center'
                        }}
                      >
                        Download Now
                      </text>
                    </div>
                  </button>
                </div>
              </div>
              <h2
                className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 mx-8 m-4"
                style={{  }}
              >
                My games are designed to keep your mind active and your thumbs moving.
              </h2>
              <h2
                className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 mx-8 m-4"
                style={{  }}
              >
                Check out the blog to learn more about the creative process behind our games and get sneak peeks of what's to come.
              </h2>
              <h2
                className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 mx-8 m-4"
                style={{  }}
              >
                Thanks for joining me on this adventure of mobile game development!
              </h2>
            </div>
          </div>
        </div>


      </main>
    </>
  )
}