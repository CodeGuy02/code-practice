const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(`The System Uptime is ${os.uptime()} seconds`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalMem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
// Path Module:
const path = require('path')
console.log(path.sep)
const filePath = path.join('/content', 'subfolder', 'app.js')
console.log(filepath)
