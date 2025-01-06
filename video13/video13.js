console.log(`Hello Js`)

//review something that you already studied
let arrTop4 = ['Mancity', 'MU', 'Liver', 'Chelsea']

// ----------------------------------------------------------------------------------------------------------------
//while
// + The issue is that the condition if (arrTop4[a].length === 5)
// checks the length of the string, not its position (vị trí) or alphabetical(chữ cái) order(thứ tự).
// + It will check if the first place (vị trí, nơi) Mancity is satisfied(thỏa mãn) or not.
// + If satisfied, show it and go to next index check.

// ----------------------------------------------------------------------------------------------------------------
let a = 0; 
// while (a < arrTop4.length) {
//     if (arrTop4[a].length === 5) {
//         console.log(`Top club ${a + 1} : ${arrTop4[a]}`);
//     } else if (arrTop4[a].length === 7) {
//         console.log(`Top club ${a + 1} : ${arrTop4[a]}`);
//     }
//     a++;
// }

// ----------------------------------------------------------------------------------------------------------------
// + If the element at index a (arrTop4[a]) equals 'Chelsea', print the message "Found it: Chelsea" and 
// exit the loop with the break statement.
// + The way to increment a++ is at the end (ở cuối) of the loop. 
// Therefore (do đó), each time an element is checked and processed, the index a is increased after 
// all the operations(thao tác) of the loop have been performed.
// while (a < arrTop4.length) {
//     if (arrTop4[a] === 'Chelsea') {
//         console.log(`Found it: ${arrTop4[a]}`);
//         break;
//     }
//     console.log(`Check i: ${a}`)
//     a++;
// }

// ----------------------------------------------------------------------------------------------------------------
// + At the very beginning of the loop, the index a is incremented (được tăng lên) before the condition is checked.
// + Since a++ is executed before the condition is checked, it can index out of bounds(ràng buộc, giới hạn) and 
// lead to errors if not careful.
// while (a < arrTop4.length) {
//     a++;
//     if (arrTop4[a] === 'Chelsea') {
//         console.log(`Found it: ${arrTop4[a]}`);
//         break;
//     }
//     console.log(`Check i: ${a}`)
// }

// ----------------------------------------------------------------------------------------------------------------
// + The continue command (lệnh) skips the rest of (phần còn lại của) the loop (including the a++ command) and 
// continues the loop.
// + When 'Chelsea' is encountered(gặp, chạm trán, đụng độ), the continue statement prevents a++ from executing.
// This causes the index a to repeat indefinitely (vô hạn) if 'Chelsea' is the current element, 
// resulting in an infinite loop (vòng lặp vô hạn).
// while (a < arrTop4.length) {
//     if (arrTop4[a] === 'Chelsea') {
//         console.log(`Found it: ${arrTop4[a]}`);
//         continue;
//     }
//     console.log(`Check i: ${a}`)
//     a++;
// }

// ----------------------------------------------------------------------------------------------------------------
//Incrementing a before checking the condition causes (nguyên nhân, có lẽ, khiến) a to potentially(có khả năng)
// go beyond (vượt xa hơn, vượt quá, vượt ra ngoài) the array bounds (arrTop4[a] returns undefined when a = arrTop4.length), 
// causing an out-of-array index access error.
while (a < arrTop4.length) {
    a++;
    if (arrTop4[a] === 'Chelsea') {
        console.log(`Found it: ${arrTop4[a]}`);
        continue;
    }
    console.log(`Check i: ${a}`)
}