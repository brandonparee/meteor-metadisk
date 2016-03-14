Package.describe({
  name: 'brandonparee:metadisk',
  version: '0.0.3',
  summary: 'Meteor wrapper for metadisk-client API and Storj',
  git: 'https://github.com/brandonparee/meteor-metadisk.git',
  documentation: 'README.md'
});

Npm.depends({
  "metadisk-client": "0.2.1",
  "storj": "0.2.2"
});

Package.onUse( function( api ) {
  api.addFiles( 'metadisk.js', [ 'server' ] );
  api.export( 'metadisk', [ 'server' ] );
  api.export( 'storj', [ 'server' ] );
});