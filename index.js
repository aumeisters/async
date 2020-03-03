  const  Timer  = require('timerpromise');
( async () =>  {
    console.time('overallTime');
    console.time('3 sec timer');
    await (new Timer(3)).start
    console.log('1) 3 sec') || console.timeEnd('3 sec timer') || console.time('2 sec timer')
    await (new Timer(2)).start 
    console.log('2) 2 sec') || console.timeEnd('2 sec timer') || console.timeEnd('overallTime')
})();
