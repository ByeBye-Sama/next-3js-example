import React from 'react'
import Link from 'next/link'

import { DefaultLayout } from 'layouts'
import { Text } from 'components'
import { routesPath } from 'constants.js'

const HomeScreen = () => {
  return (
    <DefaultLayout>
      <Text textStyle="h1" color="white">
        Next is working
      </Text>
      <Link href={routesPath.THREE_JS}>
        <a>
          <Text textStyle="link" color="white">
            Three JS
          </Text>
        </a>
      </Link>
    </DefaultLayout>
  )
}

export default HomeScreen
