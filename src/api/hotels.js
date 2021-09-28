const PRICE_URL = 'http://engine.hotellook.com/api/v2/cache.json'
const LOCATION_URL = ''

const putSearchParamsToUrl = (url, params) => {
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })
}

export const hotelsAPI = {
  async fetchHotels(searchParams) {
    try {
      const fetchURL = new URL(PRICE_URL)
      putSearchParamsToUrl(fetchURL, searchParams)
      console.log(fetchURL)
      const response = await fetch(fetchURL.href, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
      const data = await response.json()
      console.log(data)
    } catch (e) {
      throw e
    }
  },
}
