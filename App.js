import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

import AppContext from './context/AppContext';
import dummyfeed from './backend/FakeDB';

export default function App() {

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content', true)
  }, [])

  const [username, setUsername] = React.useState('');
  const [detailItem, setDetailItem] = React.useState();
  const [addImage, setAddImage] = React.useState('https://www.emphysys.com/wp-content/uploads/2015/05/placeholder.png');
  const [addMessage, setAddMessage] = React.useState('');
  const [array, setArray] = React.useState(dummyfeed);

  return (
    <AppContext.Provider value={{
      username,
      setUsername,
      detailItem,
      setDetailItem,
      addImage,
      setAddImage,
      addMessage,
      setAddMessage,
      array,
      setArray

    }}>

      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>

    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
