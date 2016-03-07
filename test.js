var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
console.log('testing');
var client = webdriverio
    .remote(options);

function login(client) {
    client.init()
        .url('https://forio.com/app/forio-dev/big-picture/login.html')
        .setValue('#username', 'user5')
        .setValue('#password', 'userpassword')
        .click('.btn-signin');

}

login();