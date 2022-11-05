import { useEffect, useState } from 'react'
import { TouchableOpacity, Text, View, Modal } from 'react-native'
import tw from 'twrnc'

interface IColor {
  [key: string]: string
}

const colors: IColor = {
  "text-red-500": "rojo",
  "text-blue-400": "azúl"
}

export default function Home() {
  const [color, setColor] = useState<string>("text-black")
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)

  const handleClick = (color: string) => {
    setColor(color)
    setModalVisibility(true)
  }

  const handleCloseModal = () => {
    setModalVisibility(false)
  }

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setModalVisibility(false)
    }, 5000);

    return () => window.clearTimeout(timeoutID);
  }, [modalVisibility])

  return (
    <View style={tw`h-full bg-slate-100 items-center p-12 pt-40`}>
      <Text style={tw`my-2 ${color} ${modalVisibility ? `font-bold` : ``}`}>
        Prueba Básica
      </Text>
      <View style={tw`flex flex-row px-2`}>
        <View style={tw`flex-auto px-2`}>
          <TouchableOpacity
            style={tw`bg-blue-400 rounded-lg h-10 w-full px-4`}
            onPress={() => handleClick('text-blue-400')}
          >
            <Text style={tw`text-white py-3 text-center`}>
              Azúl
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-auto px-2`}>
          <TouchableOpacity
            style={tw`bg-red-500 rounded-lg h-10 w-full px-4`}
            onPress={() => handleClick('text-red-500')}
          >
            <Text style={tw`text-white py-3 text-center`}>
              Rojo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
      >
        <View style={tw`bg-white w-full p-6 rounded-lg items-center`}>
          <Text style={tw`text-gray-800 text-xl font-medium mt-4`}>
            Color cambiado exitosamente
          </Text>
          <Text style={tw`text-gray-600 text-center mt-2 w-56`}>
            Señor usuario el color de la pantalla ha cambiado a {colors[color]}
          </Text>
          <TouchableOpacity
            style={tw`bg-indigo-600 w-full py-2 items-center rounded-md mt-6`}
            onPress={handleCloseModal}
          >
            <Text style={tw`text-white py-3 text-center`}>
              Cerrar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
