
(function (){
    const crypto= require('crypto')
    const input='sanjana'
    const hashing=crypto.createHash("sha256").update(input).digest('hex')

    console.log(hashing)
});



(function (){
    const crypto= require('crypto')
    const input2='sanjana'
    const input='sanjana'
    const hashing=crypto.createHash("sha256").update(input).digest('hex')
    const hashing2=crypto.createHash("sha256").update(input).digest('hex')
    if(hashing==hashing2){
        return input
    }

    console.log(hashing)
})();

