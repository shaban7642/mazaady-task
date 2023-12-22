interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
    slug: string;
    children: SubCategory[];
}

interface SubCategory {
    id: number;
    name: string;
    description: string;
    image: string;
    slug: string;
}
