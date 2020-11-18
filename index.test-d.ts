import { expectType } from "tsd";
import pupo = require(".");

expectType<string>(
    pupo("The mobile number of {name} is {phone.mobile}", {
        name: "Foo",
        phone: {
            mobile: "100 20 300",
        },
    })
);

expectType<string>(pupo("I like {0} and {1}", ["🦄", "🐮"]));
