export interface OrderData {
    usuarioId: number;
    horaPedido: Date;
    horaEntrega?: Date;
    itens: ItemPedidoData[];
}

export interface ItemPedidoData {
    produtoId: number;
    quantidade: number;
}
