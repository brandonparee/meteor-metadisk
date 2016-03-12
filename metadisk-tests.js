// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by metadisk.js.
import { name as packageName } from "meteor/metadisk";

// Write your tests here!
// Here is an example.
Tinytest.add('metadisk - example', function (test) {
  test.equal(packageName, "metadisk");
});
