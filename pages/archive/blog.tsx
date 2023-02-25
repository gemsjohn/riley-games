import Navbar from '../navbar'
import ButtonHandler from './whatis/buttonhandler';
import Test from '../blog/test';


export default function Blog() {
  
  return (
    <>
      <Navbar home={false} games={false} blog={true} about={false} contact={true} />

      <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8  flex flex-col items-center justify-center">
        <div className="px-4 py-6 sm:px-0 flex items-center">
          <div className="sm:h-100 ">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-8xl font-bold tracking-tight text-white font-oswald flex items-center justify-center" >BLOG</h1>
              <h2 className="text-3xl font-bold tracking-tight text-white font-subtext text-center m-4">
                behind the scenes
              </h2>
            </div>
            
            <Test />

          </div>
        </div>
      </div>

      {/* #101010 */}


      <div
        className="py-6 sm:px-6 lg:px-8  flex flex-col items-center justify-center"
        style={{ backgroundColor: '#101010' }}
      >
        <div className="px-4 py-6 sm:px-0 flex items-center">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-7xl lg:text-8xl font-bold tracking-tight text-white font-oswald flex items-center justify-center" >WHAT IS _ ?</h1>
            <h2 className="text-3xl font-bold tracking-tight text-white font-subtext text-center m-4">
              please explain
            </h2>
          </div>
        </div>
        
        <ButtonHandler />
        

      </div>

    </>
  )
}