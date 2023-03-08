import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.DBox}>Dream IT...</View>
      <View style ={styles.CBox}>Code IT...</View>
      <StatusBar style="auto" />
      <View styles={styles.TextBox}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000235',
    alignItems: 'center',
    justifyContent: 'center',
    color:'000000',
  },
  DBox: {
    // width:550,
    // height:373,this works with the macbook screen
    // this works for the windows 27 inch screen
    width:580,
    height:400,
    backgroundColor:'#C9A0DC',
    position:'absolute',
    borderTopLeftRadius:30,
    borderBottomEndRadius:30,
    borderTopRightRadius:30,
    borderBottomStartRadius:30,
    // left:150, 
    // top:30,this works with the macbook screen
    // this works for the windows 27 inch screen
    left:300,
    top:30,
    fontSize:96,
    textAlign:'Center',

  },
  CBox:{
    // width:540,
    // height:373,this works with the macbook screen
    // this works for the windows 27 inch screen
    width:580,
    height:400,
    backgroundColor:'#d9d9d9',
    color:'#ABD9D9',
    position:'relative', 
    // left:250,
    // top:180,this works with the macbook screen
    // this works for the windows 27 inch screen
    left:300,
    top:180,
    borderTopLeftRadius:30,
    borderBottomEndRadius:30,
    borderTopRightRadius:30,
    borderBottomStartRadius:30,
    textAlign:'center',
    fontSize:96,
  },
  TextChange:{
    color:'red',
  },

  Circle1:{
    height:350,
    width:360,
    borderRadius:200,
    blurRadius:78,
    backgroundColor:'red',
    position:'absolute',
    top:30,
    left:40,
  }




});
