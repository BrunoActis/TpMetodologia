Trabajo Practico de Metodologia de Sistemas

Proyecto en TypeScript para practicar conceptos de arquitectura orientada a objetos, empleando el patron de diseño "Template Method".

Template Method es un patrón de diseño de comportamiento que define el esqueleto de un algoritmo en la superclase pero permite que las
subclases sobrescriban pasos del algoritmo sin cambiar su estructura.

Ventajas:
- Reutilización del código: la clase abstracta centraliza la lógica común, minimizando la duplicación de código.
- Coherencia del comportamiento: garantiza una estructura de algoritmo fija y al mismo tiempo permite variabilidad en pasos específicos.
- Facilidad de mantenimiento: los cambios en el flujo de trabajo se realizan en un solo lugar (la clase base).

Relaciones con otros patrones:
- Factory Method es una especialización del Template Method. Al mismo tiempo, un Factory Method puede servir como paso de un gran Template Method. - Template Method se basa en la herencia: te permite alterar partes de un algoritmo extendiendo esas partes en subclases. 
 
Aplicabilidad:
- Utilice el patrón Método de plantilla cuando desee permitir que los clientes extiendan solo pasos particulares de un algoritmo, pero no el algoritmo completo o su estructura.  

Autor: Bruno Actis

GitHub: https://github.com/BrunoActis

