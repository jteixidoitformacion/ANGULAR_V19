import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class TelemetryService {
private socket$: WebSocketSubject<any> = webSocket('wss://telemetry.empresa.org');
getStream(): Observable<any> {
return this.socket$.asObservable();
}
sendAction(action: string, payload: any): void {
this.socket$.next({ action, payload });
}
}
