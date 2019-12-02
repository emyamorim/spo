-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spo
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adm`
--

DROP TABLE IF EXISTS `adm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `adm` (
  `id_adm` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_adm`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm`
--

LOCK TABLES `adm` WRITE;
/*!40000 ALTER TABLE `adm` DISABLE KEYS */;
INSERT INTO `adm` VALUES (1,'adm','12345');
/*!40000 ALTER TABLE `adm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `aluno` (
  `rm_aluno` int(5) NOT NULL,
  `nome_aluno` varchar(45) DEFAULT NULL,
  `sobrenome_aluno` varchar(100) DEFAULT NULL,
  `serie_aluno` varchar(45) DEFAULT NULL,
  `senha_aluno` varchar(45) DEFAULT NULL,
  `turma_aluno` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rm_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
INSERT INTO `aluno` VALUES (1,'1111111111','111111','1Info','1','b'),(2,'2','2','2Info','2','b'),(147,'qwerty','edrfvgh','1° Log','0000','a'),(789,'vaca','amarela','3Info','789','b'),(890,'rrrr','rrr','3Info','ooooooo','b'),(11111,'DDDDDD','DDDDDDDDD','1Info','EEEEEKDNJKSNDS','b'),(14444,'jiii','jjj','2Log','123454545842','a'),(17063,'emily','amorim','1° Log','123','a'),(32233,'eeee','eee','2Info','dfsfsfs','a'),(77777,'sssss','ssss','2Log','ssss','a');
/*!40000 ALTER TABLE `aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor`
--

DROP TABLE IF EXISTS `professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `professor` (
  `rm_professor` int(11) NOT NULL,
  `nome_prof` varchar(45) DEFAULT NULL,
  `sobrenome_prof` varchar(100) DEFAULT NULL,
  `senha_prof` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`rm_professor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES (4,'4','4','12345'),(12345,'vanu','amorim','12345'),(17064,'emily','amorimmm','1');
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prova`
--

DROP TABLE IF EXISTS `prova`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `prova` (
  `id_prova` int(11) NOT NULL AUTO_INCREMENT,
  `rm_professor` int(11) NOT NULL,
  `turma` char(1) NOT NULL,
  `mencao_mb` varchar(2) NOT NULL,
  `mencao_b` varchar(45) NOT NULL,
  `mencao_r` varchar(45) NOT NULL,
  `questao_descricao` longtext NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `disciplina` varchar(150) NOT NULL,
  `bimestre` varchar(45) NOT NULL,
  `serie` varchar(45) NOT NULL,
  PRIMARY KEY (`id_prova`),
  KEY `rm_professor` (`rm_professor`),
  CONSTRAINT `prova_ibfk_2` FOREIGN KEY (`rm_professor`) REFERENCES `professor` (`rm_professor`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prova`
--

LOCK TABLES `prova` WRITE;
/*!40000 ALTER TABLE `prova` DISABLE KEYS */;
INSERT INTO `prova` VALUES (42,4,'a','10','8','6','\"{\"id_questoes\":8,\"questao\":\"Quem descobriu a pqp?\",\"alternativa_a\":\" Ana maria braga\",\"alternativa_b\":\" José da silva\",\"alternativa_c\":\"Testizinho\",\"alternativa_d\":\"Bolsonaro\",\"alternativa_e\":\"Maria do Rosario\",\"disciplina\":\"quimica\",\"bimestre\":\"4bim\",\"pontuacao\":\"4\",\"serie\":\"1ano\",\"correta\":\"b\"},{\"id_questoes\":10,\"questao\":\"Teste\",\"alternativa_a\":\" teste1\",\"alternativa_b\":\" teste2\",\"alternativa_c\":\"teste3\",\"alternativa_d\":\"teste4\",\"alternativa_e\":\"teste5\",\"disciplina\":\"Fisíca\",\"bimestre\":\"2° Bimestre\",\"pontuacao\":\"1\",\"serie\":\"1° Ano\",\"correta\":\"B\"},{\"id_questoes\":11,\"questao\":\"teste teste?\",\"alternativa_a\":\" teste\",\"alternativa_b\":\" teste\",\"alternativa_c\":\"teste\",\"alternativa_d\":\"teste\",\"alternativa_e\":\"teste\",\"disciplina\":\"Fisíca\",\"bimestre\":\"2° Bimestre\",\"pontuacao\":\"2\",\"serie\":\"2° Ano\",\"correta\":\"A\"},{\"id_questoes\":12,\"questao\":\"teste teste?\",\"alternativa_a\":\" teste\",\"alternativa_b\":\" teste\",\"alternativa_c\":\"teste\",\"alternativa_d\":\"teste\",\"alternativa_e\":\"teste\",\"disciplina\":\"Fisíca\",\"bimestre\":\"2° Bimestre\",\"pontuacao\":\"2\",\"serie\":\"2° Ano\",\"correta\":\"A\"}\"','SADASDSA','Fisíca','1° Bimestre','1° Log'),(43,4,'a','10','8','6','\"{\"id_questoes\":8,\"questao\":\"Quem descobriu a pqp?\",\"alternativa_a\":\" Ana maria braga\",\"alternativa_b\":\" José da silva\",\"alternativa_c\":\"Testizinho\",\"alternativa_d\":\"Bolsonaro\",\"alternativa_e\":\"Maria do Rosario\",\"disciplina\":\"quimica\",\"bimestre\":\"4bim\",\"pontuacao\":\"4\",\"serie\":\"1ano\",\"correta\":\"b\"},{\"id_questoes\":10,\"questao\":\"Teste\",\"alternativa_a\":\" teste1\",\"alternativa_b\":\" teste2\",\"alternativa_c\":\"teste3\",\"alternativa_d\":\"teste4\",\"alternativa_e\":\"teste5\",\"disciplina\":\"Fisíca\",\"bimestre\":\"2° Bimestre\",\"pontuacao\":\"1\",\"serie\":\"1° Ano\",\"correta\":\"B\"},{\"id_questoes\":11,\"questao\":\"teste teste?\",\"alternativa_a\":\" teste\",\"alternativa_b\":\" teste\",\"alternativa_c\":\"teste\",\"alternativa_d\":\"teste\",\"alternativa_e\":\"teste\",\"disciplina\":\"Fisíca\",\"bimestre\":\"2° Bimestre\",\"pontuacao\":\"2\",\"serie\":\"2° Ano\",\"correta\":\"A\"}\"','Teste','Quimíca','2° Bimestre','1° Log'),(44,4,'a','6','4','2','\"{\"id_questoes\":14,\"questao\":\"Quem descobriu america?\",\"alternativa_a\":\" teste\",\"alternativa_b\":\"  teste\",\"alternativa_c\":\" teste\",\"alternativa_d\":\" teste\",\"alternativa_e\":\" teste\",\"disciplina\":\"Fisíca\",\"bimestre\":\"2° Bimestre\",\"serie\":\"1° Ano\",\"correta\":\"A\"},{\"id_questoes\":15,\"questao\":\"Teste?\",\"alternativa_a\":\" test\",\"alternativa_b\":\" teste\",\"alternativa_c\":\"teste\",\"alternativa_d\":\"teste\",\"alternativa_e\":\"teste\",\"disciplina\":null,\"bimestre\":null,\"serie\":\"1° Ano\",\"correta\":\"A\"},{\"id_questoes\":16,\"questao\":\"Teste2?\",\"alternativa_a\":\" test\",\"alternativa_b\":\" teste\",\"alternativa_c\":\"teste\",\"alternativa_d\":\"teste\",\"alternativa_e\":\"teste\",\"disciplina\":null,\"bimestre\":null,\"serie\":\"1° Ano\",\"correta\":\"A\"},{\"id_questoes\":17,\"questao\":\"Teste3?\",\"alternativa_a\":\" test\",\"alternativa_b\":\" teste\",\"alternativa_c\":\"teste\",\"alternativa_d\":\"teste\",\"alternativa_e\":\"teste\",\"disciplina\":null,\"bimestre\":null,\"serie\":\"1° Ano\",\"correta\":\"A\"},{\"id_questoes\":18,\"questao\":\"Teste4?\",\"alternativa_a\":\" test\",\"alternativa_b\":\" teste\",\"alternativa_c\":\"teste\",\"alternativa_d\":\"teste\",\"alternativa_e\":\"teste\",\"disciplina\":null,\"bimestre\":null,\"serie\":\"1° Ano\",\"correta\":\"A\"},{\"id_questoes\":19,\"questao\":\"Teste5?\",\"alternativa_a\":\" test\",\"alternativa_b\":\" teste\",\"alternativa_c\":\"teste\",\"alternativa_d\":\"teste\",\"alternativa_e\":\"teste\",\"disciplina\":null,\"bimestre\":null,\"serie\":\"1° Ano\",\"correta\":\"A\"}\"','Teste Qumica','Quimíca','1° Bimestre','1° Log');
/*!40000 ALTER TABLE `prova` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questoes`
--

DROP TABLE IF EXISTS `questoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `questoes` (
  `id_questoes` int(11) NOT NULL AUTO_INCREMENT,
  `questao` varchar(2000) DEFAULT NULL,
  `alternativa_a` varchar(2000) DEFAULT NULL,
  `alternativa_b` varchar(2000) DEFAULT NULL,
  `alternativa_c` varchar(2000) DEFAULT NULL,
  `alternativa_d` varchar(2000) DEFAULT NULL,
  `alternativa_e` varchar(2000) DEFAULT NULL,
  `disciplina` varchar(45) DEFAULT NULL,
  `bimestre` varchar(45) DEFAULT NULL,
  `serie` varchar(45) DEFAULT NULL,
  `correta` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_questoes`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questoes`
--

LOCK TABLES `questoes` WRITE;
/*!40000 ALTER TABLE `questoes` DISABLE KEYS */;
INSERT INTO `questoes` VALUES (14,'Quem descobriu america?',' teste','  teste',' teste',' teste',' teste','Fisíca','2° Bimestre','1° Ano','A'),(15,'Teste?',' test',' teste','teste','teste','teste',NULL,NULL,'1° Ano','A'),(16,'Teste2?',' test',' teste','teste','teste','teste',NULL,NULL,'1° Ano','A'),(17,'Teste3?',' test',' teste','teste','teste','teste',NULL,NULL,'1° Ano','A'),(18,'Teste4?',' test',' teste','teste','teste','teste',NULL,NULL,'1° Ano','A'),(19,'Teste5?',' test',' teste','teste','teste','teste',NULL,NULL,'1° Ano','A');
/*!40000 ALTER TABLE `questoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resposta`
--

DROP TABLE IF EXISTS `resposta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `resposta` (
  `id_resposta` int(11) NOT NULL AUTO_INCREMENT,
  `mencao_aluno` varchar(100) NOT NULL,
  `rm_aluno` int(11) NOT NULL,
  `id_prova` int(11) NOT NULL,
  `titulo_prova` varchar(150) NOT NULL,
  `bimestre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_resposta`),
  KEY `rm_aluno` (`rm_aluno`),
  KEY `id_prova` (`id_prova`),
  CONSTRAINT `resposta_ibfk_1` FOREIGN KEY (`rm_aluno`) REFERENCES `aluno` (`rm_aluno`),
  CONSTRAINT `resposta_ibfk_2` FOREIGN KEY (`id_prova`) REFERENCES `prova` (`id_prova`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resposta`
--

LOCK TABLES `resposta` WRITE;
/*!40000 ALTER TABLE `resposta` DISABLE KEYS */;
INSERT INTO `resposta` VALUES (21,'I',17063,43,'',''),(22,'MB',17063,44,'',''),(23,'I',17063,42,'SADASDSA','1° Bimestre');
/*!40000 ALTER TABLE `resposta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-02  0:04:01
