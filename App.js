import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

const Stack = createStackNavigator();

const App = () => {

  const [items, setItems] = useState([
    {id: 1, name: 'Chicken & Lemon', image: require('./assets/chicken.jpg')},
    {id: 2, name: 'Norway', image: require('./assets/norway.jpg')},
    {id: 3, name: 'slov', image: require('./assets/slov.jpg')},
    {id: 4, name: 'Third Item', image: require('./assets/bacon.jpg')},
    {id: 5, name: 'Just someone', image: require('./assets/amersej.jpg')},
    {id: 6, name: 'Cheese barrel', image: require('./assets/cheesebarrel.jpg')},
    {id: 7, name: 'Cow', image: require('./assets/cow.jpg')},
    {id: 8, name: 'Lowfi Girl', image: require('./assets/lowfi.jpg')},
    {id: 9, name: 'Mario', image: require('./assets/mario.jpg')},
    {id: 10, name: 'My King', image: require('./assets/myking.jpg')},
    {id: 11, name: 'Off white jawns', image: require('./assets/offwhite.jpg')},
    {id: 12, name: 'U KnOw Da VIbez', image: require('./assets/runescape.jpg')},
  ])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Ems Photos"
          component={ItemList}
          initialParams={{ items: items }} />
        <Stack.Screen name="Photo Details"
                      component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
