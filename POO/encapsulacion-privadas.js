/*
class Car {
    constructor(maxGasTankValue, fuelConsumption) {
        this._gasTankValue = 0;
        this._maxGasTankValue = maxGasTankValue;
        this._fuelConsumption = fuelConsumption; // millas por galón
    }

    _getAvailableGasValue(gasValue) {
        if (gasValue < 0) return 0;
        if (gasValue > this._maxGasTankValue) return this._maxGasTankValue;
        return gasValue;
    }

    refuel(gasValue) {
        this._gasTankValue = this._getAvailableGasValue(gasValue);
    }

    getDistance() {
        return this._gasTankValue / this._fuelConsumption * 100;
    }
}

const car = new Car(70, 9);
car.refuel(45);

console.log(car._gasTankValue); // 45. La propiedad no es realmente privada y es fácil cambiarla.
console.log(car.getDistance()); // 500
 */


class AudioItem {
    like() {
        this.isLiked = !this.isLiked;
    }
}

class Song {
    constructor(title, artist, releaseYear) {
        this._title = title;
        this._artist = artist;
        this._releaseYear = releaseYear;
        this.isLiked = false;
    }

    getSongInfo() {
        return `${this._artist} - ${this._title} (${this._releaseYear})`
    }
}

class PodcastEpisode {
    constructor(title, artist, guest, duration) {
        this._title = title;
        this._artist = artist;
        this._guest = guest;
        this._duration = duration;
        this.isLiked = false;
    }

    getEpisodeInfo() {
        return `${this._artist}. "${this._title}" - ${this._guest} (${this._getFormattedDuration()} seconds)`;
    }

    _getFormattedDuration() {
        const minutes = Math.floor(this._duration / 60); // el número total de minutos
        const seconds = this._duration % 60; // el resto de la división por 60
        return `${minutes}:${seconds > 9 ? seconds : 0 + seconds}`;
    }
}

