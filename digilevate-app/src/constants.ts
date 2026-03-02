import { Service, Project, Testimonial } from './types';

// Prices are in CHF
export const SERVICES: Service[] = [
    {
        id: 1,
        name: "Starter Site",
        tagline: "Perfect for small businesses",
        price_from: 1649, // Example value in CHF
        ideal_for: "Small businesses, startups, personal brands",
        features: [
            "Custom responsive design",
            "Basic SEO optimization",
            "Contact form integration",
            "Mobile-friendly design",
            "1 month support and hosting",
            "Basic analytics setup",
        ],
        popular: false,
    },
    {
        id: 2,
        name: "Business Pro",
        tagline: "Most popular choice",
        price_from: 4249, // Example value in CHF
        ideal_for: "Medium businesses, agencies, consultants",
        features: [
            "Premium custom design",
            "Advanced SEO optimization",
            "Blog functionality",
            "Social media integration",
            "3 months support and hosting",
            "Advanced analytics",
            "Live chat integration",
        ],
        popular: true,
    },
    {
        id: 3,
        name: "E-Commerce",
        tagline: "Complete online store",
        price_from: 6949, // Example value in CHF
        ideal_for: "Product businesses, online retailers",
        features: [
            "Custom e-commerce design",
            "Unlimited products",
            "Secure payment processing",
            "Order management system",
            "Email marketing integration",
            "Advanced analytics",
            "6 months support and hosting",
        ],
        popular: false,
    },
    {
        id: 4,
        name: "AI Automation",
        tagline: "Zukunftssichere Effizienz",
        price_from: 2449,
        ideal_for: "KMU, die Zeit und Kosten sparen wollen",
        features: [
            "Individuelle KI-Beratung",
            "Integration von LLMs (GPT-4 etc.)",
            "Automatisierte E-Mail-Workflows",
            "Kundensupport-Automatisierung",
            "Benutzerdefinierte KI-Agenten",
            "Schulung & Support",
        ],
        popular: false,
    },
];

export const PROJECTS: Project[] = [
    {
        id: 2,
        title: "projects.massagenatelier.title",
        client_name: "Massagenatelier",
        description: "projects.massagenatelier.description",
        image_url: "/massagenatelier.png",
        live_url: "https://www.massagenatelier.ch/",
        technologies: ["Squarespace", "SEO", "Design"],
        category: "seo",
    },
    {
        id: 3,
        title: "projects.degagarage.title",
        client_name: "Dega Garage",
        description: "projects.degagarage.description",
        image_url: "/degagarage.png",
        live_url: "https://www.degagarage.ch/",
        technologies: ["React", "Supabase", "UI/UX"],
        category: "web",
    },
    {
        id: 1,
        title: "projects.collina_chocolates.title",
        client_name: "Collina Chocolates",
        description: "projects.collina_chocolates.description",
        image_url: "/collina-chocolates.png",
        live_url: "https://collina-chocolates.ch/",
        technologies: ["React", "Supabase", "Email Services"],
        category: "ecommerce",
    },
    {
        id: 4,
        title: "projects.physiosteo_montagna.title",
        client_name: "Physiosteo Montagna",
        description: "projects.physiosteo_montagna.description",
        image_url: "/physiosteo-montagna-webseite-digilevate-zuerich.jpg",
        live_url: "https://www.physiosteomontagna.ch/",
        technologies: ["Wix", "Figma", "SEO"],
        category: "seo",
    },
    {
        id: 5,
        title: "projects.personal_portfolio.title",
        client_name: "Loris Imbrogno",
        description: "projects.personal_portfolio.description",
        image_url: "/alessio-fano-digilevate-gruender-zuerich.png",
        live_url: "https://alessiofano.ch/",
        technologies: ["React", "Next.js", "Vercel"],
        category: "web",
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Sandrine Montagna",
        company: "Physiosteo Montagna",
        role: "Inhaberin",
        content: "Exzellenter Service! Der Webmaster ist sehr professionell, aufmerksam und stets ansprechbar. Loris und sein Team haben sich um die komplette Neugestaltung unserer Website gekümmert, die modern, übersichtlich und perfekt auf unsere Bedürfnisse zugeschnitten ist. Die Kommunikation verlief von Anfang bis Ende reibungslos...",
        rating: 5,
        image: "https://picsum.photos/seed/person4/100/100"
    },
    {
        name: "Ilija Predogac",
        company: "",
        role: "Kunde",
        content: "Sehr professionelles und elegantes Team und vorallem Loris hat mich mit seiner Beratung sehr überzeugt. Er konnte mir genau sagen was ich brauchte und was nötig ist um meine Website zu verbessern. Würde immer wieder mit Ihnen zusammenarbeiten.",
        rating: 5,
        image: "https://picsum.photos/seed/person5/100/100"
    },
    {
        name: "Juliana Jevtic",
        company: "",
        role: "Kundin",
        content: "Ich finde das Preis-Leistungs Verhältnis super. Auch konnten sie meine komplexere Anliegen kompetent umsetzten und mir zusätzliche Varianten anbieten an die ich selbst nicht gedacht hatte. Sehr empfehlenswert und würde bei weiteren Projekten diese Jungs wieder in betracht ziehen. Gute Arbeit!",
        rating: 5,
        image: "https://picsum.photos/seed/person6/100/100"
    }
];
