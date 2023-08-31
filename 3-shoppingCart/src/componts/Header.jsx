import { Filters } from './Filters'

export function Header () {
  return (
    <header className='p-8 flex flex-col justify-center'>
      <h1 className='text-2xl text-center mb-3'> Shopping Cart </h1>
      <Filters />
    </header>
  )
}
