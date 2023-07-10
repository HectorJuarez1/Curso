const url = 'http://192.168.101.144:9000/login';

const authenticationReq = {
  email: 'hector.coyotl@grupopakar.com.mx',
  password: 'Pakar'
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(authenticationReq)
};

fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al consumir la API: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Manejar la respuesta exitosa de la API
    console.log(data);
  })
  .catch(error => {
    // Manejar el error
    console.error(error);
  });
