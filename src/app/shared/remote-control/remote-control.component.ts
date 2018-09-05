import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-remote-control',
  templateUrl: './remote-control.component.html',
  styleUrls: ['./remote-control.component.css']
})
export class RemoteControlComponent implements OnInit {

  @Output()
  public power: EventEmitter<boolean> = new EventEmitter();
  public TVisON: boolean = false;
  @Output()
  public increment: EventEmitter<number> = new EventEmitter();
  @Output()
  public decrement: EventEmitter<number> = new EventEmitter();
  @Output()
   public changeChannel: EventEmitter<number> = new EventEmitter();

  public turnChannel(channel:number){
      if (this.TVisON === true) {
          this.changeChannel.emit(channel);
      }
  }

  public onPower(): void {
    this.TVisON = !this.TVisON;
    this.power.emit(this.TVisON);

  }

  public incrementVolume(): void {
    if (this.TVisON === true) {
      this.increment.emit(1);
    }
  }

  public decrementVolume(): void {
    if (this.TVisON === true) {
      this.decrement.emit(1);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
