import React from 'react';
import { Image, Text, View, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import Images from '../../../assets';
import BackButtonOnlyHeader from '../../../components/CustomHeader';


const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButtonOnlyHeader onPress={() => console.log('Back button pressed')} />

      {/* Profile Header */}
      <View style={styles.headerContainer}>
        <View style={styles.userimagecontainer}>
          <Image source={Images.userimage} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.userdatacontainer}>
          <Text style={styles.name}>Itunuoluwa Abidoye</Text>
          <Text style={styles.username}>@Itunuoluwa</Text>
        </View>
        <TouchableOpacity style={styles.editContainer}>
          <Image source={Images.editicon} style={styles.editicon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {/* Profile Options */}
      <View style={styles.MainContainer}>
        <View style={styles.listcontainer}>
          <Image source={Images.profile} style={styles.lefticon} />
          <View style={styles.datacontainer}>
            <Text style={styles.heading}>My Account</Text>
            <Text style={styles.detail}>Make changes to your account</Text>
          </View>
          
          <Image source={Images.righticon} style={styles.righticon} />
        </View>

    
        <View style={styles.listcontainer}>
          <Image source={Images.download} style={styles.lefticon} />
          <View style={styles.datacontainer}>
            <Text style={styles.heading}>Two-Factor Authentication</Text>
            <Text style={styles.detail}>Further secure your account for safety</Text>
          </View>
          <Image source={Images.righticon} style={styles.righticon} />
        </View>




        <View style={styles.listcontainer}>
          <Image source={Images.logout} style={styles.lefticon} />
          <View style={styles.datacontainer}>
            <Text style={styles.heading}>Log out</Text>
            <Text style={styles.detail}>Further secure your account for safety</Text>
          </View>
          <Image source={Images.righticon} style={styles.righticon} />
        </View>
      </View>


    
      {/* Footer Options */}
      <View style={styles.footerContainer}>
        <View style={styles.listcontainer}>
          <Image source={Images.about} style={styles.lefticon} />
          <View style={styles.datacontainer}>
            <Text style={styles.heading}>Help & Support</Text>
          </View>
          <Image source={Images.righticon} style={styles.righticon} />
        </View>

        <View style={styles.listcontainer}>
          <Image source={Images.about} style={styles.lefticon} />
          <View style={styles.datacontainer}>
            <Text style={styles.heading}>About App</Text>
          </View>
          <Image source={Images.righticon} style={styles.righticon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
