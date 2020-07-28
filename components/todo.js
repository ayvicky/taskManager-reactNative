import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './header';
import TodoItem from './todoitem';
import AddTodo from './addtodo';

export default function ToDo() {
    const [todos, setTodos] = useState([
        { text: 'buy coffe', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' },
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        })
    }
    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevTodos
                ];
            })
        } else {
            Alert.alert('OPPS!', 'Todo must be 3 characters long...', [
                { text: 'Understood', onPress: () => console.log('close alert') }
            ]);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('keyboard dismissed...');
            }}>
            <View>
                {/* Header */}
                <Header />
                <View style={styles.content} >
                    {/* To Form */}
                    <AddTodo
                        submitHandler={submitHandler}
                    />
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem
                                    item={item}
                                    pressHandler={pressHandler}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 40,
        // backgroundColor: 'pink',
        // flex: 1,
    },
    list: {
        // flex: 1,
        marginTop: 20,
        // backgroundColor: 'yellow',
    }
});