# javascriptMedium

# Course Arrays Manipulations

## Estructura de Datos Inmutable e Mutable

- [Data](https://www.youtube.com/watch?v=Wo0qiGPSV-s)

## Library Javascript

> Parallax Js -[Atropos Js](https://atroposjs.com/)

## Resource / Library npm

> Date/fns

- [date-fns](https://date-fns.org/)

## Methods / Prototype / Array

> every: method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

- [Method every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
  > find: method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
- [Method find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
  > findIndex: method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
- [Method findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  > Include: method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- [Method Include](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
  > Join: method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
- [Method join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
  > Method Concat: method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
- [Method concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
  > Method Flat: method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- [Method Flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
  > Method Mutable Functions
  > push: method adds one or more elements to the end of an array and returns the new length of the array.
- [Method Push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  > splice: method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice.
- [Method splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  > Method Sort: method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
- [Method Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

![](https://pbs.twimg.com/media/FDW8oHDVkAA-Mkc?format=jpg&name=900x900)

## Intersection Observer API

> La API Observador de Intersección provee una vía asíncrona para observar cambios en la intersección de un elemento con un elemento ancestro o con el viewport del documento de nivel superior.

- [Intersection Observer](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API)
- ![](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2021-abb41ba4-4288-4ed8-8171-91dada378c5b.jpg)
  > Visibility Change
- [visibility MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event)
- El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.
- ![](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2022-887803ad-02a6-46d5-94fa-2a0384b9287f.jpg)

## Pro Javvascript

> Guide Pro Javascript

- [Guide Course Pro Js](https://static.platzi.com/media/public/uploads/slides-curso-profesional-de-javascript_3dde967c-8534-4041-891d-317d033e2724.pdf)

> Curso Profesional en Platzi

- [Platzi](https://platzi.com/home)
  > Github
- [gitHub-Sparragus](https://github.com/Sparragus/javascript-profesional)

> Media Elements

- [mediaElements](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement)
  > Method call
- llama a una función con un valor dado this y con argumentos provistos individualmente.
- [Method call](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
  > Method apply
- invoca una determinada función asignando explícitamente el objeto this y un array o similar (array like object) como parámetros (argumentos) para dicha función.
- [Method apply](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  > Method bind
- crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.
- El valor de this es ignorado cuando la función es llamada con el operador new.
- [Method bind](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

> Proxy

- El objeto Proxy se usa para definir un comportamiento personalizado para operaciones fundamentales (por ejemplo, para observar propiedades, cuando se asignan, enumeración, invocación de funciones, etc).
- [proxy](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  ![](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2017-fb04470d-a18a-4a0a-bf2b-c94464b53410.jpg)

  > Generators / Generador

- El objeto Generator es retornado por una función generator y es conformado tanto el protocolo iterable como el protocolo iterador.
  -Los generadores regresan una función.
  -Empiezan suspendidos y se tiene que llamar next para que ejecuten.
  -Regresan un value y un boolean done que define si ya terminaron.
  -yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.
- [generators](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator)
  ![](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2018-15804034-3196-4382-a0b0-c8f1ec6e1209.jpg)

> Notas de curso

- [notas](https://github.com/JasanHdz/javascript-professional/tree/master/notes)

> Service Workers

- Sirven para hacer que nuestras aplicaciones funcionen Offline.
- Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.
- Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.
- Un service worker es una secuencia de comandos que corren en segundo plano en el navegador.
- Ejemplo: Push notification, guardar información en cache, deep links, etc.
- [service_Workers_API](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API)

## Typescript

> Typescript

- [typescript](https://www.typescriptlang.org/)
  > Github Typescript
- [gitHub Typescript](https://github.com/topics/typescript)

- TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.
- Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.
  > Parcel
- [parcel Js](https://parceljs.org/)
- Before we get started, you'll need to install Node and Yarn or npm, and create a directory for your project. Then, install Parcel into your app using Yarn:

#### Inline code

`$ npm install marked`

> Course Typescript
> Course with Platzi
> Twuitter:

- [luixaviles](https://twitter.com/luixaviles)

- [Guide Typescript](https://static.platzi.com/media/public/uploads/platzi_slides_fundamentos-typescript_61b51d92-9d96-4ace-ab85-9cb23cbef600.pdf)
- `$ npm install -g typescript`
- `npm install typescript ts-loader @types/express -D`
- `$ tsc --version `
- `$ tsc -v`
  > Usando el compilador tsc
- `$ tsc hello.ts` > `ls`
- hello.js hello.ts -`$ node hello.js`
  > La opción --watch
- `$ tsc --watch hello.ts`
  > Archivo de Configuración / tsconfig.json
- Especifica la raíz de un proyecto
- Permite configurar opciones para el compilador
- `$ tsc --init`
  > tsConfig.json >>>
  > Busca la configuración
- `$ tsc`
  > Especifica un directorio que contiene la configuración
- `$ tsc --project platzi`
  > Omite la configuración
- `tsc file.ts`

## npm (Node Package Manage) / nvm (Node Version Manager)

- Node Versión Manager (NVM) es una herramienta que nos permite administrar múltiples versiones de Node.js. Gracias a NVM podemos instalar las versiones más recientes de node.js incluido npm o instalar una versión especifica y poder cambiar entre versiones fácilmente desde la línea de comandos.
- NVM nos permite instalar y administrar correctamente las versiones de Node.js que necesitemos para nuestros proyectos.

  > nvm Github

- [node/npm/nvm](https://github.com/nvm-sh/nvm)
  > Óscar Barajas / nvm install in Ubuntu
- [nvm_ubuntu](https://gndx.dev/blog/instalar-nvm-en-ubuntu-20.04)
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
  > npm
  > ![](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2031-dd8defe4-29bf-4bb9-8260-07fb80d965bc-81e296f1-6370-44e0-8e6d-fe1946826aba.jpg)

## CDN

- [cdn](https://cdnjs.com/)

## API

> Api Project
> API Article

- [Article_API](https://medium.com/williambastidasblog/c%C3%B3mo-llamar-a-una-api-rest-desde-javascript-4c5a42fb331)
- [rapidAPI](https://rapidapi.com/hub?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)
- [axiosAPI](https://axios-http.com/docs/intro)
- [Public_API](https://github.com/public-apis/public-apis)
- [pexels API](https://www.pexels.com/es-es/api/documentation/)
  > API MDN
- [Header_api](https://developer.mozilla.org/en-US/docs/Web/API/Headers)
- [Request_api](https://developer.mozilla.org/en-US/docs/Web/API/Request)
- [Response_api](https://developer.mozilla.org/en-US/docs/Web/API/Response)
  > Fetch
  > ![](https://static.platzi.com/media/user_upload/JS%20%E2%80%93%2019-451f0b1e-207a-473e-81c3-df604fe790f1.jpg)
- [Blob Js](https://developer.mozilla.org/es/docs/Web/API/Blob)
- Un objeto Blob representa un objeto tipo fichero de datos planos inmutables. Los Blobs representan datos que no necesariamente se encuentran en un formato nativo de JavaScript. La interfaz File se encuentra basada en un Blob, heredando y expendiendo la funcionalidad de un Blob para soportar archivos en el sistema del usuario.
- Una forma fácil de construir un Blob es invocando el constructor Blob(). Otra manera es utilizando el método slice() para crear un blob que contiene un subconjunto de los datos de otro Blob.
- [AbortController Js](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.
- You can create a new AbortController object using the AbortController() constructor. Communicating with a DOM request is done using an AbortSignal object.
  > Disabled
- [disabled](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled)
- The HTMLSelectElement.disabled is a boolean value that reflects the disabled HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks. A disabled element is unusable and un-clickable.

## Patrones de Diseño

> Christopher Alexander
> Libro: Design Patterns
> Blog

- [codingHorror](https://blog.codinghorror.com/)
  > Patrones de Diseño:
- Son soluciones generales ya probadas dentro de un contexto que las limita a problemas frecuentes que nos encontramos en el desarrollo de software.
  > Tres Categorías:
  > Creacionales
- Creacionales. Proveen diferentes mecanismos para crear objetos.
- Abstract Factory
- Builder
- Factory Method
- Prototype
- Singleton
  > Estructurales
- Estructurales. Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.
- Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy
  > De Comportamiento.
- De Comportamiento. Gestionan algoritmos y responsabilidades entre objetos.
- Gestionan algoritmos y responsabilidades entre objetos.
- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

  > Material

- [Material](https://material.io/)
- [MyDevice](https://www.mydevice.io/#compare-devices)
- [Every_Layout](https://every-layout.dev/)
- [Notion](https://www.notion.so/product?utm_source=google&utm_campaign=2075789713&utm_medium=80211061801&utm_content=372709093351&utm_term=notion&targetid=aud-1188813422817:kwd-312974742&gclid=CjwKCAjwiY6MBhBqEiwARFSCPkJEsH-50gpZcrqF9hSMRExK8pbTe19RiBPY-T5pVpRvDy2lBp9sxhoCCksQAvD_BwE)
- [Media_Queries](https://mediaqueri.es/)
- [Behance](https://www.behance.net/)
- [Dribble](https://dribbble.com/studioMUTI)

## Tips Web

> George Moller

- [Twitter](https://twitter.com/_georgemoller)
  ![](https://pbs.twimg.com/media/FDTCgO8XoAo7hTt?format=jpg&name=medium)
  ![](https://pbs.twimg.com/media/FDSacsjXsAIymEM?format=jpg&name=medium)
  ![](https://pbs.twimg.com/media/FDR0OMmWQAAHcdW?format=jpg&name=4096x4096)
  ![](https://pbs.twimg.com/media/FDNfSNeXoAEZcmU?format=jpg&name=medium)
  ![](https://pbs.twimg.com/media/FDNfR8aXoAYbM91?format=jpg&name=medium)
  ![](https://pbs.twimg.com/media/FDNfRqlWYAk7WZk?format=jpg&name=medium)
  ![](https://pbs.twimg.com/media/FDNfRWQXEAQdN5s?format=jpg&name=medium)
  > CSS Style guide
  > ![](https://pbs.twimg.com/media/FDMpBODXMAAslek?format=jpg&name=medium)
  > Fonts
  > ![](https://twitter.com/_georgemoller/status/1455552243760091136/photo/4)

## Bases de Datos

> MongoDB

- [MongoDB](https://www.mongodb.com/es)
  > MySQL
- [MySQL](https://www.mysql.com/)
  > PostgreSQL
- [PostgreSQL](https://www.postgresql.org/)
  > Google Sheets
- [Google Shhets](https://www.google.com/sheets/about/)

> Markdown Editor>>

- [Markdown Editor](https://pandao.github.io/editor.md/en.html)

# MIT License

MIT License

Copyright (c) [2021] [Christiano0407]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
