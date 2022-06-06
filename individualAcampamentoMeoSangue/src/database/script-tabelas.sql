
create database meioSangue;
use meioSangue;


-- -----------------------------------------------------
-- Tabela Deuses
-- -----------------------------------------------------
create table tbDeus (
  idDeus int auto_increment not null primary key,
  nomeDeus varchar (45),
 elementoDeus varchar(45), check (elementoDeus = 'Fogo' 
 or elementoDeus = 'Ar' 
 or elementoDeus = 'Água'
 or elementoDeus = 'Amor'
 or elementoDeus = 'Sombra'
 or elementoDeus = 'Estratégia')
 );


-- -----------------------------------------------------
-- Tabela Personagens
-- -----------------------------------------------------
create table tbPersonagem (
  idPersonagem int auto_increment not null primary key,
  nomePersonagem varchar(45),
  fkDeus int not null, foreign key (fkDeus) references tbDeus(idDeus)
  );

-- -----------------------------------------------------
-- Tabela Usuarios
-- -----------------------------------------------------
create table tbUsuario(
idUsuario int primary key auto_increment not null,
nomeUsuario varchar(45) not null,
emailUsuario varchar(55) not null,
senhaUsuario varchar(60) not null,
fkPersonagem int, foreign key (fkPersonagem) references tbPersonagem(idPersonagem)
);


-- -----------------------------------------------------
-- Tabela atributos
-- -----------------------------------------------------
create table tbAtributo(
  idAtributo int primary key auto_increment not null,
  nomeAtributo varchar(45),
  pontoAtributo int,
  fkPersonagemAtributo int, 
  foreign key (fkPersonagemAtributo) 
  references tbPersonagem(idPersonagem)
  );


select * from tbDeus;
select * from tbPersonagem;
select * from tbUsuario;
select * from tbAtributo;


-- inserções
insert into tbDeus(nomeDeus, elementoDeus) 
values ('Poseidon','Água'),
       ('Atena','Estratégia'),
       ('Zeus','Ar'),
       ('Afrodite','Amor'),
       ('Hades','Sombra'),
       ('Hefestos','Fogo'),
       ('Ares','Fogo');
       
--
--
insert into tbPersonagem(nomePersonagem,fkDeus)
values ('Percy Jackson','1'),
       ('Annabeth Chase','2'),
       ('Jason Grace','3'),
       ('Piper Mclean','4'),
       ('Hazel Levesque','5'),
       ('Leo Valdez','6'),
       ('Frank Zhang','7');
--
--
insert into tbUsuario(nomeUsuario, emailUsuario, senhaUsuario, fkPersonagem) 
values ('Jorge Amado','jorge@gmail.com','1234','1'),
('Joao Amado','joao@gmail.com','1234','1'),
	   ('Ana Rosa','ana@gmail.com','1234','2'),
       ('Pericles F.','Pericles@gmail.com','1234','3'),
       ('João Matos','joao@gmail.com','1234','4'),
       ('Clayton Afonso','clayton@gmail.com','1234','5'),
       ('Igor Fonseca','igor@gmail.com','1234','6'),
       ('caroline Fonseca','carol@gmail.com','1234','2'),
       ('Rogerio Silva','rogerio@gmail.com','1234','1'),
       ('Ferdinando Rocha','fernando@gmail.com','1234','1'),
       ('Patricia querizo','patricia@gmail.com','1234','2'),
       ('Diego Andrade','Diego@gmail.com','1234','7'),
       ('Andreas Rochedo','Andreas@gmail.com','1234','7'),
       ('Jacque Roseline','jacque@gmail.com','1234','7');

--
--

insert into tbAtributo(nomeAtributo, pontoAtributo, fkPersonagemAtributo)
values ('Força','1','1'),
       ('Agilidade','1','1'),
       ('Destreza','1','1'),
       ('Sorte','1','1'),
       
       ('Força','1','2'),
       ('Agilidade','1','2'),
       ('Destreza','1','2'),
       ('Sorte','1','2'),
       
       ('Força','1','3'),
       ('Agilidade','1','3'),
       ('Destreza','1','3'),
       ('Sorte','1','3'),
       
       ('Força','1','4'),
       ('Agilidade','1','4'),
       ('Destreza','1','4'),
       ('Sorte','1','4'),
       
       ('Força','1','5'),
       ('Agilidade','1','5'),
       ('Destreza','1','5'),
       ('Sorte','1','5'),
       
       ('Força','1','6'),
       ('Agilidade','1','6'),
       ('Destreza','1','6'),
       ('Sorte','1','6'),
       
       ('Força','1','7'),
       ('Agilidade','1','7'),
       ('Destreza','1','7'),
       ('Sorte','1','7');



select nomeUsuario as 'usuario', nomePersonagem as 'personagem', count(fkPersonagem) as 'personagemTotal' from tbUsuario
join tbPersonagem on fkPersonagem = idPersonagem
where idPersonagem = 1;

 SELECT nomeUsuario as nome, count(fkPersonagem) as voto, nomePersonagem as personagem
         FROM tbUsuario
         join tbPersonagem on idPersonagem = fkPersonagem
         group by tbPersonagem.nomePersonagem;
         
         SELECT nomeUsuario as 'nome', count(fkPersonagem) as 'voto', nomePersonagem as 'personagem'
         FROM tbUsuario
         join tbPersonagem on fkPersonagem = idPersonagem
         group by tbPersonagem.nomePersonagem;
