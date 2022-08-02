CREATE TABLE `funcionario` (
  `idfuncionario` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(16) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idfuncionario`)
  );


-- -----------------------------------------------------
-- Table `categoria`
-- -----------------------------------------------------
CREATE TABLE `categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nomeCategoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`)
  );


-- -----------------------------------------------------
-- Table `produto`
-- -----------------------------------------------------
CREATE TABLE `produto` (
  `idproduto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `preco` DOUBLE NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproduto`)
  );


-- -----------------------------------------------------
-- Table `cliente`
-- -----------------------------------------------------
CREATE TABLE `cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `logradouro` VARCHAR(255) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(9) NOT NULL,
  `celular` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcliente`)
  );


-- -----------------------------------------------------
-- Table `pedido`
-- -----------------------------------------------------
CREATE TABLE `pedido` (
  `idpedido` INT NOT NULL AUTO_INCREMENT,
  `data` DATE NOT NULL,
  `total` DOUBLE NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`idpedido`)
  );


-- -----------------------------------------------------
-- Table `pedido_has_produto`
-- -----------------------------------------------------
CREATE TABLE `pedido_has_produto` (
  `pedido_idpedido` INT NOT NULL,
  `produto_idproduto` INT NOT NULL,
  PRIMARY KEY (`pedido_idpedido`, `produto_idproduto`)
  );