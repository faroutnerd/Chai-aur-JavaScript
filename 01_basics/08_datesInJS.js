// Dates

let myDate = new Date()
console.log(myDate);    // 2025-03-24T11:02:42.387Z
console.log(myDate.toString()); // Mon Mar 24 2025 11:04:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Mar 24 2025
console.log(myDate.toISOString());  // 2025-03-24T11:06:46.922Z
console.log(myDate.toJSON());   // 2025-03-24T11:06:46.922Z
console.log(myDate.toLocaleDateString());   // 3/24/2025
console.log(myDate.toLocaleString());   // 3/24/2025, 11:06:46 AM

console.log(typeof myDate);     // object

let myCreateDate = new Date(2023, 0, 23);   // months starts from 0
console.log(myCreateDate.toDateString());   // Mon Jan 23 2023

let newDate = new Date(2024, 9, 12, 20, 30);
console.log(newDate.toLocaleString());  // 10/12/2024, 8:30:00 PM

// let anotherDate = new Date("2023-11-26");
let anotherDate = new Date("11-26-2024");   // month starts from 1
console.log(anotherDate.toLocaleString());  //11/26/2024, 12:00:00 AM

// Time-Stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);   // 1742815298949 -> milliseconds started from 1st Jan, 1970
console.log(myDate.getTime()); // 1742815441935

console.log(Math.floor(Date.now()/1000));    // milli-seconds to seconds

let todayDate = new Date();
console.log(todayDate);
console.log(todayDate.getDay());
console.log(todayDate.getMonth() + 1);

todayDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
})
console.log(todayDate);

// +++++++++++++++++++++++++CHAT GPT++++++++++++++++++++++++++++++++++++

// 1️⃣ Creating Dates in JavaScript
// 1. Create a Date Object for the Current Date & Time
let currentDate = new Date();
console.log(currentDate); // Example: Mon Mar 17 2025 10:15:30 GMT+0530

// 2. Create a Specific Date (YYYY, MM, DD, HH, MM, SS, MS)
let specificDate = new Date(2025, 2, 17, 10, 15, 30); // March 17, 2025 (Month is 0-based)
console.log(specificDate);

// 3. Using a Date String
let dateFromString = new Date("2025-03-17T10:15:30");
console.log(dateFromString);    // 2025-03-17T10:15:30.000Z

// 4. Using Timestamps (Milliseconds since Jan 1, 1970)
let dateFromTimestamp = new Date(1678900000000);
console.log(dateFromTimestamp);     // 2023-03-15T17:06:40.000Z

// 2️⃣ Getting Date Components
let now = new Date();

console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 2 (March, because months are 0-based)
console.log(now.getDate());      // 17 (Day of the month)
console.log(now.getDay());       // 1 (Monday, where 0 = Sunday, 1 = Monday)
console.log(now.getHours());     // 10 (Hours in 24-hour format)
console.log(now.getMinutes());   // 15
console.log(now.getSeconds());   // 30
console.log(now.getMilliseconds()); // 0-999
console.log(now.getTime());      // Timestamp in milliseconds
console.log(Date.now());         // Current timestamp (same as getTime)

// 3️⃣ Setting Date Components
// You can modify a date object using setter methods:
let date = new Date();

date.setFullYear(2026);
date.setMonth(5); // June (0-based index)
date.setDate(25);
date.setHours(15);
date.setMinutes(30);
date.setSeconds(45);

console.log(date); // Updated date and time

// 4️⃣ Formatting Dates
// 📌 Convert a Date to a Readable String

let date_ = new Date();
console.log(date_.toDateString());  // "Mon Mar 17 2025"
console.log(date_.toTimeString());  // "10:15:30 GMT+0530 (India Standard Time)"
console.log(date_.toUTCString());   // "Mon, 17 Mar 2025 04:45:30 GMT"
console.log(date_.toISOString());   // "2025-03-17T04:45:30.000Z" (ISO 8601 format)
console.log(date_.toLocaleString()); // "3/17/2025, 10:15:30 AM" (Based on locale)
console.log(date_.toLocaleDateString()); // "3/17/2025"
console.log(date_.toLocaleTimeString()); // "10:15:30 AM"

// You can pass options to toLocaleString() for custom formats:
let _date = new Date();

let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
console.log(_date.toLocaleDateString("en-US", options)); // "Monday, March 24, 2025"

// 5️⃣ Comparing Dates
let date1 = new Date("2025-03-17");
let date2 = new Date("2025-03-18");

console.log(date1 > date2); // false
console.log(date1 < date2); // true
console.log(date1.getTime() === date2.getTime()); // false

// 6️⃣ Calculating Date Differences
let startDate = new Date("2025-03-10");
let endDate = new Date("2025-03-17");

let diff = endDate - startDate; // Difference in milliseconds
console.log(diff / (1000 * 60 * 60 * 24)); // Convert to days (7 days)

// 7️⃣ Getting a Date X Days from Today
let today = new Date();
today.setDate(today.getDate() + 7); // Add 7 days
console.log(today);

// 8️⃣ Converting Timestamp to Date
let timestamp = Date.now();
let dateFromTimestamp_ = new Date(timestamp);
console.log(dateFromTimestamp_.toLocaleString());   // 3/24/2025, 3:31:11 PM

// +++++++++++Inter View Question++++++++++++++

// 1️⃣ How do you get the current date and time in JavaScript?
    let now_ = new Date();
    console.log(now_.toLocaleString());

// 2️⃣ What is the difference between getDate() and getDay()?
// ✅ Answer:
// getDate() returns the day of the month (1-31).
// getDay() returns the day of the week (0 = Sunday, 1 = Monday, etc.).
    let _date_ = new Date();
    console.log(_date_.getDate()); // Example: 17
    console.log(_date_.getDay());  // Example: 1 (Monday)

// 3️⃣ How do you format a date as YYYY-MM-DD?
    let din = new Date();
    let formattedDate = `${din.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    console.log(formattedDate); // Example: "2025-03-17"

// 4️⃣ How do you calculate the difference in days between two dates?
    let date_1 = new Date("2025-03-10");
    let date_2 = new Date("2025-03-17");

    let diffInTime = date_2 - date_1;
    let diffInDays = diffInTime / (1000 * 60 * 60 * 24);
    console.log(diffInDays); // 7 days

// 5️⃣ How do you check if a date is in the past, present, or future?
    let today_ = new Date();
    let givenDate = new Date("2025-03-17");

    if (givenDate < today_) {
        console.log("The date is in the past.");
    } else if (givenDate > today_) {
        console.log("The date is in the future.");
    } else {
        console.log("The date is today.");
    }

// 6️⃣ How do you get the first and last day of the current month?
    let _now = new Date();
    let firstDay = new Date(_now.getFullYear(), _now.getMonth(), 1);
    let lastDay = new Date(_now.getFullYear(), _now.getMonth() + 1, 0); // That 0 and month + 1

    console.log(firstDay.toLocaleDateString()); // First day
    console.log(lastDay.toLocaleDateString());  // Last day


// 7️⃣ How do you add or subtract days from a date?
let dinak = new Date();
dinak.setDate(dinak.getDate() + 7); // Add 7 days
console.log(dinak);

dinak.setDate(dinak.getDate() - 14); // Subtract 14 days
console.log(dinak);
