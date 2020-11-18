# pupo [![Build Status](https://travis-ci.com/BrunoS3D/pupo.svg?branch=master)](https://travis-ci.org/BrunoS3D/pupo)

> 📦 NODE.JS - Simple micro templating based on pupa using object-path.

Useful when all you need is to fill in some placeholders.

Pupo implements the [object-path](https://www.npmjs.com/package/object-path) package to resolve the values of the data object.

## Install

```
$ npm install pupo

# or

$ yarn add pupo
```

## Usage

```js
const pupo = require("pupo");

pupo("The mobile number of {name} is {phone.mobile}", {
    name: "Foo",
    phone: {
        mobile: "100 20 300",
    },
});
//=> 'The mobile number of Foo is 100 20 300'

pupo("I like {0} and {1}", ["🦄", "🐮"]);
//=> 'I like 🦄 and 🐮'

// Double braces encodes the HTML entities to avoid code injection
pupo("I like {{0}} and {{1}}", ["<br>🦄</br>", "<i>🐮</i>"]);
//=> 'I like &lt;br&gt;🦄&lt;/br&gt; and &lt;i&gt;🐮&lt;/i&gt;'

// Deep object value
pupo("{deep.obj.value-foo}", {
    deep: {
        obj: {
            "value-foo": "Hello, World!",
        },
    },
});
//=> 'This is a deep object value: Hello, World!'

// Format using object with special key names
pupo("{foo bar} {12 345} {value-foo}", {
    "foo bar": "Foo Bar",
    "12 345": "12345",
    "value-foo": "Hello, World!",
});
//=> 'Foo Bar 12345 Hello, World!'
```

## API

### pupo(template, data)

#### template

Type: `string`

Text with placeholders for `data` properties.

#### data

Type: `object | unknown[]`

Data to interpolate into `template`.

## FAQ

### What about template literals?

Template literals expand on creation. This module expands the template on execution, which can be useful if either or both template and data are lazily created or user-supplied.

## Related

-   [pupa](https://github.com/sindresorhus/pupa) - The original package.
