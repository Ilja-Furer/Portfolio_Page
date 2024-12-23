export interface AareGuruResponse {
    timestamp: number,
    temperature: number,
    weather: WeatherResponse
}

export interface WeatherResponse {
    current: CurrentResponse
}

export interface CurrentResponse {
    tt: number
}