
const CAT_IMAGE_URL = 'https://cataas.com/cat/says/'

export async function getCatImage (serchWord) {
  const resoponse = await fetch(CAT_IMAGE_URL + serchWord)
  console.log(resoponse)

  return resoponse.url
}
