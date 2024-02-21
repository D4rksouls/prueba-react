import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { increment, decrement } from '@utils/functions/loadCounter';

/**
 * ProgressBar es un componente funcional React que se encarga de gestionar un indicador de progreso
 * (barra de carga) durante el montaje y desmontaje de componentes en la aplicación.
 *
 * @remarks
 * - Este componente utiliza el hook `useEffect` para manejar efectos secundarios. Específicamente,
 *   ejecuta ciertas acciones cuando el componente se monta y se desmonta.
 * - Al montarse el componente, se llama a la función `increment` del módulo `../utils/functions/loadCounter`.
 *   Esta función puede estar destinada a incrementar un contador de carga o iniciar un indicador de progreso
 *   en la interfaz de usuario.
 * - Al desmontarse, se ejecuta la función de limpieza retornada por `useEffect`, que llama a `decrement`
 *   del mismo módulo. Esto podría significar reducir el contador de carga o terminar la indicación de progreso
 *   de una tarea.
 * - Importa y utiliza estilos de 'nprogress/nprogress.css', probablemente relacionados con la visualización
 *   del indicador de progreso. nProgress es una librería comúnmente usada para mostrar barras de progreso
 *   en navegación entre páginas o carga de datos.
 * - El componente no renderiza ningún elemento visual (`return null;`), su funcionalidad está centrada
 *   exclusivamente en la lógica de manipulación de la barra de progreso.
 * - Es importante asegurar que las funciones `increment` y `decrement` estén bien definidas y gestionen
 *   correctamente el estado de la barra de progreso para evitar inconsistencias en la interfaz.
 *
 * @author Hader Rincon <hader.rincon@konecta-group.com>
 * @date 20-10-2023
 */
export default function ProgressBar() {
  useEffect(() => {
    increment();

    return () => {
      decrement();
    };
  }, []);

  return null;
}
