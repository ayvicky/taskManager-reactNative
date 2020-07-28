import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { Button, Icon } from 'native-base';

import Header from './header';
import TodoItem from './todoitem';
import AddTodo from './addtodo';

export default function ToDo() {
    const [todos, setTodos] = useState([
        { text: 'buy coffe', isComplete: false, key: '1' },
        { text: 'create an app', isComplete: true, key: '2' },
        { text: 'play on the switch', isComplete: true, key: '3' },
    ]);
    const [isAdding, setIsAdding] = useState(false);

    const isCompleteHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.map(newTodo => {
                if(newTodo.key == key){
                    newTodo.isComplete = !newTodo.isComplete;
                }
                return newTodo;
            });
        })
    }
    const deleteHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        })
    }
    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random().toString(), isComplete: false },
                    ...prevTodos
                ];
            })
        } else {
            Alert.alert('OPPS!', 'Todo must be 3 characters long...', [
                { text: 'Understood', onPress: () => console.log('close alert') }
            ]);
        }
    }

    const showAdd = (val) => {
        console.log(isAdding);
        console.log(val);
        setIsAdding(val);
        console.log(isAdding);
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('keyboard dismissed...');
            }}>
            <View style={{flex: 1,}}>
            <Modal animationType='slide' transparent={true} visible={isAdding}>
                <View style={{ backgroundColor: 'rgba(0,0,0, 0.5)', flex: 1, paddingBottom: 80, justifyContent:'flex-end', alignItems: 'center'}}>
                <View style={{ backgroundColor: '#fff', width: 320, height: 220, textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 15, }}>
                    <Icon name='close' type='MaterialIcons' style={{ fontSize: 16, position: 'absolute', right: 20, top: 15, color: 'red', borderRadius: 20, borderColor: 'red', borderWidth: 0.5, padding: 5}}
                            onPress={() => showAdd(false)}/>
                    <AddTodo submitHandler={submitHandler}/>
                </View>
                </View>
            </Modal>
                {/* Header */}
                <Header />
                <View style={styles.content} >
                    {/* To Form */}
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem
                                    item={item}
                                    isCompleteHandler={isCompleteHandler}
                                    deleteHandler={deleteHandler}
                                    key={item.key}
                                />
                            )}
                        />
                    </View>
                </View>
                <Button rounded warning onPress={() => showAdd(true)}
                        style={{position: 'absolute', bottom: 25, right: 25, width: 60, height: 60, padding: 0,}}>
                    <Icon name='add' type='MaterialIcons' style={{ fontSize: 28}} />
                </Button>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 15,
        // backgroundColor: 'pink',
        // flex: 1,
    },
    list: {
        // flex: 1,
        marginTop: 20,
        // backgroundColor: 'yellow',
    }
});