// import React from 'react';
// import {AuthProvider} from './AuthProvider'
// import Routes from './Routes';

// const Providers = () => {
//   return (
//     <AuthProvider>
//       <Routes />
//     </AuthProvider>
//   );
// }

// export default Providers;

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Action from '../Redux/Action/DummyAction';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const index = () => {
  const Dispatch = useDispatch();

  const GetStudentFeesDetails = index => Action.GetStudentFeesDetails(index);

  const {currentid} = useSelector(state => state.Dummy);
  const [pass, setPass] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    Dispatch(GetStudentFeesDetails(currentid + 1));
  }, []);

  const register = async () => {
    console.log('Start');
    const ref = firestore().collection('Todobaba');
    await ref.add({
      firstname: 'Hari',
      createdAt: firestore.Timestamp.fromDate(new Date()),
    });
    console.log('Completed');
  };

  const Signup = async (
    email,
    password,
    
  ) => {

      await auth()
        .createUserWithEmailAndPassword(email, password)
          firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .set({
              email: email,
              createdAt: firestore.Timestamp.fromDate(new Date()),
              pass:password
            });
      console.log("Completed");
        
    
  }
  return (
    <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={email => setEmail(email)}
        style={{borderWidth:1,borderColor:"black",marginVertical:10,width:200}}
      />
      <Text>Pass</Text>
      <TextInput
        value={pass}
        onChangeText={name => setPass(name)}
        secureTextEntry
        style={{borderWidth:1,borderColor:"black"}}
      />
      <TouchableOpacity onPress={() => Signup(email,pass)}>
        <Text style={{fontSize: 30, fontWeight: '800',alignSelf:"center",marginVertical:10}}>{`Send`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

