interface Option {
    id: number;
    name: string;
    description: string | null;
    slug: string;
    parent: number;
    list: boolean;
    type: string | null;
    value: string;
    other_value: string | null;
    options: SubOption[];
}

interface SubOption {
    id: number;
    name: string;
    slug: string;
    parent: number;
    child: boolean;
}
