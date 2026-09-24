{
path: 'productos/:categoria/:marca',
loadComponent: () => import('./filtrado.component').then(m => m.FiltradoComponent)
}
