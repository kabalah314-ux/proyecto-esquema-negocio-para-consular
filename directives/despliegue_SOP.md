# SOP de Despliegue en GitHub y Hosting (Vercel)

## Objetivo
Subir el proyecto actual a un repositorio de GitHub y configurar el despliegue automático en Vercel para que la aplicación esté disponible públicamente.

## Entradas
- Repositorio local de la aplicación (Vite/React).
- Cuenta de GitHub activa.
- Cuenta de Vercel (conectada a GitHub).

## Lógica y Pasos

### 1. Preparación del Repositorio Local
- Asegurar que no se suban archivos pesados o sensibles (logs, node_modules, .env).
- Crear archivo `.gitignore` con los estándares de Vite/Node.

### 2. Inicialización de Git
- Ejecutar `git init`.
- Añadir todos los archivos con `git add .`.
- Realizar el primer commit `git commit -m "Initial commit"`.

### 3. Sincronización con GitHub
- Crear un nuevo repositorio en GitHub (público o privado).
- Vincular el repositorio local con el remoto: `git remote add origin <URL>`.
- Subir los cambios: `git push -u origin main`.

### 4. Despliegue en Vercel
- Entrar en [vercel.com](https://vercel.com).
- Importar el repositorio desde GitHub.
- Configurar el Framework Preset como "Vite".
- Desplegar.

## Restricciones y Advertencias
- **IMPORTANTE**: Nunca subir el archivo `.env` o la carpeta `node_modules`.
- **WARNING**: Si el proyecto tiene scripts de backend (Python), asegurar que Vercel esté configurado para manejar Serverless Functions o usar un host alternativo para el backend (ej. Render/Railway).
- **NOTA**: Para este proyecto específico (React/Vite), Vercel lo detectará automáticamente.

## Trampas Conocidas
- Error de "dist" folder: Vite construye en la carpeta `dist`, asegurar que Vercel apunte a ella (predeterminado en Vite preset).
- Case sensitivity: Windows es insensible a mayúsculas/minúsculas en nombres de archivos, pero GitHub y Vercel (Linux) NO lo son. Mantener consistencia.
