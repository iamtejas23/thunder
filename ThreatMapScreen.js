import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MyWebView = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://cybermap.kaspersky.com/en/widget/dynamic/dark' }}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default MyWebView;
