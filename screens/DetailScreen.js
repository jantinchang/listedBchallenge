import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Dimensions } from 'react-native';

import { Text, Button, Surface, IconButton } from 'react-native-paper';

import AppContext from '../context/AppContext';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function Card({ title, subTitle, uri, avatar, navigation }) {

    const { username, setUsername, detailItem, setDetailItem, array, setArray } = React.useContext(AppContext);

    // React.useEffect(() => {
    //     console.log(detailItem);
    // }, [])

    const deleteItem = () => {
        console.log('deleting item from array:', detailItem)
        let newArray = [...array];
        newArray.splice(detailItem, 1);

        setArray(newArray);

        navigation.navigate('feed');
    }

    const editItem = () => {
        navigation.navigate('edit');
    }

    return (
        <Surface style={styles.card}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>

                <Image resizeMode='cover' style={styles.profilepic} source={{ uri: detailItem.avatar }} />
                <Text style={styles.title}>{detailItem.username}</Text>
                {username == detailItem.username && <View style={{ position: 'absolute', left: width / 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 10 }}>
                    <IconButton
                        icon="circle-edit-outline"

                        size={25}
                        onPress={editItem}
                    />
                    <IconButton
                        icon="delete"

                        size={25}
                        onPress={deleteItem}
                    />

                </View>}
                <View style={{ width: 150 }} />
                <IconButton
                    icon="dots-horizontal"

                    size={25}

                />
            </View>


            <Image resizeMode='cover' style={styles.image} source={{ uri: detailItem.imageURL }} />

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

                <Text style={styles.subTitle}>{detailItem.tagline}</Text>
            </View>


            <View style={{ height: 100 }} />


        </Surface>
    );

}


const styles = StyleSheet.create({
    card: {


        backgroundColor: '#ECECEC',
        justifyContent: 'space-evenly',
        flex: 1

    },
    image: {
        height: height / 2,
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
    }
})


export default Card;