// Funciones de navegación
function showMenu() {
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('exerciseContainer').style.display = 'none';

    // Ocultar todos los ejercicios
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(exercise => {
        exercise.style.display = 'none';
    });
}

function showExercise(exerciseId) {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('exerciseContainer').style.display = 'block';

    // Ocultar todos los ejercicios
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(exercise => {
        exercise.style.display = 'none';
    });

    // Mostrar el ejercicio seleccionado
    document.getElementById(exerciseId).style.display = 'block';

    // Limpiar resultados previos
    if (exerciseId === 'exercise1') {
        document.getElementById('results1').style.display = 'none';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('codeDisplay').textContent = '// Ingresa los números para ver el código aquí';
    } else if (exerciseId === 'exercise2') {
        document.getElementById('results2').style.display = 'none';
        document.getElementById('distancia').value = '';
        document.getElementById('tiempo').value = '';
        document.getElementById('codeDisplay2').textContent = '// Ingresa la distancia y el tiempo para ver el código aquí';
    } else if (exerciseId === 'exercise3') {
        document.getElementById('results3').style.display = 'none';
        document.getElementById('sueldoBase').value = '';
        document.getElementById('venta1').value = '';
        document.getElementById('venta2').value = '';
        document.getElementById('venta3').value = '';
        document.getElementById('codeDisplay3').textContent = '// Ingresa el sueldo base y las ventas para ver el código aquí';
    }
}

// Ejercicio 1: Operaciones Básicas
function calculateOperations() {
    // Obtener los valores de entrada
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // Validar que los inputs no estén vacíos y sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingresa números válidos en ambos campos.');
        return;
    }

    // Realizar las operaciones usando solo operadores aritméticos

    //Aqui inicia el codigo para las operaciones del ejercicio 1

    //Declara las constantes necesarias para las operaciones de acuerdo a los outputs
    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;

    //Aqui hace las operaciones
    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    division = num1 / num2;

    //Aqui termina el codigo para las operaciones del ejercicio 1

    // Mostrar las fórmulas
    document.getElementById('sumFormula').textContent = `${num1} + ${num2}`;
    document.getElementById('subFormula').textContent = `${num1} - ${num2}`;
    document.getElementById('mulFormula').textContent = `${num1} × ${num2}`;
    document.getElementById('divFormula').textContent = `${num1} ÷ ${num2}`;

    // Mostrar los resultados
    document.getElementById('sumResult').textContent = suma; //usa esta constante para mostrar el resultado de la suma
    document.getElementById('subResult').textContent = resta; //usa esta constante para mostrar el resultado de la resta
    document.getElementById('mulResult').textContent = multiplicacion; //usa esta constante para mostrar el resultado de la multiplicacion

    // Formatear el resultado de la división
    if (num2 === 0) {
        document.getElementById('divResult').textContent = 'No se puede dividir por cero';
        document.getElementById('divResult').style.color = '#e53e3e';
    } else {
        document.getElementById('divResult').textContent = division; //usa esta constante para mostrar el resultado de la division
        document.getElementById('divResult').style.color = '#2d3748';
    }

    // Mostrar la sección de resultados
    document.getElementById('results1').style.display = 'block';

    // Generar y mostrar el código JavaScript
    const code = generateCode(num1, num2);
    document.getElementById('codeDisplay').textContent = code;

    // Scroll suave hacia los resultados
    document.getElementById('results1').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function generateCode(num1, num2) {
    return `// Ejercicio 1: Operaciones Básicas
// Declaramos las variables con los números ingresados
let num1 = ${num1};
let num2 = ${num2};

// Realizamos las operaciones aritméticas
let suma = num1 + num2;           // ${num1} + ${num2} = ${num1 + num2}
let resta = num1 - num2;          // ${num1} - ${num2} = ${num1 - num2}
let multiplicacion = num1 * num2; // ${num1} × ${num2} = ${num1 * num2}
let division = num1 / num2;       // ${num1} ÷ ${num2} = ${num2 === 0 ? 'Error: División por cero' : num1 / num2}

// Mostramos los resultados
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);`;
}

