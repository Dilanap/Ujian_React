/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   StatusBar,
   Image,
   Button,
   TouchableOpacity,
   ActivityIndicator
 } from 'react-native';
 
 export default class App extends Component<{}> {
   state = {
     instruksi: false,
     loading: false
   }
 
   constructor(props) {
     super(props);
     this.instruksi = this.instruksi.bind(this);
   }
 
   instruksi() {
     this.setState({
       loading: true
     });
     setTimeout(() => {
       this.setState({
         instruksi: true,
         loading: false
       })
     }, 5000)
   }
 
   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>Menampilkan Emoji</Text>
 
         {
           this.state.loading ?
             <ActivityIndicator color="blue" size="small" animating /> : false
         }
         { this.state.instruksi ? 
           <Text style={styles.welcome}>
           👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍
           👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍

           </Text>:

           
           <TouchableOpacity activeOpacity={0.5}>
             <Button title="Tampilkan" onPress={this.instruksi} />
           </TouchableOpacity>
         }
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   }
 });