
export default function WhatIs_graphql() {
  return (
    <>
      <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 flex items-center">
          <div className="sm:h-50 flex flex-col">
            <h2
              className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8"
              style={{ color: '' }}
            >
              <a style={{color: '#35faa9'}}>GraphQL</a> is a <a style={{color: '#35faa9'}}>query language</a> and  <a style={{color: '#35faa9'}}>runtime for APIs</a> that was developed by Facebook in 2012 and later released 
              as an open-source project. It provides a more efficient, powerful, and flexible <a style={{color: '#35faa9'}}>alternative to REST APIs </a>  
              for fetching and manipulating data from servers.
            </h2>

            <h2
              className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8 "
              style={{ color: '' }}
            >
              In GraphQL, clients can specify exactly what data they need from a server, and <u>the server responds with only the 
              requested data</u>, eliminating the need for multiple roundtrips to fetch related data. This allows developers to 
              build more <a style={{color: '#35faa9'}}>efficient</a> and <a style={{color: '#35faa9'}}>scalable</a> applications, especially for mobile and IoT devices with limited bandwidth 
              and processing power.
            </h2>

            <h2
              className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8"
              style={{ color: '' }}
            >
              GraphQL also provides a type system that helps ensure data consistency and enables tools like auto-complete and 
              documentation generation. It <u>can be used with any programming language and database</u>, and it has a large and 
              growing community with many open-source tools and frameworks available.
            </h2>
            <p className="text-l font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8">
              - text generated by ChatGPT
            </p>
          </div>
        </div>
      </div>
    </>
  )
}