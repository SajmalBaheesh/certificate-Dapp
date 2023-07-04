const Cert = artifacts.require("Cert");
const fs = require('fs')
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
   //since we have onlyOwner functions we need to remmeber owner addr
  // _deployer._deploy(Cert);
  _deployer.deploy(Cert).then( (instance) => {
    
    const deployer = instance.constructor.class_defaults;
    fs.writeFileSync('../src/deployer.json',JSON.stringify(deployer,null,2))
  }).catch();
 
};
