class PodcastEpisode {
    constructor(title, artist, guest, duration) {
        this.title = title;
        this.artist = artist;
        this.guest = guest;
        this.duration = duration;
        this.isLiked = false;
    }

    like() {
        this.isLiked = !this.isLiked;
    }

    getEpisodeInfo() {
        return `${this.artist}. "${this.title}" - ${this.guest} (${this.getFormattedDuration()})`;
    }

    getFormattedDuration() {
        const minutes = Math.floor(this.duration / 60); // el número total de minutos
        const seconds = this.duration % 60; // el resto de la división por 60
        return `${minutes}:${seconds > 9 ? seconds : 0 + seconds}`
    }
}