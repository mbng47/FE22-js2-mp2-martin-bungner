

function displayTamagotchi(tamagotchi) {

    const card = document.createElement('div');
    document.getElementById('display-section').append(card);
    card.classList.add('card')

    const name = document.createElement('h1');
    name.innerText = `${tamagotchi.getName()} the ${tamagotchi.getType()}`;
    const hunger = document.createElement('h3');
    setInterval(() => {
        hunger.innerText = `Hunger-level: ${tamagotchi.getHunger()} / 10`;
    }, 10);
    const happiness = document.createElement('h3');
    setInterval(() => {
        happiness.innerText = `Happiness-level: ${tamagotchi.getHappiness()} / 10`;
    }, 10);
    const feedBtn = document.createElement('button');
    feedBtn.innerText = 'Feed';
    const petBtn = document.createElement('button');
    petBtn.innerText = 'Pet';

    feedBtn.addEventListener('click', () => {
        tamagotchi.addFood();
        hunger.innerText = `Hunger-level: ${tamagotchi.getHunger()} / 10`;
    });

    petBtn.addEventListener('click', () => {
        tamagotchi.addPlay();
        happiness.innerText = `Happiness-level: ${tamagotchi.getHappiness()} / 10`;
    });

    card.append(name, hunger, happiness, feedBtn, petBtn);

    if (tamagotchi.getType() == 'turtle') {
        card.classList.add('turtle');
    }

    setInterval(() => {

        if(tamagotchi.getHunger() == 0 || tamagotchi.getHappiness() == 0){
            card.innerText = 'DÖD';
        }

    }, 10)

}

export { displayTamagotchi }