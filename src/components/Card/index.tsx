import React from 'react'

import { View } from 'react-native'

import { styles } from './styles'

const Card: React.FC = ({ children }): React.ReactElement => {
  return <View style={styles.card}>{children}</View>
}

export default Card
