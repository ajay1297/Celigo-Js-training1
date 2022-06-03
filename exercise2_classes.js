/**
 * Create an Object MetadataParser using constructor functions
    1.The Object should have private properties _version, _channel, _keyField 
    2.Object should have get and set function for each property
    3.Add a method in the class getKeyFields, which takes an array of JSON objects (eg [{channel: ‘A’}, {channel: ‘B’}, {channel ‘C’}]) as input and returns an array of values of _keyField, input array.
 */
class MetadataParser {
    #version
    #channel
    #keyField
    constructor(version = "v1.0", channel = [], keyField = []) {
        this.#version = version;
        this.#channel = channel;
        this.#keyField = keyField;
    }

    get getVersion() {
        return this.#version;
    }
    set setVersion(version) {
        this.#version = version;
    }
    get getChannel() {
        return this.#channel;
    }
    set setChannel(channel) {
        this.#channel = channel;
    }
    get getKeyField() {
        return this.#keyField;
    }
    set setKeyField(keyField) {
        this.#keyField = keyField;
    }

    getAllKeyFields() {
        return this.#channel.map((channelData, index) => {
            return Object.keys(channelData);
        });
    }
}

const parser = new MetadataParser('v1.0', [{'channel': 'A'}, {'channel': 'B'}, {'channel': 'C'}]);
console.log(parser.getChannel);
console.log(parser.getVersion);
console.log(parser.getKeyField);
console.log(parser.getAllKeyFields());