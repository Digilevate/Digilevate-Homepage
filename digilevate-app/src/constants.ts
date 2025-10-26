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
        price_from: 7649, // Example value in CHF
        ideal_for: "Product businesses, online retailers",
        features: [
            "Custom e-commerce design",
            "Unlimited products",
            "Secure payment processing",
            "Inventory management",
            "Order management system",
            "Customer accounts",
            "Email marketing integration",
            "Advanced analytics",
            "12 months free hosting",
            "Ongoing support",
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
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        role: "CEO",
        content: "Digilevate transformed our online presence completely. Our new website not only looks stunning but has increased our leads by 300%. Their attention to detail and professional approach is unmatched.",
        rating: 5,
        image: "https://picsum.photos/seed/person1/100/100"
    },
    {
        name: "Michael Chen",
        company: "GrowthLab",
        role: "Marketing Director",
        content: "Working with Loris and Alessio was a game-changer. They didn't just build us a website – they created a powerful marketing tool that converts visitors into customers. Highly recommended!",
        rating: 5,
        image: "https://picsum.photos/seed/person2/100/100"
    },
    {
        name: "Emily Rodriguez",
        company: "Boutique Creative",
        role: "Founder",
        content: "The team at Digilevate exceeded our expectations. They understood our vision perfectly and delivered a website that truly represents our brand. The ongoing support has been exceptional.",
        rating: 5,
        image: "https://picsum.photos/seed/person3/100/100"
    }
];
