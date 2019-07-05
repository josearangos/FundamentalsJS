/*Valores que aún no conocemos luego de ejecutar un callback
Nace con el objetivo de resolver el hellCallback o la anidación de callbacks
Esta tiene 3 estados:

1) Pending 
2) Fulfilled (Si se resuelve) se llama la funcion .then(val =>...)
3) Rejected  (Si es rechazada o Reject) la funcion .catch(err=>...)

Pueden funcionar de manera asincrona o no

new Promise(function(resolve,reject) {
    .....
}).then(value =>{
    .....
}).catch(err =>{
    .....
})

NOTA: Una vez termina de ejecutarse la propuesta se puede
Volver a ejecutar otra promesa para enlazarlas

*/
const API_URL = "https://swapi.co/api/"; //API Start Wards
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function onError(id) {
  console.log(`Error with id : ${id}`);
}

function getPersonage(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(URL, opts, data => {
      resolve(data);
    }).fail(() => {
      reject(id);
    });
  });
}

function getBirhtYear(id) {
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(URL, opts, function(data) {
      resolve(data.birth_year);
    }).fail(() => {
      reject(id);
    });
  });
}

getPersonage(1)
  .then(Personage1 => {
    console.log(`The personage  is  ${Personage1.name}`);
    return getPersonage(2);
  })
  .then(Personage2 => {
    console.log(`The personage  is  ${Personage2.name}`);
    return getPersonage(3);
  })
  .then(Personage3 => {
    console.log(`The personage  is  ${Personage3.name}`);
    return getPersonage(4);
  })
  .then(Personage4 => {
    console.log(`The personage  is  ${Personage4.name}`);
    return getPersonage(5);
  })
  .catch(onError);

getBirhtYear(3)
  .then(birth_year => {
    console.log(`The birth Year of personge 3 is ${birth_year} `);
  })
  .catch(onError);

/** MULTIPLE PROMESAS EN PARALELO */

var ids = [1, 2, 3, 4, 5, 6, 7];
var promesas = ids.map(id => getPersonage(id));
Promise.all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError);
console.log("Joselito");
