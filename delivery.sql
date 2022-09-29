CREATE TABLE `funcionario` (
  `idfuncionario` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(16) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idfuncionario`))
ENGINE = InnoDB;

CREATE TABLE `cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `celular` VARCHAR(15) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `logradouro` VARCHAR(255) NOT NULL,
  `cep` VARCHAR(9) NOT NULL,
  `bairro` VARCHAR(255) NOT NULL,
  `numero` VARCHAR(5) NOT NULL,
  `cidade` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB;

CREATE TABLE `categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;

CREATE TABLE `produto` (
  `idproduto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `preco` DOUBLE NOT NULL,
  `categoria_produto` INT NOT NULL,
  PRIMARY KEY (`idproduto`),
  INDEX `fk_produto_categoria1_idx` (`categoria_produto` ASC) ,
  CONSTRAINT `fk_produto_categoria1`
    FOREIGN KEY (`categoria_produto`)
    REFERENCES `categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE `venda` (
  `cliente_idcliente` INT NOT NULL,
  `produto_idproduto` INT NOT NULL,
  PRIMARY KEY (`cliente_idcliente`, `produto_idproduto`),
  INDEX `fk_cliente_has_produto_produto1_idx` (`produto_idproduto` ASC) ,
  INDEX `fk_cliente_has_produto_cliente1_idx` (`cliente_idcliente` ASC) ,
  CONSTRAINT `fk_cliente_has_produto_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente_has_produto_produto1`
    FOREIGN KEY (`produto_idproduto`)
    REFERENCES `produto` (`idproduto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;