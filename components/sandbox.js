import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Sandbox() {
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}> One !</Text>
            <Text style={styles.boxTwo}> Two !</Text>
            <Text style={styles.boxThree}> Three !</Text>
            <Text style={styles.boxFour}> Four !</Text>
            <Text style={styles.boxFive}> Five !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 10,
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 10,
    },
    boxFive: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10,
    }
});