import Navbar from './navbar'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Navbar home={true} games={false} about={false} contact={false} />
      {/* <h1 className="text-5xl font-bold underline">
        Hello world!
      </h1>
      <button 
        className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
          TEST
      </button> */}

      <header>
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white font-display">RILEY GAMES</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
          </div>
        </main>
    </>
  )
}
