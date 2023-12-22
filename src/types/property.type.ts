interface Property {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent: number | null;
  list: boolean;
  type: string | null;
  value: string;
  other_value: string | null;
  options: Array<{
    id: number;
    name: string;
    slug: string;
    parent: number;
    child: boolean;
  }>;
}
