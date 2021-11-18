import React from 'react'

import { View, Text, Alert } from 'react-native'
import Card from 'src/components/Card'

import { Props } from './types'

const CryptocurrencyCard: React.FC<Props> = ({ image, name, rate }): React.ReactElement => {
  console.log(name)

  return (
    <Card>
      <View>
        <View></View>
        <View>
          <Text>{name}</Text>
          <Text>{rate}$</Text>
        </View>
        <View></View>
      </View>
    </Card>
  )
}

export default CryptocurrencyCard
