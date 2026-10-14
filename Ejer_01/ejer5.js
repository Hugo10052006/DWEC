const estudiantes = [
  { nombre: "Ana", apellidos: "García López", calificacion: 8.5, aprobado: true },
  { nombre: "Luis", apellidos: "Martínez Ruiz", calificacion: 4.2, aprobado: false },
  { nombre: "Marta", apellidos: "Sánchez Gil", calificacion: 6, aprobado: true },
  { nombre: "Pedro", apellidos: "Fernández Díaz", calificacion: 3.5, aprobado: true },
  { nombre: "Laura", apellidos: "Romero Vega", calificacion: 5, aprobado: false }
];

const estudiantesConId = estudiantes.map((estudiante, index) => ({
  ...estudiante,
  id: index + 1
}));
console.log(estudiantesConId);

const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion >= 5);

estudiantesAprobados.forEach(estudiante => {
  console.log(`¡Felicidades ${estudiante.nombre}, has aprobado con ${estudiante.calificacion}!`);
});

estudiantes.forEach(estudiante => {
  const deberiaAprobar = estudiante.calificacion >= 5;
  if (estudiante.aprobado !== deberiaAprobar) {
    console.log(
      `⚠️ Incoherencia en el registro de ${estudiante.nombre}: calificación = ${estudiante.calificacion}, aprobado = ${estudiante.aprobado}`
    );
  }
});