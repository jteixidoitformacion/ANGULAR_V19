import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
selector: 'app-radar-fuga',
standalone: true,
template: `<p>Telemetria activa</p>`
})
export class RadarFugaComponent implements OnInit, OnDestroy {
private sub!: Subscription;
ngOnInit(): void {
this.sub = interval(1000).subscribe(val => console.log(val));
}
ngOnDestroy(): void {
if (this.sub) {
this.sub.unsubscribe(); // Liberacion mandatoria
}
}
}
