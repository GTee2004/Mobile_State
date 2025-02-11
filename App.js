import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ColorButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.color }]}
      onPress={() => props.onPress(props.color)}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Initial background color

  const handleButtonPress = (color) => {
    setBackgroundColor(color); // Set the background to the selected color
    Alert.alert(`Button ${color} pressed`);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}> {/* Apply background color */}
      <ColorButton title="Green" color="green" onPress={handleButtonPress} />
      <ColorButton title="Blue" color="blue" onPress={handleButtonPress} />
      <ColorButton title="Brown" color="brown" onPress={handleButtonPress} />
      <ColorButton title="Yellow" color="yellow" onPress={handleButtonPress} />
      <ColorButton title="Red" color="red" onPress={handleButtonPress} />
      <ColorButton title="Black" color="black" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    width: '80%',
    margin: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;