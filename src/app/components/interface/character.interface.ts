export interface fetchAllCharacter{
    count: number;
    results: dataCharacter[];
}

export interface dataCharacter{
    id: string;
    image: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: [];
    location: [];
}

export interface Character{
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
    type: string;
    gender: string;
    origin: [];
    location: [];
}