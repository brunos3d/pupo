/**
Simple micro templating.

@param template - Text with placeholders for `data` properties.
@param data - Data to interpolate into `template`.

@example
```
import pupo = require('pupo');

pupo('The mobile number of {name} is {phone.mobile}', {
	name: 'Foo',
	phone: {
		mobile: '100 20 300'
	}
});
//=> 'The mobile number of Foo is 100 20 300'

pupo('I like {0} and {1}', ['🦄', '🐮']);
//=> 'I like 🦄 and 🐮'

// Double braces encodes the HTML entities to avoid code injection
pupo('I like {{0}} and {{1}}', ['<br>🦄</br>', '<i>🐮</i>']);
//=> 'I like &lt;br&gt;🦄&lt;/br&gt; and &lt;i&gt;🐮&lt;/i&gt;'
```
*/
declare function pupo(template: string, data: unknown[] | { [key: string]: any }): string;

export = pupo;
