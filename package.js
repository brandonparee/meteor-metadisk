Package.describe({
  name: 'brandonparee:metadisk',
  version: '0.0.1',
  summary: 'Meteor wrapper for metadisk-client API and Storj',
  git: 'https://github.com/brandonparee/meteor-metadisk.git'
});

Npm.depends({
  "metadisk-client": "0.2.0",
  "storj": "0.2.0"
});

Package.onUse( function( api ) {
  api.addFiles( 'metadisk.js', [ 'server' ] );
  api.export( 'metadisk', [ 'server' ] );
});