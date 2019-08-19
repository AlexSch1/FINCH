function getRandom(random, max) {
    let numReserve = [];

    while (numReserve.length < random) {
        let randomNumber = Math.ceil(Math.random() * max);
        let found = false;
        for (let i = 0; i < numReserve.length; i++) {
            if (numReserve[i] === randomNumber) {
                found = true;
                break;
            }
        }
        if (!found) {
            numReserve[numReserve.length] = randomNumber;
        }
    }

    return numReserve;
}

export default getRandom;