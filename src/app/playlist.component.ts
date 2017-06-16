import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  inputs:['videos']
})
export class PlayListComponent implements OnInit{
allowNewServer=false;
serverCreationStatus="No server created";
serverName="ssssssaaaa";
constructor() {
  setTimeout(()=> {
    this.allowNewServer=true;
  },2000);
}
  ngOnInit() {}


  onCreateServer(){
  this.serverCreationStatus="Server was succesfully created";
  }


}
