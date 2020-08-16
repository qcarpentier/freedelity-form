$(".ui.form").form({
    fields: {
        "first-name": {
            identifier: "first-name",
            rules: [{
                type: "empty",
                prompt: "Please enter your first name.",
            }, ],
        },
        "last-name": {
            identifier: "last-name",
            rules: [{
                type: "empty",
                prompt: "Please enter your last name.",
            }, ],
        },
        "address-street": {
            identifier: "address-street",
            rules: [{
                type: "empty",
                prompt: "Please enter your current address.",
            }, ],
        },
        "address-number": {
            identifier: "address-number",
            rules: [{
                type: "empty",
                prompt: "Please enter your address number.",
            }, ],
        },
        postcode: {
            identifier: "postcode",
            rules: [{
                type: "regExp",
                value: /\d{4}/i,
                prompt: "Please enter your belgian postcode.",
            }, ],
        },
        city: {
            identifier: "city",
            rules: [{
                type: "empty",
                prompt: "Please enter your city.",
            }, ],
        },
        email: {
            identifier: "email",
            rules: [{
                type: "email",
            }, ],
        },
        phone: {
            identifier: "phone",
            optional: true,
            rules: [{
                type: "regExp",
                value: /^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/,
                prompt: "Please enter a valid belgian phone number.",
            }, ],
        },
        "eid-number": {
            identifier: "eid-number",
            optional: true,
            rules: [{
                type: "regExp",
                value: /^\d{3}\-\d{7}\-\d{2}$/,
                prompt: "Please enter a valid eID number.",
            }, ],
        },
    },
});

$("form").on("submit", function (e) {
    e.preventDefault();
});