const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Do Something Await");
      }, 2000);
    } else {
      reject(new Error("Some Bad"));
    }
  });
};

const doSomethingAwait = async () => {
  const resolve = await doSomethingAsync();
  console.log(resolve);
};

console.log("start");
doSomethingAwait();
console.log("end");

const doSomethingAsync2 = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Do Something Async 2");
        }, 2000)
      : reject(new Error("Some Bad 2"));
  });
};

const doSomethingAwait2 = async () => {
  try {
    const resolve = await doSomethingAsync2();
    console.log(resolve);
  } catch (error) {
    console.error(error);
  }
};

console.log("start 2");
doSomethingAwait2();
console.log("end 2");
