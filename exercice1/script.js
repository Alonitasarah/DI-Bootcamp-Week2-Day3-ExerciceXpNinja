let personne1 = {
    lastName: "John",
    firstName: "Sally",
    height: 1.7,
    mass: 80,
    IMC: function () {
      let imc = personne1.mass / (personne1.height * personne1.height);
      return imc;
    },
  };
  
  let person2 = {
    lastName: "Smith",
    firstName: "John",
    height: 1.8,
    mass: 80,
    IMC: function () {
      let imc = person2.mass / (person2.height * person2.height);
      return imc;
    },
  };
  
  function compareIMC(imc1, imc2) {
    if (imc1.IMC < imc2.IMC) {
      return imc2.lastName + " " + imc2.firstName + " has a big IMC";
    } else {
      return imc1.lastName + " " + imc1.firstName + " has a big IMC";
    }
  }
  
  console.log(compareIMC(personne1, person2));
  