// Ejercicio 2: Cálculo de Velocidad
function calculateVelocity() {
    // Obtener los valores de entrada
    const distanciaInput = document.getElementById('distancia');
    const tiempoInput = document.getElementById('tiempo');

    const distancia = parseFloat(distanciaInput.value);
    const tiempo = parseFloat(tiempoInput.value);

    // Validar que los inputs no estén vacíos y sean números válidos
    if (isNaN(distancia) || isNaN(tiempo)) {
        alert('Por favor, ingresa valores válidos para la distancia y el tiempo.');
        return;
    }

    // Validar que la distancia no sea negativa
    if (distancia < 0) {
        alert('La distancia no puede ser negativa.');
        return;
    }

    // Validar que el tiempo sea mayor que cero
    if (tiempo <= 0) {
        alert('El tiempo debe ser mayor que cero.');
        return;
    }

    // Calcular la velocidad usando solo el operador aritmético de división

    //Aqui inicia el codigo para el ejercicio 2

    //Declara las constantes necesarias para el ejercicio 2 de acuerdo a los outputs

    const velocidad = distancia / tiempo;

    //Aqui termina el codigo para el ejercicio 2

    // Mostrar la fórmula con los valores
    document.getElementById('formulaExplanation').textContent = `V = ${distancia} / ${tiempo}`;

    // Mostrar el resultado de la velocidad
    document.getElementById('velocityResult').textContent = velocidad.toFixed(2);

    // Mostrar interpretación basada en la velocidad
    showVelocityInterpretation(velocidad);

    // Mostrar la sección de resultados
    document.getElementById('results2').style.display = 'block';

    // Generar y mostrar el código JavaScript
    const code = generateVelocityCode(distancia, tiempo);
    document.getElementById('codeDisplay2').textContent = code;

    // Scroll suave hacia los resultados
    document.getElementById('results2').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function showVelocityInterpretation(velocidad) {
    const interpretationDiv = document.getElementById('velocityInterpretation');
    const interpretationText = document.getElementById('interpretationText');

    let mensaje = '';

    if (velocidad <= 30) {
        mensaje = '🐌 Velocidad baja - Ideal para zonas urbanas y áreas residenciales.';
    } else if (velocidad <= 60) {
        mensaje = '🚗 Velocidad moderada - Apropiada para calles principales y avenidas.';
    } else if (velocidad <= 120) {
        mensaje = '🏎️ Velocidad alta - Típica de autopistas y carreteras principales.';
    } else {
        mensaje = '🚀 Velocidad muy alta - ¡Cuidado! Asegúrate de respetar los límites de velocidad.';
    }

    interpretationText.textContent = mensaje;
    interpretationDiv.style.display = 'block';
}

function generateVelocityCode(distancia, tiempo) {
    const velocidad = distancia / tiempo;
    return `// Ejercicio 2: Cálculo de Velocidad
// Fórmula: V = D / T (Velocidad = Distancia / Tiempo)

// Declaramos las variables con los valores ingresados
let distancia = ${distancia}; // kilómetros
let tiempo = ${tiempo};       // horas

// Calculamos la velocidad usando solo el operador de división
let velocidad = distancia / tiempo; // ${distancia} / ${tiempo} = ${velocidad.toFixed(2)} km/h

// Mostramos el resultado
console.log("Distancia recorrida:", distancia, "km");
console.log("Tiempo empleado:", tiempo, "horas");
console.log("Velocidad calculada:", velocidad.toFixed(2), "km/h");`;
}

// Ejercicio 3: Comisiones de Vendedor
function calculateCommissions() {
    // Obtener los valores de entrada
    const sueldoBaseInput = document.getElementById('sueldoBase');
    const venta1Input = document.getElementById('venta1');
    const venta2Input = document.getElementById('venta2');
    const venta3Input = document.getElementById('venta3');

    const sueldoBase = parseFloat(sueldoBaseInput.value); //Esta es la constante para el sueldo base
    const venta1 = parseFloat(venta1Input.value); //Esta es la constante para la primera venta
    const venta2 = parseFloat(venta2Input.value); //Esta es la constante para la segunda venta
    const venta3 = parseFloat(venta3Input.value); //Esta es la constante para la tercera venta

    // Validar que todos los inputs sean números válidos
    if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
        alert('Por favor, ingresa valores válidos en todos los campos.');
        return;
    }

    // Validar que todos los valores sean no negativos
    if (sueldoBase < 0 || venta1 < 0 || venta2 < 0 || venta3 < 0) {
        alert('Los valores no pueden ser negativos.');
        return;
    }

    // Aqui inicia el codigo para el ejercicio 3

    // Declara las constantes necesarias para el ejercicio 3 de acuerdo a los outputs
    // Calcular comisiones usando solo operadores aritméticos (10% = 0.1)
    //Usa estas constantes para calcular las comisiones de acuerdo a los outputs
    const comision1 = 0; //Esta es la constante inicializda para la primera comision
    const comision2 = 0; //Esta es la constante inicializada para la segunda comision
    const comision3 = 0; //Esta es la constante inicializada para la tercera comision

    //Realiza las operaciones necesarias para calcular las comisiones de acuerdo a los outputs

    // Calcular totales usando solo operadores aritméticos
    const totalVentas = 0; //Esta es la constante inicializada para el total de ventas
    const totalComisiones = 0; //Esta es la constante inicializada para el total de comisiones
    const totalRecibir = 0; //Esta es la constante inicializada para el total a recibir

    //Realiza las operaciones necesarias para calcular las comisiones y los totales de acuerdo a los outputs

    // Aqui termina el codigo para el ejercicio 3

    // Mostrar los valores de las ventas
    document.getElementById('ventaDisplay1').textContent = `$${venta1.toFixed(2)}`;
    document.getElementById('ventaDisplay2').textContent = `$${venta2.toFixed(2)}`;
    document.getElementById('ventaDisplay3').textContent = `$${venta3.toFixed(2)}`;

    // Mostrar las comisiones individuales
    document.getElementById('comision1').textContent = `Comisión: $${comision1.toFixed(2)}`;
    document.getElementById('comision2').textContent = `Comisión: $${comision2.toFixed(2)}`;
    document.getElementById('comision3').textContent = `Comisión: $${comision3.toFixed(2)}`;

    // Mostrar los totales
    document.getElementById('totalVentas').textContent = `$${totalVentas.toFixed(2)}`;
    document.getElementById('sueldoDisplay').textContent = `$${sueldoBase.toFixed(2)}`;
    document.getElementById('totalComisiones').textContent = `$${totalComisiones.toFixed(2)}`;
    document.getElementById('totalRecibir').textContent = `$${totalRecibir.toFixed(2)}`;

    // Mostrar la sección de resultados
    document.getElementById('results3').style.display = 'block';

    // Generar y mostrar el código JavaScript
    const code = generateCommissionCode(sueldoBase, venta1, venta2, venta3);
    document.getElementById('codeDisplay3').textContent = code;

    // Scroll suave hacia los resultados
    document.getElementById('results3').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function generateCommissionCode(sueldoBase, venta1, venta2, venta3) {
    const comision1 = venta1 * 0.1;
    const comision2 = venta2 * 0.1;
    const comision3 = venta3 * 0.1;
    const totalVentas = venta1 + venta2 + venta3;
    const totalComisiones = comision1 + comision2 + comision3;
    const totalRecibir = sueldoBase + totalComisiones;

    return `// Ejercicio 3: Comisiones de Vendedor
// El vendedor recibe sueldo base + 10% de comisión por cada venta

// Declaramos las variables con los valores ingresados
let sueldoBase = ${sueldoBase};
let venta1 = ${venta1};
let venta2 = ${venta2};
let venta3 = ${venta3};

// Calculamos las comisiones (10% = 0.1) usando solo multiplicación
let comision1 = venta1 * 0.1;  // ${venta1} * 0.1 = $${comision1.toFixed(2)}
let comision2 = venta2 * 0.1;  // ${venta2} * 0.1 = $${comision2.toFixed(2)}
let comision3 = venta3 * 0.1;  // ${venta3} * 0.1 = $${comision3.toFixed(2)}

// Calculamos los totales usando solo suma
let totalVentas = venta1 + venta2 + venta3;           // $${totalVentas.toFixed(2)}
let totalComisiones = comision1 + comision2 + comision3; // $${totalComisiones.toFixed(2)}
let totalRecibir = sueldoBase + totalComisiones;      // $${totalRecibir.toFixed(2)}

// Mostramos los resultados
console.log("Sueldo base:", "$" + sueldoBase.toFixed(2));
console.log("Total ventas:", "$" + totalVentas.toFixed(2));
console.log("Total comisiones:", "$" + totalComisiones.toFixed(2));
console.log("Total a recibir:", "$" + totalRecibir.toFixed(2));`;
}

// Agregar eventos para calcular cuando se presiona Enter en los inputs
document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1: Operaciones Básicas
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');

    if (num1Input) {
        num1Input.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                calculateOperations();
            }
        });
    }

    if (num2Input) {
        num2Input.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                calculateOperations();
            }
        });
    }

    // Calcular automáticamente cuando cambien los valores (opcional)
    if (num1Input && num2Input) {
        num1Input.addEventListener('input', autoCalculate);
        num2Input.addEventListener('input', autoCalculate);
    }

    // Ejercicio 2: Cálculo de Velocidad
    const distanciaInput = document.getElementById('distancia');
    const tiempoInput = document.getElementById('tiempo');

    if (distanciaInput) {
        distanciaInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                calculateVelocity();
            }
        });
    }

    if (tiempoInput) {
        tiempoInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                calculateVelocity();
            }
        });
    }

    // Calcular automáticamente cuando cambien los valores del ejercicio 2
    if (distanciaInput && tiempoInput) {
        distanciaInput.addEventListener('input', autoCalculateVelocity);
        tiempoInput.addEventListener('input', autoCalculateVelocity);
    }

    // Ejercicio 3: Comisiones de Vendedor
    const sueldoBaseInput = document.getElementById('sueldoBase');
    const venta1Input = document.getElementById('venta1');
    const venta2Input = document.getElementById('venta2');
    const venta3Input = document.getElementById('venta3');

    // Eventos Enter para ejercicio 3
    const exercise3Inputs = [sueldoBaseInput, venta1Input, venta2Input, venta3Input];
    exercise3Inputs.forEach(input => {
        if (input) {
            input.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    calculateCommissions();
                }
            });
        }
    });

    // Calcular automáticamente cuando cambien los valores del ejercicio 3
    exercise3Inputs.forEach(input => {
        if (input) {
            input.addEventListener('input', autoCalculateCommissions);
        }
    });
});

function autoCalculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Solo calcular si ambos valores son números válidos
    if (!isNaN(num1) && !isNaN(num2)) {
        calculateOperations();
    }
}

function autoCalculateVelocity() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);

    // Solo calcular si ambos valores son números válidos y mayores que cero
    if (!isNaN(distancia) && !isNaN(tiempo) && distancia >= 0 && tiempo > 0) {
        calculateVelocity();
    }
}

function autoCalculateCommissions() {
    const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    const venta1 = parseFloat(document.getElementById('venta1').value);
    const venta2 = parseFloat(document.getElementById('venta2').value);
    const venta3 = parseFloat(document.getElementById('venta3').value);

    // Solo calcular si todos los valores son números válidos y no negativos
    if (!isNaN(sueldoBase) && !isNaN(venta1) && !isNaN(venta2) && !isNaN(venta3) &&
        sueldoBase >= 0 && venta1 >= 0 && venta2 >= 0 && venta3 >= 0) {
        calculateCommissions();
    }
}
