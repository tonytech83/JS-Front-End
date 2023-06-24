function login(inputArr) {

    function reverseWord(str) {
        return str.split("").reverse().join("");
    }

    [username, ...passwords] = inputArr

    for (const [idx, str] of passwords.entries()) {

        if (username === reverseWord(str)) {
            console.log(`User ${username} logged in.`)
            break;
        } else {
            if (idx === 3) {
                console.log(`User ${username} blocked!`)
                break;
            } else {
                console.log('Incorrect password. Try again.')
            }
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);


