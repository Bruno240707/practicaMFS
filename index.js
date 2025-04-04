const fs = require('fs');

const fileName = 'archivo.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log('Error al leer el archivo:', err);
    return;
  }
  console.log('Contenido actual del archivo:', data);

  const textoParaAgregar = '\nTexto agregado al final.';
  fs.appendFile(fileName, textoParaAgregar, (err) => {
    if (err) {
      console.log('Error al agregar texto:', err);
      return;
    }
    console.log('Texto agregado correctamente.');

    fs.readFile(fileName, 'utf8', (err, newData) => {
      if (err) {
        console.log('Error al leer el archivo nuevamente:', err);
        return;
      }
      console.log('Nuevo contenido del archivo:', newData);
    });
  });
});