import Navbar from './navbar'
import Image from 'next/image'
import cosmic_icon from '../public/cosmic_icon.png'
import cosmic_feature from '../public/cosmic_feature.png'
import cosmic_example_0 from '../public/cosmic_example_0.png'
import cosmic_example_1 from '../public/cosmic_example_1.png'
import cosmic_example_2 from '../public/cosmic_example_2.png'
import wordlit_feature from '../public/wordlit_feature.png'
import wordlit_example_0 from '../public/wordlit_example_0.png'
import wordlit_example_1 from '../public/wordlit_example_1.png'
import wordlit_example_2 from '../public/wordlit_example_2.png'



export default function Games() {
  return (
    <>
      <Navbar home={false} games={true} blog={false} about={false} contact={false} />
      <header>

        <div className="flex items-center justify-center" >
          <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold tracking-tight text-white font-oswald text-center">GAME ON</h1>
            <h2 className="text-3xl font-bold tracking-tight text-green-400 font-subtext text-center m-4">
              . . . loading
            </h2>
          </div>
        </div>
      </header>


      <main>

        {/* COSMIC SCRAMBLE */}
        <div
          className="flex flex-col justify-center items-center text-left"
          style={{ backgroundColor: '#101010' }}
        >
          <Image
            src={cosmic_feature}
            alt={"Cosmic Scramble feature graphic"}
            className="sm:w-10/12 md:w-10/12 lg:w-8/12"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://play.google.com/store/apps/details?id=com.cosmicscramble&hl=en_US&gl=US';
            }}
            className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 w-60 m-2"
            style={{
              borderRadius: '0.5vh',
              borderWidth: 2,
              borderColor: '#09e049',
              opacity: 0.9,
              position: 'relative'
            }}
          >
            <div>
              <text
                className="text-3xl font-oswald"
                style={{
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                Download Now
              </text>
            </div>
          </button>
          <div className="flex flex-col sm:w-10/12 md:w-10/12 lg:w-8/12 mb-5">
            <h2 className="text-3xl font-bold tracking-tight font-oswald my-5">
              COSMIC SCRAMBLE
            </h2>
            <h2 className="text-l font-bold tracking-tight font-subtext m-1">
              Dodge and collide your way through 15 exhilarating stages, each with 5
              increasingly challenging levels.
            </h2>
            <h2 className="text-l font-bold tracking-tight font-subtext m-1 text-yellow-400">
              Thats 75 levels to play through!
            </h2>
            <h2 className="text-l font-bold tracking-tight font-subtext m-1">
              Outwit obstacles and enemies as you zip through the galaxy, collecting
              letters to spell out the word at the top of the screen. You'll get a
              great feeling when you pull off a cool dodge!
            </h2>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center mb-5">
            <Image
              src={cosmic_example_0}
              alt={"Cosmic Scramble example image"}
              className="sm:w-4/12 md:w-4/12 lg:w-2/12 m-2"
              style={{ borderRadius: '10px' }}
            />
            <Image
              src={cosmic_example_1}
              alt={"Cosmic Scramble example image"}
              className="sm:w-4/12 md:w-4/12 lg:w-2/12 m-2"
              style={{ borderRadius: '10px' }}
            />
            <Image
              src={cosmic_example_2}
              alt={"Cosmic Scramble example image"}
              className="sm:w-4/12 md:w-4/12 lg:w-2/12 m-2"
              style={{ borderRadius: '10px' }}
            />

          </div>

          
        </div>

        {/* WORDLIT */}
        <div
          className="flex flex-col justify-center items-center text-left"
          style={{ backgroundColor: '' }}
        >
          
          <Image
            src={wordlit_feature}
            alt={"Cosmic Scramble feature graphic"}
            className="sm:w-10/12 md:w-10/12 lg:w-8/12"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://play.google.com/store/apps/details?id=com.WordLit&hl=en_US&gl=US';
            }}
            className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 w-60 m-2"
            style={{
              borderRadius: '0.5vh',
              borderWidth: 2,
              borderColor: '#09e049',
              opacity: 0.9,
              position: 'relative',
            }}
          >
            <div>
              <text
                className="text-3xl font-oswald"
                style={{
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                Download Now
              </text>
            </div>
          </button>
          <div className="flex flex-col sm:w-10/12 md:w-10/12 lg:w-8/12 mb-5">
            <h2 className="text-3xl font-bold tracking-tight font-oswald my-5">
              WORDLIT
            </h2>
            <h2 className="text-l font-bold tracking-tight font-subtext m-1">
              The fast-paced game that tests your word-solving skills. 
            </h2>
            <h2 className="text-l font-bold tracking-tight font-subtext m-1 text-yellow-400">
              Has around 2,000 English words with definitions.
            </h2>
            <h2 className="text-l font-bold tracking-tight font-subtext m-1">
            You'll be tasked with uncovering two hidden words by 
            guessing the correct letters. With only 12 guesses to work with, you'll need to 
            use your vocabulary skills and attention to detail to uncover the words and rack 
            up points. Need a little help? Click on the question marks to reveal a hint about the words' meanings.
            </h2>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center mb-5">
            <Image
              src={wordlit_example_0}
              alt={"Wordlit example image"}
              className="w-3/12 m-2"
              style={{ borderRadius: '10px' }}
            />
            <Image
              src={wordlit_example_1}
              alt={"Wordlit example image"}
              className="w-3/12 m-2"
              style={{ borderRadius: '10px' }}
            />
            <Image
              src={wordlit_example_2}
              alt={"Wordlit example image"}
              className="w-3/12 m-2"
              style={{ borderRadius: '10px' }}
            />

          </div>

          
        </div>

        {/* <div 
          className="py-6 sm:px-6 lg:px-8  flex flex-col items-center justify-center" 
          style={{backgroundColor: '#101010'}}
        >
          <div className="px-4 py-6 sm:px-0 flex items-center">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-8xl font-bold tracking-tight text-white font-oswald flex items-center justify-center" >CONTACT</h1>
              </div>
          </div>
        </div> */}

      </main>
    </>
  )
}