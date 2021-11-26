import React from 'react';
import axios from './axios';

export function Getdata(type, parameter) {
  return new Promise(async (resolve, reject) => {
    if (parameter == '') {
      const response = await axios
        .get(type)
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error);
        });
    } else {
      const response = await axios
        .get(type + '?id=' + parameter)
        .then(response => resolve(response.data))
        .catch(error => {
          reject(error);
        });
    }
  });
}

export function Postdata(type, userData) {
  return new Promise(async (resolve, reject) => {
    const response = await axios
      .post(type, userData)
      .then(response => resolve(response.data))
      .catch(error => {
        reject(error);
      });
  });
}

export function Updatedata(type, parameter, userData) {
  console.log('usrdata', userData);
  return new Promise(async (resolve, reject) => {
    const response = await axios
      .put(type + '?id=' + parameter, userData)
      .then(response => resolve(response.data))
      .catch(error => {
        reject(error);
      });
  });
}

export function Deletedata(type, parameter) {
  return new Promise(async (resolve, reject) => {
    const response = await axios
      .delete(type + '?id=' + parameter)
      .then(response => resolve(response.data))
      .catch(error => {
        reject(error);
      });
  });
}
