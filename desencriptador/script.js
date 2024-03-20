document.getElementById('encryptBtn').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    const output = encrypt(input);
    document.getElementById('output').value = output;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    const output = decrypt(input);
    document.getElementById('output').value = output;
});

document.getElementById('colorBtn').addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
});

function encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + 3) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + 3) % 26) + 97);
            }
        }
        encryptedText += char;
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - 3 + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - 3 + 26) % 26) + 97);
            }
        }
        decryptedText += char;
    }
    return decryptedText;
}
