import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const images = [
  { id: 1, source: require('./images/photo_2023-10-05_04-49-46.jpg'), text: 'Money Donation',paragraph:'Donate Your Money Here !' , targetScreen: ''},
  { id: 2, source: require('./images/photo_2023-10-05_04-49-50.jpg'), text: 'Food Donation' ,paragraph:'Donate Your Food Here !'   , targetScreen: ''},
  { id: 3, source: require('./images/photo_2023-10-05_04-49-51(1).jpg'), text: 'Clothes Donation',paragraph:'Donate Your Clothes Here !', targetScreen:''  },
];

const Donation = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {images.map((image) => (
            <View key={image.id} style={styles.imageContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate(image.targetScreen)} // Navigate to the target screen
                style={styles.imageButton}
              >
                <Text style={styles.imageButtonText}>Click Here</Text></TouchableOpacity>
              <Image
                source={image.source}
                style={styles.image}

              />
              <Text style={styles.imageText}>{image.text}</Text>
              <Text style={styles.paragraph}>{image.paragraph}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    
    
  },
  bg: {
    backgroundColor: 'gray',
    height: '100%',
    // borderRadius: 20,
    paddingTop: 50,
    
  },
  imageContainer: {
    width: 300,
    height: 500,
    marginHorizontal: 45,
    borderRadius: 20,
    backgroundColor:"#fff",
    alignItems: 'center',
  },
  image: {
    width: 190,
    height: 200,
    marginTop:10,
    borderRadius: 20,
    
  },
  imageText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph:{
    fontSize:20,
    marginTop:20,
  },
  imageButton:{
    position:'relative',
    top:380,
  },
  imageButtonText:{
    backgroundColor:'orange',
    padding:10,
    borderRadius:20,
  },
});

export default Donation;
