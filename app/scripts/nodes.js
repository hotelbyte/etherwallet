'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    HBF: "Hotelcoin"
};
nodes.ensNodeTypes = [nodes.nodeTypes.HBF, nodes.nodeTypes.Ropsten];
nodes.domainsaleNodeTypes = []
nodes.nodeList = {
    'eth_mew': {
        'name': 'Hotelbyte',
        'blockExplorerTX': 'https://explorer.hotelbyte.org/txns/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.hotelbyte.org/accounts/[[address]]',
        'type': nodes.nodeTypes.HBF,
        'eip155': true,
        'chainId': 301333,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'MyHotelWallet',
        'lib': new nodes.customNode('https://api.explorer.hotelbyte.org', '')
    },
    
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
