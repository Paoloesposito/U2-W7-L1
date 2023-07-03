// esercizio 1

class user {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherPerson) {
      if (this.age < otherPerson.age) {
        return `${this.firstName} è più giovane di ${otherPerson.firstName}`;
      } else if (this.age > otherPerson.age) {
        return `${this.firstName} è più anziano di ${otherPerson.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherPerson.firstName}`;
      }
    }
  }
  
  // Creazione degli oggetti User
  const user1 = new user("Frodo", "Beggings", 18, "Contea");
  const user2 = new user("Sauron", "Oscuro", 200, "Mordor");
  const user3 = new user("Gandalf", "Bianco", 150, "Terra di Mezzo");
  
  // Verifica della comparazione tra le età
  console.log(user1.compareAge(user2)); // Output: Mario è più giovane di Giulia
  console.log(user1.compareAge(user3)); // Output: Mario ha la stessa età di Luca



  // esercizio 2

  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    sameOwner(otherPet) {
      return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
    }
  }
  
  document.getElementById("petForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita il comportamento di default del form
  
    // Ottieni i valori dei campi del form
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
  
    // Crea un nuovo oggetto Pet
    const pet = new Pet(petName, ownerName, species, breed);
  
    // Verifica se esistono animali con lo stesso proprietario
    const petList = document.getElementById("petList");
    const pets = Array.from(petList.getElementsByTagName("li"));
    let hasSameOwner = false;
    for (const existingPet of pets) {
      const existingOwnerName = existingPet.dataset.ownerName;
      if (pet.sameOwner(existingPet)) {
        hasSameOwner = true;
        break;
      }
    }
  
    // Aggiungi l'oggetto Pet alla lista
    const listItem = document.createElement("li");
    listItem.textContent = `${petName} - ${ownerName} - ${species} - ${breed}`;
    listItem.dataset.ownerName = ownerName.toLowerCase();
    petList.appendChild(listItem);
  
    // Aggiungi una nota se ci sono animali con lo stesso proprietario
    if (hasSameOwner) {
      const noteItem = document.createElement("li");
      noteItem.textContent = "Nota: Ci sono animali con lo stesso proprietario.";
      petList.appendChild(noteItem);
    }
  
    // Pulisci i campi del form
    document.getElementById("petName").value = "";
    document.getElementById("ownerName").value = "";
    document.getElementById("species").value = "";
    document.getElementById("breed").value = "";
  });
  