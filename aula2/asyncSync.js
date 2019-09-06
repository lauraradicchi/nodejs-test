let asyncFn = x => {
    console.log('async', x);
    if (x < 10) {
        /**
         * In Node.js, each iteration of an 
         * Event Loop is called a tick. To schedule a 
         * callback function to 
         * be invoked in the next iteration of the 
         * Event Loop, we use process.nextTick(). 
         * It just takes a callback with no time bound, 
         * since it will be executing in the next iteration 
         * of the Event Loop.
         */

        process.nextTick(() => {
            asyncFn(x + 1);
        });
    }
}

console.log(' ==== start async ==== ');
asyncFn(1);
console.log(' ==== end async ==== ');

let syncFn = x => {
    console.log('sync', x);

    if (x < 10) {
        syncFn(x + 1);
    }
}


console.log(' ==== start sync ====');
syncFn(1);
console.log(' ==== end sync ===');
