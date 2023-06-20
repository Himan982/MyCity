import { View, Text } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}) => {
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style = {{fontSize: 30}} >Screen 1</Text>
    </View>
  )
}

export default Screen1;