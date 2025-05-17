var config = {
    dev: {
        url: 'http://localhost/',
        port: '3000',
        ambiente: 'DEV',
        database: {
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: 'h4G4K421!',
            database: 'delivery'
        }
    }
}

exports.get = function get(ambiente) {
    if (ambiente.toLowerCase() === 'dev') {
        return config.dev
    }
}