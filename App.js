import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import ToDo from './components/todo';
import Sandbox from './components/sandbox';

export default function App() {
  const [name, setName] = useState('shown');
  const [person, setPerson] = useState({
    name: 'mario',
    age: 40
  });
  const [age, setAge] = useState('42');

  // List
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bower', key: '7' },
  ]);

  const clickHandler = () => {
    setName('chun-li');
    setPerson({ name: 'levigi', age: 45 });
  }
  const pressHandler = (id) => {
    console.log(id);
    setPerson((prevPerson) => {
      return prevPerson.filter(person => person.id != id);
    })
  }

  return (
    <View style={styles.container}>
      <ToDo />
      {/*
      <Sandbox />
      <FlatList
        numColumns ='2'
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item} > { item.name } </Text>
          </TouchableOpacity>
        )}
        />
        */}
      {/*
      <ScrollView>
        <View style={styles.header} >
          <Text style={styles.boldText}>
            Hello, World!
        </Text>
        </View>
        <View style={styles.body}>
          <Text>His name is {person.name} and his age is {person.age} ...</Text>
          {
            people.map(item => (
              <View key={item.key}>
                <Text style={styles.item}> {item.name} </Text>
              </View>
            )
            )
          }
          <Text>My Name is {name} and my age is {age}...</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="update State" onPress={clickHandler} />
        </View>
        <Text>Enter Name: </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder='e.g JohnDoe'
          onChangeText={(val) => setName(val)} />
        <Text>Enter Age: </Text>
        <TextInput
          keyboardType='number-pad'
          style={styles.input}
          placeholder='e.g 42'
          onChangeText={(val) => setAge(val)} />
      </ScrollView>
    */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 40,
    // paddingHorizontal: 20,
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10
  }
});
