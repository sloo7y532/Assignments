//=========================================================================================
console.log("----------- Promise Intro And Syntax ------------");
/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);
//=========================================================================================
console.log("----------- Promise – Then, Catch And Finally ------------");
/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromise1 = new Promise((resolveFunction, rejectFunction) => {
  let employees = [];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromise1
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done"));

//?=======================================================================
  //!   See => https://chatgpt.com/share/680f6729-d080-8005-83be-0b8548552ea5
//?=======================================================================
/*
Code Starts
↓
Execute all synchronous code
↓
Asynchronous tasks wait outside
↓
Call Stack becomes empty
↓
Event Loop brings tasks from:
!    - Microtask Queue first (Promises) =>       {so Microtask have more priority, like a Promises.}
!    - Then Task Queue (setTimeout, setInterval)
↓
Execute those tasks
↓
Repeat forever!

*/
//=========================================================================================
console.log("----------- Promise And XHR ------------");
/*
  Promise And XHR
*/

const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
      let myRequest = new XMLHttpRequest();
      myRequest.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(Error("No Data Found"));
        }
      };
  
      myRequest.open("GET", apiLink);
      myRequest.send();
    });
  };
  
  getData("https://api.github.com/users/elzerowebschool/repos")
    .then((result) => {
      result.length = 10;
      return result;
    })
    .then((result) => console.log(result[0].name))
    .catch((rej) => console.log(rej));
    //=========================================================================================
console.log("----------- Fetch API ------------");
/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    data.length = 10;
    return data;
  })
  .then((firstData) => {
    console.log(firstData[0].name);
  });
//=========================================================================================
console.log("----------- Promise – All, All Settled, Race ------------");
/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The First Promise");
    }, 5000);
  });
  
  const mySecondPromise = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Iam The Second Promise");
    }, 1000);
  });
  
  const myThirdPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Iam The Third Promise");
    }, 2000);
  });
  //!   Promise.all => هذه الدالة تنتظر جميع الوعود تنتهي بنجاح (resolve).
  // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  //   (resolvedValues) => console.log(resolvedValues),
  //   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  // );
  
  //!   Promise.allSettled => هذه الدالة تنتظر جميع الوعود سواء نجحت أو فشلت.
  // Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  //   (resolvedValues) => console.log(resolvedValues),
  //   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  // );
  
  //!   Promise.race => هذه الدالة تنتظر أول وعد ينتهي فقط (سواء كان resolve أو reject).
  Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
    (resolvedValues) => console.log(resolvedValues),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
  );

  /*
?                   |           متى تنتهي        |              النتيجة
Promise.all         | عندما تنجح كل الوعود أو أول خطأ |          نجاح كامل أو أول خطأ
Promise.allSettled  | عندما تنتهي كل الوعود |  نتيجة لكل وعد (ناجح أو فاشل)
Promise.race        | أول وعد ينتهي (بنجاح أو فشل) |           نتيجة هذا الوعد فقط
  */
//=========================================================================================
console.log("----------- Async & Await ------------");
/*
  Async & Await With Try, Catch, Finally
*/

const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Iam The Good Promise");
    }, 3000);
  });
  
  // async function readData() {
  //   console.log("Before Promise");
  //   try {
  //     console.log(await myPromise);
  //   } catch (reason) {
  //     console.log(`Reason: ${reason}`);
  //   } finally {
  //     console.log("After Promise");
  //   }
  // }
  
  // readData();
  
  // "https://api.github.com/users/elzerowebschool/repos"
  
  async function fetchData() {
    console.log("Before Fetch");
    try {
      let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
      console.log(await myData.json());
    } catch (reason) {
      console.log(`Reason: ${reason}`);
    } finally {
      console.log("After Fetch");
    }
  }
  
  fetchData();

