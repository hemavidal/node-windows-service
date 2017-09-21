# Node Windows Services

This project is used to create windows service for you custom project.
It conbines [node-windows](https://github.com/coreybutler/node-windows) with [config](https://github.com/lorenwest/node-config) to create a configurated windows service.
So you can create a service combined with a config/default.json, see (config) documentation, to prevent node-windows code duplication.

## Examples:
Without windows-services:
Project-01:
```javascript

const service = new Service({
    name: 'My Service01',
    description: 'My Description for project 01',
    script: 'indexProject01.js'
})
```
Project-02:
```javascript

const service = new Service({
    name: 'My Service02',
    description: 'My Description for project 02',
    script: 'indexProject02.js'
})
```
To create a configurated app whose can be create his own windows-service:
Set configuration file in <project-dir>/config/default.json:
```json
{
  "service" : {
    "name" : "My Service Name",
    "description" : "My Service Description",
    "script" : "index.js"
  }
}
```
and create a file to install service, for example:
```javascript
const windowsService = require('windows-services')

windowsService.install()
```
