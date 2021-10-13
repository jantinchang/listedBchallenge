import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({ children, style }) {

    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#F3F8F1'
    },
    view: {
        flex: 1,
        padding: 30,
    },
    background: {
        flex: 1,

    },
})

export default Screen;