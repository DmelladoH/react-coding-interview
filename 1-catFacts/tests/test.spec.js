// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST = 'http://localhost:5173/'
test('get a fact', async ({ page }) => {
  await page.goto(LOCALHOST)
  const fact = await page.getByRole('paragraph')
  const text = await fact.textContent()
  await expect(text?.length).toBeGreaterThan(0)
})

test('get an image', async ({ page }) => {
  await page.goto(LOCALHOST)
  const img = await page.getByRole('img')
  const imgURL = await img.getAttribute('src')

  await expect(imgURL?.startsWith('https://cataas.com/cat/says/')).toBeTruthy()
})

// test('get a new fact every time we click the button', async ({ page }) => {
//   await page.goto(LOCALHOST)
//   const fact = await page.getByRole('paragraph')
//   const prevText = await fact.textContent()

//   await page.click('#changeFact')

//   const newFact = await page.getByRole('paragraph')
//   const newText = await newFact.textContent()

//   console.log(newText)
//   console.log(prevText)

//   // await expect()
// })
