const fs = require('fs')
const cmd = require('node-cmd')
const portscanner = require('portscanner')
const Promise = require('bluebird')
const readFile = Promise.promisify(require("fs").readFile)
const runCommand = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })
const getContents1 = () => {
  readFile("server1.js", "utf8")
    .then((result) =>{
      console.log("The result of evaluating server.js", result);
    })
    .catch((err) => {
      console.log("Error reading file", err);
    });
}


const getContents2 = async () => {
  try {
    let result = await readFile("server.js", "utf8")
    console.log(result)
  }
  catch(e){
    console.log(e)
  }
} 

const runCmd1 = () => {
  portscanner.findAPortNotInUse(9000, 9005)
  .then(port => {
    console.log(port)
    runCommand(`echo ${port}`)
    .then(data => {
      console.log('port', port)
      console.log('data', data)
    })
  })
  .catch(err => {
    console.log(err)
  })
}


const runCmd2 = () => {
  portscanner.findAPortNotInUse(9000, 9005)
  .then(port => {
    console.log(port)
    return runCommand(`echo ${port}`)
    .then(data => {
      console.log('port', port)
      console.log('data', data)
    })
  })
  .catch(err => {
    console.log(err)
  })
}

const runCmd3 = () => {
  let portValue
  portscanner.findAPortNotInUse(9000, 9005).then(port => {
    console.log(port)
    portValue = port
    return runCommand(`echo ${port}`)
  })
  .then((data) => {
    console.log('port', portValue)
    console.log('data', data)
  })
  .catch(err => {
    console.log('err2', err)
  })
}

const runCmd4 = () => {
  portscanner.findAPortNotInUse(9000, 9004).then(port => {
    console.log(port)
    return Promise.all([port, runCommand(`echo ${port}`)])
  })
  .catch(err => {
    console.log('err in port', err)
  })
  .then(([port, data]) => {
    console.log('port', port)
    console.log('data', data)
  })
  .catch(err => {
    console.log('err in cmd', err)
  })
}

const runCmd5 = async () => {
  const port = await portscanner.findAPortNotInUse(9000, 9003)
  const data = await runCommand(`echo ${port}`)
  console.log(data)
}

const runCmd6 = async () => {
  try{
    const port = await portscanner.findAPortNotInUse(9000, 9003)
    const data = await runCommand(`echo ${port}`)
    console.log(data)
  }
  catch(e){
    console.log('err',e)
  }
}

runCmd6()

