interface Response {
    code: number;
    message: string;
    data: Option[];
}

interface CategoriesResponse {
    code: number;
    message: string;
    data: {
        categories: Category[];
    };
}
