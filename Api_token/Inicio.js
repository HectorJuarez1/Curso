const http = require('http');

function getData() {
  const url = 'http://192.168.101.144:8080/admin';
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtbG9wZXoiLCJleHAiOjE2ODg2NDU1MTQsImlhdCI6MTY4ODYxNjcxNCwicm9sIjp7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifX0.FJLiTNWOzYDlDkBoCClhztu0SFF0D_fsDrqbjfSPm2c';

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  http.get(url, options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const jsonData = JSON.parse(data);
      displayData(jsonData);
    });
  }).on('error', (error) => {
    console.error('Error de conexión:', error.message);
  });
}

function displayData(data) {
  console.log('Datos recibidos:', data);
}

getData();
