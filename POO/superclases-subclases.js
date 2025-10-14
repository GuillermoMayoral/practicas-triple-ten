//ejemplo:

class Student {
    constructor(name, group, profession, trainingDuration) {
        this._name = name;
        this._group = group;
        this._profession = profession;
        this._trainingDuration = trainingDuration;
    }
    getInfo() {
        return {
            name: this._name,
            group: this._group,
            profession: this._profession,
            trainingDuration: this._trainingDuration
        }
    }

}

class WebDeveloperStudent extends Student {
    constructor(name, group) {
        super(name, group);
        this._profession = "Desarrollador web";
        this._trainingDuration = 10;
    }
}

class PythonDeveloperStudent extends Student {
    constructor(name, group) {
        super(name, group);
        this._profession = "Desarrollador de Python";
        this._trainingDuration = 9;
    }
}

class DataAnalystStudent extends Student {
    constructor(name, group) {
        super(name, group);
        this._profession = "Analista de datos";
        this._trainingDuration = 6;
    }
}


const student1 = new WebDeveloperStudent("Wendy Webberton", 1);
const student2 = new DataAnalystStudent("Dennis Databerg", 3);

console.log(student1.getInfo())

console.log(student2.getInfo())


//actividad:

class AudioItem {
    like() {
        this.isLiked = !this.isLiked;
    }
}

class Song extends AudioItem {
    constructor(title, artist, releaseYear) {
        super(),
            this._title = title;
        this._artist = artist;
        this._releaseYear = releaseYear;
        this.isLiked = false;
    }

    getSongInfo() {
        return `${this._artist} - ${this._title} (${this._releaseYear})`
    }
}

class PodcastEpisode extends AudioItem {
    constructor(title, artist, guest, duration) {
        super(),
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

