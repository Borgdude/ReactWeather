function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number' ){
      resolve(a + b);
    } else {
      reject("One or more of the Numbers were bad yo");
    }
  });
}

addPromise(6, 4).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});

addPromise("lmao", 4).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
