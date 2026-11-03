<div align="center">

<img src="assets/readme/cabecera.svg" alt="¡Yeti-enes que correr! Una defensa está por empezar. El campus tiene otros planes." width="100%">

<br>

<img src="assets/readme/etiqueta-motor.svg" alt="Motor: Unity 3D" width="180">
<img src="assets/readme/etiqueta-lenguaje.svg" alt="Lenguaje: C#" width="180">
<img src="assets/readme/etiqueta-estilo.svg" alt="Estilo: Cartoon 3D" width="180">
<img src="assets/readme/etiqueta-plataforma.svg" alt="Versión web: WebGL" width="180">

# Corre Yeti Corre

**Endless runner universitario**

*Una defensa está por empezar. Recorre el campus, supera los obstáculos y llega a tiempo.*

<a href="https://katfipol.github.io/yeti-portal/juego/"><img src="assets/readme/boton-jugar.svg" alt="Jugar ahora" width="260"></a>
&nbsp;
<a href="https://katfipol.github.io/yeti-portal/"><img src="assets/readme/boton-portal.svg" alt="Explorar el portal web" width="260"></a>

<br>

[Historia](#historia) · [Protagonista](#protagonista) · [Escenarios](#escenarios) · [Interfaz](#interfaz) · [Controles](#controles) · [Desarrollo](#desarrollo) · [Cómo jugar](#cómo-jugar) · [Créditos](#créditos)

</div>

---

## Historia

El protagonista llega al campus y descubre que quedan pocos minutos para su defensa de Game Development. Lo que parecía un día tranquilo se convierte en una carrera por los pasillos de la universidad.

- **Acto I · Contra el reloj:** el Yeti comienza a correr y encuentra libros y mochilas que interrumpen su recorrido.
- **Acto II · Caos en el campus:** la velocidad aumenta. Saltar a tiempo y agacharse bajo los carteles se vuelve esencial para continuar.

> **La misión:** conservar tus vidas mientras sumas puntos y avanzas hacia la defensa.

---

## Protagonista

<div align="center">
<img src="assets/images/personaje-yeti.png" alt="Modelo 3D del Yeti con chaqueta universitaria guinda y gris." width="420">
</div>

Un Yeti estudiante de pelaje blanco y chaqueta guinda y gris, con proporciones cartoon que le dan una identidad reconocible dentro del campus.

| Acción | Descripción |
| :--- | :--- |
| 🏃 **Correr** | Desplazamiento automático |
| ⬆️ **Saltar** | Supera obstáculos bajos |
| ⬇️ **Agacharse** | Reduce el área de colisión para pasar bajo carteles |
| 💥 **Derrota** | Se muestra la caída al perder todas las vidas |

---

## Escenarios

<img src="assets/images/escenario-universidad.png" alt="Partida en los pasillos universitarios con el personaje, obstáculos e indicadores." width="100%">

Los pasillos, las aulas y la señalética universitaria forman parte de la ambientación. Los objetos cotidianos del campus se convierten en obstáculos que exigen reaccionar a tiempo.

| Elemento | Papel en el recorrido |
| :--- | :--- |
| **Libros y mochilas** | Obstáculos que se superan saltando |
| **Carteles** | Obstáculos elevados que requieren agacharse |
| **Fondo en movimiento** | Refuerza la sensación de carrera |

---

## Interfaz

<table>
<tr>
<th width="50%">Portada del juego</th>
<th width="50%">Menú inicial</th>
</tr>
<tr>
<td><img src="assets/images/portada-juego.png" alt="Portada del videojuego." width="100%"></td>
<td><img src="assets/images/menu-inicial.png" alt="Menú inicial con acceso a jugar y sonido." width="100%"></td>
</tr>
</table>

Durante la partida se muestran las **vidas**, el **puntaje** y el **tiempo**. Al terminar aparece el resultado (victoria o derrota) con la opción de volver a jugar.

---

## Controles

El personaje corre automáticamente. Tú decides cuándo saltar y cuándo agacharte.

| Tecla | Acción | Uso |
| :---: | :--- | :--- |
| <kbd>↑</kbd> | **Saltar** | Superar libros y mochilas |
| <kbd>↓</kbd> | **Agacharse** | Pasar bajo carteles suspendidos |
| **Clic** | **Interactuar** | Botones de inicio, sonido y nuevo intento |

> 💡 **Haz clic dentro del juego antes de usar las flechas.**

**Reglas del recorrido**

- Los impactos con obstáculos restan vidas.
- El puntaje aumenta mientras sobrevives.
- Los obstáculos aparecen de forma aleatoria.
- La dificultad aumenta durante el recorrido.

---

## Desarrollo

| Tecnología | Uso dentro del proyecto |
| :--- | :--- |
| **Unity** | Escenas, físicas, interfaz y compilación del videojuego |
| **C#** | Movimiento, obstáculos, vidas, puntaje y sonido |
| **Mixamo** | Animaciones del personaje |
| **HTML y CSS** | Presentación y diseño adaptable del portal |
| **JavaScript** | Navegación e interacciones del portal |
| **GitHub Pages** | Publicación del portal y ejecución del juego en el navegador |

<details>
<summary><strong>Organización funcional del videojuego</strong></summary>

<br>

| Área | Responsabilidad |
| :--- | :--- |
| **Jugador** | Ejecutar salto y agachado, y coordinar animaciones |
| **Obstáculos** | Generar elementos y retirar los que quedan atrás |
| **Partida** | Controlar el progreso, el puntaje y el resultado |
| **Vidas** | Registrar impactos y determinar la derrota |
| **Interfaz** | Mostrar información y gestionar los botones |
| **Audio** | Reproducir música y efectos |

</details>

<details>
<summary><strong>Estructura del repositorio</strong></summary>

<br>

| Ruta | Contenido |
| :--- | :--- |
| `index.html` | Página principal del portal |
| `style.css` | Estilos y adaptación a diferentes pantallas |
| `script.js` | Interacciones del portal |
| `assets/images/` | Capturas, portada y personaje |
| `assets/readme/` | Cabecera y botones de este README |
| `juego/index.html` | Página de ejecución del juego |
| `juego/Build/` | Compilación web de Unity |
| `juego/TemplateData/` | Recursos del reproductor |

</details>

---

## Cómo jugar

<div align="center">

<a href="https://katfipol.github.io/yeti-portal/juego/"><img src="assets/readme/boton-jugar.svg" alt="Jugar ahora" width="280"></a>

</div>

1. Abre el [juego en GitHub Pages](https://katfipol.github.io/yeti-portal/juego/).
2. Espera a que cargue el menú inicial.
3. Selecciona **Jugar**.
4. Haz clic dentro de la partida para activar el teclado.
5. Usa <kbd>↑</kbd> para saltar y <kbd>↓</kbd> para agacharte.

<details>
<summary><strong>Requisitos y ayuda rápida</strong></summary>

<br>

- Computadora con teclado y un navegador compatible con WebGL.
- Conexión a internet para cargar la partida.
- Botón de pantalla completa disponible en el reproductor.
- Si las flechas no responden, haz clic dentro del juego.
- Si no escuchas audio, revisa el botón de sonido del menú y el volumen de la pestaña.
- El portal se adapta a pantallas pequeñas, pero el juego requiere teclado.

</details>

---

## Créditos

| Participación | Integrantes |
| :--- | :--- |
| **Videojuego** | Melani Quintela Aguilar y José Martin Leaño Mercado |
| **Portal web** | [Martín Leaño](https://github.com/martinleano72-afk) |
| **Asignatura** | Game Development |

Proyecto académico desarrollado en Unity y presentado mediante un portal web.

<br>

<div align="center">

**El campus te espera. La defensa también.**

[Jugar ahora](https://katfipol.github.io/yeti-portal/juego/) · [Visitar el portal](https://katfipol.github.io/yeti-portal/) · [Volver arriba](#corre-yeti-corre)

</div>
