// PEOPLE DATA ARRAY
let people = ["zukisa", "zwai", "steven", "john", "chief"];

// CREATE UNORDERED LIST
let peopleList = document.createElement("ul");

// CREATE LIST ITEM FOR EACH PEOPLE & APPED TO LIST
people.forEach(person => {
    let personsList = document.createElement('li');
    personsList.textContent = person;
    peopleList.appendChild(personsList);
});

// INJECT LIST TO HTML
let centerDiv = document.querySelector(".centerDiv");
centerDiv.appendChild(peopleList);