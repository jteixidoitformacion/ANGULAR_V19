@Component({ ... })
export class DetalleClienteComponent implements OnInit {
clientId: string | null = null;
constructor(private route: ActivatedRoute) {}
ngOnInit() {
this.clientId = this.route.snapshot.paramMap.get('id');
}
}
