import React from 'react'

import { View } from 'react-native'
import CryptocurrencyCard from './components/CryptocurrencyCard'

const Main: React.FC = (): React.ReactElement => {
  return (
    <View>
      <CryptocurrencyCard image="" name="Bitcoin" rate="63,780.40" />
    </View>
  )
}

export default Main
