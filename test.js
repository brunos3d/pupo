const test = require("ava");
const pupo = require(".");

test("normal placeholder", (t) => {
    t.is(pupo("{foo}", { foo: "!" }), "!");
    t.is(pupo("{foo}", { foo: 10 }), "10");
    t.is(pupo("{foo}", { foo: 0 }), "0");
    t.is(pupo("{foo}{foo}", { foo: "!" }), "!!");
    t.is(pupo("{foo}{bar}{foo}", { foo: "!", bar: "#" }), "!#!");
    t.is(pupo("yo {foo} lol {bar} sup", { foo: "🦄", bar: "🌈" }), "yo 🦄 lol 🌈 sup");
});

test("nested and array", (t) => {
    t.is(
        pupo("{foo}{deeply.nested.valueFoo}", {
            foo: "!",
            deeply: {
                nested: {
                    valueFoo: "#",
                },
            },
        }),
        "!#"
    );

    t.is(
        pupo("{foo}{deeply.nested.value-foo}", {
            foo: "!",
            deeply: {
                nested: {
                    "value-foo": "#",
                },
            },
        }),
        "!#"
    );

    t.is(pupo("{0}{1}", ["!", "#"]), "!#");
});

test("encoding HTML entities", (t) => {
    t.is(pupo("{{foo}}", { foo: "!" }), "!");
    t.is(pupo("{{foo}}", { foo: 10 }), "10");
    t.is(pupo("{{foo}}", { foo: 0 }), "0");
    t.is(pupo("{{foo}}{{foo}}", { foo: "!" }), "!!");
    t.is(pupo("{foo}{{bar}}{foo}", { foo: "!", bar: "#" }), "!#!");
    t.is(pupo("yo {{foo}} lol {{bar}} sup", { foo: "🦄", bar: "🌈" }), "yo 🦄 lol 🌈 sup");

    t.is(
        pupo("{foo}{{deeply.nested.valueFoo}}", {
            foo: "!",
            deeply: {
                nested: {
                    valueFoo: "<br>#</br>",
                },
            },
        }),
        "!&lt;br&gt;#&lt;/br&gt;"
    );

    t.is(pupo("{{0}}{{1}}", ["!", "#"]), "!#");

    t.is(pupo("{{0}}{{1}}", ["<br>yo</br>", "<i>lol</i>"]), "&lt;br&gt;yo&lt;/br&gt;&lt;i&gt;lol&lt;/i&gt;");
});
