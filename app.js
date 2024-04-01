// //1. Array icinde en boyuk ededi tapin:
// // let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 0];


// let numberss = [1, 3, 5, 7, 9, 2, 8, 6, 4, 0];
// let maxNumber = Math.max(...numberss);
// console.log("En büyük sayı:", maxNumber);



// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //2. Array icinde sade ededleri tap:
// // let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 13, 41, 44];

// let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 13, 41, 44];
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function findPrimes(arr) {
//     return arr.filter(num => isPrime(num));
// }
// let primeNumbers = findPrimes(numbers);
// console.log("Sade sayılar:", primeNumbers);


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Arrayda uzunlugu 7 olan sozleri ekrana cixardin:
// let data = [
//   "Salam",
//   "Dünyalı",
//   "JavaScript",
//   "Programlaşdırma",
//   "Kod",
//   "Frontend",
//   "Backend", ];


// let data = [
//     "Salam",
//     "Dünyalı",
//     "JavaScript",
//     "Programlaşdırma",
//     "Kod",
//     "Frontend",
//     "Backend",];
//   let wordsWithLength7 = data.filter(word => word.length === 7);
//   console.log("Uzunluğu 7 olanlar:", wordsWithLength7);


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. İstifadeciden kilosunu ve boyunu isteyin. Daha sonra onun Bədən kütlə indeksini tapın.(kilo / boy ** 2). Tapilan bmi deyerine gore usere asagidaki sekilde mesaj verin:
// 18-dən aşağı nəticələr: İdeal çəkidən aşağı
// 18 ilə 25 arasında nəticələr: İdeal çəki
// 25 ilə 30 arasında nəticələr: İdeal çəkidən yuxarı
// 30 ilə 40 arasında nəticələr: Artıq çəki (obez)
// 40-dən yuxarı nəticələr: Artıq çəki (morbid dərəcədə piylənmə)


// let kilo = parseFloat(prompt("Kilonuzu kg cinsində daxil edin:"));
// let boy = parseFloat(prompt("Boyunuzu metr cinsində daxil edin:"));a
// let bmi = kilo / (boy ** 2);
// let message;
// if (bmi < 18) {
//     message = "İdeal çəkidən aşağı";
// } else if (bmi >= 18 && bmi < 25) {
//     message = "İdeal çəki";
// } else if (bmi >= 25 && bmi < 30) {
//     message = "İdeal çəkidən yuxarı";
// } else if (bmi >= 30 && bmi < 40) {
//     message = "Artıq çəki (obez)";
// } else {
//     message = "Artıq çəki (morbid dərəcədə piylənmə)";
// }


// console.log("Vücut kitle indeksi (BMI):", bmi);
// console.log("Nəticə:", message);
// let kilo = parseFloat(prompt("Kilonuzu girin (kg):"));
// let boy = parseFloat(prompt("Boyunuzu girin (metre):"));
// let bmi = kilo / (boy ** 2);
// console.log("Bədən kütlə indeksi (BMI):", bmi);
// if (bmi < 18) {
//     console.log("İdeal çəkidən aşağı");
// } else if (bmi >= 18 && bmi < 25) {
//     console.log("İdeal çəki");
// } else if (bmi >= 25 && bmi < 30) {
//     console.log("İdeal çəkidən yuxarı");
// } else if (bmi >= 30 && bmi < 40) {
//     console.log("Artıq çəki (obez)");
// } else {
//     console.log("Artıq çəki (morbid dərəcədə piylənmə)");
// }


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //5. Userin daxil etdiyi qiymetin (Ela (100-90), Yaxsi(90-75), Orta(75-55), , Pis(55-35), Kafi(35-0)) oldugunu yoxlayin:
// // let point = +prompt("Qiymətinizi daxil edin (0 - 100):");

// let point = +prompt("Qiymətinizi daxil edin (0 - 100):");
// let message;
// if (point >= 90 && point <= 100) {
//     message = "Ela";
// } else if (point >= 75 && point < 90) {
//     message = "Yaxşı";
// } else if (point >= 55 && point < 75) {
//     message = "Orta";
// } else if (point >= 35 && point < 55) {
//     message = "Pis";
// } else if (point >= 0 && point < 35) {
//     message = "Kafi";
// } else {
//     message = "Daxil etdiyiniz qiymət uyğun deyil.";
// }
// console.log("Nəticə:", message);


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //6. Ucbucagin 2 terefini daxil edin. Hipetonuzu hesablayin (Arrow function):
// const calculateHypotenuse = (side1, side2) => Math.sqrt(side1 ** 2 + side2 ** 2);
// let side1 = parseFloat(prompt("Birinci tərəfin uzunluğunu daxil edin:"));
// let side2 = parseFloat(prompt("İkinci tərəfin uzunluğunu daxil edin:"));
// let hypotenuse = calculateHypotenuse(side1, side2);
// console.log("Üçbucağın hipotenüzü:", hypotenuse);


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

