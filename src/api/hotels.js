const API_URL = 'https://engine.hotellook.com/api/v2/cache.json'

const putSearchParamsToUrl = (url, params) => {
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })
}

export const hotelsAPI = {
  async fetchHotels(searchParams) {
    try {
      const fetchURL = new URL(API_URL)
      putSearchParamsToUrl(fetchURL, searchParams)
      const response = await fetch(fetchURL.href, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
      const data = await response.json()
      return data
    } catch (e) {
      throw e
    }
  },
}
