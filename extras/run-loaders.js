const fs = require('fs')
const path = require('path')
const { runLoaders } = require('loader-runner')

runLoaders({
  resource: path.resolve(__dirname, '../app/data.xml'),
  loaders: [
    {
      loader: 'xml-loader',
      options: {
        explicitChildren: true
      }
    }
  ],
  readResource: fs.readFile.bind(fs),
}, (err, result) => {
  console.log(result.result[0])
})
