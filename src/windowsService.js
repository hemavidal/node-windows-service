const path        = require('path')
const { Service } = require('node-windows')
const config      = require('config')

// Create a new service object
const service = new Service({
    name: config.get('service.name'),
    description: config.get('service.description'),
    script: config.get('service.script') || 'windows-service.js'
})

// Listen for the "install" event, which indicates the
// process is available as a service.
service.on('install', () => {
    console.log(`Service ${config.get('service.name')} Installed!`)
})

// Listen for the "uninstall" event so we know when it's done.
service.on('uninstall', () => {
    console.log(`Uninstall service ${config.get('service.name')} complete.`)
    console.log('The service exists: ', service.exists)
})

// Listen for the "uninstall" event so we know when it's done.
service.on('stop', () => {
    console.log(`Service ${config.get('service.name')} stopped.`)
    console.log('Is running: ', service.exists)
})

module.exports = service
