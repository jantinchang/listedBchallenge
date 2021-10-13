import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Dimensions } from 'react-native';

import { Text, Button, Surface, IconButton } from 'react-native-paper';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

function Card({ title, subTitle, uri, avatar, details }) {

    return (
        <Surface style={styles.card}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>

                <Image resizeMode='cover' style={styles.profilepic} source={{ uri: avatar }} />
                <Text style={styles.title}>{title}</Text>
                <View style={{ width: 150 }} />
                <IconButton
                    icon="dots-horizontal"

                    size={25}
                    onPress={() => console.log('more info!')}
                />
            </View>

            <TouchableOpacity onPress={details}>
                <Image resizeMode='cover' style={styles.image} source={{ uri: uri }} />
            </TouchableOpacity>

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

                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

        </Surface>
    );

}


const styles = StyleSheet.create({
    card: {

        borderWidth: 0.2,
        backgroundColor: '#ECECEC',
        justifyContent: 'space-between',

    },
    image: {
        height: 300,
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