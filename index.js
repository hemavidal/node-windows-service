const path        = require('path')
const { Service } = require('node-windows')
const config      = require('config')

// Create a new service object
const service = new Service(config.get('service'))

// Listen for the "install" event, which indicates the
// process is available as a service.
service.on('install', () => {
    console.log(`Service ${config.get('service')} Installed!`)
})

// Listen for the "uninstall" event so we know when it's done.
service.on('uninstall', () => {
    console.log(`Uninstall service ${config.get('service')} finished.`)
    console.log('The service exists: ', service.exists)
})

// Listen for the "stop" event so we know when it's done.
service.on('stop', () => {
    console.log(`Service ${config.get('service')} stopped.`)
    console.log('Is running: ', service.exists)
})

// Listen for the "start" event so we know when it's done.
service.on('start', () => {
    console.log(`Service ${config.get('service')} started.`)
    console.log('Is running: ', service.exists)
})

module.exports = service
