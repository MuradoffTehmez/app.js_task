// Taskiniz:
// 1. Obyekt yaradin.
// 2. Array icinde coxlu obyektler yaradin
// 3. Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
// 4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)
// 5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.


// 1. Obyekt yaradın
const school = {
  name: "Naxcivan Məktəbi",
  address: "Naxcivan, Azərbaycan",
  yearEstablished: 1990
};

// 2. Array içində çoxlu obyektlər yaradın
const students = [
  {
    name: "Əli",
    surname: "Həsənov",
    age: 16,
    grade: 11,
    hobbies: ["futbol", "kitab oxumaq"],
    characteristics: {
      intelligent: true,
      hardWorking: false
    },
    grades: [95, 92, 98, 90]
  },
  {
    name: "Leyla",
    surname: "Quliyeva",
    age: 17,
    grade: 12,
    hobbies: ["rəqs etmək", "musiqi dinləmək"],
    characteristics: {
      creative: true,
      sociallyActive: true
    },
    grades: [55, 78, 62, 85]
  },
  {
    name: "Rəşad",
    surname: "Əliyev",
    age: 15,
    grade: 10,
    hobbies: ["şahmat oynamaq", "kodlama"],
    characteristics: {
      logical: true,
      quiet: true
    },
    grades: [90, 92, 88, 95]
  }
];

// 4. Students arrayının qiymət ortalamasını çıxarın
const totalGrades = students.reduce((sum, student) => {
  return sum + student.grades.reduce((total, grade) => total + grade, 0);
}, 0);
const averageGrade = totalGrades / (students.length * students[0].grades.length);
console.log(`Qiymət ortalaması: ${averageGrade.toFixed(2)}`);

// 5. Qiyməti 90-dan az olan tələbələri Ad və Soyadı ilə birlikdə ekrana çıxardıb onlara xəbərdarlıq edin
students.forEach(student => {
  const averageStudentGrade = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length;
  if (averageStudentGrade < 90) {
    console.log(`${student.name} ${student.surname} - Diqqət! Ortalamanız 90-dan aşağıdır.`);
  }
});

// 1. school obyekti yaradılır.
// 2. students arrayı yaradılır və içərisində 3 tələbə obyekti əlavə edilir. Hər tələbə obyektində hobbilər, xüsusiyyətlər və qiymətlər siyahısı var.
// 3. totalGrades dəyişəni bütün tələbələrin qiymətlərinin cəmini hesablayır.
// 4. averageGrade dəyişəni bütün tələbələrin ortalama qiymətini hesablayır.
// 5. Hər tələbə üçün ortalama qiymət hesablanır və əgər qiymət 90-dan aşağıdırsa, tələbənin ad və soyadı ilə birlikdə xəbərdarlıq mesajı çıxarılır.