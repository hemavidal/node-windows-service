const windowsService = require('./src/windowsService')

exports.stop = () => {
  windowsService.stop()
}

exports.start = () => {
  windowsService.start()
}

exports.uninstall = () => {
  windowsService.uninstall()
}

exports.install = () => {
  windowsService.install()
}
