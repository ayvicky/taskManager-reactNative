import React, { useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View style={styles.form}>
            <Text >Add todos</Text>
            <TextInput
                style={styles.input}
                placeholder='new Todo...'
                onChangeText={changeHandler}
                />
            <Button
                onPress={() => submitHandler(text)}
                title='Add Todo'
                color='coral'
                />
        </View>

    )
}

const styles = StyleSheet.create({
    form: {

    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderWidth: 1,
        borderBottomColor: '#ddd'
    }
});