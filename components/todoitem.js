import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Left, Body, Right, ListItem, Icon, Text } from 'native-base';

export default function TodoItem ({ item, deleteHandler, isCompleteHandler }) {
    return(
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: '#ddd'}}>
                <Icon name='check-circle' type='MaterialIcons' style={{fontSize: 28, color: item.isComplete ? '#32CD32' : '#ddd',}}
                        onPress={() => isCompleteHandler(item.key)} />
                <Text style={{color: item.isComplete ? '#008000' : '#aaa'}}> {item.text} </Text>
            <Icon name='remove-circle' type="MaterialIcons" style={{color: 'red', fontSize: 28}} onPress={() => deleteHandler(item.key)} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    }
});