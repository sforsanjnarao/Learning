import bip39 from 'bip39';
import hdkey from 'ethereumjs-wallet/hdkey';
const seed = bip39.mnemonicToSeedSync("yournfbbv twelve word seed here");
const hdWallet = hdkey.fromMasterSeed(seed);
const wallet = hdWallet.derivePath("m/44'/60'/0'/0/0").getWallet();

console.log("Private Key:", wallet.getPrivateKeyString());
console.log("Public Key:", wallet.getPublicKeyString());