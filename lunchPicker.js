const lunchOptions = ["Pho", "Moby-Dick", "Mission-BBQ", "Nandos", "Cava",
    "Bon-Chon", "Chipotle", "Rice&Kabob", "Potbelly's", "King-Pollo",
    "Siam-Spice", "Pind", "Bawarchi", "Charcoal-Kabob", "Halal-Guys",
    "Chik-Fil-A", "Señor-Ramon-Tacos", "Souvlaki-Bar", "Romano's", "B-Dubs",
    "Pollo-Guapo", "Roti", "Five-Guys", "4-Sisters", "Greek-Unique",
    "Golden-Crust", "Cafesano", "Buffalo-Wing-Factory"];

function get3RandomLunchPlaces() {
    const randIndices = [];
    while (randIndices.length < 3) {
        const thisRandom = Math.floor(Math.random() * lunchOptions.length);
        if (!randIndices.includes(thisRandom))
            randIndices.push(thisRandom);
    }
    return randIndices.map(index => lunchOptions[index]);
}

function generatePollCommandOfLunchPlaces() {
    let stringBuilder = '/poll Lunch?';
    get3RandomLunchPlaces().map(venue => stringBuilder += ` ${venue}`);
    return stringBuilder;
}

exports.handler = async (event) => {
    return {
        "statusCode": 200,
        "body": generatePollCommandOfLunchPlaces()
    };
};