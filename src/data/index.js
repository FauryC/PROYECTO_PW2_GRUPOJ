// ─── Datos compartidos (todas las páginas) ───────────────────────────────────
function getAllPageContext() {
    return {
        // ---- Navbar ----
        siteName: "Alliance Française de Honduras",
        navLinks: [
            { label: "Inicio",    href: "/index.html" },
            { label: "Cursos",    href: "/cursos.html" },
            { label: "Cultura",   href: "/cultura.html" },
            { label: "Becas",     href: "/becas.html" },
            { label: "Galería",   href: "/galeria.html" },
            { label: "Contactos", href: "/contactos.html" }
        ],

        // ---- Footer ----
        footerHotelName: "Alliance Française de Honduras",
        footerDescription: "Promovemos la lengua y la cultura francesa en Honduras desde 1950.",
        footerCopy: "© 2025 Alliance Française de Honduras. Todos los derechos reservados."
    };
}

// ─── Datos específicos por página ─────────────────────────────────────────────
const pageData = {

    // ── /index.html ───────────────────────────────────────────────────────────
    "/index.html": {
        // Bienvenida
        index_bienvenida_titulo: "Bienvenido a la Alianza Francesa de Honduras",

        // Carrusel
        index_carrusel_items: [
            {
                imagen: "/IMAGENES/RECUROSC/CarruselParis1.jpg",
                alt: "Torre Eiffel",
                caption: "Explora la magia de la Torre Eiffel"
            },
            {
                imagen: "/IMAGENES/RECUROSC/cafeParis2.jpg",
                alt: "Café en París",
                caption: "Los cafés parisinos más emblemáticos"
            },
            {
                imagen: "/IMAGENES/RECUROSC/CarruselParis3.jpg",
                alt: "Calles de París",
                caption: "Recorre las calles históricas de París"
            }
        ],

        // Contadores
        index_contadores: [
            {
                icono: "https://aftegucigalpa.hn/wp-content/uploads/2025/06/AF-icon.png",
                numero: "+1080",
                descripcion: "Alianzas Francesas en los 5 Continentes"
            },
            {
                icono: "https://aftegucigalpa.hn/wp-content/uploads/2025/06/Eventos.png",
                numero: "+70",
                descripcion: "Eventos Culturales al año"
            },
            {
                icono: "https://aftegucigalpa.hn/wp-content/uploads/2025/06/Estudiantes.png",
                numero: "+1,604",
                descripcion: "Estudiantes al año"
            }
        ],

        // Misión
        index_mision_logo: "https://aftegucigalpa.hn/wp-content/uploads/2025/06/AF-Logo-02.png",
        index_mision_titulo: "Misión",
        index_mision_texto: "Promover la lengua y cultura francesas...",

        // Noticias
        index_noticias_titulo: "Noticias",
        index_noticias: [
            {
                imagen: "/IMAGENES/RECUROSC/GRILLA1.jpg",
                titulo: "Nuevo curso intensivo de francés",
                texto: "Iniciamos inscripciones...",
                enlace: "https://aftegucigalpa.hn/",
                enlace_texto: "Leer más"
            },
            {
                imagen: "/IMAGENES/RECUROSC/GRILLA2.jpg",
                titulo: "Examen DELF-DALF exitoso",
                texto: "Más de 80 estudiantes...",
                enlace: "https://aftegucigalpa.hn/",
                enlace_texto: "Leer más"
            },
            {
                imagen: "/IMAGENES/RECUROSC/GRILLA3.jpg",
                titulo: "Nueva exposición cultural",
                texto: "Visita la galería...",
                enlace: "https://aftegucigalpa.hn/",
                enlace_texto: "Leer más"
            }
        ]
    },

    // ── /nosotros.html ────────────────────────────────────────────────────────
    "/nosotros.html": {
        // Sección principal
        nosotros_titulo: "Sobre la Alianza Francesa de Tegucigalpa",
        nosotros_intro: "Institución cultural y educativa dedicada a la enseñanza del idioma francés desde hace más de 65 años.",
        nosotros_historia_titulo: "Nuestra Historia",
        nosotros_historia_texto: "Formamos parte de una red mundial de más de 800 sedes que promueven la lengua francesa.",

        // Misión y valores
        nosotros_mision_valores_titulo: "Nuestra Misión y Valores",
        nosotros_mision_titulo: "Misión",
        nosotros_mision_texto: "Enseñar el idioma francés de manera innovadora.",
        nosotros_valores_titulo: "Valores",
        nosotros_valores: [
            "Excelencia académica",
            "Interculturalidad",
            "Accesibilidad",
            "Creatividad"
        ],

        // CTA inscripción
        nosotros_cta_titulo: "Inicia tu recorrido en el aprendizaje del francés",
        nosotros_cta_texto: "Inscríbete hoy y forma parte de nuestra comunidad.",
        nosotros_cta_btn_texto: "Inscríbete ahora",
        nosotros_cta_btn_enlace: "./formulario",

        // Comité directivo
        nosotros_comite_titulo: "Comité Directivo",
        nosotros_comite: [
            { nombre: "ISABELLE DIRIS",  cargo: "Directora" },
            { nombre: "Nidia Rodríguez", cargo: "Administradora" },
            { nombre: "PAOLA TÁBORA",    cargo: "Coordinadora" }
        ],

        // Personal docente
        nosotros_docentes_titulo: "Personal Docente",
        nosotros_docentes: [
            { nombre: "Oscar Hernández" },
            { nombre: "Kenya Amador" },
            { nombre: "Carolina Ávila" }
        ],

        // Instituciones asociadas
        nosotros_instituciones_titulo: "Instituciones asociadas",
        nosotros_instituciones: [
            { nombre: "Embajada de Francia",      url: "https://hn.ambafrance.org/-Espanol-" },
            { nombre: "Liceo franco-hondureño",   url: "https://www.liceofranco.com/" }
        ]
    },

    // ── /cursos.html ──────────────────────────────────────────────────────────
    "/cursos.html": {
        cursos_titulo: "Nuestros Cursos de Francés",
        cursos_subtitulo: "Elige el programa que mejor se adapte a tu edad y nivel.",
        cursos_categorias: [
            {
                icono: "🧒",
                nombre: "Niños",
                descripcion: "Programas lúdicos y creativos para los más pequeños.",
                niveles: ["Debutante", "Elemental 1", "Elemental 2"],
                rango_edad: "5 – 10 años",
                enlace: "/curso-ninos.html"
            },
            {
                icono: "🧑",
                nombre: "Adolescentes",
                descripcion: "Clases dinámicas orientadas a la comunicación real.",
                niveles: ["A1 Junior", "A2 Junior", "B1 Junior"],
                rango_edad: "11 – 17 años",
                enlace: "/curso-adolescentes.html"
            },
            {
                icono: "🧑‍💼",
                nombre: "Adultos",
                descripcion: "Cursos intensivos, extensivos y en línea para todos los niveles.",
                niveles: ["A1", "A2", "B1", "B2", "C1", "C2"],
                rango_edad: "18 años en adelante",
                enlace: "/curso-adultos.html"
            }
        ],
        cursos_info_titulo: "¿Por qué estudiar con nosotros?",
        cursos_info_items: [
            { icono: "🏆", titulo: "Certificación oficial",   texto: "Somos centro examinador DELF / DALF." },
            { icono: "👩‍🏫", titulo: "Profesores calificados", texto: "Docentes nativos y hondureños con formación en FLE." },
            { icono: "📚", titulo: "Metodología moderna",     texto: "Enfoque comunicativo basado en el Marco Europeo." },
            { icono: "🌐", titulo: "Modalidades flexibles",   texto: "Presencial, híbrida y totalmente en línea." }
        ]
    },

    // ── /curso-adultos.html ───────────────────────────────────────────────────
    "/curso-adultos.html": {
        adultos_titulo: "Cursos de Francés para Adultos",
        adultos_descripcion: "Domina el francés a tu ritmo con cursos estructurados por niveles del Marco Europeo.",
        adultos_niveles_titulo: "Niveles disponibles",
        adultos_niveles: [
            {
                nombre: "Iniciación",
                marco_europeo: "A1 – MCER",
                descripcion: "Para personas sin conocimiento previo del francés.",
                contenidos: ["Alfabeto y pronunciación", "Saludos y presentaciones", "Números, fechas y colores", "Vocabulario cotidiano esencial"],
                duracion: "60 horas", max_alumnos: 12, precio: "L 3,200", destacado: false
            },
            {
                nombre: "Elemental",
                marco_europeo: "A2 – MCER",
                descripcion: "Consolida las bases del idioma para situaciones cotidianas.",
                contenidos: ["Verbos irregulares frecuentes", "Comprensión lectora básica", "Escritura de textos cortos", "Conversación guiada"],
                duracion: "60 horas", max_alumnos: 12, precio: "L 3,200", destacado: false
            },
            {
                nombre: "Intermedio",
                marco_europeo: "B1 – MCER",
                descripcion: "El nivel más popular. Comprensión de textos y discursos estándar.",
                contenidos: ["Comprensión auditiva avanzada", "Expresión oral fluida", "Gramática funcional completa", "Preparación DELF B1"],
                duracion: "80 horas", max_alumnos: 10, precio: "L 3,800",
                destacado: true, badge: "Más popular"
            },
            {
                nombre: "Intermedio Alto",
                marco_europeo: "B2 – MCER",
                descripcion: "Interactúa con fluidez con hablantes nativos.",
                contenidos: ["Argumentación oral y escrita", "Textos académicos y literarios", "Comprensión de medios francófonos", "Preparación DELF B2"],
                duracion: "80 horas", max_alumnos: 10, precio: "L 3,800", destacado: false
            },
            {
                nombre: "Avanzado",
                marco_europeo: "C1 – MCER",
                descripcion: "Expresión espontánea y precisa. Ideal para uso profesional.",
                contenidos: ["Registro formal e informal", "Debate y negociación", "Análisis de textos literarios", "Preparación DALF C1"],
                duracion: "80 horas", max_alumnos: 8, precio: "L 4,200", destacado: false
            }
        ],
        adultos_horarios_titulo: "Horarios disponibles",
        adultos_horarios_encabezados: ["Nivel", "Lun / Mié", "Mar / Jue", "Sábado", "Modalidad"],
        adultos_horarios: [
            { nivel: "A1", lunes_miercoles: "18:00 – 20:00", martes_jueves: "07:00 – 09:00", sabado: "09:00 – 12:00", modalidad: "Presencial / En línea" },
            { nivel: "A2", lunes_miercoles: "18:00 – 20:00", martes_jueves: "07:00 – 09:00", sabado: "09:00 – 12:00", modalidad: "Presencial / En línea" },
            { nivel: "B1", lunes_miercoles: "19:00 – 21:00", martes_jueves: "18:00 – 20:00", sabado: "13:00 – 16:00", modalidad: "Presencial" },
            { nivel: "B2", lunes_miercoles: "19:00 – 21:00", martes_jueves: "18:00 – 20:00", sabado: "13:00 – 16:00", modalidad: "Presencial / Híbrida" },
            { nivel: "C1", lunes_miercoles: "—",             martes_jueves: "19:00 – 21:00", sabado: "09:00 – 12:00", modalidad: "Presencial" }
        ],
        adultos_inscripcion_titulo: "¿Cómo inscribirte?",
        adultos_pasos: [
            { numero: "1", titulo: "Prueba de nivel",  descripcion: "Realiza nuestro test gratuito en línea para determinar tu nivel." },
            { numero: "2", titulo: "Elige tu horario", descripcion: "Selecciona el grupo y horario que mejor se adapte a tu rutina." },
            { numero: "3", titulo: "Realiza el pago",  descripcion: "Pago en caja o por transferencia. Aceptamos tarjetas." },
            { numero: "4", titulo: "Recibe tu acceso", descripcion: "Recibirás por correo tu usuario de la plataforma y el programa." }
        ],
        adultos_btn_texto: "Inscríbete ahora",
        adultos_btn_enlace: "/formulario.html"
    },

    // ── /becas.html ───────────────────────────────────────────────────────────
    "/becas.html": {
        becas_titulo: "Becas y Oportunidades",
        becas_descripcion: "Becas para estudiar francés, realizar estancias en Francia y acceder a programas culturales.",
        becas_lista_titulo: "Becas disponibles",
        becas: [
            {
                nombre: "Beca Eiffel",
                organismo: "Campus France / Gobierno Francés",
                descripcion: "Beca de excelencia para posgrado en universidades francesas.",
                monto: "hasta €1,400 / mes",
                fecha_cierre: "15 de enero 2026",
                dirigida_a: "Egresados universitarios +21 años",
                requisitos: ["Título universitario homologado", "Nivel mínimo B2", "Proyecto de investigación", "Carta de universidad francesa"],
                enlace: "https://www.campusfrance.org/es",
                destacada: true, badge: "Alta demanda"
            },
            {
                nombre: "Beca BGF",
                organismo: "Embajada de Francia en Honduras",
                descripcion: "Estancias cortas (1–3 meses) en instituciones académicas en Francia.",
                monto: "hasta €900 / mes",
                fecha_cierre: "28 de febrero 2026",
                dirigida_a: "Profesionales 22 – 35 años",
                requisitos: ["Nivel francés mínimo B1", "Proyecto de intercambio", "Carta de institución receptora", "CV en francés"],
                enlace: "/contactos.html",
                destacada: false
            },
            {
                nombre: "Beca Interna Alliance",
                organismo: "Alliance Française de Honduras",
                descripcion: "Beca parcial del 50 % del arancel para estudiantes con excelencia y bajos recursos.",
                monto: "50 % del arancel semestral",
                fecha_cierre: "Convocatoria permanente",
                dirigida_a: "Alumnos activos o nuevos",
                requisitos: ["Promedio mínimo 85/100", "Carta socioeconómica", "Entrevista con director académico"],
                enlace: "/formulario.html",
                destacada: false
            }
        ],
        becas_proceso_titulo: "Proceso de postulación",
        becas_proceso_pasos: [
            { titulo: "Consulta la convocatoria", descripcion: "Revisa requisitos, fechas y documentos necesarios." },
            { titulo: "Prepara tu expediente",    descripcion: "Reúne notas, cartas, CV en francés y formulario." },
            { titulo: "Entrega en secretaría",    descripcion: "Presenta tu expediente en nuestra sede o por correo." },
            { titulo: "Entrevista de selección",  descripcion: "Candidatos preseleccionados serán citados a entrevista." },
            { titulo: "Notificación de resultados", descripcion: "Resultados en 30 días hábiles tras el cierre." }
        ],
        becas_contacto_titulo: "¿Tienes dudas sobre las becas?",
        becas_contacto_texto: "Nuestro equipo te orienta sin costo. Te respondemos en menos de 48 horas.",
        becas_contacto_email: "becas@alliancefrancaise.hn",
        becas_contacto_btn: "Contactar al equipo de becas"
    }
};

// ─── Función principal exportada ──────────────────────────────────────────────
export const getData = (page) => {
    const specific = pageData[page] ?? {};
    return { ...getAllPageContext(), ...specific };
};
