// // /// FIRST PART
// // function maxRepeating(str) {
// //     len = str.length;
// //     count = 0;

// //     res = str.charAt(0);
// //     for (i = 0; i < len; i++) {
// //         cur_count = 1;
// //         for (j = i + 1; j < len; j++) {
// //             if (str.charAt(i) != str.charAt(j)) break;
// //             cur_count++;
// //         }

// //         if (cur_count > count) {
// //             count = cur_count;
// //             res = str.charAt(i);
// //         }
// //     }
// //     return [count, res];
// // }

// // str = "checking";
// // console.log(maxRepeating(str));


// // SECOND PART

// function maxRepeatingArr(arr) {
//     let word;
//     arr.map(function (str) {
//         len = str.length;
//         count = 0;

//         res = str.charAt(0);

//         for (i = 0; i < len; i++) {
//             cur_count = 1;
//             for (j = i + 1; j < len; j++) {
//                 if (str.charAt(i) != str.charAt(j)) break;
//                 cur_count++;
//             }

//             if (cur_count > count) {
//                 count = cur_count;
//                 word = str;
//             }
//         }
//     });
//     console.log(word);
//     return word;
// }

// str = ["aba", "ababa", "gaabbartggkg", "hellooooooooo"];
// maxRepeatingArr(str);



// const text = 'Js char occurence in the text';
// count = 0;

// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === 'c') {
//         count++;
//     }
// }

// console.log(count);

// const text = "i am counting occurances";


// function countOccurances(char) {
//     let count = 0;
//     for (var i = 0; i < text.length; i++) {
//         if (text[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOccurances('c'));


// //FIRS PART

// function maxRepeating(str) {
//     len = str.length;
//     count = 0;

//     // Find the maximum repeating character
//     // starting from str[i]
//     result = str.charAt(0);
//     for (i = 0; i < len; i++) {
//         cur_count = 1;
//         for (j = i + 1; j < len; j++) {
//             if (str.charAt(i) != str.charAt(j)) break;
//             cur_count++;
//         }

//         // Update result if required
//         if (cur_count > count) {
//             count = cur_count;
//             result = str.charAt(i);
//         }
//     }
//     return result;
// }

// str = "checking";
// maxRepeating(str);
// console.log(result);


// Second part

// const str = [
//     ["text textig"],
//     ["textingin textig"]
// ];

// // const str = src.split('').sort();//

// const count = str => [...str].reduce((acc, val) => (acc[val] ? (acc[val]++) : (acc[val] = 1), acc), {});
// console.log(count(str));


// var newArr = [1, 1, 3, 4, 3, 2, 2]
// var countObj = newArr.reduce(function (acc, curr) {
//     if (typeof acc[curr] == 'undefined') {
//         acc[curr] = 1;
//     } else {
//         acc[curr] += 1;
//     }

//     return acc;
// }, {});

// console.log(countObj);

// function letterFrequency(text) {
//     var count = {};
//     text.split('').forEach(function (s) {
//         count[s] = count[s] ? count[s] + 1 : 1;
//     });
//     return count;
// }

// console.log(letterFrequency('countingtext'));


// const randomText = [
//     'labas', 'tartas', 'sezamas', 'naujas', 'bandymas'
// ];
// const count = randomText.reduce((acc, val) => {
//     if (acc[val]) {
//         acc[val] = acc[val] + 1;
//     } else {
//         acc[val] = 1;
//     }

//     return acc;
// }, {});

// console.log(count);


// var exp = 'labadienasbbbbb';
// var expCounts = {};
// var maxKey = '';
// for (var i = 0; i < exp.length; i++) {
//     var key = exp[i];
//     if (!expCounts[key]) {
//         expCounts[key] = 0;
//     }
//     expCounts[key]++;
//     if (maxKey == '' || expCounts[key] > expCounts[maxKey]) {
//         maxKey = key;
//     }
// }

// console.debug(maxKey + ":" + expCounts[maxKey]);
// console.log(maxKey)


/// second

// var newArr = [day, night, shift]
// var countObj = newArr.reduce(function (acc, curr) {
//     if (typeof acc[curr] == 'undefined') {
//         acc[curr] = 1;
//     } else {
//         acc[curr] += 1;
//     }

//     return acc;
// }, {});

// console.log(countObj);

// const numbers = ['hello', 'mama', 'boo'];

// for (let number of numbers)
//     console.log(number);



// const textArray = ["aaabbccc", "kkaaccc", "ggldeerrr", "emmm", "haha hhhhha", "asgdkggggd"];

// function maxRepeatCharArray(textArray) {
//     count = 0;
//     textArray.lenght;
//     for (let text in textArray) {
//         for (var i = 0; i < textArray.lenght; i++) {
//             itCount = 1;
//             for (var j = i + 1; j < textArray.Length; j++) {
//                 if (text[i] != text[j])
//                     break;
//                 itCount++;
//             }
//             if (itCount > count) {
//                 count = itCount;
//             }
//         }
//     }
//     console.log(textArray);
// }

// // console.log(maxRepeatCharArray);

// // function maxRepeating(str) {
// //     len = str.length;
// //     count = 0;

