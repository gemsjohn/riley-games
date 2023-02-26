import Navbar from './navbar'
import Image from 'next/image'
import Cosmic_Scramble from './games/cosmic_scramble'
import Wordlit from './games/wordlit'



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
        <div id='cosmic_scramble_scetion'>
          <Cosmic_Scramble />
        </div>
        
        <div style={{height: '10vh'}} />

        <div id='wordlit_section'>
          <Wordlit />
        </div>

        <div style={{height: '10vh'}} />

      </main>
    </>
  )
}