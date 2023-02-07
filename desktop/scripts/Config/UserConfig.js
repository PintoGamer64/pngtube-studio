const { writeFileSync } = require("node:fs");
const { homedir } = require("node:os");
const { join } = require("node:path");

class UserConfig {
    InsertConfig(config) {
        writeFileSync(
            join(homedir(), 'AppData\\Roaming\\PNGtube\\settings.json'),
            config,
            { encoding: "utf-8" }
        );
    };
};

module.exports = {
    UserConfig
}