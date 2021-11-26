import axios from '../../helpers/axios';
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Getdata, Postdata, Updatedata, Deletedata} from '../../helpers/Service';
const Setting = () => {
  const [state, setState] = useState({
    username: 'shivaraj kumar',
    password: '122',
  });

  const id = 19;
  const checkget = () => {
    Getdata('getdata.php').then(result => {
      console.log('get responce', result);
    });
  };

  const checkpost = () => {
    Postdata('login.php', state).then(result => {
      console.log('post respoce', result);
    });
  };
  const checkspecific = () => {
    Getdata('EditData.php', id).then(result => {
      console.log('specific respoce', result);
    });
  };

  const checkupdate = () => {
    Updatedata('Update.php', id, state).then(result => {
      console.log('update respoce', result);
    });
  };

  const checkdelete = () => {
    Deletedata('delete.php', id).then(result => {
      console.log('delete respoce', result);
    });
  };
  return (
    <View
      style={{
        flex: 1,

        margin: 20,
        backgroundColor: 'white',
      }}>
      <View>
        <TouchableOpacity style={styles.press} onPress={checkget}>
          <Text>Get Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.press} onPress={checkpost}>
          <Text>Post Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.press} onPress={checkspecific}>
          <Text>Specific Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.press} onPress={checkupdate}>
          <Text>Update Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.press} onPress={checkdelete}>
          <Text>Delete Method</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  press: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
});
