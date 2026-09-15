Synchronus Programming = 
Syncronus is a blocking architechture, so the execution of each operation
is dependent on the completion of the one before it.

function sum(){
    console.log("2");
}
function example(){
    console.log("1")
    sum();
    console.log("3");
}
example();


Asynchronous Programming = 
Asynchronous is a non-blocking architechture, so the execution of the task
isnt dependent on another, Tasks can run simultaneously.

function sum(){
    setTimeout(()=> {
        console.log("2");
    },2000);
}
function example(){
    conso.elog("1");
    sum();
    console.log("3");
}
example();


Promises = 
Its an object where asynchronous results gets or gets not , it have 3 stages.
(1)pending = work is in process
(2)full filled = work succesfully completed
(3)rejected = work failed

const promise = new Promise(resolve , reject) =>
{
    setTimeout(() => {
        resolve("found data");

    },2000);
};

promis .then(result)=>{
    console.log(result);
};