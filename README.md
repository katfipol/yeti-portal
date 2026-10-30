<a name="inicio"></a>

<div align="center">

<img src="assets/readme/cabecera.svg" alt="¡Yeti-enes que correr! Una defensa está por empezar. El campus tiene otros planes." width="100%">

<p>
<img src="assets/readme/etiqueta-motor.svg" alt="Motor: Unity 3D" width="200">
<img src="assets/readme/etiqueta-lenguaje.svg" alt="Lenguaje: C#" width="200">
<img src="assets/readme/etiqueta-estilo.svg" alt="Estilo: Cartoon 3D" width="200">
<img src="assets/readme/etiqueta-plataforma.svg" alt="Versión web: WebGL" width="200">
</p>

<h1>Corre Yeti Corre</h1>
<p><strong>ENDLESS RUNNER UNIVERSITARIO</strong></p>
<p>Una defensa está por empezar. Recorre el campus, supera los obstáculos y llega a tiempo.</p>

<a href="https://katfipol.itch.io/yeti-enes-que-correr"><img src="assets/readme/boton-jugar.svg" alt="Jugar ahora en itch.io" width="260"></a> &nbsp; <a href="https://martinleano72-afk.github.io/yeti-portal/"><img src="assets/readme/boton-portal.svg" alt="Explorar el portal web" width="260"></a>

<p><a href="https://katfipol.itch.io/yeti-enes-que-correr">Abrir el juego</a> · <a href="https://martinleano72-afk.github.io/yeti-portal/">Visitar el portal</a> · <a href="#jugar">Cómo jugar</a></p>

</div>

<a name="explora-el-campus"></a>

## Explora el campus

<div align="center">

<a href="#narrativa-visual"><img src="assets/readme/nav-01.svg" alt="NARRATIVA" width="176"></a> <a href="#ficha-del-protagonista"><img src="assets/readme/nav-02.svg" alt="PROTAGONISTA" width="176"></a> <a href="#escenarios-del-campus"><img src="assets/readme/nav-03.svg" alt="ESCENARIOS" width="176"></a> <a href="#jugabilidad-e-interfaz"><img src="assets/readme/nav-04.svg" alt="INTERFAZ" width="176"></a>

<a href="#controles-y-mecanicas"><img src="assets/readme/nav-05.svg" alt="CONTROLES" width="176"></a> <a href="#arquitectura-y-metricas"><img src="assets/readme/nav-06.svg" alt="DESARROLLO" width="176"></a> <a href="#jugar"><img src="assets/readme/nav-07.svg" alt="JUGAR" width="176"></a> <a href="#portal-y-creditos"><img src="assets/readme/nav-08.svg" alt="PORTAL Y CRÉDITOS" width="176"></a>

</div>

