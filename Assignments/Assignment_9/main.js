//=========================================================================================
console.log("------------------- a -------------------");
//?  a- Explain in details, in your words what is Event Loop ?
//* Event loop it's a system that manages how the code is executed, so it's coordinates when to run tasks.
//! See => https://chatgpt.com/share/68107aad-7dd4-8005-a225-735b9994ba10
//=========================================================================================
console.log("------------------- b -------------------");
//?  b- What is Axios? Explain ?
//* Axios is a popular JavaScript library used to make HTTP requests
//* from the browser (client-side) or Node.js (server-side). It is based on Promises.

/* What Does Axios Do?
    - GET requests to fetch data,
    - POST requests to submit data,
    - And other types like PUT, PATCH, DELETE.
*/

/*
    Advantages:
        - Simple syntax: Clean and readable code.
        - Promise-based: Works well with async/await.
        - Automatically transforms JSON data.
        - Handles request cancellation, timeouts, and errors.
*/
async function fetchData() {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
//=========================================================================================
console.log("------------------- c -------------------");
//?  c- What’s a Promise in JavaScript? What are the three states of the Promise? Crete a promise that logs data on success, logs error on failure ?
//* Promise => A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation
//*            it may either succeed (and return a result) or fail (and return an error).

//! It's come to solve the callback hell problem.
//* It lets you attach handlers (.then(), .catch(), .finally()) to run code after the operation finishes.

/*
The Three States of a Promise:
  1- Pending — The initial state.
  2- Fulfilled — The operation completed successfully.
  3- Rejected — The operation failed.
*/
let success = true;
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve("Success!");
    } else {
      reject(Error("Error!"));
    }
  }, 2000);
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//=========================================================================================
console.log("------------------- d -------------------");
//?  d- What’s the difference between fetching using Axios and using fetch (e.g. for GET method)  ?
/* 
| Feature                   | Axios                  | Fetch                   |
|---------------------------|------------------------|-------------------------|
| JSON handling             | Automatic              | Manual (`.json()`)      |
| Error handling            | Automatic for non-2xx  | Manual check            |
| Browser support           | Better (includes IE)   | Modern only             |
| Request cancellation      | Via CancelToken        | Via AbortController     |
| File uploads              | Easier                 | Requires setup          |
| Built-in timeout          | Yes                    | No                      |
*/

// with Axios
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


// with Fetch
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//=========================================================================================
console.log("------------------- e -------------------");
//?  e- What is Microtasks & Macrotasks in the event loop? and when do they run ?
/* 
* Microtasks => are tasks that are scheduled to run immediately after the currently executing script 
              and before any macrotasks.

* Run => After current script, before next macrotask.

! Examples of Microtasks:
    Promise.then, Promise.catch, Promise.finally
    queueMicrotask()...
*/

//------
/*
* Macrotasks => (also known as tasks) are scheduled by the browser and involve things like:
! Examples of Macrotasks: setTimeout, setInterval

* Run => After microtasks and script execution completes
*/
//=========================================================================================
console.log("------------------- f -------------------");
//?  f- What’s the difference between Promise.all() and Promise.race() ?
/*
* Promise.all() => Waits for all promises to fulfill.
!  - If any promise rejects, it immediately rejects with that error.
   - Useful when you need all results, but only if all succeed.
*/

/*
* Promise.race() => Settles as soon as the first promise settles (resolve or reject).
  - Resolves or rejects with the value/reason of the first settled promise.
*/
//=========================================================================================
console.log("------------------- g -------------------");
//?  g- What’s the difference between Promise.all() and Promise.allSettled() ?
/*
* Promise.all() => Waits for all promises to fulfill.
!  - If any promise rejects, it immediately rejects with that error.
   - Useful when you need all results, but only if all succeed.
*/

/*
* Promise.allSettled() => Waits for all promises to settle, meaning either fulfilled or rejected.
  - Never short-circuits, even if some promises fail.
  - Returns an array of objects with { status, value } or { status, reason }.
*/

/*
| Feature                | `Promise.all()`                  | `Promise.allSettled()`                 |
|------------------------|----------------------------------|----------------------------------------|
| Waits for all promises | ✅ Yes                           | ✅ Yes                                |
| Rejects early on error | ❌ No, it rejects immediately    | ✅ No, it waits for all               |
| Returns results        | ✅ Values if all succeed         | ✅ `{ status, value/reason }` objects |
| Use case               | When all must succeed             | When you want results regardless      |
*/
//=========================================================================================
console.log("------------------- h -------------------");
//?  h- What are the problems that async/await solved ?
/*
  - Callback hell
  - Complex .then() chains
  - Difficult error handling
  - Hard-to-read async logic
*/