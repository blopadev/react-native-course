// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
//import diamondImage from './assets/diamond.png'
import * as ImagePicker from 'expo-image-picker';

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    // pedimos permiso al usuario para abrir la Galería de Imágenes y lo guardamos en una variable
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to acces camera is required');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    //console.log(pickerResult)

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri })

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} > Pick an image</Text>
      <Image
        //source={{ uri: 'https://picsum.photos/200/200' }}
        source={{
          uri: selectedImage !== null
            ? selectedImage.localUri
            : 'https://picsum.photos/200/200'
        }}
        //source={diamondImage}
        style={styles.image}
      />

      {/*       
      <Button
        //onPress={onPressLearnMore}
        //onPress={() => console.log('Hola Raimundo')}
        onPress={() => Alert.alert('hola tron')}
        title="Dale caña"
        color="red"
        //accessibilityLabel="Learn more about this purple button"
      /> */
      }

      <TouchableOpacity
        //onPress={() => Alert.alert('hola tron')}
        onPress={openImagePickerAsync}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff'
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100, //-- para que sea redonda, aquí no valen los %
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: 'blue',
    padding: 7,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});

export default App;
