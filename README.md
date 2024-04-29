# SOFTWARE TECH-NEXT

<center><img src="/public/imgs/Logo.png" alt="centered image"></center>

## Objetivo
Desarrollar un sistema dinámico y adaptativo que ofrezca a los estudiantes de las diferentes universidades de último semestre una variedad de ideas personalizadas para proyectos de grado, basadas en sus intereses académicos, tendencias del mercado y necesidades sociales, facilitando así la selección de un tema viable y relevante para su proyecto final.

## Características Principales

### Funcionalidad Usuario

* Realizar busqueda del proyecto de grado.
* Selección de proyectos por medio de carreras.
* Selecionar y visualizar proyecto.
* Reaccionar al proyecto.
* Solicitar el proyecto.

### Funcionalidad Administrador
 
* Iniciar sesión
* Administrar los proyectos
* Editar proyectos.
* Eliminar proyectos.
* Importar proyectos.
* Actualizar proyectos.

## Diseño del Sistema
### Mockups: Dispositivo Movil

<p align="center"><a target="_blank"><img src="/public/img/Carrera1.png"></a></p>

---
> El sistema presentará una serie de botones diferenciados por carreras universitarias.
> 
> El usuario al ingresar al sistema podrá seleccionar una carrera en específico, esto permitirá al sistema enfocar la búsqueda y ofrecer resultados más relevantes y precisos en cuanto al área de interés del usuario brindando una experiencia más personalizada y eficiente.
---
<p align="center"><a target="_blank"><img src="/public/img/Lista1.png"></a></p>

---
>El sistema tendrá una función de búsqueda que permitirá al usuario encontrar fácilmente los proyectos específicos que necesita. Además, ofrecerá un modo oscuro para una mejor experiencia visual, especialmente en condiciones de poca luz o para usuarios que prefieren una interfaz más tenue.
>
>A medida que el usuario realiza la búsqueda, el sistema mostrará la información del contenido utilizando un formato de lista de manera ordenada y concisa, facilitando la búsqueda y comparación de proyectos, permitiendo al usuario navegar de forma rápida y eficiente ajustandose a sus necesidades.

---

<p align="center"><a target="_blank"><img src="/public/img/Descrip_Proyecto1.png"></a></p>
<!-- <p align="center"><a target="_blank""><img class="centered-image " src="/public/img/Descrip_Proyecto1.png"></a>
    <span> </span>
<a target="_blank"><img class="centered-image" src="/public/img/Descrip_Proyecto2.png"></a>
</p> -->

---

> El usuario podrá acceder a una descripción detallada del proyecto incluyendo el autor, carrera, año de realización, entre otros. No obstante, el usuario tendrá la posibilidad de interactuar con el contenido mediante tres reacciones específicas, lo cual ayudará a otros usuarios a tener una mejor idea del contenido.

---

## Modelo UML

Es una herramienta fundamental para el desarrollo de software, ya que permite visualizar y comprender de manera gráfica los diferentes aspectos del sistema, facilitando la comunicación entre los miembros del equipo de desarrollo y evitar errores en las primeras etapas del proyecto.

