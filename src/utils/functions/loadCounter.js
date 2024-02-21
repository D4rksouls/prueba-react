import nprogress from 'nprogress';

let counter = 0;
let delayTimeout = {};

/**
 * Verifica el estado actual del contador de tareas y actualiza la barra de progreso.
 * Si hay tareas pendientes (counter > 0), inicia la barra de progreso.
 * Si no hay tareas pendientes, detiene la barra de progreso después de un breve retraso.
 * 
 * @author Hader Rincon <hader.rincon@konecta-group.com>
 * @date 10-10-2023
 */
function checkProgress() {
  if (counter > 0) {
    clearTimeout(delayTimeout);
    nprogress.start();
  } else {
    delayTimeout = setTimeout(() => {
      nprogress.done();
    }, 200);
  }
}

/**
 * Incrementa el contador de tareas en curso y verifica el estado del progreso.
 * Debe ser llamado cuando una tarea inicia.
 * 
 * @author Hader Rincon <hader.rincon@konecta-group.com>
 * @date 10-10-2023
 */
export function increment() {
  counter += 1;
  checkProgress();
}

/**
 * Decrementa el contador de tareas en curso y verifica el estado del progreso.
 * Debe ser llamado cuando una tarea finaliza.
 * Asegura que el contador no sea negativo.
 * 
 * @author Hader Rincon <hader.rincon@konecta-group.com>
 * @date 10-10-2023
 */
export function decrement() {
  counter -= 1;
  if (counter < 0) {
    counter = 0;
  }
  checkProgress();
}