// //     res = str.charAt(0);
// //     for (i = 0; i < len; i++) {
// //         cur_count = 1;
// //         for (j = i + 1; j < len; j++) {
// //             if (str.charAt(i) != str.charAt(j)) break;
// //             cur_count++;
// //         }

// //         if (cur_count > count) {
// //             count = cur_count;
// //             res = str.charAt(i);
// //         }
// //     }
// //     return [count, res];
// // }

// // str = "checking";
// // console.log(maxRepeating(str));

// /*
//  * Parašykite metodą, kuris priima tekstų masyvą kaip argumentą, 
//  * o grąžina masyvą tekstų, turinčių daugiausiai iš eilės pasikartojančių raidžių.
//  */

// //teksto masyvas.

// const textArray = [
//     "aaabbccc",
//     "kkaaccc",
//     "ggldeerrr",
//     "emmm",
//     "haha hhhhha",
//     "asgdkggggd"
// ];


// function textToArray(textArray, count, strArray) {
//     count = 0;

//     for (var i = 0; i < textArray.Length; i++) {
//         itCount = 1;
//         for (var j = i + 1; j < textArray.Length; j++) {
//             if (text[i] !== text[j])
//                 break;
//             itCount++;
//             console.log(text);
//         }

//         //Patikrinama ar iteracijų kiekis didesnis nei esamas.
//         if (itCount > count) {
//             //jei iteracijų kiekis yra didesnis už esamą, perrašoma esamu.
//             count = itCount;

//             // List < string > str_list = new List < string > ();

//             strList.Add(text);
//             strArray = strList.ToArray();


//         }

//     }
//     return strArray;
// }

// console.log(count);

// function maxRepeatCharArray(textArray) {
//     count = 0;
//     for (let text in textArray) {

//         for (var i = 0; i < textArray.Length; i++) {
//             count = 1;
//             for (j = i + 1; j < textArray.Length; j++) {
//                 if (text[i] != text[j])
//                     break;
//                 it_count++;
//             }

//             if (it_count > count) {
//                 count = it_count;
//                 res = str.charAt(i);
//             }
//         }
//     }
//     return;
// }

// const inputArray = ["aaabbccc", "kkaaccc", "ggldeerrr", "emmm", "haha hhhhha", "asgdkggggd"];

// function maxRepeatCharArray(inputArray, count, outArray) {
//     count = 0;
//     length = inputArray.length;
//     textArray.forEach((array) => {
//         console.log(array);
//         for (var i = 0; i < length; i++) {
//             itCount = 1;
//             console.log(itCount);
//             for (var j = i; j < length; j++); {
//                 if (array[i] !== array[j])
//                     break;
//                 itCount++; {}
//             }
//             if (itCount > count) {
//                 count = itCount;
//                 console.log(itCount)
//             }
//         }
//     });
//     return outArray;
// }

// function countLetters(str) {
//     let tempArray = str.split('');
//     let letters = [];
//     let count = 1;

//     for (let i = 0; i < tempArray.length; i++) {
//         if (tempArray[i] === tempArray[i + 1]) {
//             count++;
//         } else {
//             let value = `${count}${tempArray[i]}`;
//             letters = [...letters, value];
//             count = 1;
//         }
//     }
//     return letters.join('');
// }


// console.log(countLetters('fffffaaaakkkkskksksk'));
// const message = ["aaabbccc", "kkaaccc", "ggldeerrr", "emmm", "haha hhhhha", "asgdkggggd"]
// const countChar = (message) => {
//     var countArr = {};
//     message.match(/[A-Z]|[a-z]/g).forEach((value) => {
//         countArr[value] = (countArr[value] == undefined) ? 1 : countArr[value] + 1
//     })
//     return countArr;
// }

// console.log(countChar(message));


// var a = ['dayyy', 'lighttt'].reduce(function (acc, curr) {
//     if (typeof acc[curr] == 'undefined') {
//         acc[curr] = 1;
//     } else {
//         acc[curr] += 1;
//     }

//     return acc;
// }, {});

// console.log(a);

// var a = ["max", "mona"];
// charCount = a.reduce((p, w) => w.split("").reduce((t, c) => (t[c] ? t[c]++ : t[c] = 1, t), p), {});
// console.log(charCount);


// var ar = ["bonjour", "coucou"],
//     map = {};
// ar.join("").split("").forEach(e => map[e] = (map[e] || 0) + 1);
// console.log(map);


// var words = ['max', 'mona'],

//     output = {};
// words.forEach(function (word) {
//     for (i = 0; i < word.split('').length; i++) {
//         if (output[word[i]])
//             output[word[i]] += 1;
//         else {
//             output[word[i]] = 1;
//         }
//     }
// });

// console.log(words);

// const inputArray = ["aaabbccc", "kkaaccc", "ggldeerrr", "emmm", "haha hhhhha", "asgdkggggd"];
// // map = {};
// // inputArray.join("").split("").forEach(charAt => map[charAt] = (map[charAt] || 0) + 1);
// // console.log(map);
// let element = inputArray.split('');


// console.log(element);