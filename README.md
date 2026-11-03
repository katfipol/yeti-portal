<div align="center">

<img src="assets/readme/cabecera.svg" alt="¡Yeti-enes que correr! Una defensa está por empezar. El campus tiene otros planes." width="100%">

<br>

![Unity](https://img.shields.io/badge/UNITY_3D-7A1F3D?style=for-the-badge&logo=unity&logoColor=F5E9D0)
![C#](https://img.shields.io/badge/C%23-E0A526?style=for-the-badge&logoColor=white&labelColor=E0A526)
![Cartoon 3D](https://img.shields.io/badge/ESTILO-CARTOON_3D-7A1F3D?style=for-the-badge&labelColor=4A4A4A)
![WebGL](https://img.shields.io/badge/VERSI%C3%93N_WEB-WEBGL-E0A526?style=for-the-badge&labelColor=4A4A4A)

# Corre Yeti Corre

**ENDLESS RUNNER UNIVERSITARIO**

*Una defensa está por empezar. Recorre el campus, supera los obstáculos y llega a tiempo.*

<p><code>VIDAS 3/3</code> &nbsp;·&nbsp; <code>PUNTAJE 0000</code> &nbsp;·&nbsp; <code>TIEMPO 00:30</code> &nbsp;·&nbsp; <code>NIVEL CAMPUS</code></p>

<a href="https://katfipol.github.io/yeti-portal/juego/"><img src="assets/readme/boton-jugar.svg" alt="Jugar ahora" width="260"></a>
&nbsp;
<a href="https://katfipol.github.io/yeti-portal/"><img src="assets/readme/boton-portal.svg" alt="Explorar el portal web" width="260"></a>

<br>

[![Historia](https://img.shields.io/badge/HISTORIA-7A1F3D?style=flat-square)](#historia)
[![Protagonista](https://img.shields.io/badge/PROTAGONISTA-7A1F3D?style=flat-square)](#protagonista)
[![Escenarios](https://img.shields.io/badge/ESCENARIOS-7A1F3D?style=flat-square)](#escenarios)
[![Interfaz](https://img.shields.io/badge/INTERFAZ-7A1F3D?style=flat-square)](#interfaz)
[![Controles](https://img.shields.io/badge/CONTROLES-E0A526?style=flat-square)](#controles)
[![Desarrollo](https://img.shields.io/badge/DESARROLLO-E0A526?style=flat-square)](#desarrollo)
[![Cómo jugar](https://img.shields.io/badge/C%C3%93MO_JUGAR-E0A526?style=flat-square)](#cómo-jugar)
[![Créditos](https://img.shields.io/badge/CR%C3%89DITOS-E0A526?style=flat-square)](#créditos)

</div>

<img src="assets/readme/divisor.svg" alt="" width="100%">

## Historia

El protagonista llega al campus y descubre que quedan pocos minutos para su defensa de Game Development. Lo que parecía un día tranquilo se convierte en una carrera por los pasillos de la universidad.

<table>
<tr>
<th align="left" width="50%">ACTO I &nbsp;/&nbsp; CONTRA EL RELOJ</th>
<th align="left" width="50%">ACTO II &nbsp;/&nbsp; CAOS EN EL CAMPUS</th>
</tr>
<tr>
<td valign="top">El Yeti comienza a correr y encuentra libros y mochilas que interrumpen su recorrido.</td>
<td valign="top">La velocidad aumenta. Saltar a tiempo y agacharse bajo los carteles se vuelve esencial para continuar.</td>
</tr>
</table>

> [!IMPORTANT]
> **La misión:** conservar tus vidas mientras sumas puntos y avanzas hacia la defensa.

<img src="assets/readme/divisor.svg" alt="" width="100%">

## Protagonista

<div align="center">
<img src="assets/images/personaje-yeti.png" alt="Modelo 3D del Yeti con chaqueta universitaria guinda y gris." width="420">
</div>

<br>

Un Yeti estudiante de pelaje blanco y chaqueta guinda y gris. Sus proporciones cartoon le dan una identidad reconocible dentro del campus.

| Acción | Descripción |
| :--- | :--- |
| **Correr** | Desplazamiento automático durante todo el recorrido |
| **Saltar** | Permite superar obstáculos bajos |
| **Agacharse** | Reduce el área de colisión para pasar bajo carteles |
| **Derrota** | Se muestra la caída al perder todas las vidas |

<img src="assets/readme/divisor.svg" alt="" width="100%">

## Escenarios

<img src="assets/images/escenario-universidad.png" alt="Partida en los pasillos universitarios con el personaje, obstáculos e indicadores." width="100%">

<br>

Los pasillos, las aulas y la señalética universitaria forman parte de la ambientación. Los objetos cotidianos del campus se convierten en obstáculos que exigen reaccionar a tiempo.

| Elemento | Papel en el recorrido |
| :--- | :--- |
| **Libros y mochilas** | Obstáculos que se superan saltando |
| **Carteles** | Obstáculos elevados que requieren agacharse |
| **Fondo en movimiento** | Refuerza la sensación de carrera |

<img src="assets/readme/divisor.svg" alt="" width="100%">

## Interfaz

<table>
<tr>
<th width="50%">PORTADA DEL JUEGO</th>
<th width="50%">MENÚ INICIAL</th>
</tr>
<tr>
<td><img src="assets/images/portada-juego.png" alt="Portada del videojuego." width="100%"></td>
<td><img src="assets/images/menu-inicial.png" alt="Menú inicial con acceso a jugar y sonido." width="100%"></td>
</tr>
<tr>
<td>Presenta al protagonista y la temática universitaria.</td>
<td>Permite comenzar una partida y controlar el sonido.</td>
</tr>
</table>

Durante la partida se muestran las **vidas**, el **puntaje** y el **tiempo**. Al terminar aparece el resultado (victoria o derrota) con la opción de volver a jugar.

<img src="assets/readme/divisor.svg" alt="" width="100%">

## Controles

El personaje corre automáticamente. Tú decides cuándo saltar y cuándo agacharte.

| Tecla | Acción | Uso |
| :---: | :--- | :--- |
| <kbd>↑</kbd> | **Saltar** | Superar libros y mochilas |
| <kbd>↓</kbd> | **Agacharse** | Pasar bajo carteles suspendidos |
| **Clic** | **Interactuar** | Botones de inicio, sonido y nuevo intento |

> [!TIP]
> Haz clic dentro del juego antes de usar las flechas para activar el teclado.

**Reglas del recorrido**

- Los impactos con obstáculos restan vidas.
- El puntaje aumenta mientras sobrevives.
- Los obstáculos aparecen de forma aleatoria.
- La dificultad aumenta durante el recorrido.

<img src="assets/readme/divisor.svg" alt="" width="100%">

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
| `assets/readme/` | Cabecera, botones y divisores de este README |
| `juego/index.html` | Página de ejecución del juego |
| `juego/Build/` | Compilación web de Unity |
| `juego/TemplateData/` | Recursos del reproductor |

</details>

<img src="assets/readme/divisor.svg" alt="" width="100%">

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

<img src="assets/readme/divisor.svg" alt="" width="100%">

## Créditos

| Participación | Integrantes |
| :--- | :--- |
| **Videojuego** | Melani Quintela Aguilar y José Martin Leaño Mercado |
| **Portal web** | [![GitHub](https://img.shields.io/badge/MART%C3%8DN_LE%C3%81O-7A1F3D?style=flat-square&logo=github&logoColor=F5E9D0)](https://github.com/martinleano72-afk) |
| **Asignatura** | Game Development |

Proyecto académico desarrollado en Unity y presentado mediante un portal web.

<br>

<div align="center">

**EL CAMPUS TE ESPERA. LA DEFENSA TAMBIÉN.**

[![Jugar ahora](https://img.shields.io/badge/JUGAR_AHORA-7A1F3D?style=for-the-badge&logo=unity&logoColor=F5E9D0)](https://katfipol.github.io/yeti-portal/juego/)
[![Visitar el portal](https://img.shields.io/badge/VISITAR_EL_PORTAL-E0A526?style=for-the-badge&logo=githubpages&logoColor=white)](https://katfipol.github.io/yeti-portal/)
[![Volver arriba](https://img.shields.io/badge/VOLVER_ARRIBA-4A4A4A?style=for-the-badge)](#corre-yeti-corre)

</div>