[Historia](#narrativa-visual) · [Personaje](#ficha-del-protagonista) · [Escenarios](#escenarios-del-campus) · [Interfaz](#jugabilidad-e-interfaz) · [Controles](#controles-y-mecanicas) · [Desarrollo](#arquitectura-y-metricas) · [Jugar](#jugar) · [Créditos](#portal-y-creditos)

---

<a name="narrativa-visual"></a>

## 01 / Narrativa

<img src="assets/readme/seccion-01.svg" alt="El camino a la defensa" width="100%">

El protagonista llega al campus y descubre que quedan pocos minutos para su defensa de Game Development. Lo que parecía un día tranquilo se convierte en una carrera por los pasillos de la universidad.

<table>
<tr><th align="left" width="50%">ACTO I / CONTRA EL RELOJ</th><th align="left" width="50%">ACTO II / CAOS EN EL CAMPUS</th></tr>
<tr><td valign="top">El tiempo apremia. El Yeti comienza a correr y encuentra libros y mochilas que interrumpen su recorrido.</td><td valign="top">La velocidad aumenta. Saltar a tiempo y agacharse bajo los carteles se vuelve esencial para continuar.</td></tr>
</table>

> **La misión:** conservar tus vidas mientras sumas puntos y avanzas hacia la defensa.


[Volver al menú](#explora-el-campus) · [Ir al inicio](#inicio) · [Siguiente: Protagonista](#ficha-del-protagonista)

---

<a name="ficha-del-protagonista"></a>

## 02 / Protagonista

<img src="assets/readme/seccion-02.svg" alt="El Yeti estudiante" width="100%">

<img src="assets/images/personaje-yeti.png" alt="Modelo 3D del Yeti con chaqueta universitaria guinda y gris." width="480">

El pelaje blanco, la chaqueta guinda y gris y las proporciones de estilo cartoon le dan al protagonista una identidad reconocible dentro del campus.

| Componente | Diseño y función |
| :--- | :--- |
| **Personaje** | Un Yeti estudiante que debe llegar a su defensa |
| **Estética** | Modelo 3D de estilo cartoon |
| **Colores** | Pelaje blanco y chaqueta guinda y gris |
| **Correr** | Mantiene el desplazamiento automático |
| **Saltar** | Permite superar obstáculos bajos |
| **Agacharse** | Reduce el área de colisión para pasar bajo carteles |
| **Derrota** | Muestra la caída al perder todas las vidas |


[Anterior: Narrativa](#narrativa-visual) · [Volver al menú](#explora-el-campus) · [Ir al inicio](#inicio) · [Siguiente: Escenarios](#escenarios-del-campus)

---

<a name="escenarios-del-campus"></a>

## 03 / Escenarios

<img src="assets/readme/seccion-03.svg" alt="Los pasillos del campus" width="100%">

<img src="assets/images/escenario-universidad.png" alt="Partida en los pasillos universitarios con el personaje, obstáculos e indicadores." width="100%">

Los pasillos, las aulas y la señalética universitaria forman parte de la ambientación. Los objetos cotidianos del campus se convierten en obstáculos que exigen reaccionar a tiempo.

| Elemento | Papel en el recorrido |
| :--- | :--- |
| **Pasillos y aulas** | Dan contexto al escenario universitario |
| **Libros y mochilas** | Obstáculos que se superan saltando |
| **Carteles** | Obstáculos elevados que requieren agacharse |
| **Desplazamiento del fondo** | Acompaña la sensación de carrera |


[Anterior: Protagonista](#ficha-del-protagonista) · [Volver al menú](#explora-el-campus) · [Ir al inicio](#inicio) · [Siguiente: Interfaz](#jugabilidad-e-interfaz)

---

<a name="jugabilidad-e-interfaz"></a>

## 04 / Interfaz

<img src="assets/readme/seccion-04.svg" alt="Del menú a la partida" width="100%">

<table>
<tr><th width="50%">PORTADA DEL JUEGO</th><th width="50%">MENÚ INICIAL</th></tr>
<tr><td valign="top"><img src="assets/images/portada-juego.png" alt="Portada del videojuego." width="100%"></td><td valign="top"><img src="assets/images/menu-inicial.png" alt="Menú inicial con acceso a jugar y sonido." width="100%"></td></tr>
<tr><td>Presenta al protagonista y la temática universitaria.</td><td>Permite comenzar una partida y controlar el sonido.</td></tr>
</table>

| Pantalla o indicador | Información para el jugador |
| :--- | :--- |
| **Menú inicial** | Acceso a la partida y al sonido |
| **Vidas** | Intentos disponibles antes de terminar la partida |
| **Puntaje y tiempo** | Progreso durante el recorrido |
| **Victoria o derrota** | Resultado de la partida y opción de volver a jugar |


[Anterior: Escenarios](#escenarios-del-campus) · [Volver al menú](#explora-el-campus) · [Ir al inicio](#inicio) · [Siguiente: Controles](#controles-y-mecanicas)

---

<a name="controles-y-mecanicas"></a>

## 05 / Controles

<img src="assets/readme/seccion-05.svg" alt="Dos teclas y buenos reflejos" width="100%">

El personaje corre automáticamente. Tú decides cuándo saltar y cuándo agacharte.

| Entrada | Acción | Uso |
| :---: | :--- | :--- |
| <kbd>↑</kbd> | **Saltar** | Superar libros y mochilas |
| <kbd>↓</kbd> | **Agacharse** | Pasar bajo carteles suspendidos |
| **Clic** | **Interactuar** | Botones de inicio, sonido y nuevo intento |

**Haz clic dentro del juego antes de utilizar las flechas.**

### Reglas del recorrido

- Los impactos con obstáculos restan vidas.
- El puntaje aumenta mientras sobrevives.
- Los obstáculos aparecen de forma aleatoria.
- La dificultad aumenta durante el recorrido.
- Al finalizar, puedes iniciar una nueva partida.


[Anterior: Interfaz](#jugabilidad-e-interfaz) · [Volver al menú](#explora-el-campus) · [Ir al inicio](#inicio) · [Siguiente: Desarrollo](#arquitectura-y-metricas)

---

<a name="arquitectura-y-metricas"></a>

## 06 / Desarrollo

<img src="assets/readme/seccion-06.svg" alt="Mecánicas y tecnología" width="100%">

| Tecnología | Uso dentro del proyecto |
| :--- | :--- |
| **Unity** | Escenas, físicas, interfaz y compilación del videojuego |
| **C#** | Movimiento, obstáculos, vidas, puntaje y sonido |
| **Mixamo** | Animaciones del personaje |
| **HTML y CSS** | Presentación y diseño adaptable del portal |
| **JavaScript** | Navegación e interacciones del portal |
| **GitHub Pages** | Publicación del portal web |
| **itch.io** | Acceso a la versión jugable en el navegador |

<details>
<summary><strong>Ver la organización funcional del videojuego</strong></summary>

| Área | Responsabilidad |
| :--- | :--- |
| **Jugador** | Ejecutar salto y agachado y coordinar animaciones |
| **Obstáculos** | Generar elementos y retirar los que quedan atrás |
| **Partida** | Controlar el progreso, el puntaje y el resultado |
| **Vidas** | Registrar impactos y determinar la derrota |
| **Interfaz** | Mostrar información y gestionar los botones |
| **Audio** | Reproducir música y efectos de acciones y resultados |

</details>

<details>
<summary><strong>Ver las carpetas del portal</strong></summary>

| Ruta | Contenido |
| :--- | :--- |
| `index.html` | Página principal del portal |
| `style.css` | Estilos y adaptación a diferentes pantallas |
| `script.js` | Interacciones del portal |
| `assets/images/` | Capturas, portada y personaje |
| `assets/readme/` | Cabecera, botones y navegación de esta presentación |
| `README.md` | Documentación del proyecto |

</details>


[Anterior: Controles](#controles-y-mecanicas) · [Volver al menú](#explora-el-campus) · [Ir al inicio](#inicio) · [Siguiente: Jugar](#jugar)

---

<a name="jugar"></a>

## 07 / Jugar

<img src="assets/readme/seccion-07.svg" alt="Comienza tu carrera" width="100%">

<div align="center">

<a href="https://katfipol.itch.io/yeti-enes-que-correr"><img src="assets/readme/boton-jugar.svg" alt="Jugar ahora en itch.io" width="280"></a>

</div>

1. Abre el [juego en itch.io](https://katfipol.itch.io/yeti-enes-que-correr).
2. Pulsa **Run game** y espera a que termine de cargar.
3. Selecciona **Jugar** en el menú inicial.
4. Haz clic dentro de la partida para activar el teclado.
5. Utiliza <kbd>↑</kbd> para saltar y <kbd>↓</kbd> para agacharte.

<details>
<summary><strong>Requisitos y ayuda rápida</strong></summary>

- Utiliza una computadora con teclado y un navegador compatible con WebGL.
- Necesitas conexión a internet para cargar la partida.
- Puedes ampliar la vista con el botón de pantalla completa del reproductor.
- Si las flechas no responden, haz clic dentro del juego.
- Si no escuchas audio, revisa el botón de sonido del menú y el volumen de la pestaña.
- El portal se adapta a pantallas pequeñas; esta versión del juego utiliza teclado.

</details>


[Anterior: Desarrollo](#arquitectura-y-metricas) · [Volver al menú](#explora-el-campus) · [Ir al inicio](#inicio) · [Siguiente: Portal y créditos](#portal-y-creditos)

---

<a name="portal-y-creditos"></a>

## 08 / Portal y créditos

<img src="assets/readme/seccion-08.svg" alt="Un proyecto con identidad" width="100%">

El portal reúne la presentación del juego, la historia, el protagonista, las mecánicas y el acceso a la partida. Mantiene la identidad guinda, crema y dorada del proyecto.

<div align="center">

<a href="https://martinleano72-afk.github.io/yeti-portal/"><img src="assets/readme/boton-portal.svg" alt="Visitar el portal del proyecto" width="280"></a>

</div>

### Créditos

| Participación | Integrantes |
| :--- | :--- |
| **Videojuego** | Melani Quintela Aguilar y José Martin Leaño Mercado |
| **Portal web** | [Martín Leaño](https://github.com/martinleano72-afk) |
| **Asignatura** | Game Development |

Proyecto académico desarrollado en Unity y presentado mediante un portal web.


[Anterior: Jugar](#jugar) · [Volver al menú](#explora-el-campus) · [Ir al inicio](#inicio)

---
<div align="center">

<strong>EL CAMPUS TE ESPERA. LA DEFENSA TAMBIÉN.</strong>

<p><a href="https://katfipol.itch.io/yeti-enes-que-correr">Jugar ahora</a> · <a href="https://martinleano72-afk.github.io/yeti-portal/">Explorar el portal</a> · <a href="#inicio">Volver al inicio</a></p>

</div>
