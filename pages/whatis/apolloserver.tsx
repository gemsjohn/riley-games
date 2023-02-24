
export default function WhatIs_apolloserver() {
  return (
    <>
      <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 flex items-center">
          <div className="sm:h-50 flex flex-col">
            <h2
              className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8"
              style={{ color: '' }}
            >
              Apollo Server is an open-source, community-driven GraphQL server that is designed to make it easy to build 
              scalable and high-performance GraphQL APIs. It is built on top of the Express web framework for Node.js and 
              is compatible with any data source, including databases, REST APIs, and other GraphQL APIs.
            </h2>

            <h2
              className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8 "
              style={{ color: '' }}
            >
              Apollo Server provides a number of features that make it easy to create and customize GraphQL APIs, including:
            </h2>
            <ul className="m-8">
              <li className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8 ">
                1. Schema generation: Apollo Server can automatically generate a GraphQL schema based on your data model or database schema.
              </li>
              <li className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8 ">
                2. Data sources: Apollo Server provides a simple and powerful API for connecting to data sources, such as databases or REST APIs, 
                and for caching and batching requests.
              </li>
              <li className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8 ">
                3. Performance: Apollo Server is optimized for performance and can handle a large number of concurrent requests and connections.
              </li>
              <li className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8 ">
                4. Subscriptions: Apollo Server supports real-time subscriptions, allowing clients to receive updates in real-time as data changes.
              </li>
              <li className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8 ">
                5. Authentication and authorization: Apollo Server provides built-in support for authentication and authorization, allowing you to 
                secure your API using a variety of authentication methods.
              </li>
            </ul>

            <h2
              className="sm:text-2xl lg:text-2xl font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8"
              style={{ color: '' }}
            >
              Overall, Apollo Server is a powerful and flexible tool for building GraphQL APIs that can scale to handle large 
              volumes of traffic and support real-time updates.
            </h2>
            <text className="text-l font-bold tracking-tight font-subtext sm:w-10/12 md:w-11/12 m-4 mx-8">
              - text generated by ChatGPT
            </text>
          </div>
        </div>
      </div>
    </>
  )
}