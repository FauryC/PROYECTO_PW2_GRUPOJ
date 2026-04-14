export const getData = (page) => {
    let contextData = {};
    switch (page) {
        default:
            contextData = { ...contextData }
    }
    return { ...contextData, ...getAllPageContext() };
}

function getAllPageContext() {
    return {
        // ---- Navbar ----
        siteName: "Paraíso Playa",
        navLinks: [
            { label: "Inicio",   href: "#inicio" },
            { label: "Precios",  href: "#precios" },
            { label: "Contacto", href: "#contacto" }
        ],
        btnReservar: "Reservar Ahora",

        // ---- Hero ----
        heroImage: "https://picsum.photos/1920/1080?random=1",
        heroTitle: "Bienvenido al Paraíso",
        heroSubtitle: "Descubre la mejor playa de Honduras",
        heroDescription: "Experimenta el lujo tropical en nuestro exclusivo hotel frente al mar. Arena blanca, aguas cristalinas y servicios de primera clase te esperan.",
        heroBtnPrimary: "Explorar Ahora",
        heroBtnSecondary: "Ver Video",

        // ---- Pricing ----
        pricingTitle: "Planes y Tarifas",
        pricingSubtitle: "Elige el plan perfecto para tus vacaciones",
        pricingCurrency: "L",
        pricingPeriod: "/noche",
        pricingBtnLabel: "Seleccionar Plan",
        plans: [
            {
                name: "Escapada Básica",
                amount: "2,500",
                featured: false,
                features: [
                    "✓ Habitación Estándar",
                    "✓ Desayuno incluido",
                    "✓ WiFi gratis",
                    "✓ Acceso a la playa",
                    "✓ Estacionamiento"
                ]
            },
            {
                name: "Experiencia Premium",
                amount: "4,200",
                featured: true,
                badgeLabel: "Más Popular",
                features: [
                    "✓ Habitación Deluxe con vista al mar",
                    "✓ Desayuno y cena incluidos",
                    "✓ WiFi de alta velocidad",
                    "✓ Acceso VIP a la playa",
                    "✓ Spa y masajes (2 sesiones)",
                    "✓ Actividades acuáticas"
                ]
            },
            {
                name: "Suite de Lujo",
                amount: "6,800",
                featured: false,
                features: [
                    "✓ Suite Presidencial frente al mar",
                    "✓ Todas las comidas incluidas",
                    "✓ Minibar premium",
                    "✓ Mayordomo personal 24/7",
                    "✓ Spa ilimitado",
                    "✓ Todas las actividades incluidas",
                    "✓ Transfer aeropuerto"
                ]
            }
        ],

        // ---- Contact ----
        contactTitle: "Contáctanos",
        contactSubtitle: "¿Tienes alguna pregunta? Estamos aquí para ayudarte",
        contactInfoTitle: "Información de Contacto",
        contactInfo: [
            {
                icon: "📞",
                heading: "Teléfonos",
                lines: ["+504 2234-5678", "+504 9876-5432"]
            },
            {
                icon: "✉️",
                heading: "Email",
                lines: ["info@paraisoplaya.hn", "reservas@paraisoplaya.hn"]
            },
            {
                icon: "📍",
                heading: "Dirección",
                lines: ["Km 15 Carretera a Tela", "Atlántida, Honduras"]
            },
            {
                icon: "⏰",
                heading: "Horarios",
                lines: ["Lunes a Domingo", "24 horas"]
            }
        ],
        contactSubjects: [
            { value: "",            label: "Selecciona un asunto" },
            { value: "reservacion", label: "Reservación" },
            { value: "informacion", label: "Información General" },
            { value: "eventos",     label: "Eventos y Bodas" },
            { value: "quejas",      label: "Quejas o Sugerencias" },
            { value: "otro",        label: "Otro" }
        ],
        btnSubmit: "Enviar Mensaje",

        // ---- Footer ----
        footerHotelName: "Hotel Paraíso Playa",
        footerDescription: "Tu destino de lujo frente a la mejor playa de Honduras. Experiencias inolvidables te esperan.",
        footerContactHeading: "Contacto",
        footerContactList: [
            "📞 +504 2234-5678",
            "📱 +504 9876-5432",
            "✉️ info@paraisoplaya.hn",
            "📍 Km 15 Carretera a Tela",
            "Atlántida, Honduras"
        ],
        footerScheduleHeading: "Horarios",
        footerScheduleList: [
            "Check-in: 3:00 PM",
            "Check-out: 12:00 PM",
            "Restaurante: 6:00 AM - 11:00 PM",
            "Recepción: 24/7"
        ],
        footerSocialHeading: "Síguenos",
        socialLinks: [
            { label: "Facebook",  href: "#", class: "facebook" },
            { label: "Instagram", href: "#", class: "instagram" },
            { label: "Twitter",   href: "#", class: "twitter" },
            { label: "YouTube",   href: "#", class: "youtube" }
        ],
        footerCopy: "© 2025 Hotel Paraíso Playa. Todos los derechos reservados."
    };
}