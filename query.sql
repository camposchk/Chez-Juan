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
	valor int not null,
	isPercentage bit not null
);
go

create table ItemPedido(
	ID int identity primary key,
	ProdutoID int references Produto(ID),
	PedidoID int references Pedido(ID),
	Qtd int not null default 1
);
go

INSERT INTO produto (Nome, Preco, Categoria) VALUES
-- Couverts
('Purê de Batata Trufado', 55, 0),
('Espargos Grelhados com Molho Hollandaise', 58, 0),
('Risoto de Açafrão', 60, 0),
('Gratinado de Batata com Queijo Gruyère', 56, 0),
('Legumes Assados com Ervas Frescas', 57, 0),
('Feijão Verde com Amêndoas Torradas', 55, 0),
('Purê de Abóbora com Noz-Moscada', 58, 0),
('Batata Doce Assada com Marshmallow', 56, 0),
('Arroz de Limão com Ervilhas', 54, 0),
('Salada Caesar Clássica', 52, 0),
('Gratinado de Couve-Flor com Queijo Azul', 65, 0),
('Risoto de Açafrão com Ervilhas Frescas', 58, 0),

-- Entradas
('Ostras Frescas com Molho Mignonette', 85, 1),
('Carpaccio de Wagyu com Rúcula e Parmesão', 90, 1),
('Tartare de Atum com Abacate e Wasabi', 95, 1),
('Foie Gras Grelhado com Chutney de Maçã', 105, 1),
('Caviar com Blinis e Creme Fraiche', 200, 1),
('Sopa de Lagosta com Creme de Cogumelos', 80, 1),
('Vieiras Grelhadas com Ervas e Manteiga de Limão', 110, 1),
('Salada Caprese com Tomate Heirloom e Mozarela de Búfala', 85, 1),
('Terrine de Pato com Geléia de Framboesa', 100, 1),
('Camarões Grelhados com Molho de Alho-Poró', 95, 1),
('Salmão Defumado com Creme de Endro e Blinis', 90, 1),
('Terrine de Foie Gras com Figos e Brioche', 105, 1),

-- Pratos Principais
('Filé Mignon ao Molho de Trufas Brancas', 175, 2),
('Salmão Selvagem Grelhado com Risoto de Limão Siciliano', 165, 2),
('Pato Confit com Laranja e Purê de Batata-Doce', 180, 2),
('Vieiras Frescas com Espuma de Ervas e Purê de Cenoura', 185, 2),
('Risoto de Lagosta com Trufas Negras', 190, 2),
('Costeletas de Cordeiro com Crosta de Ervas e Molho de Vinho Tinto', 195, 2),
('Linguine ao Molho de Lagosta e Tomate Fresco', 170, 2),
('Robalo com Molho de Champagne e Risoto de Aspargos', 175, 2),
('Tornedor de Angus com Batata Gratinada', 185, 2),
('Peito de Pato Grelhado com Geleia de Frutas Silvestres', 180, 2),
('Risoto de Lagosta com Espuma de Champanhe', 195, 2),
('Magret de Pato com Molho de Cereja e Purê de Aipo', 190, 2),

-- Sobremesas
('Tiramisu de Chocolate Branco e Framboesa', 65, 3),
('Crème Brûlée de Baunilha com Frutas Vermelhas', 60, 3),
('Fondant de Chocolate Amargo com Sorvete de Framboesa', 68, 3),
('Torta de Limão com Merengue Italiano', 62, 3),
('Panna Cotta de Lavanda com Mel e Amêndoas', 66, 3),
('Soufflé de Grand Marnier com Calda de Chocolate', 70, 3),
('Cheesecake de Morango com Coulis de Frutas', 64, 3),
('Profiteroles com Sorvete de Baunilha e Calda de Chocolate Quente', 68, 3),
('Tarte Tatin de Maçã com Sorvete de Canela', 65, 3),
('Mousse de Maracujá com Frutas Tropicais', 62, 3),
('Bolo de Chocolate Decadente com Sorvete de Framboesa', 67, 3),
('Pavlova de Frutas Tropicais com Coulis de Maracujá', 70, 3),

-- Vinhos
('Château Margaux 2015', 1821, 4),
('Opus One 2016', 475, 4),
('Dom Pérignon Champagne Vintage 2010', 282, 4),
('Sassicaia 2017', 395, 4),
('Krug Grande Cuvée Champagne', 231, 4),
('Château Pétrus 2014', 4401, 4),
('Silver Oak Cabernet Sauvignon 2016', 151, 4),
('Château d''Yquem Sauternes 2017', 494, 4),
('Barolo Riserva Monfortino Giacomo Conterno 2013', 1204, 4),
('Château Lafite Rothschild 2016', 6000, 4),
('Château Latour 2016', 450, 4),
('Dom Pérignon Rosé Champagne Vintage 2008', 1200, 4);
go
