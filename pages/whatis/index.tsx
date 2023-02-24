
import WhatIs_graphql from './graphql'
import WhatIs_nodejs from './nodejs'
import WhatIs_mongodb from './mongodb'
import WhatIs_apolloserver from './apolloserver'
import WhatIs_heroku from './heroku'
import WhatIs_react from './react'
import WhatIs_reatnative from './reactnative'
import WhatIs_nextjs from './nextjs'

interface IndexProps {
    graphql: boolean,
    nodejs: boolean,
    mongodb: boolean,
    apolloserver: boolean,
    heroku: boolean,
    react: boolean,
    reactnative: boolean,
    nextjs: boolean
}

export const WhatIs_Index = (props: IndexProps) => {
    return (
        <>
            {props.graphql &&
                <WhatIs_graphql />
            }

            {props.nodejs &&
                <WhatIs_nodejs />
            }

            {props.mongodb &&
                <WhatIs_mongodb />
            }
            {props.apolloserver && 
                <WhatIs_apolloserver />
            }
            {props.heroku &&
                <WhatIs_heroku />
            }
            {props.react && 
                <WhatIs_react />
            }
            {props.reactnative &&
                <WhatIs_reatnative />
            }
            {props.nextjs && 
                <WhatIs_nextjs />
            }
        </>
    )
}