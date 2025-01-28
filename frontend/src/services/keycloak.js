import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'personal-budget-app',
    clientId: 'react-client',
    checkLoginIframe: false,
});

export default keycloak;
