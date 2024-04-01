let students = [
    {
        id: 1,
        name: "Tahmaz",
        surname: "Muradov",
        age: 24,
        email: "muradofftehmez01@gmail.com",
        Phone: "+994 60 553 69 90",
        group_id: 85,
    },
    {
        id: 2,
        name: "Sema",
        surname: "Abdullazede",
        age: 19,
        email: "semaabdullazade@gmail.com",
        Phone: "+994 99 999 99 99",
        group_id: 85,
    },
    {
        id: 3,
        name: "Sevinc",
        surname: "Zulfiqarli",
        age: 27,
        email: "Sevinczulfigarli@gmail.com",
        Phone: "+994 72 772 72 72",
        group_id: 75,
    },
    {
        id: 4,
        name: "Nail",
        surname: "babayev",
        age: 20,
        email: "babayevnail@gmail.com",
        Phone: "+994 55 555 55 55",
        group_id: 75,
    },
    {
        id: 5,
        name: "Nurlan",
        surname: "Quluyev",
        age: 27,
        email: "quluyevnurlan@gmail.com",
        Phone: "+994 51 212 12 12",
        group_id: 75,
    },
];

let groups = [
    {
        id: 75,
        name: "Naxcivan",
    },
    {
        id: 85,
        name: "Nakhchivan",
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