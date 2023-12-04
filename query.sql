use master
go

if exists(select * from sys.databases where name = 'CJDB')
	drop database CJDB
go

create database CJDB
go

use CJDB
go

create table Imagem(
	ID int identity primary key,
	Foto varbinary(MAX) not null
);
go

create table Usuario(
	ID int identity primary key,
	Nome varchar(80) not null,
	Email varchar(80) not null,
	Senha varchar(MAX) not null,
	Salt varchar(200) not null,
	IsAdm bit not null,
	ImagemID int references Imagem(ID)
);
go

create table Pedido(
	ID int identity primary key,
	UsuarioID int references Usuario(ID),
	HoraPedido datetime not null,
	HoraEntrega datetime
);
go

create table Produto(
	ID int identity primary key,
	Nome varchar(80) not null,
	Preco float not null,
	Categoria int not null
);
go

create table Cupom(
	ID int identity primary key,
	Codigo varchar(20) not null,
);
go

create table ItemPedido(
	ID int identity primary key,
	ProdutoID int references Produto(ID),
	PedidoID int references Pedido(ID),
	Qtd int not null default 1
);
go

select * from Produto;
delete from Produto where ID != 0;