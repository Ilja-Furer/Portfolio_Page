export interface AareGuruResponse {
    aare: AareResponse
    weather: WeatherResponse
}

export interface AareResponse {
    timestring: string,
    temperature: number,
}

export interface WeatherResponse {
    current: CurrentResponse
}

export interface CurrentResponse {
    tt: number
}