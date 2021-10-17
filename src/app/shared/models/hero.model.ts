export interface Heroes {
    heroes: Hero[];
}
export interface Hero {
    name: string;
    id: string;
    start_date: string;
    starting_power: number;
    current_power: number;
    ability: string;
    suit_colors: string[];
    coach: string;
}