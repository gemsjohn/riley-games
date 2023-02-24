
import React, { useState } from 'react'
import { WhatIs_Index } from './index'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  

export const ButtonHandler = () => {
    const [viewWhatIs_GraphQL, setViewWhatIs_GraphQL] = useState(false)
    const [viewWhatIs_NodeJS, setViewWhatIs_NodeJS] = useState(false)
    const [viewWhatIs_MongoDB, setViewWhatIs_MongoDB] = useState(false)
    const [viewWhatIs_ApolloServer, setViewWhatIs_ApolloServer] = useState(false)
    const [viewWhatIs_Heroku, setViewWhatIs_Heroku] = useState(false)
    const [viewWhatIs_React, setViewWhatIs_React] = useState(false)
    const [viewWhatIs_ReactNative, setViewWhatIs_ReactNative] = useState(false)
    const [viewWhatIs_NextJS, setViewWhatIs_NextJS] = useState(false)

    const whatIs = [
        {
            name: 'GraphQL',
            current: viewWhatIs_GraphQL,
            onClick: () => {
                setViewWhatIs_GraphQL(current => !current)
                setViewWhatIs_NodeJS(false)
                setViewWhatIs_MongoDB(false)
                setViewWhatIs_ApolloServer(false)
                setViewWhatIs_Heroku(false)
                setViewWhatIs_React(false)
                setViewWhatIs_ReactNative(false)
                setViewWhatIs_NextJS(false)
            },
        },
        {
            name: 'Node.js',
            current: viewWhatIs_NodeJS,
            onClick: () => {
                setViewWhatIs_GraphQL(false)
                setViewWhatIs_NodeJS(current => !current)
                setViewWhatIs_MongoDB(false)
                setViewWhatIs_ApolloServer(false)
                setViewWhatIs_Heroku(false)
                setViewWhatIs_React(false)
                setViewWhatIs_ReactNative(false)
                setViewWhatIs_NextJS(false)
            }
        },
        {
            name: 'MongoDB',
            current: viewWhatIs_MongoDB,
            onClick: () => {
                setViewWhatIs_GraphQL(false)
                setViewWhatIs_NodeJS(false)
                setViewWhatIs_MongoDB(current => !current)
                setViewWhatIs_ApolloServer(false)
                setViewWhatIs_Heroku(false)
                setViewWhatIs_React(false)
                setViewWhatIs_ReactNative(false)
                setViewWhatIs_NextJS(false)
            }
        },
        {
            name: 'Apollo Server',
            current: viewWhatIs_ApolloServer,
            onClick: () => {
                setViewWhatIs_GraphQL(false)
                setViewWhatIs_NodeJS(false)
                setViewWhatIs_MongoDB(false)
                setViewWhatIs_ApolloServer(current => !current)
                setViewWhatIs_Heroku(false)
                setViewWhatIs_React(false)
                setViewWhatIs_ReactNative(false)
                setViewWhatIs_NextJS(false)
            }
        },
        {
            name: 'Heroku',
            current: viewWhatIs_Heroku,
            onClick: () => {
                setViewWhatIs_GraphQL(false)
                setViewWhatIs_NodeJS(false)
                setViewWhatIs_MongoDB(false)
                setViewWhatIs_ApolloServer(false)
                setViewWhatIs_Heroku(current => !current)
                setViewWhatIs_React(false)
                setViewWhatIs_ReactNative(false)
                setViewWhatIs_NextJS(false)
            }
        },
        {
            name: 'React',
            current: viewWhatIs_React,
            onClick: () => {
                setViewWhatIs_GraphQL(false)
                setViewWhatIs_NodeJS(false)
                setViewWhatIs_MongoDB(false)
                setViewWhatIs_ApolloServer(false)
                setViewWhatIs_Heroku(false)
                setViewWhatIs_React(current => !current)
                setViewWhatIs_ReactNative(false)
                setViewWhatIs_NextJS(false)
            }
        },
        {
            name: 'React Native',
            current: viewWhatIs_ReactNative,
            onClick: () => {
                setViewWhatIs_GraphQL(false)
                setViewWhatIs_NodeJS(false)
                setViewWhatIs_MongoDB(false)
                setViewWhatIs_ApolloServer(false)
                setViewWhatIs_Heroku(false)
                setViewWhatIs_React(false)
                setViewWhatIs_ReactNative(current => !current)
                setViewWhatIs_NextJS(false)
            }
        },
        {
            name: 'Next.js',
            current: viewWhatIs_NextJS,
            onClick: () => {
                setViewWhatIs_GraphQL(false)
                setViewWhatIs_NodeJS(false)
                setViewWhatIs_MongoDB(false)
                setViewWhatIs_ApolloServer(false)
                setViewWhatIs_Heroku(false)
                setViewWhatIs_React(false)
                setViewWhatIs_ReactNative(false)
                setViewWhatIs_NextJS(current => !current)
            }
        }
    ]

    return (
        <>
            <div className="">
                <div className="m-10 flex flex-row flex-wrap">
                    {whatIs.map((item) => (
                        <a
                            key={item.name}
                            onClick={item.onClick}
                            className={classNames(
                                item.current
                                  ? 'bg-[#35faa9] text-black'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-lg font-large font-oswald'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            <WhatIs_Index
                graphql={viewWhatIs_GraphQL}
                nodejs={viewWhatIs_NodeJS}
                mongodb={viewWhatIs_MongoDB}
                apolloserver={viewWhatIs_ApolloServer}
                heroku={viewWhatIs_Heroku}
                react={viewWhatIs_React}
                reactnative={viewWhatIs_ReactNative}
                nextjs={viewWhatIs_NextJS}
            />
        </>
    )
}