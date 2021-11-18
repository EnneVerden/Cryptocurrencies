import React from 'react'

import { SafeAreaView, View, Text } from 'react-native'
import Card from 'src/components/Card'

const App: React.FC = (): React.ReactElement => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, rerum? Earum eaque cum
          magnam culpa vitae cumque, delectus nostrum architecto impedit hic, minus consequuntur,
          laudantium modi ullam sequi iusto? Deserunt.
        </Text>
      </View>
      <View>
        <Card />
      </View>
    </SafeAreaView>
  )
}

export default App
