import * as React from 'react';
import { Button, View, StyleSheet,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import A_Image from './assets/art.png';
import B_Image from './assets/mile.png';
import C_Image from './assets/pier.png';
import D_Image from './assets/water.png';
import E_Image from './assets/willis.png';

function ArtInstitute({ navigation }) {
  const A_IMAGE = Image.resolveAssetSource(A_Image).uri
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style = {styles.image} source={{uri: A_IMAGE}} />
    </View>
  );
}

function MagnificentMile({ navigation }) {
  const B_IMAGE = Image.resolveAssetSource(B_Image).uri
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style = {styles.image} source={{uri: B_IMAGE}} />
    </View>
  );
}

function NavyPier({ navigation }) {
  const C_IMAGE = Image.resolveAssetSource(C_Image).uri
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style = {styles.image} source={{uri: C_IMAGE}} />
    </View>
  );
}

function WaterTower({ navigation }) {
  const D_IMAGE = Image.resolveAssetSource(D_Image).uri
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style = {styles.image} source={{uri: D_IMAGE}} />
    </View>
  );
}

function WillisTower({ navigation }) {
  const E_IMAGE = Image.resolveAssetSource(E_Image).uri
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style = {styles.image} source={{uri: E_IMAGE}} />
    </View>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitute} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 480,
  }
});