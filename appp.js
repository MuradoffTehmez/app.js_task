// while | for

// Sonsuz dongu
// let counter = 0;

// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }

// let counter = 0;

// while (counter <= 10) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }

// let counter = 0;
// while (true) {
//   if (counter === 7) {
//     break;
//   }
//   console.log(counter);
//   counter++;
// }

// let numbers = [1, [2, 3, 4, 5], 3, 4];
// console.log(numbers);
// console.log(numbers[2]);
// console.log(numbers[1][2]);

// some
// pop
// unshift
// shift
// join()

// let numbers = [1, 2, 3, 4];
// console.log(numbers.join("--"));

// find

// let user = {
//   // key: value
//   name: "Mikhail",
//   surname: "Tal",
//   age:43,
//   hobbies: ["play chess", "read book"]
// }

// // Math.sqrt
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.hobbies);
// console.log(user.hobbies[1]);

// json

// paltar/qisaqol/34
// let student = {
//   id: 1,
//   name: "Gunel",
//   surname: "Eliyeva",
// };

// console.log(Object.keys(student));
// console.log(Object.values(student));

let students = [
  {
    id: 1,
    name: "Gunel",
    surname: "Eliyeva",
    group_id: 33,
  },
  {
    id: 2,
    name: "Samuray",
    surname: "Semedli",
    group_id: 44,
  },
  {
    id: 3,
    name: "Rauf",
    surname: "Abbasbeyli",
    group_id: 44,
  },
  {
    id: 4,
    name: "Nuray",
    surname: "Abbasova",
    group_id: 33,
  },
];

let groups = [
  {
    id: 33,
    name: "Coders Caravan",
  },
  {
    id: 44,
    name: "Coders Nakhchivan",
  },
];

console.log(students);
// console.log(students[0].name + " " + students[0].surname);
// console.log(students[2].group_id);
// console.log(students[1].name);
// console.log(students[1].surname);


students.map((student) => {
  //                             id: 33 === group_id: 33,
  let group = groups.find((t) => t.id === student.group_id)
  console.log(`${student.name} ${student.surname} >> ${group.name}`);
})