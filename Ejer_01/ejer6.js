const cursos = [
  {
    nombre: "JavaScript",
    profesor: "Elena Torres",
    estudiantes: [
      { nombre: "Ana", calificacion: 9 },
      { nombre: "Luis", calificacion: 7.5 },
      { nombre: "Marta", calificacion: 8 }
    ]
  },
  {
    nombre: "Bases de Datos",
    profesor: "Javier Ruiz",
    estudiantes: [
      { nombre: "Pedro", calificacion: 5 },
      { nombre: "Laura", calificacion: 3.5 },
      { nombre: "Sergio", calificacion: 6 }
    ]
  },
  {
    nombre: "Diseño Web",
    profesor: "Carmen Vega",
    estudiantes: [
      { nombre: "Raquel", calificacion: 7 },
      { nombre: "Diego", calificacion: 8.5 },
      { nombre: "Paula", calificacion: 6.5 }
    ]
  },
  {
    nombre: "Redes",
    profesor: "Miguel Soto",
    estudiantes: [
      { nombre: "Irene", calificacion: 4 },
      { nombre: "Álvaro", calificacion: 3 },
      { nombre: "Lucía", calificacion: 5.5 }
    ]
  }
];

const resumenCursos = cursos.map(curso => {
  const suma = curso.estudiantes.reduce((acc, est) => acc + est.calificacion, 0);
  return {
    nombreCurso: curso.nombre,
    promedioCalificaciones: suma / curso.estudiantes.length
  };
});
console.log(resumenCursos);

const cursosDestacados = resumenCursos.filter(curso => curso.promedioCalificaciones >= 7);

cursosDestacados.forEach(curso => {
  console.log(
    `📘 El curso ${curso.nombreCurso} tiene un promedio de ${curso.promedioCalificaciones.toFixed(2)} y es considerado destacado.`
  );
});

cursos.forEach(curso => {
  const hayBajas = curso.estudiantes.some(est => est.calificacion < 4);
  if (hayBajas) {
    console.log(`⚠️ Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`);
  }
});