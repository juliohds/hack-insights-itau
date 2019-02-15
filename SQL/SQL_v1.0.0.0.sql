CREATE DATABASE [ItauDB]
GO

USE [ItauDB]
GO

CREATE TABLE [dbo].[tbLocaisTipos](
	[codLocalTipo] [int] IDENTITY(1,1) NOT NULL,
	[descricao] [nchar](10) NULL,
	[ativo] [bit] NULL,
 CONSTRAINT [PK_tbTiposLocais] PRIMARY KEY CLUSTERED 
(
	[codLocalTipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[tbLocaisTipos] ADD  CONSTRAINT [DF_tbTiposLocais_ativo]  DEFAULT ((1)) FOR [ativo]
GO

CREATE TABLE [dbo].[tbLocais](
	[codLocal] [int] IDENTITY(1,1) NOT NULL,
	[codLocalTipo] [int] NULL,
	[descricao] [nvarchar](150) NULL,
	[latitude] [decimal](9, 6) NULL,
	[longitude] [decimal](9, 6) NULL,
 CONSTRAINT [PK_tbLocais] PRIMARY KEY CLUSTERED 
(
	[codLocal] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[tbLocais]  WITH CHECK ADD  CONSTRAINT [FKbLocaisLocaisTipos] FOREIGN KEY([codLocalTipo])
REFERENCES [dbo].[tbLocaisTipos] ([codLocalTipo])
GO

ALTER TABLE [dbo].[tbLocais] CHECK CONSTRAINT [FKbLocaisLocaisTipos]
GO

CREATE TABLE [dbo].[tbUsuarios](
	[codUsuario] [int] IDENTITY(1,1) NOT NULL,
	[nome] [nvarchar](250) NULL,
	[sobrenome] [nvarchar](250) NULL,
	[email] [nvarchar](250) NULL,
	[senha] [nvarchar](max) NULL,
	[dataCadastro] [nvarchar](250) NULL,
	[ativo] [bit] NULL,
 CONSTRAINT [PK_tbUsuarios] PRIMARY KEY CLUSTERED 
(
	[codUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[tbUsuarios] ADD  CONSTRAINT [DF_tbUsuarios_dataCadastro]  DEFAULT (getdate()) FOR [dataCadastro]
GO

ALTER TABLE [dbo].[tbUsuarios] ADD  CONSTRAINT [DF_tbUsuarios_ativo]  DEFAULT ((1)) FOR [ativo]
GO

CREATE TABLE [dbo].[tbPlanos](
	[codPlano] [int] IDENTITY(1,1) NOT NULL,
	[descricao] [nvarchar](max) NULL,
	[valor] [decimal](18, 2) NULL,
 CONSTRAINT [PK_tbPlanos] PRIMARY KEY CLUSTERED 
(
	[codPlano] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE TABLE [dbo].[tbAnuncios](
	[codAnuncio] [int] IDENTITY(1,1) NOT NULL,
	[codUsuario] [int] NOT NULL,
	[codPlano] [int] NULL,
	[titulo] [nvarchar](250) NULL,
	[imagem] [varbinary](max) NULL,
	[texto] [nvarchar](max) NULL,
	[telefone] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[site] [varchar](50) NULL,
	[endereco] [varchar](150) NULL,
	[latitude] [decimal](9, 6) NULL,
	[longitude] [decimal](9, 6) NULL,
	[dataCadastro] [datetime] NULL,
	[ativo] [bit] NULL,
 CONSTRAINT [PK_tbAnuncios] PRIMARY KEY CLUSTERED 
(
	[codAnuncio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

ALTER TABLE [dbo].[tbAnuncios] ADD  CONSTRAINT [DF_tbAnuncios_dataCadastro]  DEFAULT (getdate()) FOR [dataCadastro]
GO

ALTER TABLE [dbo].[tbAnuncios] ADD  CONSTRAINT [DF_tbAnuncios_ativo]  DEFAULT ((1)) FOR [ativo]
GO

ALTER TABLE [dbo].[tbAnuncios]  WITH CHECK ADD  CONSTRAINT [FKAnunciosPlanos] FOREIGN KEY([codPlano])
REFERENCES [dbo].[tbPlanos] ([codPlano])
GO

ALTER TABLE [dbo].[tbAnuncios] CHECK CONSTRAINT [FKAnunciosPlanos]
GO

ALTER TABLE [dbo].[tbAnuncios]  WITH CHECK ADD  CONSTRAINT [FKAnuncioUsuarios] FOREIGN KEY([codUsuario])
REFERENCES [dbo].[tbUsuarios] ([codUsuario])
GO

ALTER TABLE [dbo].[tbAnuncios] CHECK CONSTRAINT [FKAnuncioUsuarios]
GO

CREATE TABLE [dbo].[tbPlanosLocaisTipos](
	[codPlano] [int] NOT NULL,
	[codLocalTipo] [int] NOT NULL,
 CONSTRAINT [PK_tbPlanosLocaisTipos] PRIMARY KEY CLUSTERED 
(
	[codPlano] ASC,
	[codLocalTipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[tbPlanosLocaisTipos]  WITH CHECK ADD  CONSTRAINT [FKPlanosLocaisTiposLocaisTipos] FOREIGN KEY([codLocalTipo])
REFERENCES [dbo].[tbLocaisTipos] ([codLocalTipo])
GO

ALTER TABLE [dbo].[tbPlanosLocaisTipos] CHECK CONSTRAINT [FKPlanosLocaisTiposLocaisTipos]
GO

ALTER TABLE [dbo].[tbPlanosLocaisTipos]  WITH CHECK ADD  CONSTRAINT [FKPlanosLocaisTiposPlanos] FOREIGN KEY([codPlano])
REFERENCES [dbo].[tbPlanos] ([codPlano])
GO

ALTER TABLE [dbo].[tbPlanosLocaisTipos] CHECK CONSTRAINT [FKPlanosLocaisTiposPlanos]
GO

CREATE TABLE [dbo].[tbAnunciosHistoricos](
	[codAnuncioHistorico] [int] NOT NULL,
	[codAnuncio] [int] NULL,
	[codLocal] [int] NULL,
	[dataInicial] [datetime] NULL,
	[dataFinal] [datetime] NULL,
 CONSTRAINT [PK_tbAnunciosHistoricos] PRIMARY KEY CLUSTERED 
(
	[codAnuncioHistorico] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[tbAnunciosHistoricos] ADD  CONSTRAINT [DF_tbAnunciosHistoricos_dataInicial]  DEFAULT (getdate()) FOR [dataInicial]
GO

ALTER TABLE [dbo].[tbAnunciosHistoricos]  WITH CHECK ADD  CONSTRAINT [FKAnunciosHistoricosAnuncios] FOREIGN KEY([codAnuncio])
REFERENCES [dbo].[tbAnuncios] ([codAnuncio])
GO

ALTER TABLE [dbo].[tbAnunciosHistoricos] CHECK CONSTRAINT [FKAnunciosHistoricosAnuncios]
GO

ALTER TABLE [dbo].[tbAnunciosHistoricos]  WITH CHECK ADD  CONSTRAINT [FKAnunciosHistoricosLocais] FOREIGN KEY([codLocal])
REFERENCES [dbo].[tbLocais] ([codLocal])
GO

ALTER TABLE [dbo].[tbAnunciosHistoricos] CHECK CONSTRAINT [FKAnunciosHistoricosLocais]
GO

CREATE TABLE [dbo].[tbConfiguracoes](
	[parametro] [nvarchar](150) NOT NULL,
	[valor] [nvarchar](max) NULL,
 CONSTRAINT [PK_tbConfiguracoes] PRIMARY KEY CLUSTERED 
(
	[parametro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

