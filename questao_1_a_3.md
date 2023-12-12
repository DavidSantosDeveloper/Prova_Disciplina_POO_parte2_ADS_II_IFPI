**RESPOSTAS**

### 1. Podemos instanciar classes abstratas? Justifique.
**1-	Não, ela é um tipo de classe especial que não pode ser instanciada, apenas herdada. Sendo assim, uma classe abstrata não pode ter um objeto criado a partir de sua instanciação.** 

### Explique o que é necessário para que a compilação da ClasseConcreta ocorra sem erros:
abstract class ClasseAbstrata {
abstract imprimaAlgo(): void ;
}
**2-	Para que a compilação da classe ClasseConcreta ocorra sem erros, a classe concreta deve fornecer uma implementação para o método abstrato imprimaAlgo() definido na classe abstrata ClasseAbstrata.** 

### Se uma classe que herda de uma abstrata e não implementa os seus métodos, o que ocorre?
**3-	Se uma classe herda de uma classe abstrata e não implementa todos os métodos abstratos da classe pai, então a classe que herda também se torna abstrata.** 
