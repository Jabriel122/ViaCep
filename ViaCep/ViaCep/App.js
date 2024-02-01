import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Header } from './src/components/Header';
import { ContainerApp } from './styles';
//import fonts
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ScreenHome } from './src/components/screens/ScreenHome';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium, Roboto_700Bold
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>

      <Header />
      

      <ScreenHome/>


      <StatusBar style="auto" />
    </ContainerApp>
  );
}

