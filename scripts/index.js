var urls = [
  "https://dog.ceo/api/breed/beagle/images/random",
  "https://dog.ceo/api/breed/chow/images/random",
  "https://dog.ceo/api/breed/akita/images/random",
  "https://dog.ceo/api/breed/dingo/images/random",
  "https://dog.ceo/api/breed/eskimo/images/random",
];

// $.get(urls[0]).then(console.log("data was fetched!"));
// $.get(urls[1]).then(console.log("data was fetched!"));
// $.get(urls[2]).then(console.log("data was fetched!"));
// $.get(urls[3]).then(console.log("data was fetched!"));
// $.get(urls[4]).then(console.log("data was fetched!"));

let requests = urls.map((url) => fetch(url));
Promise.all(requests).then((requests) => {
  console.log(requests);
  requests.forEach((element) => {
    console.log("data was fetched!");
  });
});

/*
function addNumbers(x, y) {
  if (typeof x == "number" && typeof y == "number") {
    console.log(x + y);
    return x + y;
  }
  // .catch(function (error) {
  //     console.log(error);
}
*/

var myPromise = new Promise(addNumbers).then(console.log(x, y));

var promise = new Promise(function addNumbers(resolve, reject) {
  // do a thing, possibly async, then…

  if (typeof (x + y) == "number") {
    resolve(consol.log(x + y));
  } else {
    reject(Error("x & y must be numbers"));
  }
});
