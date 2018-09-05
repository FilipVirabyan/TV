import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    public TVon: boolean = false;
    public volume: number = 0;
    public channels: Array<string> = ["./assets/channels/tv1.jpg", "./assets/channels/tv2.jpg", "./assets/channels/tv3.jpg", "./assets/channels/nosignal.jpg"];
    public channel: string = this.channels[0];

    public onTv(event: boolean): void {
        this.TVon = event;
    }

    public setChannel(channelNum: number): void {
        channelNum -= 1;
        this.channel = this.channels[channelNum];
    }

    public incrementVolume(vol: number): void {

        if (this.volume < 100) {
            this.volume += vol;
        }
    }

    public decrementVolume(vol: number): void {

        if (this.volume > 0) {
            this.volume -= vol;
        }

    }

}