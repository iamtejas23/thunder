// LessonsScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';



const videoSources = [
  'https://www.youtube.com/embed/VEQd-jmVs44?si=_U-EzF4aqXS9fo4J',
  'https://www.youtube.com/embed/WNVTGTrWcvw?si=TtfdOnkIa3fs8wgA',
  
  // Add more video sources as needed
];

const LessonsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.center}>
        <Image
          source={require('./assets/lesson.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.youtubeLink}>
        <Text style={styles.youtubeTitle}>YouTube Videos</Text>
        {videoSources.map((source, index) => (
          <View key={index} style={styles.videoContainer}>
            <WebView
              source={{ uri: source }}
              style={styles.video}
            />
          </View>
        ))}
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff7f',
    borderTopLeftRadius: 0,
borderTopRightRadius: 0,
borderBottomRightRadius: 100,
borderBottomLeftRadius: 100,
marginLeft:8,
marginRight:8,
  },
  image: {
    width: 200,
    height: 200,
    
  },
  youtubeLink: {
    padding: 16,
  },
  youtubeTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  videoContainer: {
    height: 200, // Set the desired height for video containers
    marginBottom: 20, // Adjust the margin between videos
  },
  video: {
    width: '100%',
  },
  noteCards: {
    padding: 16,
   
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
});

export default LessonsScreen;
