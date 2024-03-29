let students = [
    {
        id: 1,
        name: "Tahmaz",
        surname: "Muradov",
        age: 24,
        email: "muradofftehmez01@gmail.com",
        Phone: "+994 60 553 69 90",
        group_id: 33,
    },
    {
        id: 2,
        name: "Sema",
        surname: "Abdullazede",
        age: 19,
        email: "semaabdullazade@gmail.com",
        Phone: "+994 99 999 99 99",
        group_id: 44,
    },
    {
        id: 3,
        name: "Sevinc",
        surname: "Zulfiqarli",
        age: 27,
        email: "Sevinczulfigarli@gmail.com",
        Phone: "+994 72 772 72 72",
        group_id: 33,
    },
    {
        id: 4,
        name: "Nail",
        surname: "babayev",
        age: 20,
        email: "babayevnail@gmail.com",
        Phone: "+994 55 555 55 55",
        group_id: 44,
    },
    {
        id: 5,
        name: "Nurlan",
        surname: "Quluyev",
        age: 27,
        email: "quluyevnurlan@gmail.com",
        Phone: "+994 51 212 12 12",
        group_id: 33,
    },
];

let groups = [
    {
        id: 13,
        name: "Coders Caravan",
    },
    {
        id: 75,
        name: "Coders Nakhchivan",
    },
    {
        id: 85,
        name: "Coders Nakhchivan",
    },
];

console.log(students);
console.log(students[0].name + " " + students[0].surname);
console.log(students[2].group_id);
console.log(students[1].name);
console.log(students[1].surname);


students.map((student) => {
    //                             id: 33 === group_id: 33,
    let group = groups.find((t) => t.id === student.group_id)
    console.log(`${student.name} ${student.surname} >> ${group.name}`);
})