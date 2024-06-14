import Home from './src/pages/Home/Home';
import Sobre from './src/pages/Sobre/Sobre';
import { NavigationContainer } from '@react-navigation/native';
import Contato from './src/pages/Contato/Contato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab =  createBottomTabNavigator();

export default function App() {

  return (
   
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{ // Utilizando a propiedade screenOptions dentro do componente Tab.Navigator afetando todas a tabs
      // headerShown: false,
      tabBarActiveTintColor:'yellow',
      tabBarStyle: {
        backgroundColor:'black'
      } 
      }}
      > 
        <Tab.Screen 
        name = 'INICIO'
        component = {Home}
        options={{
          
          tabBarIcon: ({color, size}) => {
            return <Feather name ='home' color = {color} size = {size} />
          }
        }}
        />

     <Tab.Screen 
        name = 'SOBRE'
        component = {Sobre}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name ='file-text' color = {color} size = {size}/>
          }
        }}
        />

     <Tab.Screen 
        name = 'CONTATO'
        component = {Contato}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name ='phone-call' color = {color} size = {size}/>
          }
        }}
        />


      </Tab.Navigator>
      
    </NavigationContainer>
   
)}



