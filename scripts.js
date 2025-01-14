// función sumar
function sumar(a, b) {
    return a + b;
}

// función restar
function restar(a, b) {
    return a - b;
}

// función multiplicar
function multiplicar(a, b) {
    return a * b;
}

// función dividir
function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir entre cero.";
    }
}

// funcionamiento de la calculadora
function calculadora() {
    let continuar = true;
    let historialOperaciones = []; // Array para almacenar las operaciones

    while (continuar) {
        // Pedir al usuario que elija una operación
        let operacion = prompt(
            "Elegí una operación:\n" +
            "Para sumar escribí: +\n" +
            "Para restar escribí: -\n" +
            "Para multiplicar escribí: *\n" +
            "Para dividir escribí: / \n" +
            "Para mostrar el historial de operaciones escribí: m"
        );

        if (operacion === null) {
            alert("Cancelaste la operación.");
            break;
        }

        if (operacion === "m") {
            // Mostrar el historial de operaciones
            if (historialOperaciones.length > 0) {
                let mensajeHistorial = "Historial de operaciones:\n";
                historialOperaciones.forEach((op, index) => {
                    mensajeHistorial += `${index + 1}) ${op.numero1} ${op.signo} ${op.numero2} = ${op.resultado}\n`;
                });
                alert(mensajeHistorial);
            } else {
                alert("No hay operaciones registradas.");
            }
            continue; //el continue hace que vuelva al inicio del ciclo para otra operación
        }

        // Validar la operación
        if (["+", "-", "*", "/"].includes(operacion)) {
            // Pedir los números
            let num1 = prompt(`Ingresa el primer número para realizar la operación (${operacion}):`);
            let num2 = prompt("Ingresa el segundo número:");

            if (num1 === null || num2 === null) {
                alert("Cancelaste la operación.");
                break;
            }

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            if (isNaN(num1) || isNaN(num2)) {
                alert("Porfiii , fijate de ingresar números válidos.");
            } else {
                // Realizar la operación 
                let resultado;
                switch (operacion) {
                    case "+":
                        resultado = sumar(num1, num2);
                        break;
                    case "-":
                        resultado = restar(num1, num2);
                        break;
                    case "*":
                        resultado = multiplicar(num1, num2);
                        break;
                    case "/":
                        resultado = dividir(num1, num2);
                        break;
                }

                // Guardar en el historial con el signo de la operación en vez de la palabra
                historialOperaciones.push({
                    signo: operacion,
                    numero1: num1,
                    numero2: num2,
                    resultado: resultado,
                });

                alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
            }
        } else {
            alert("Operación no válida. Por favor, elegí entre +, -, *, /, o m.");
        }

        // Preguntar si desea continuar
        continuar = confirm("¿Querés realizar otra operación?");
    }

    // Mostrar el historial al final
    if (historialOperaciones.length > 0) {
        let mensajeHistorial = "Historial de operaciones realizadas:\n";
        historialOperaciones.forEach((op, index) => {
            mensajeHistorial += `${index + 1}) ${op.numero1} ${op.signo} ${op.numero2} = ${op.resultado}\n`;
        });
        alert(mensajeHistorial);
    } else {
        alert("No realizaste ninguna operación.");
    }

    alert("Gracias por usar la calculadora. Espero que te haya resultado útil. Saludos de Kamuerre");
}

// empezar a usar la  calculadora
calculadora();

