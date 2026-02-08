function score(dice) {
    let score = 0;
    const counts = [0, 0, 0, 0, 0, 0];
​
    dice.forEach(die => counts[die - 1]++);
​
    for (let i = 0; i < 6; i++) {
        if (counts[i] >= 3) {
            score += i === 0 ? 1000 : (i + 1) * 100;
            counts[i] -= 3;
        }
    }
​
    score += counts[0] * 100;
    score += counts[4] * 50; 
    
    return score;
}