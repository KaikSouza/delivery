USE `delivery` ;

CREATE TABLE IF NOT EXISTS `funcionario` (
  `idfuncionario` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(16) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idfuncionario`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `celular` VARCHAR(15) NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `logradouro` VARCHAR(255) NOT NULL,
  `cep` VARCHAR(9) NOT NULL,
  `bairro` VARCHAR(255) NOT NULL,
  `numero` VARCHAR(5) NOT NULL,
  `cidade` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `uf` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `produto` (
  `idproduto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `preco` DECIMAL(7) NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproduto`),
  INDEX `fk_produto_categoria1_idx` (`categoria_idcategoria` ASC),
  CONSTRAINT `fk_produto_categoria1`
    FOREIGN KEY (`categoria_idcategoria`)
    REFERENCES `delivery`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `delivery`.`venda` (
  `idvenda` INT NOT NULL AUTO_INCREMENT,
  `datavenda` DATE NOT NULL,
  PRIMARY KEY (`idvenda`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `produto_has_cliente` (
  `produto_idproduto` INT NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  `venda_idvenda` INT NOT NULL,
  PRIMARY KEY (`produto_idproduto`, `cliente_idcliente`),
  INDEX `fk_produto_has_cliente_cliente1_idx` (`cliente_idcliente` ASC),
  INDEX `fk_produto_has_cliente_produto1_idx` (`produto_idproduto` ASC),
  INDEX `fk_produto_has_cliente_venda1_idx` (`venda_idvenda` ASC),
  CONSTRAINT `fk_produto_has_cliente_produto1`
    FOREIGN KEY (`produto_idproduto`)
    REFERENCES `delivery`.`produto` (`idproduto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produto_has_cliente_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `delivery`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produto_has_cliente_venda1`
    FOREIGN KEY (`venda_idvenda`)
    REFERENCES `delivery`.`venda` (`idvenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;