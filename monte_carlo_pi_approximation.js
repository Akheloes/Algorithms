/**
 * Understanding the Monte Carlo approximation principle of Pi, create a method which return such an approximation.
 */

function approximationPi() {
    const radius = 1; // Might change.
    const POPULATION = 100000000;

    let numberOfPointsInside = 0;

    for (let i = 0; i < POPULATION; i++) {
        let x = Math.random() * radius;
        let y = Math.random() * radius;

        // If the point randomly generated falls inside the cercle, add it to some counter, else, don't.
        // But, keep the number of total points.
        // if inside the Q-cercle, [x, y] will verify: x**2 + y**2 <= 1
        if (Math.pow(x, 2) + Math.pow(y, 2) <= 1) {
            numberOfPointsInside++;
        }
    }

    // Should I take the number of points randomly generated inside of the Q-cercle, they should be
    // Pi/4 percent of the total points generated.

    return numberOfPointsInside * 4 / POPULATION;
}

const approximatedPi = approximationPi();

console.log(`Approximated Pi is: ${approximatedPi}`);
