import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
selector: 'app-timer-cleanup',
standalone: true,
template: `<p>Segundos transcurridos: {{ segundos }}</p>`
})
export class TimerCleanupComponent implements OnInit, OnDestroy {
segundos: number = 0;
private intervalId: any;
ngOnInit(): void {
this.intervalId = setInterval(() => {
this.segundos++;
}, 1000);
}
ngOnDestroy(): void {
if (this.intervalId) {
clearInterval(this.intervalId);
}
}
}
