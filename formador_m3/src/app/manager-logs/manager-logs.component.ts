import { Component } from '@angular/core';
import { ReaderLogsComponent } from '../reader-logs/reader-logs.component';
import { RegistrerLogComponent } from '../registrer-log/registrer-log.component';

@Component({
  selector: 'app-manager-logs',
  imports: [ReaderLogsComponent, RegistrerLogComponent],
  templateUrl: './manager-logs.component.html',
  styleUrl: './manager-logs.component.scss'
})
export class ManagerLogsComponent {
  

}
