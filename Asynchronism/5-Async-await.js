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

async function getPersonagesW() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map(id => getPersonage(id));
  try {
    var Personajes = await Promise.all(promesas);
    console.log(Personajes);
    console.log("Jose crack");
  } catch (id) {
    onError(id);
  }
}

getPersonagesW();
