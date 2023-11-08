import { getFirestore } from "firebase/firestore";
import 'firebase/database';
import { app } from "./firebase.config";

//busca la base de datos de Firebase
export const db = getFirestore(app);

// Función para crear un nuevo algoritmo
export const crearAlgoritmo = (titulo, codigo, descripcion, idioma) => {
    const database = app.database();
    const algoritmoRef = database.ref('algoritmos');
  
    const nuevoAlgoritmo = {
      titulo,
      codigo,
      descripcion,
      idioma,
    };
  
    // Agrega un nuevo nodo con un ID generado automáticamente
    algoritmoRef.push(nuevoAlgoritmo)
      .then(() => {
        console.log('Algoritmo creado exitosamente');
        console.log(nuevoAlgoritmo.titulo);
        console.log(nuevoAlgoritmo.descripcion);
        console.log(nuevoAlgoritmo.codigo);
        console.log(nuevoAlgoritmo.idioma);
      })
      .catch((error) => {
        console.error('Error al crear el algoritmo:', error);
      });
  };
  
  // Función para leer todos los algoritmos
  export const leerAlgoritmos = (callback) => {
    const database = app.database();
    const algoritmoRef = database.ref('algoritmos');
  
    // Escucha cambios en la base de datos y llama al callback con los datos
    algoritmoRef.on('value', (snapshot) => {
      const algoritmos = [];
  
      snapshot.forEach((childSnapshot) => {
        const algoritmo = childSnapshot.val();
        algoritmos.push(algoritmo);

        // For Fer Tests
        console.log(algoritmo);
      });
  
      // Llama al callback con los datos de los algoritmos
      callback(algoritmos);
    });
};
