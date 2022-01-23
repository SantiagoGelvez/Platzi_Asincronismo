const somethingWillHappend = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ouch!");
    }
  });
};

somethingWillHappend()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const somethingWillHappend2 = () => {
    return new Promise((resolve, reject) =>{
        if (false){
            setTimeout(()=>{resolve('Hey again!')},
            2000);
        }
        else{
            const error = new Error('Ouch!!!');
            reject(error);
        }
    })
}

somethingWillHappend2()
.then(response => console.log(response))
.catch(err => console.log(err));

Promise.all([somethingWillHappend(), somethingWillHappend2()])
.then(response => console.log('Array of responses', response))
.catch(err => console.log(err));