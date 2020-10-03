 // import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Image,
//   ScrollView,
//   Button,
//   Alert,
//   Picker,
//   Switch,
//   ActivityIndicator,
// } from 'react-native';

// class App extends React.Component {
//   render() {
//     return (
//       // container edit
//       <View style={styles.container}>
//         <Image style={styles.gambar1} source={require('./src/assets/4.png')} />
//         <Text style={styles.text1}>Hello saya baru belajar react native</Text>
//         {/* membuat scrollView */}
//         <ScrollView style={styles.scrollView1}>
//           <Text style={styles.scrollView2}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </Text>

//           {/* membuat TextInput */}
//           <TextInput style={styles.Textinput} maxLength={40} />
//           <Button
//             title="Klik Disini"
//             color="#00008b"
//             onPress={() => Alert.alert('Engga ada Apa Apa')}
//           />
//           <Picker>
//             <Picker.Item label="Aku" value="Aku" />
//             <Picker.Item label="Kamu" value="Kamu" />
//           </Picker>
//           <Text style={styles.text2}>Klik Disini</Text>
//           <Switch
//             trackColor={{false: '#767577', true: '#81b0ff'}}
//             ios_backgroundColor="#3e3e3e"
//             value={true}
//           />
//           <ActivityIndicator size="large" color="#00ff00" />
//         </ScrollView>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     // flex bacgtound full
//     flex: 1,
//     //warna bacground
//     backgroundColor: '#eaeaea',
//   },
//   // edit text 1
//   text1: {
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   // edit Text2
//   text2: {
//     marginTop: 20,
//     textAlign: 'center',
//     backgroundColor: '#5f9ea0',
//     padding: 10,
//     marginHorizontal: 100,
//     fontSize: 30,
//     borderRadius: 7,
//   },
//   Textinput: {
//     backgroundColor: '#a9a9a9',
//     marginHorizontal: 70,
//     marginTop: 30,
//   },
//   gambar1: {
//     height: 150,
//     width: 150,
//     marginHorizontal: 100,
//     marginTop: 30,
//   },
//   scrollView1: {
//     flex: 1,
//     //backgroundColor: '#00ffff',
//   },
//   scrollView2: {
//     marginTop: 30,
//     fontSize: 25,
//   },
// });

// export default App;

// // const App = () => (
// //   <View style={styles.container}>
// //     <Text style={styles.title}>React Native</Text>
// //   </View>
// // );
// // const App = () => {
// //   return (
// //     <View>
// //       <Text>Hello saya Baru belajar</Text>
// //     </View>
// //   );
// // };
