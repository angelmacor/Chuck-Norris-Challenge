# Chuck Norris Jokes App

## Descripción

Esta aplicación web muestra chistes de Chuck Norris utilizando la API pública [chucknorris.io](https://api.chucknorris.io). Permite a los usuarios buscar chistes, guardarlos como favoritos y calificarlos con un sistema de estrellas.

## Características

- **Página de inicio**: Muestra chistes aleatorios y permite buscar chistes por palabras clave
- **Sistema de favoritos**: Guarda tus chistes preferidos para verlos más tarde
- **Calificación**: Califica tus chistes favoritos con un sistema de 1 a 5 estrellas
- **Ordenación**: Ordena tus chistes favoritos por calificación
- **Tema claro/oscuro**: Cambia entre tema claro y oscuro según tus preferencias
- **Diseño responsive**: Interfaz adaptable a diferentes dispositivos

## Tecnologías utilizadas

- **Next.js 15**: Framework de React para renderizado del lado del servidor
- **React 19**: Biblioteca para construir interfaces de usuario
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS para diseño rápido y responsivo
- **Lucide React**: Conjunto de iconos SVG para React
- **next-themes**: Soporte para temas en aplicaciones Next.js
- **Sonner**: Biblioteca para notificaciones toast

## Estructura del proyecto

```
/app                  # Páginas de la aplicación (Next.js App Router)
  /favorites          # Página de chistes favoritos
  /page.tsx           # Página principal
  /layout.tsx         # Diseño principal de la aplicación
/components           # Componentes reutilizables
  /ui                 # Componentes de interfaz de usuario
  /JokeCard.tsx       # Tarjeta para mostrar chistes
  /SidebarNavigation  # Navegación lateral
/lib                  # Utilidades y funciones
  /api.ts             # Funciones para interactuar con la API
  /localStorage.ts     # Funciones para manejar el almacenamiento local
/types                # Definiciones de tipos TypeScript
/public               # Archivos estáticos
```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd greencode
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```
   > Nota: El proyecto utiliza Turbopack para un desarrollo más rápido

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación

## Uso

- En la página principal, puedes ver un chiste aleatorio o buscar chistes por palabras clave
- Haz clic en el icono de corazón para guardar un chiste como favorito
- Navega a la página de favoritos para ver tus chistes guardados
- Califica tus chistes favoritos con el sistema de estrellas
- Utiliza el botón de ordenación para ordenar tus chistes por calificación
- Cambia entre tema claro y oscuro con el botón en la esquina inferior derecha

## API

Esta aplicación utiliza la API pública de [chucknorris.io](https://api.chucknorris.io) para obtener los chistes. Las principales funciones de la API se encuentran en `/lib/api.ts`:

- `fetchRandomJoke()`: Obtiene un chiste aleatorio
- `searchJokes(query)`: Busca chistes por palabras clave

## Almacenamiento

Los chistes favoritos y las calificaciones se almacenan en el localStorage del navegador, lo que permite que persistan entre sesiones sin necesidad de un backend.

## Requisitos del sistema

- Node.js 18.0.0 o superior
- npm, yarn o pnpm como gestor de paquetes

## Notas de implementación

- **App Router de Next.js**: Se utiliza el nuevo sistema de enrutamiento de Next.js 15 para una mejor organización del código y rendimiento.
- **Componentes de servidor y cliente**: Separación clara entre componentes que se ejecutan en el servidor y en el cliente para optimizar la carga inicial.
- **Patrón de diseño atómico**: Los componentes UI están organizados siguiendo principios de diseño atómico para mayor reusabilidad.
- **Almacenamiento local**: Se eligió localStorage para mantener la aplicación sin dependencias de backend, facilitando su despliegue y uso.
- **Diseño responsive**: Implementado con Tailwind CSS siguiendo el enfoque mobile-first.
- **Accesibilidad**: Componentes de Radix UI para garantizar una experiencia accesible para todos los usuarios.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Turbopack
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Inicia la aplicación en modo producción
- `npm run lint`: Ejecuta el linter para verificar la calidad del código
