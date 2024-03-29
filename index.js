"use strict";
const objectPath = require("object-path");
const { htmlEscape } = require("escape-goat");

module.exports = (template, data) => {
    if (typeof template !== "string") {
        throw new TypeError(`Expected a \`string\` in the first argument, got \`${typeof template}\``);
    }

    if (typeof data !== "object") {
        throw new TypeError(`Expected an \`object\` or \`Array\` in the second argument, got \`${typeof data}\``);
    }

    const doubleBraceRegex = /{{(.*?)}}/gi;

    if (doubleBraceRegex.test(template)) {
        template = template.replace(doubleBraceRegex, (_, key) => {
            const result = objectPath.get(data, key);

            return htmlEscape(String(result));
        });
    }

    const braceRegex = /{(.*?)}/gi;

    return template.replace(braceRegex, (_, key) => {
        const result = objectPath.get(data, key);

        return String(result);
    });
};
