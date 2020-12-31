import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';

export default class WriteStoryScreen extends React.Component{
render(){
    return (
    <View>
        <View>
       <TextInput
          style={styles.inputBox}
          placeholder='Story Title'
       />

        <TextInput
          style={styles.inputBox}
          placeholder='Author'
       />

        <TextInput
          style={styles.storyBox}
          placeholder='Story...'
       />

       <TouchableOpacity style={styles.submitButton}>
           <Text>Submit</Text>
       </TouchableOpacity>
       </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
   inputBox:{
      width:300,
      height:80,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      backgroundColor:'pink'
  },
  storyBox:{
   width:300,
   height:200,
   borderWidth:1.5,
   borderRightWidth:0,
   fontSize:20,
   alignSelf:'center',
   backgroundColor:'pink'
  },
  submitButton:{
   backgroundColor:'pink',
   width:50,
   borderWidth:1.5,
   borderLeftWidth:0,
   alignSelf:'center'
  }
});
