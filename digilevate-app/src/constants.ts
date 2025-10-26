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
];

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "EcoStore Marketplace",
        client_name: "EcoStore",
        description: "Sustainable e-commerce platform with advanced filtering, wishlist functionality, and eco-friendly shipping calculation.",
        image_url: "https://picsum.photos/seed/project1/600/400",
        live_url: "#",
        technologies: ["Shopify", "React", "GraphQL"],
        category: "ecommerce",
    },
    {
        id: 2,
        title: "FinTech Solutions Portal",
        client_name: "FinTech Pro",
        description: "Corporate redesign for financial technology company with focus on trust, security, and user experience.",
        image_url: "https://picsum.photos/seed/project2/600/400",
        live_url: "#",
        technologies: ["Angular", "D3.js", "Firebase"],
        category: "redesign",
    },
    {
        id: 3,
        title: "GrowthLab Marketing Platform",
        client_name: "GrowthLab",
        description: "Comprehensive marketing agency website with portfolio showcase and client dashboard integration.",
        image_url: "https://picsum.photos/seed/project3/600/400",
        live_url: "#",
        technologies: ["Next.js", "Stripe", "PostgreSQL"],
        category: "webapp",
    },
    {
        id: 4,
        title: "TechStart Innovation Hub",
        client_name: "TechStart Inc.",
        description: "Modern corporate website with interactive features and lead generation focus. Built with React and optimized for performance.",
        image_url: "https://picsum.photos/seed/project4/600/400",
        live_url: "#",
        technologies: ["React", "Node.js", "MongoDB"],
        category: "website",
    },
    {
        id: 5,
        title: "Wellness Retreat Center",
        client_name: "Serenity Wellness",
        description: "Peaceful and calming website for wellness retreat center with booking system and class schedules.",
        image_url: "https://picsum.photos/seed/project5/600/400",
        live_url: "#",
        technologies: ["WordPress", "WooCommerce", "PHP"],
        category: "website",
    },
    {
        id: 6,
        title: "Boutique Creative Studio",
        client_name: "Boutique Creative",
        description: "Elegant portfolio website for creative agency with stunning visual design and smooth animations.",
        image_url: "https://picsum.photos/seed/project6/600/400",
        live_url: "#",
        technologies: ["Vue.js", "GSAP", "Contentful"],
        category: "website",
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
