/**
1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 'fs') y un módulo de NPM 
   (como 'sillyname') en cuanto a su origen e instalación?
   
   R: Un módulo nativo como 'fs' viene incluido con Node.js, no requiere instalación,
   solo se importa directamente. Un módulo NPM como 'sillyname' es creado por 
   desarrolladores externos y debe instalarse con 'npm i sillyname', descargándose 
   en la carpeta node_modules.

2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS)
   y 'import' (ES Modules)? Considera el momento en que se cargan los módulos.
   
   R: 'require' (CommonJS) carga el módulo en tiempo de ejecución, es decir, 
   cuando el programa llega a esa línea. 'import' (ES Modules) carga los módulos 
   antes de ejecutar cualquier código, en tiempo de análisis, siendo más eficiente.

3. Sobre el archivo 'package.json':
   a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' 
      al subir a un repositorio?
      
      R: Es vital compartir package.json porque contiene la lista de dependencias 
      del proyecto. node_modules NO se comparte porque puede pesar cientos de MB 
      y es innecesario, ya que cualquiera puede recrearla con 'npm install'.
   
   b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package.json?
   
      R: NPM lee las dependencias listadas y las descarga automáticamente, 
      recreando la carpeta node_modules completa.
*/