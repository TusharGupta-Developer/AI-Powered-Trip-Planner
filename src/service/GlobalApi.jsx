import axios from "axios"

const base_url = "https://places.googleapis.com/v1/places:searchText"

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        // "X-Goog-FieldMask": "places.photos,places.displayName,places.id",
        "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.photos.name"

    }
}

export const GetPlaceDetail = (data) => axios.post(base_url, data, config)

export const PHOTP_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=` + import.meta.env.VITE_GOOGLE_PLACE_API_KEY