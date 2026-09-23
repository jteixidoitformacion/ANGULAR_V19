export interface TransaccionBancaria {
readonly uuid: string;
monto: number;
fecha: Date;
tipo: 'INGRESO' | 'GASTO';
}
