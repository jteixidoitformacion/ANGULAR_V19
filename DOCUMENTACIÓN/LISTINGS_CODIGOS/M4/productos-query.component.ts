aplicarFiltros() {
this.router.navigate(['/productos'], {
queryParams: { orden: 'desc', limite: 20 }
});
}
