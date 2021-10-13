import React from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';

import Screen from '../components/Screen';
import AppContext from '../context/AppContext';
import AppCard from '../components/AppCard';



function FeedScreen({ navigation }) {

    const [refreshing, setRefreshing] = React.useState(false);

    const { username, setUsername, detailItem, setDetailItem, array, setArray } = React.useContext(AppContext);

    React.useEffect(() => {
        console.log(array)
    }, [])

    const getHeader = () => {
        return <>


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 30 }}> hello, <Text style={{ textTransform: 'capitalize' }}>{username}</Text> </Text>



                <IconButton
                    icon="plus-circle-outline"

                    size={35}
                    onPress={() => navigation.navigate('add')}
                />

            </View>
            <View style={{ paddingHorizontal: 15, justifyContent: 'center', paddingBottom: 15 }}>

                <Text style={{ fontSize: 15, opacity: 0.3 }}>below is your social feed. please use the add button on top to post something to the feed! </Text>

                <Text style={{ fontSize: 15, opacity: 0.3, color: 'red', marginTop: 10 }}>tap on a picture to see details. you can only edit or delete posts that you make! </Text>
            </View>



        </>
    };

    return (<>

        <SectionList
            refreshing={refreshing}
            // onRefresh={handleHostRefresh}
            ListHeaderComponent={getHeader}
            sections={[

                {
                    title: 'logs', data: array
                },
            ]}
            renderItem={({ item }) =>
                <AppCard
                    title={item.username}
                    details={() => { setDetailItem(item); navigation.navigate('details') }}
                    subTitle={item.tagline}
                    uri={item.imageURL}
                    avatar={item.avatar}
                />
            }
            keyExtractor={(item, index) => index}
        />

    </>
    );
}

const styles = StyleSheet.create({
    surface: {
        overflow: 'hidden',
        borderRadius: 10,
    },
    sectionListContainer: {
        flex: 1,
    },
})

export default FeedScreen;