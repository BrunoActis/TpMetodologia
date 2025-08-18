Trabajo Practico de Metodologia de Sistemas

Proyecto en TypeScript para practicar conceptos de arquitectura orientada a objetos, empleando el patron de diseño "Template Method".

Template Method es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en la superclase pero permite que las
subclases sobrescriban pasos del algoritmo sin cambiar su estructura.

Relaciones con otros patrones:
 
  - Factory Method es una especialización del Template Method. Al mismo tiempo, un Factory Method puede servir como paso de un gran Template Method.

  - Template Method se basa en la herencia: te permite alterar partes de un algoritmo extendiendo esas partes en subclases. 

  - Strategy se basa en la composición: puedes alterar partes del comportamiento del objeto suministrándole distintas estrategias 
    que se correspondan con ese comportamiento. Template Method trabaja al nivel de la clase, por lo que es estático.
  
  - Strategy trabaja al nivel del objeto, permitiéndote cambiar los comportamientos durante el tiempo de ejecución.

Autor: Bruno Actis

GitHub: https://github.com/BrunoActis

