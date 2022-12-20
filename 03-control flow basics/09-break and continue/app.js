const scores = [24, 50, 0, 49, 100, 75]

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) continue
    console.log( scores[i]);
    if (scores[i] === 100) break
}