* Diagrama de Clases 
  * [Diagr. Administrador](https://i.ibb.co/4ZWJWKY/D-Clases-Administrador.jpg "Link")
  * [Diagr. Estudiante](https://i.ibb.co/QdzRGLS/D-Clases-Estudiante.jpg "Link")
  
* Diagrama de Casos de Uso
  * [Diagr. Administrador](https://i.ibb.co/3C0hznL/D-Caso-Uso-Admnistrador.jpg "Link")
  * [Diagr. Usuario](https://i.ibb.co/x77TZFH/D-Caso-Uso-Usuario.jpg "Link")
 
* Diagrama de Secuencia
  * [Diagr. Administrador](https://i.ibb.co/Cz5D0Pm/D-Secuencia-Administrador.jpg "Link")
  * [Diagr. Usuario](https://i.ibb.co/T0n1txR/D-Secuencia-Usuario.jpg "Link")

* Diagrama de Actividad
  * [Diagr. Administrador](https://i.ibb.co/8zs90Wp/D-Actividades-Administrador.jpg "Link")
  * [Diagr. Estudiante](https://i.ibb.co/vzXLNGv/D-Actividades-Estudiante.jpg "Link")
  
* Diagrama de Estado
  * [Diagr. Estado](https://i.ibb.co/HtTJVmR/D-Estado.jpg "Link")
  
* Diagrama de Despliegue
  * [Diagr. Despliegue](https://i.ibb.co/g30Sv78/D-Despliegue.jpg "Link")

## Tecnologías utilizadas
Se usarán las siguientes tecnologías para el desarrollo del software.

* Lenguajes de programación
  * JavaScript (Frontend)
  * TypeScript
  * PHP

* Frameworks
  * Laravel (Backend)
  * React (Frontend)
  * Tailwind CSS (Frontend)

* Base de Datos
  * MySql
   
* Herramientas adicionales
  * Git
  * GitHub
  * Visual Code (IDE)
  * Node.js (Entorno de ejecución)
  * Mockitt (Herramienta de creación de prototipos)
  * Xampp (Paquete de software gratuito)
  * phpMyAdmin (Gestor de base de datos)
  * COMPOSER (gestor de dependencias)
  * Asana (Herramienta de gestión de proyectos)
  * Whatsapp (Herramienta de comunicación)

## Instalación
Se seguirán una serie de pasos para realizar la intalación de las tecnologias para la creación del proyecto.

**NOTA.-**

> Tomar en cuenta la instalación de las ultimas versiones de PHP, NODE.JS y COMPOSER.

### Servidor 1
 ---

1. Abrir la terminal Git Bash e ir a la ruta para abrir el proyecto.
```
$ cd c:
```
```
$ cd xampp/htdocs/
```

1. Clonar el repositorio desde GitHub | `<Code>` :[https://github.com/NorvicSoftware/tech-next](https://github.com/NorvicSoftware/tech-next "GitHub/Code/HTTPS")

``` 
$ git clone https://github.com/NorvicSoftware/tech-next.git
```  

3. Ingresar al proyecto en Git.
```
$ cd tech-next/
```

4. Actualizar los paquetes o dependencias.
```
$ composer update
```
**NOTA.-**
> Verificar en el proyecto tech-next la carpeta | vendor.

5. Para ingresar al proyecto **tech-next** desde Visual Code ingresar el siguiente comando.
```
$ code .
```

6. Crear un archivo con el nombre **.env** y copiar las siguientes variables.

   `<Link>` :[https://styde.net/variables-de-entorno-en-laravel/](https://styde.net/variables-de-entorno-en-laravel/ "Link")

7. Crear la Base de Datos en phpMyAdmin desde xampp con el nombre **tech-next-db**, modificar en Visual Code la carpeta **.env** y guardar los cambios.
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tech-next-db
DB_USERNAME=root
DB_PASSWORD=
```
8. En la terminal Git ingresar el siguiente comando.
```
$ php artisan migrate:fresh
```
**NOTA.-**
>Esta acción permite actualizar la base de datos phpMyAdmin en el localhost.

9. En la terminal Git introducir el siguiente comando.
```
$ php artisan serve
```
Seguidamente ir a un navegador y copiar | `<Enlace>` :[http://127.0.0.1:8000/](http://127.0.0.1:8000/ "Servidor Laravel").

**IMPORTANTE.-**

Mostrará como opción | GENERAR CLAVE DE APLICACIÓN, para ello, ingresar el siguiente comando.

```
 $ php artisan key:generate
```

10. Por último volver a levantar el servidor ingresando el siguiente comando.
```
$ php artisan serve
```

### Servidor 2

---
1. Abrir el proyecto **tech-next** desde la terminal Git.
```
$ cd c:
```
```
$ cd xampp/htdocs/tech-next 
```
1. Seguidamente ir: `<Link>` :[https://laravel.com/](https://laravel.com/ "Laravel")
2. Ingresar a la opción | **DOCUMENTACIÓN** y después a la opción | **Starter Kits** que se encuentra en el lado izquierdo e ingresar el siguiente comando.
```
$ composer require laravel/breeze --dev
```
Esta acción permite instalar el paquete **Laravel Brezee**

3. Después ejecutar el siguiente comando.
```
$ php artisan breeze:install
```
4. Seguidamente se debe escoger la opción | `<React with Inertia ................................. react>` 

```
 ❯ react
```
5. Seguidamente la opción |`<Dark>`
```
 ❯ Dark
```
6. Seguidamente la opción |`<1>`
```
 ❯ 1
```
7. Ya estando en los últimos pasos ejecutar el siguiente comando.
```
$ npm install
```

8. Y por último levantar el servidor de React ingresando el siguiente comando.
```
$ npm run dev
```


## Colaboradores del Proyecto

### Analistas
* Esteysi Arleth Guzman Sejas
* Lorena Alcira Luque Monje
* Sharol Melany Rojas Ramos
* Sara Michelle Zurita Herbas
* Josias Jahaziel Arce Morales
  
### Desarrolladores 
* Cristian Reynaldo Barrios Flores
* Bryan Cazorla Viscarra
* Erick Angel Tibubay Quecaña
* Jhojan Bruno Coro Torrico
* Alexander Felix Flores Perez
* Adrian Jesus Gomez Catacora
* Bernardo Uriel Gutierrez Coca
* Marisol Herrera Mamani
* Maide Melania Mamani Arellano
* Americo Julio Alvarez Tellez
* Maicol Willian Arratia Velasco  
### Pruebas QUA
* Carlos Manuel Fuentes Arevalo
* Alan Justin Colque Villanueva
* Kevin Vicente Poma
* Kevin Castellon Mamani
* Deanira Lim Chambi


