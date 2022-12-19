const password = 'password1234'

if (password.length >= 12) {
    console.log('awesome');
} else if (password.length >= 8) {
    console.log('good');
} else {
    console.log('bad');
}