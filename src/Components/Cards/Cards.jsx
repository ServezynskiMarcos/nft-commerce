import { Stack } from '@chakra-ui/react'
import React from 'react'
import SheelsCollections from '../Collections/SheelsCollection'
import SkullApeCollection from '../Collections/SkullApeCollection'

const Cards = () => {
  return (
    <Stack id="colecciones">
      <SkullApeCollection/>
      <SheelsCollections/>
    </Stack>
  )
}

export default Cards