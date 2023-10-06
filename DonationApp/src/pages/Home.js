import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate('Donation');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/clothing-donation-illustration_23-2148849867-removebg-preview.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.help}>
          Help <Text style={styles.us}>US</Text>
        </Text>
        <Text style={styles.text}>Let's Help Together!</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.btnText}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginTop: 30,
  },
  image: {
    marginTop: '12%',
    width: '100%',
    height: '50%',
  },
  textContainer: {
    position: 'absolute',
    top: '80%',
    fontFamily: 'monospace',
    textAlign: 'center',
    backgroundColor:'#fff',
  },
  help: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  us: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#D2EA39',
  },
  button: {
    position: 'relative',
    top: '60%',
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 10,
  },
  btnText: {
    fontSize: 30,
  },
});

export default Home;