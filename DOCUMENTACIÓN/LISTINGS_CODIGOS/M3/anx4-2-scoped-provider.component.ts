@Component({
selector: 'app-formulario-pedido',
standalone: true,
providers: [PedidoStateService] // Instancia unica para este subarbol
})
export class FormularioPedidoComponent {}
