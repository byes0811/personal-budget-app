const Keycloak = require('keycloak-connect');
const session = require('express-session');

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({ store: memoryStore }, {
    realm: "personal-budget-app",
    "auth-server-url": "http://localhost:8080/auth",
    "ssl-required": "external",
    resource: "budget-backend",
    "public-client": true,
    "confidential-port": 0
});

module.exports = { keycloak, memoryStore };
