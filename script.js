function calcularPrima(salarioMensual, ausencias, diasTrabajados, mesesTrabajados) {
    // Validar que las entradas sean válidas
    if (salarioMensual <= 0 || ausencias < 0 || diasTrabajados <= 0 || diasTrabajados > (mesesTrabajados * 30) || mesesTrabajados < 0 || mesesTrabajados > 6) {
        console.log('Error: Los valores proporcionados no son válidos.');
    } else {
        // Paso 1: Calcular el salario diario
        const salarioDiario = salarioMensual / 30;

        // Paso 2: Calcular la prima básica (15 días de salario por cada 6 meses trabajados)
        let primaBasica = salarioDiario * 15; // 15 días de salario como prima

        // Paso 3: Deducción si hay más de 5 ausencias injustificadas
        let primaAjustada = primaBasica;
        if (ausencias > 5) {
            const deduccion = primaBasica * 0.10; // 10% de deducción
            primaAjustada -= deduccion;
        }

        // Paso 4: Calcular la prima proporcional si ha trabajado menos de 6 meses
        let primaFinal;
        if (mesesTrabajados < 6) {
            // Cálculo proporcional basado en los días trabajados en los 6 meses
            const diasTotalesPeriodo = mesesTrabajados * 30; // Días totales en el periodo trabajado
            primaFinal = (diasTrabajados / diasTotalesPeriodo) * primaAjustada;
        } else {
            primaFinal = primaAjustada; // Si ha trabajado los 6 meses completos
        }

        // Asegurar que la prima no sea negativa
        if (primaFinal < 0) primaFinal = 0;

        // Mostrar el resultado final
        console.log(`La prima de servicios es: $${primaFinal.toFixed(2)}`);
    }
}

calcularPrima(2000, 6, 150, 5); 

