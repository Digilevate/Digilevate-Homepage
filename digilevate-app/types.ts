
export interface Service {
    id: number;
    name: string;
    tagline: string;
    price_from: number;
    ideal_for: string;
    features: string[];
    popular: boolean;
}

export interface Project {
    id: number;
    title: string;
    client_name: string;
    description: string;
    image_url: string;
    live_url?: string;
    technologies: string[];
    category: 'website' | 'ecommerce' | 'webapp' | 'redesign';
}

export interface Testimonial {
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
    image: string;
}
