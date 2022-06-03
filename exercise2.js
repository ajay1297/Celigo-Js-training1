/**
 * Create an Object MetadataParser using constructor functions
    1.The Object should have private properties _version, _channel, _keyField 
    2.Object should have get and set function for each property
    3.Add a method in the class getKeyFields, which takes an array of JSON objects (eg [{channel: ‘A’}, {channel: ‘B’}, {channel ‘C’}]) as input and returns an array of values of _keyField, input array.
 */
const MetadataParser = function(version = "v1.0", channel = [], keyField = []) {
    this._version = version;
    this._channel = channel;
    this._keyField = keyField;
}

/**
 * @returns returns version
 */
MetadataParser.prototype.getVersion = function() {
    return this._version;
}

/**
 * sets the version
 */
MetadataParser.prototype.setVersion = function(version) {
    this._version = version;
}

/**
 * @returns returns channel
 */
MetadataParser.prototype.getChannel = function() {
    return this._channel;
}

/**
 * sets the channel
 */
MetadataParser.prototype.setChannel = function(channel) {
    this._channel = channel;
}

/**
 * @returns returns keyfield
 */
MetadataParser.prototype.getKeyField = function() {
    return this._keyField;
}

/**
 * sets the keyfield
 */
MetadataParser.prototype.setKeyField = function(keyField) {
    this._keyField = keyField;
}

/**
 * @returns all keys from Channel Array
 */
MetadataParser.prototype.getAllKeyFields = function() {
    return this._channel.map((channelData, index) => {
        return Object.keys(channelData);
    });
}

const parser = new MetadataParser('v1.0', [{'channel': 'A'}, {'channel': 'B'}, {'channel': 'C'}]);
console.log(parser.getChannel());
console.log(parser.getVersion());
console.log(parser.getKeyField());
console.log(parser.getAllKeyFields());