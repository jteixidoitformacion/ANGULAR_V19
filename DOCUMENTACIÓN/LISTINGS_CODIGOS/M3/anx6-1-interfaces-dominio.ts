export interface Usuario {
readonly id: number;
nombre: string;
email: string;
rol: 'ADMIN' | 'USUARIO';
}
