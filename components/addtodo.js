import React, { useState} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from 'native-base';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View style={styles.form}>
            <Text style={{ fontSize: 24, textTransform: 'uppercase', color: '#555'}}>New Task</Text>
            <Text style={{paddingBottom: 20, fontSize: 10, color: '#aaa', paddingLeft: 18, }}> Please type valid name for new task and submit!</Text>
            <TextInput
                style={styles.input}
                placeholder='Please type here...'
                onChangeText={changeHandler}
                value={text}
                />
            <Button
                onPress={() => {submitHandler(text); setText('')}}
                warning
                full
                >
                <Text style={{color: '#fff', fontSize: 18, textTransform: 'uppercase' }}> Submit </Text>
            </Button>
        </View>

    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
        width: '90%',
        height: '100%'
    },
    input: {
        marginBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});