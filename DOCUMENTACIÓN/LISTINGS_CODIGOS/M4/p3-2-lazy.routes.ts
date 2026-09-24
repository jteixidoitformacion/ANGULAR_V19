export const routes: Routes = [
{
path: 'panel-control',
loadComponent: () => import('./features/admin/panel.component')
.then(m => m.PanelComponent)
}
];
