export function isName(name) {
    // Now validate the email format using Regex
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    return name.length == 0 ? false : re.test(name.trim());
}

export function isEmail(email) {
    // Now validate the email format using Regex
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return email.length == 0 ? false : re.test(email.trim());
}

export function isPhone(phone) {
    // Now validate the email format using Regex

    phone = phone.toString().replace(/\ /, '');

    const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i;

    let ukCode = phone.toString().indexOf('+3') === -1 ? false : true;

    let error = false;
    if (ukCode){
        error = phone.toString().replace(/\D+/g,'').length !== 12 ? true : false;
    }

    return phone.length == 0 || error ? false : re.test(phone);
}