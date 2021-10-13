import React from 'react';
import { View, StyleSheet, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Text, TextInput, Button, Surface, IconButton, } from 'react-native-paper';

import Screen from '../components/Screen';
import AppContext from '../context/AppContext';

const width = Dimensions.get('screen').width;

function AddScreen({ navigation }) {

    const { username, setUsername, detailItem, setDetailItem, addImage, setAddImage, addMessage, setAddMessage, array, setArray } = React.useContext(AppContext);

    const postToFeed = () => {

        let newArray = [...array];

        newArray.unshift({
            avatar: 'https://png.pngitem.com/pimgs/s/508-5087236_tab-profile-f-user-icon-white-fill-hd.png',
            imageURL: addImage,
            tagline: addMessage,
            username: username
        });

        setArray(newArray);

        navigation.navigate('feed');
    }

    return (<>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>


            <Screen style={{ justifyContent: 'space-evenly' }}>
                <TextInput
                    // autoFocus
                    mode='outlined'
                    label="ENTER IMAGE URL"

                    onChangeText={addImage => setAddImage(addImage)}
                    style={{ zIndex: 1, backgroundColor: '#F3F8F1' }}

                />

                <TextInput
                    // autoFocus
                    mode='outlined'
                    label="ENTER POST MESSAGE"
                    value={addMessage}
                    onChangeText={addMessage => setAddMessage(addMessage)}
                    style={{ zIndex: 1, backgroundColor: '#F3F8F1' }}

                />


                {/* <View style={{ height: 300 }} /> */}

                <Button mode='contained' onPress={postToFeed}> POST </Button>
            </Screen>

        </KeyboardAvoidingView>
        <Surface style={styles.card}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>

                <Image resizeMode='cover' style={styles.profilepic} source={{ uri: 'https://png.pngitem.com/pimgs/s/508-5087236_tab-profile-f-user-icon-white-fill-hd.png' }} />
                <Text style={styles.title}>{username}</Text>
                <View style={{ width: 150 }} />
                <IconButton
                    icon="dots-horizontal"

                    size={25}
                    onPress={() => console.log('more info!')}
                />
            </View>

            <Image resizeMode='cover' style={styles.image} source={{ uri: addImage }} />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <IconButton
                    icon="heart-circle-outline"

                    size={25}
                    onPress={() => console.log('like')}
                />
                <IconButton
                    icon="comment-processing-outline"

                    size={25}
                    onPress={() => console.log('comment')}
                />
                <IconButton
                    icon="share"

                    size={25}
                    onPress={() => console.log('share')}
                />


            </View>
            <View style={{ paddingVertical: 25, paddingHorizontal: 20 }}>

                <Text style={styles.subTitle}>{addMessage}</Text>
            </View>

        </Surface>


    </>);
}

const styles = StyleSheet.create({
    card: {

        borderWidth: 0.2,
        backgroundColor: '#ECECEC',
        justifyContent: 'space-between',

    },
    image: {
        height: 250,
        width: width,
    },
    subTitle: {
        fontSize: 15
    },
    title: {
        fontSize: 20,
    },
    profilepic: {
        height: 30,
        width: 30,
        borderRadius: 25,
        borderWidth: 0.5
    },
    container: {

        flex: 1,

    },
})

export default AddScreen;