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
	Senha varchar(MAX) not null,
	Salt varchar(200) not null,
	ImagemID int references Imagem(ID)
);
go

