const respuestas = [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10];

// Promedio de satisfacción
const promedio = (respuestas.reduce((a, b) => a + b, 0) / respuestas.length).toFixed(2);
console.log("Promedio de satisfacción:", promedio); 

// Satisfechos (calificación >= 7)
const satisfechos = respuestas.filter(calificacion => calificacion >= 7).length;
console.log("Clientes satisfechos (>= 7):", satisfechos); 

// Insatisfechos (calificación <= 4)
const insatisfechos = respuestas.filter(calificacion => calificacion <= 4).length;
console.log("Clientes insatisfechos (<= 4):", insatisfechos); 

// Porcentajes
const porcentajeSatisfechos = ((satisfechos / respuestas.length) * 100).toFixed(2);
const porcentajeInsatisfechos = ((insatisfechos / respuestas.length) * 100).toFixed(2);
console.log("Porcentaje de clientes satisfechos:", porcentajeSatisfechos + "%"); 
console.log("Porcentaje de clientes insatisfechos:", porcentajeInsatisfechos + "%"); 

// Moda
const calcularModa = (arr) => {
    const frecuencias = {};
    let maxFrecuencia = 0;
    let moda;

    arr.forEach(num => {
        frecuencias[num] = (frecuencias[num] || 0) + 1;
        if (frecuencias[num] > maxFrecuencia) {
            maxFrecuencia = frecuencias[num];
            moda = num;
        }
    });

    return moda;
};

const moda = calcularModa(respuestas);
console.log("Moda (calificación más frecuente):", moda); 

// Mostrar resultados en el documento HTML
document.getElementById('resultados').innerHTML = `
    <p><strong>Promedio de satisfacción:</strong> ${promedio}</p>
    <p><strong>Clientes satisfechos (>= 7):</strong> ${satisfechos}</p>
    <p><strong>Clientes insatisfechos (<= 4):</strong> ${insatisfechos}</p>
    <p><strong>Porcentaje de clientes satisfechos:</strong> ${porcentajeSatisfechos}%</p>
    <p><strong>Porcentaje de clientes insatisfechos:</strong> ${porcentajeInsatisfechos}%</p>
    <p><strong>Moda (calificación más frecuente):</strong> ${moda}</p>
`;
