import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, delay, retry, throwError } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { Client, Message } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor() {
    this.connectWs();
  }

  connectWs() {
    const client = new Client({
      brokerURL: 'ws://localhost:8080/socket',
      debug: function (str: any) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    
    client.onConnect = function (frame: any) {
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect
    };
    
    client.onStompError = function (frame: { headers: { [x: string]: string; }; body: string; }) {
      console.log('Broker reported error: ' + frame.headers['message']);
      console.log('Additional details: ' + frame.body);
    };
    
    client.activate();
  }
}