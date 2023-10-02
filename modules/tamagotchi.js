
class Tamagotchi {
    #name
    #type
    #hunger
    #happiness
    #id
    #hungerInterval
    #happinessInterval

    constructor(name, type) {
        this.#name = name,
            this.#type = type
        this.#hunger = 5,
            this.#happiness = 5,

            this.#hungerInterval = setInterval(() => {
                if (this.#hunger > 0) {
                    this.#hunger--;
                }
            }, 5000);

        this.#happinessInterval = setInterval(() => {
            if (this.#happiness > 0) {
                this.#happiness--;
            }
        }, 3000);

        this.#id = setInterval(() => {
            if (this.getHunger() == 0 || this.getHappiness() == 0){
                clearInterval(this.#hungerInterval);
                clearInterval(this.#happinessInterval);
            }
        })
    }

    getName() {
        return this.#name;
    }

    getType() {
        return this.#type;
    }

    getHunger() {
        return this.#hunger;
    }

    getHappiness() {
        return this.#happiness;
    }

    addFood() {
        if (this.#hunger < 10) {
            this.#hunger++;
        }
    }

    addPlay() {
        if (this.#happiness < 10) {
            this.#happiness++;
        }
    }

}

function createTamagotchi(obj) {

    const tamagotchi = new Tamagotchi(obj.name, obj.type);
    return tamagotchi;

}

export { Tamagotchi, createTamagotchi };