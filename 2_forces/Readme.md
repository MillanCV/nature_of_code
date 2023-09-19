Este capitulo te explicara el concepto de fuerza y su relacion con la
aceleracion.

Hacia el final del capitulo habras construido un motor de fisicas simples y
entenderas como los objetos se mueven en el canvas respondinedo a una variedad
de fuerzas ambientales.

Un motor de fisicas es un programa o libreria que simula el comportamiento de un
objeto en un entorno fisico. Estos motores pueden ser muy precisos o de tiempo
real. Haras un motor rudimentario, enfocado a ser facil de entender y rapido.

# Leyes del movimiento de newton

El concepto fuerza tiene diferentes significados. Puede indicar una intensidad
fisica o una influencia.

Nos quedamos con la definicion de Isaac Newton, "una fuerza es un vector que
causa que un objeto con masa acelere".

### Primera ley del movimiento:
* "Un objeto en reposo permanece en reposo, un objeto en movimiento permanece en
  movimiento".
    * Podemos precisar diciendo que un objeto en movimiento tiene una velocidad
      y direccion constantes a menos que una fuerza rompa el balance.
    * En la tierra hay fuerzas ambientales actuando sobre los objetos, como la
      gravedad o la resistencia del aire. La velocidad de un objeto solo sera
      constante si las fuerzas se cancelan mutuamente o en ausencia the fuerzas.
      Este es el llamado estado de equilibrio.
    * Si lo reducimos al canvas de p5js podemos reescribir esta ley como:
        * "La velocidad de un objeto permanecera constante si esta en estado de
          equilibrio"

### Tercera ley del movimiento:
* "Para cada accion hay una reaccion igual y de sentido contrario"
    * Si empujas un muro este ofrece resistencia con igual fuerza y de sentido
      contrario.
    * "La fuerza siempre ocurre en pares. Las dos fuerzas son de igual magnitud
      pero en direcciones opuestas".
    * Podria parecer que, segun esto, ambas fuerzas deberian cancelarse. Pero
      porque dos fuerzas sean iguales, no significa que el movimiento lo sea. El
      resulta de aplicar una fuerza sobre un objeto depende de una variedad de
      factores.
    * En terminos de p5js:
        * "Si calculas un p5.Vector llamado f que representa la fuerza de un
          objeto A sobre un objeto B, debes aplicar la fuerza opuesta de B sobre
          A. Puedes calcular esta fuerza con p5.Vector.mult(f, -1)".
        * A menudo no sera necesario adherirse a la tercera ley de Newton, ya
          que no buscamos precision absoluta.

### Segunda ley de Newton:
* "La fuerza equivale a masa por aceleracion".
    * Tengamos en cuenta que masa no es igual que peso. La masa representa la
      cantidad de materia de un objeto. El peso es, tecnicamente, la fuerza de
      la gravedad sobre un objeto. Peso es la fuerza de la gravedad por la masa.
      El peso se mide en newtons. Mientras la masa es cte, el peso varia segun
      la gravedad
    * Relacionado con la masa, esta el concepto de densidad, que es la cantidad
      de masa por unidad de volumen.
    * En el mundo de p5js:
        * Empezamos pensando que cualquier objeto tiene masa igual a 1, esto da lugar a que la fuerza sea igual a la aceleracion.
            * Los ejemplos del capitulo anterior responden a esta asociacion.
            * Fuerza -> Aceleracion -> Velocidad -> Posicion
            