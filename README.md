# gbc-oracle_demo
---

Connect smart contract to a stock exchange api to retrieve a stock detail. 

## Instruction to run the project
The folder contains the server side and the front-end side for the oracle connection and to view the retrieved details respectively. 

* launch ganache: `ganache-cli`
* compile and deploy smart contract - **Stock.sol** in remix using ***Web3 Provider* 
* copy contract address of the deployed smart contract and replace with what the is in **App.js** in my-oracle folder.
* run `npm start` on the main folder 'myapp' and on 'my-oracle' folder
* launch server side with [http://localhost:8080/](http://localhost:8080/) and the react side with [http://localhost:3000/](http://localhost:3000/)


