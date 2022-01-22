function suma(numA, numB) {
  return numA + numB;
}

function calc(numA, numB, callback) {
  return callback(numA, numB);
}

console.log(calc(2, 5, suma));



function date(callback){
    console.log(new Date);
    setTimeout(() => {
        let dateNew = new Date;
        callback(dateNew);
    },
    3000);
}

function sendDate(date){
    console.log(date);
}

date(sendDate);