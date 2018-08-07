// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'root',
            password : '',
            database : 'url_shortener'
        },
        migrations: {
            tableName: 'migrations'
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'root',
            password : '',
            database : 'url_shortener'
        },
        migrations: {
            tableName: 'migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'root',
            password : '',
            database : 'url_shortener'
        },
        migrations: {
            tableName: 'migrations'
        }
    }
};
