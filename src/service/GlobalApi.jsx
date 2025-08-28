import axios from "axios"

const base_url = "https://places.googleapis.com/v1/places:searchText"

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        "X-Goog-FieldMask": "places.photos,places.displayName,places.id",
    }
}

export const GetPlaceDetail = (data) => axios.post(base_url, data, config)