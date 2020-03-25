Package.describe({
    name: 'recurring',
    summary: 'Recurly API 2.0',
    version: '2.7.0'
});

Package.onUse(function(api) {
    api.mainModule('lib/index.js', 'server');
    api.export('recurring', 'server');
    
});
