export interface SpaceX {
    links: SpaceXLInks;
    mission_name: string;
    flight_number: string;
    mission_id: Array<string>;
    launch_year: string;
    launch_success: string;
    launch_landing: string;
    rocket: Rocket;
}

export interface Rocket{
    first_stage: Stage;
}

export interface Stage{
    cores: Array<Cores>;
}

export interface Cores {
    land_success: boolean;
}

export interface Stage{
    cores: Array<Cores>;
}

export interface Cores {
    land_success: boolean;
}

interface SpaceXLInks {
    mission_patch: string;
}
