import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, updateRandomFact } = useCatFact()
  const { catImageURL } = useCatImage({ fact })

  const handleClick = () => {
    updateRandomFact()
  }

  return (
    <main>
      <h1>Cat Images</h1>
      {fact && <p>{fact}</p>}
      {catImageURL && <img
        src={catImageURL}
        alt='image generated by the first word of the cat fact'
        height='520px'
        width='520px'
                      />}
      <button id='changeFact' onClick={handleClick}>Get new fact</button>
    </main>
  )
}
