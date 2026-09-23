import { Component, signal, computed, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Microservicio } from '../microservicio';

@Component({
  selector: 'app-dashboard-integrador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-integrador.component.html',
  styleUrl: './dashboard-integrador.component.scss',
})
export class DashboardIntegradorComponent {
  microservicios = signal<Microservicio[]>([
    { nombre: 'API Gateway', latencia: 45 },
    { nombre: 'Autenticacion', latencia: 80 },
    { nombre: 'Procesamiento Pagos', latencia: 150 },
    { nombre: 'Catalogo Productos', latencia: 60 },
  ]);
  servidorActivo = signal<string>('Norteamerica');
  rutaServidor = linkedSignal({
    source: this.servidorActivo,
    computation: (nuevoServidor): string => {
      return nuevoServidor === 'Norteamerica'
        ? 'https://us-api.servicios-cloud.org/v1'
        : 'https://eu-api.servicios-cloud.org/v1';
    },
  });
  latenciaPromedio = computed(() => {
    const lista = this.microservicios();
    if (lista.length === 0) return 0;
    const suma = lista.reduce((total, ms) => total + ms.latencia, 0);
    return Math.round(suma / lista.length);
  });
  estadoSalud = computed(() => {
    const promedio = this.latenciaPromedio();
    if (promedio < 90) {
      return { saludable: true, mensaje: 'Estable (SLA Garantizado)' };
    } else {
      return { saludable: false, mensaje: 'Alerta de Retardo (Fallo SLA)' };
    }
  });
  seleccionarServidor(servidor: string) {
    this.servidorActivo.set(servidor);
  }
  personalizarRuta() {
    this.rutaServidor.set('https://custom-gateway.local-dev.net/dev');
  }
  simularRetardo(nombre: string) {
    this.microservicios.update((lista) =>
      lista.map((ms) =>
        ms.nombre === nombre ? { ...ms, latencia: ms.latencia + 50 } : ms,
      ),
    );
  }
  reiniciarMetricas() {
    this.microservicios.set([
      { nombre: 'API Gateway', latencia: 45 },
      { nombre: 'Autenticacion', latencia: 80 },
      { nombre: 'Procesamiento Pagos', latencia: 150 },
      { nombre: 'Catalogo Productos', latencia: 60 },
    ]);
  }
}
