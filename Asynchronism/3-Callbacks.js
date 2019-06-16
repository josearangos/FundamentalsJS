const API_URL = "https://swapi.co/api/"; //API Start Wards
const PEOPLE_URL = "people/:id";

//Reques with JQuery
const DarthVader_URL = `${API_URL}${PEOPLE_URL.replace(":id", 4)}`;
const opts = { crossDomain: true };

//Option 2
const onResponse = function(personage) {
  console.log(`Hi,i'm ${personage.name}`);
};

const mystatus = function(statusResponse) {
  console.log(`The status is ${statusResponse.statusText}`);
};

//$.get(DarthVader_URL, opts, onResponse, 0, mystatus);

//Multiple Requests

function getPersonage(id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(URL, opts, onResponse);
}

/*
getPersonage(1);
getPersonage(2);
getPersonage(3);
getPersonage(4);
getPersonage(5);
*/

//The order is Random

//*******ORDER IN CALLBACKS************** */
function getPersonage2(id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(URL, opts, callback).fail(() => {
    console.log(`Error with ${id}`);
  });
}

//Callbacks with order/
//Hell Callbacks
getPersonage2(1, function(personage) {
  console.log(`Hi,i'm ${personage.name}`);
  getPersonage2(2, function(personage) {
    console.log(`Hi,i'm ${personage.name}`);
    getPersonage2(3, function(personage) {
      console.log(`Hi,i'm ${personage.name}`);
      getPersonage2(4, function(personage) {
        console.log(`Hi,i'm ${personage.name}`);
        getPersonage2(5, function() {
          console.log(`Hi,i'm ${personage.name}`);
        });
      });
    });
  });
});

// Magnate Error Callbacks
