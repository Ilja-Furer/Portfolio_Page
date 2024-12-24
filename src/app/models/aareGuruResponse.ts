export interface AareGuruResponse {
    aare: AareResponse
    weather: WeatherResponse
}

export interface AareResponse {
    timestring: string,
    temperature: number,
    temperature_text: string
}

export interface WeatherResponse {
    current: CurrentResponse
}

export interface CurrentResponse {
    tt: number
}