# SOP de Actualización de Modelo de Negocio (Abril 2026)

## Objetivo
Actualizar todos los componentes de la aplicación (frontend, tablas financieras y textos legales) para reflejar el nuevo modelo de negocio: comisión del 40%, precio máximo de 60€ y estructura de costes variables.

## Entradas
- Lista de cambios detallada (60€ tope, 40% comisión, eliminación de referencias Glovo/Uber).
- Estructura actual de componentes React en `src/components/`.

## Lógica de Negocio (Nuevas Reglas)
1. **Tope de Precio**: Ningún servicio debe superar los 60€.
2. **Reparto de Ingresos**: 
   - 60% para el Masajista (36€ sobre 60€).
   - 40% para la Plataforma (24€ sobre 60€).
3. **Publicidad Variable**: Se calcula como el 10% del beneficio antes de impuestos (comisión generada).
4. **Costes Fijos**: Se eliminan costes de IA y Dominio/Hosting (cubiertos por el usuario).
5. **Comparativa**: Sustituir Glovo/Uber por plataformas de bienestar (Urban, Treatwell) o descripción propia.

## Pasos de Ejecución
1. Actualizar `Hero.tsx` con cifras clave (40%, 60€, 4.320€/mes).
2. Modificar `BusinessModel.tsx` para cambiar el ejemplo de reparto y eliminar referencias a delivery.
3. Ajustar `Services.tsx` con el nuevo catálogo de precios (<= 60€).
4. Recalcular `Financials.tsx` (Tabla de 12 meses y Resumen de Gastos).
5. Actualizar `MassagistManagement.tsx` y `WebReservations.tsx` con los nuevos argumentos de venta.
6. Revisar `LegalFiscal.tsx` para asegurar el epígrafe 751.

## Restricciones y Advertencias
- **IMPORTANTE**: Mantener la coherencia numérica en todos los componentes. Si cambia un dato en la tabla financiera, debe coincidir con el texto de la Hero.
- **WARNING**: No usar `print()` si hubiera scripts de apoyo, usar `logging`.
- **NOTA**: Asegurar que el diseño premium (Tailwind/Vite) se mantenga intacto tras los cambios de texto.

## Trampas Conocidas
- Inconsistencias en "Ingreso Bruto" vs "Comisión": El ingreso bruto baja (tope 60€), pero la rentabilidad sube (40% comisión). Explicar esto claramente en los textos si es necesario.
