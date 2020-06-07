
function Encrypt (message, passphrase) {
    let encoded_chars = []

    for (let i = 0; i < message.length; i++) {
        let key_c = passphrase[i % passphrase.length];
        let encoded_c = String.fromCharCode((message[i].charCodeAt(0)) + (key_c.charCodeAt(0) % 256))
        encoded_chars.push(encoded_c)
    }

    let encoded_string = encoded_chars.join("");
    return encoded_string
}

export default Encrypt;