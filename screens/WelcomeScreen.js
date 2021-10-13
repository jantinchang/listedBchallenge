import React from 'react';
import { StyleSheet, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Surface } from 'react-native-paper';

import Screen from '../components/Screen';
import AppContext from '../context/AppContext';

function WelcomeScreen({ navigation }) {

    const { username, setUsername, } = React.useContext(AppContext);

    React.useEffect(() => {

    }, [])

    return (<>
        <Screen style={{ justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 30 }}>hello,  <Text style={{ textTransform: 'capitalize' }}>{username}</Text> </Text>
            <Text style={{ fontSize: 20 }}>please use the feed button below to access the feed. </Text>
            <TextInput
                // autoFocus
                mode='outlined'
                label="ENTER USERNAME"
                value={username}
                onChangeText={username => setUsername(username)}
                style={{ zIndex: 1, backgroundColor: '#F3F8F1' }}

            />
            {username ? <Surface style={styles.surface}>
                <Button mode="contained" onPress={() => navigation.navigate('feed')}>
                    FEED
                </Button>
            </Surface> : <Surface style={styles.surface}><Button mode="contained" disabled>
                SET USERNAME!
            </Button></Surface>}


            <View style={{ height: 300 }} />


        </Screen>
    </>
    );
}

const styles = StyleSheet.create({
    surface: {
        overflow: 'hidden',
        borderRadius: 10,
    }
})

export default WelcomeScreen;