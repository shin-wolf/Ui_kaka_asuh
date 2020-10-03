import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

// membuat CSS terpisah

import {styles} from './src/styles/styles.js';

class App extends React.Component {
  render() {
    return (
      <View style={styles.utama}>
        <View style={styles.navbar}>
          <Image
            style={styles.icon1}
            source={require('./src/assets/menu.png')}
          />
          <Text style={styles.text1}>Kaka Asuh Indonesia</Text>
        </View>

        <ScrollView style={styles.Scroll1} horizontal={true}>
          <View style={styles.View1}>
            <Image
              style={styles.icon2}
              source={require('./src/assets/family.png')}
            />
            <Text style={styles.text3}>Pilih Adik Asuh</Text>
          </View>

          <View style={styles.View1}>
            <Text style={styles.text4}>86</Text>
            <Text style={styles.text3}>Santri Mandiri</Text>
          </View>

          <View style={styles.View1}>
            <Text style={styles.text4}>76</Text>
            <Text style={styles.text3}>Santri Belum Mandiri</Text>
          </View>

          <View style={styles.View1}>
            <Image
              style={styles.icon2}
              source={require('./src/assets/family.png')}
            />
            <Text style={styles.text3}>Hello World</Text>
          </View>
        </ScrollView>

        <View style={styles.View2}>
          <Text style={styles.text2}>Adik Asuh Saya</Text>
        </View>

        <ScrollView style={styles.Scroll2}>
          <View style={styles.View3}>
            <View style={styles.View4}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/male.png')}
              />
              <Text style={styles.text5}>Nama Adik Asuh</Text>
            </View>

            <View style={styles.View5}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/money-tranfer.png')}
              />

              <Text style={styles.text5}>Transfer</Text>
            </View>

            <View style={styles.View6}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/confirmation.png')}
              />
              <Text style={styles.text5}>konfirmasi</Text>
            </View>
          </View>

          <View style={styles.View3}>
            <View style={styles.View4}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/woman-512.png')}
              />
              <Text style={styles.text5}>Nama Adik Asuh</Text>
            </View>

            <View style={styles.View5}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/money-tranfer.png')}
              />

              <Text style={styles.text5}>Transfer</Text>
            </View>

            <View style={styles.View6}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/confirmation.png')}
              />
              <Text style={styles.text5}>konfirmasi</Text>
            </View>
          </View>

          <View style={styles.View3}>
            <View style={styles.View4}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/male.png')}
              />
              <Text style={styles.text5}>Nama Adik Asuh</Text>
            </View>

            <View style={styles.View5}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/money-tranfer.png')}
              />

              <Text style={styles.text5}>Transfer</Text>
            </View>

            <View style={styles.View6}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/confirmation.png')}
              />
              <Text style={styles.text5}>konfirmasi</Text>
            </View>
          </View>

          <View style={styles.View3}>
            <View style={styles.View4}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/woman-512.png')}
              />
              <Text style={styles.text5}>Nama Adik Asuh</Text>
            </View>

            <View style={styles.View5}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/money-tranfer.png')}
              />

              <Text style={styles.text5}>Transfer</Text>
            </View>

            <View style={styles.View6}>
              <Image
                style={styles.icon2}
                source={require('./src/assets/confirmation.png')}
              />
              <Text style={styles.text5}>konfirmasi</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default App;
