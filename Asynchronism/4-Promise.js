/*Valores que aún no conocemos luego de ejecutar un callback
Nace con el objetivo de resolver el hellCallback o la anidación de callbacks
Esta tiene 3 estados:

1) Pending 
2) Fulfilled (Si se resolve) se llama la funcion .then(val =>...)
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

getPersonage(9)
  .then(Personage => {
    console.log(`The personage five is  ${Personage.name}`);
  })
  .catch(id => {
    console.log(`Error with the personage ${id}`);
  });
