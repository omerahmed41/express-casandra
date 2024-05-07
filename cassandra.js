var ExpressCassandra = require('express-cassandra');
var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        localDataCenter: 'datacenter1',
        protocolOptions: { port: 9042 },
        keyspace: 'mykeyspace',
        queryOptions: {consistency: ExpressCassandra.consistencies.one},
        socketOptions: { readTimeout: 60000 },
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});


module.exports = models;
