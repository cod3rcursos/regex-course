const fs = require('fs')
const path = require('path')
const rootDirPath = path.dirname(__dirname)

const read = fileName => {
    const filePath = path.join(rootDirPath, "src", fileName)
    return fs.readFileSync(filePath, { encoding: 'utf8' })
}


const write = (fileName, content) => {
    const dirname = path.join(rootDirPath, "modified")
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${fileName}`, content, { encoding: 'utf8' })
}

module.exports = { read, write }