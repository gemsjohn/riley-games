import Navbar from './navbar'
import Image from 'next/image'
import home_bg_0 from '../public/home_bg_0.png'
import cosmic_icon from '../public/cosmic_icon.png'
import cosmic_feature from '../public/cosmic_feature.png'
import cosmic_bg from '../public/cosmic_bg.png'
import wordlit_icon from '../public/wordlit_icon.png'
import wordlit_feature from '../public/wordlit_feature.png'
export default function Home() {
  return (
    <>
      <Navbar home={true} games={false} about={false} contact={false} />


      <header>
        {/* <Image
            src={cosmic_bg}
            alt={"Cosmic Scramble background"}
            className="my-20 max-h-96 max-w-full"
            style={{
              position: 'absolute',
              zIndex: -10,
              left: '50%',
              transform: 'translate(-50%, -50%)',

            }}
          /> */}
        <div className="flex items-center justify-center height: 20vh">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold tracking-tight text-white font-display">RILEY GAMES</h1>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display text-center">
              Game on the go with Riley Games. Your source for mobile entertainment.
            </h2>
          </div>
        </div>
      </header>


      <main>
        <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0 flex items-center">
            <div className="sm:h-100 ">
              <h2
                className="sm:text-2xl lg:text-3xl font-bold tracking-tight font-display sm:w-10/12 md:w-11/12 m-8 text-center"
                style={{ color: '#fcd01f' }}
              >
                At Riley Games, we believe that gaming should bring joy and happiness to people's lives.
                We understand that everyone has their own preferences when it comes to games,
                whether they want something fun and casual or something more challenging and immersive.
                That's why our philosophy is simple: to create games that cater to all kinds of players.
              </h2>
            </div>
          </div>
        </div>



        <div className="grid lg:grid-cols-2 place-content-center justify-items-center mx-auto max-w-5xl">
          
          <div className="max-w-xl py-6 sm:px-6 lg:px-8 flex justify-center" style={{ backgroundColor: '' }}>
            <div className="px-4 py-6 sm:px-0 flex items-center">
              <div className="sm:h-100  flex flex-col items-center justify-content">

                <Image
                  src={cosmic_icon}
                  alt={"Cosmic Scramble icon"}
                  className="sm: w-24 md:w-40 lg:w-60 rounded-3xl m-2"
                  style={{
                    // borderRadius: '2vh',
                    // height: 'auto',
                    // width: '10vw',
                  }}
                />
                <h2
                  className="text-3xl font-bold tracking-tight font-display"
                >
                  COSMIC SCRAMBLE
                </h2>
                <h2
                  className="text-4xl font-bold tracking-tight font-display m-8 text-center sm:w-80"
                >
                  Get ready to blast off into a thrilling adventure with Cosmic Scramble!
                </h2>


                <div className="justify-self-auto flex flex-col align-middle" style={{ backgroundColor: '' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://play.google.com/store/apps/details?id=com.cosmicscramble&hl=en_US&gl=US';
                    }}
                    className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 w-40 m-2"
                    style={{
                      borderRadius: '0.5vh',
                      borderWidth: 2,
                      borderColor: '#09e049',
                      opacity: 0.9,
                    }}
                  >
                    <div>
                      <text
                        className="text-lg"
                        style={{
                          color: 'white',
                          textAlign: 'center'
                        }}
                      >
                        Download Now
                      </text>
                    </div>
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '';
                    }}
                    className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 w-40 m-2"
                    style={{
                      borderRadius: '0.5vh',
                      borderWidth: 2,
                      borderColor: '#09e049',
                      opacity: 0.9,
                    }}
                  >
                    <div>
                      <text
                        className="text-lg"
                        style={{
                          color: 'white',
                          textAlign: 'center'
                        }}
                      >
                        More Info
                      </text>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl py-6 sm:px-6 lg:px-8 flex justify-center" style={{ backgroundColor: '' }}>
            <div className="px-4 py-6 sm:px-0 flex items-center">
              <div className="sm:h-100  flex flex-col items-center justify-content">

                <Image
                  src={wordlit_icon}
                  alt={"Cosmic Scramble icon"}
                  className="sm: w-24 md:w-40 lg:w-60 rounded-3xl m-2"
                  style={{
                    // borderRadius: '2vh',
                    // height: 'auto',
                    // width: '10vw',
                  }}
                />
                <h2
                  className="text-3xl font-bold tracking-tight font-display"
                >
                  WORDLIT
                </h2>
                <h2
                  className="text-4xl font-bold tracking-tight font-display m-8 text-center sm:w-80"
                  style={{ backgroundColor: '' }}
                >
                  The fast-paced game that tests your word-solving skills.
                </h2>


                <div className="justify-self-auto flex flex-col align-middle" style={{ backgroundColor: '' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://play.google.com/store/apps/details?id=com.WordLit&hl=en_US&gl=US';
                    }}
                    className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 w-40 m-2"
                    style={{
                      borderRadius: '0.5vh',
                      borderWidth: 2,
                      borderColor: '#09e049',
                      opacity: 0.9,
                    }}
                  >
                    <div>
                      <text
                        className="text-lg"
                        style={{
                          color: 'white',
                          textAlign: 'center'
                        }}
                      >
                        Download Now
                      </text>
                    </div>
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = '';
                    }}
                    className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 w-40 m-2"
                    style={{
                      borderRadius: '0.5vh',
                      borderWidth: 2,
                      borderColor: '#09e049',
                      opacity: 0.9,
                    }}
                  >
                    <div>
                      <text
                        className="text-lg"
                        style={{
                          color: 'white',
                          textAlign: 'center'
                        }}
                      >
                        More Info
                      </text>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8  flex flex-col items-center justify-center">
          <div className="px-4 py-6 sm:px-0 flex items-center">
            <div className="sm:h-100 ">
              <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-8xl font-bold tracking-tight text-white font-display flex items-center justify-center" >BLOG</h1>
              </div>
              

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


        {/* #101010 */}


        <div 
          className="py-6 sm:px-6 lg:px-8  flex flex-col items-center justify-center" 
          style={{backgroundColor: '#101010'}}
        >
          <div className="px-4 py-6 sm:px-0 flex items-center">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-8xl font-bold tracking-tight text-white font-display flex items-center justify-center" >CONTACT</h1>
              </div>
          </div>
        </div>



      </main>
    </>
  )
}
