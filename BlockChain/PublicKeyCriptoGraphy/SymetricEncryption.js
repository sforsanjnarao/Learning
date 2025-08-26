const crypto= require('crypto')

const key=crypto.randomBytes(32)
const iv=crypto.randomBytes(16)

function encryption(plainText){
    const cipher=crypto.createCipheriv("aes-256-gcm",key, iv)
    let encryped= cipher.update(plainText, 'utf-8', 'hex')
    encryped+=cipher.final('hex')
    return encryped
}

function decryption(plainText){
    const decipher=crypto.createDecipheriv("aes-256-gcm",key, iv)
    let decrypted= decipher.update(plainText, 'hex', 'utf-8')
    decrypted+=decipher.final('utf8')
    return decrypted;
}

const  text='hello world'
const encrypet=encryption(text)
const decrypet=decryption(text)

console.log("Encrypted text: ",encrypet)
console.log("Decrypted text: ",decrypet)
