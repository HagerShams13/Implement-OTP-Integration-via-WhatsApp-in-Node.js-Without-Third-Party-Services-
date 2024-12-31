const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client))
    .catch((error) => console.log(error));

const start = (client) => {
    client
        .sendText('123456789@c.us', 'Your OTP is 123456')
        .then((result) => {
            console.log('Message sent:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};