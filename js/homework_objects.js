// Ejercicio 1
// dado el siguiente array de objetos
let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// obtener un nuevo objeto con esta estructura
//-> {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
//   }

const arrayToObject = (array) =>
  array.reduce((accumulator, element) => {
    let name = element.firstName + " " + element.lastName;
    let role = element.role;
    // console.log(accumulator);
    //return { ...accumulator, [name]: role };
    return (accumulator[name] = role), accumulator;
  }, {});

console.log(arrayToObject(users));
