import { View } from 'react-native'
import tw from 'twrnc'
import Home from './app/pages/Home'

export default function App() {

  return (
    <View style={tw`h-full bg-slate-100 items-center p-12 pt-40`}>
      <Home />
    </View>
  )
}
