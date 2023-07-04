import Web3 from "web3";
import Cert from './Cert.json'  assert{type:'json'};
import deployer from './deployer.json' assert{type:'json'}

// import deployer from './deployer.json';
// import Cert from './Cert.json';
const web3 = new Web3('http://127.0.0.1:8545');

export const instance = new web3.eth.Contract(Cert.abi,Cert.networks['5777'].address);
export const deployerAddress = deployer.from;