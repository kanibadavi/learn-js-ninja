const password = 'p@ssword1234'

if (password.length >= 12 && password.includes('@')) {
    console.log('awesome');
} else if (password.length >= 8 || password.includes('@')) {
    console.log('good');
} else {
    console.log('bad');
}