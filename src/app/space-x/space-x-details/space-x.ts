export interface SpaceX {
    links: SpaceXLInks;
    mission_name: string;
    flight_number: string;
    mission_id: Array<string>;
    launch_year: string;
    launch_success: string;
    launch_landing: string;
}

interface SpaceXLInks {
    mission_patch: string;
}
