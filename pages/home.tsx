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
        <Image
          src={home_bg_0}
          alt={"Home background 0"}
          width='100%'
          style={{
            position: 'absolute',
            zIndex: -10
          }}
        />
        <div className="flex items-center justify-center height: 20vh">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            <h1 className="text-8xl font-bold tracking-tight text-white font-display">RILEY GAMES</h1>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display text-center">
              Game on the go with Riley Games. Your source for mobile entertainment.
            </h2>
          </div>
        </div>
      </header>


      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0 flex items-center">
            <div className="sm:h-100 rounded-lg border-4 border-dashed border-gray-200">
              <h2
                className="sm:text-2xl lg:text-3xl font-bold tracking-tight font-display sm:w-10/12 md:w-11/12 m-8"
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

        <div className="
          mx-auto 
          max-w-7xl 
          py-6 
          sm:px-6 
          lg:px-8 
          flex 
          flex-row"
          style={{ backgroundColor: '' }}>
          {/* bg-gradient-to-b from-[#950c44] to-[#feb832] items-center justify-content  */}

          <Image
            src={cosmic_bg}
            alt={"Cosmic Scramble background"}
            className="my-20"
            style={{
              position: 'absolute',
              zIndex: -10,
              // top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: 'auto',
              // marginTop: '10vh'

            }}
          />
          <Image
            src={cosmic_icon}
            alt={"Cosmic Scramble icon"}
            style={{
              borderRadius: '2vh',
              height: '15vw',
              width: '15vw',
            }}
          />
          <div className="items-center justify-content" style={{ zIndex: 1 }}>

            <h2
              className="sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight font-display mx-2 mt-8 text-white"
              // style={{ color: 'white' }}
            >
              COSMIC SCRAMBLE
            </h2>

            <h2
              className="sm:text-1xl md:text-2xl lg:text-3xl font-bold tracking-tight font-display my-1 mx-2 text-white"
              // style={{ color: 'white' }}
            >
              Get ready to blast off into a thrilling adventure with Cosmic Scramble!
            </h2>
            <div className="flex flex-row ml-5 space-x-4" style={{backgroundColor: ''}}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://play.google.com/store/apps/details?id=com.cosmicscramble&hl=en_US&gl=US';
                }}
                className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 mt-2 w-40"
                style={{
                  borderRadius: '0.5vh',
                  borderWidth: 2,
                  borderColor: '#09e049',
                  opacity: 0.9,
                  // width: '30vw'
                }}
              >
                <div>
                  <text
                  className="text-sm"
                    style={{
                      color: 'white',
                      // fontSize: '1.5vh',
                      // fontWeight: 'bold',
                      alignSelf: 'center',
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
                className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 mt-2 w-40"
                style={{
                  borderRadius: '0.5vh',
                  borderWidth: 2,
                  borderColor: '#09e049',
                  opacity: 0.9,
                  // width: '30vw'
                }}
              >
                <div>
                  <text
                  className="text-sm"
                    style={{
                      color: 'white',
                      // fontSize: '1.5vh',
                      // fontWeight: 'bold',
                      alignSelf: 'center',
                    }}
                  >
                    More Info
                  </text>
                </div>
              </button>

              
            </div>
          </div>

          {/* <Image
            src={cosmic_feature}
            alt={"Home background 0"}
            style={{
              width: '40vh',
              borderRadius: '5vh',
              opacity: 1.0
            }}
          /> */}
        </div>

        <div className="
          mx-auto 
          max-w-7xl 
          py-6 
          sm:px-6 
          lg:px-8 
          
          flex 
          flex-col
          items-center
          justify-content
        ">
          {/* bg-gradient-to-b from-[#950c44] to-[#feb832]  */}
          <Image
            src={wordlit_icon}
            alt={"Cosmic Scramble icon"}
            style={{
              borderRadius: '2vh',
              height: '8vh',
              width: '8vh',
            }}
          />
          <h2
            className="sm:text-4xl lg:text-3xl font-bold tracking-tight font-display m-6"
            style={{ color: 'white' }}
          >
            WORDLIT
          </h2>

          <h2
            className="sm:text-2xl lg:text-3xl font-bold tracking-tight font-display m-2 text-center"
            style={{ color: 'white' }}
          >
            The fast-paced game that tests your word-solving skills.
          </h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://play.google.com/store/apps/details?id=com.WordLit&hl=en_US&gl=US';
            }}
            className="bg-indigo-500 px-8 m-8"
            style={{
              borderRadius: '1vh'
            }}
          >
            <div >
              <text
                style={{
                  color: 'white',
                  fontSize: '2vh',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}
              >
                Download Now
              </text>
            </div>
          </button>
          <Image
            src={wordlit_feature}
            alt={"Home background 0"}
            style={{
              width: '40vh',
              borderRadius: '5vh',
              opacity: 1.0
            }}
          />
        </div>

      </main>
    </>
  )
}
