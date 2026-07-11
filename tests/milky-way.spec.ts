import { expect, test } from '@playwright/test'
import { PNG } from 'pngjs'

const landmarks = [
  'Sagittarius A*',
  'The Sun',
  'Orion Spur',
  'Perseus Arm',
  'Scutum-Centaurus Arm',
  'Sagittarius Arm',
  'Orion Nebula (M42)',
  'Pleiades (M45)',
  'Lagoon Nebula (M8)',
  'Omega Nebula (M17)',
  'Eagle Nebula (M16)',
  'Trifid Nebula (M20)',
]

function countBrightPixels(buffer: Buffer) {
  const png = PNG.sync.read(buffer)
  let brightPixels = 0
  for (let index = 0; index < png.data.length; index += 4) {
    const red = png.data[index]
    const green = png.data[index + 1]
    const blue = png.data[index + 2]
    if (red + green + blue > 80) brightPixels += 1
  }
  return brightPixels
}

test('renders the galaxy, opens every landmark panel, and supports tour and zoom', async ({ page }, testInfo) => {
  test.setTimeout(90_000)
  test.skip(testInfo.project.name !== 'chromium', 'Landmark strip is a desktop control; mobile uses direct canvas/tour controls.')
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Milky Way Learning Map' })).toBeVisible()
  await expect(page.locator('canvas')).toBeVisible()
  await page.waitForTimeout(900)

  const screenshot = await page.screenshot({ path: `public/screenshots/milky-way-${testInfo.project.name}.png`, fullPage: true })
  expect(countBrightPixels(screenshot)).toBeGreaterThan(20000)
  await testInfo.attach('milky-way-desktop', { body: screenshot, contentType: 'image/png' })

  for (const landmark of landmarks) {
    const button = page.locator('.object-strip').getByRole('button', { name: landmark, exact: true })
    await button.evaluate((element) => element.scrollIntoView({ inline: 'center', block: 'nearest' }))
    await button.click({ force: true })
    await expect(page.getByRole('heading', { name: landmark })).toBeVisible()
    await expect(page.locator('.learning-panel .distance')).toBeVisible()
    await expect(page.locator('.fact-box')).toBeVisible()
  }

  await page.getByRole('button', { name: 'Start' }).click()
  await expect(page.getByText('Tour stop 1 of 7')).toBeVisible()
  await page.getByRole('button', { name: 'Next' }).click()
  await expect(page.getByText('Tour stop 2 of 7')).toBeVisible()

  const zoom = page.getByRole('slider', { name: 'Zoom from galaxy scale to solar neighborhood' })
  await zoom.fill('88')
  await expect(page.getByText('100 ly')).toBeVisible()
  await expect(page.getByText(/View radius:/)).toBeVisible()
})

test('mobile layout keeps the panel usable', async ({ page }, testInfo) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Milky Way Learning Map' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Start' })).toBeVisible()
  await page.waitForTimeout(900)
  const screenshot = await page.screenshot({ path: `public/screenshots/milky-way-${testInfo.project.name}.png`, fullPage: true })
  expect(countBrightPixels(screenshot)).toBeGreaterThan(9000)
  await testInfo.attach('milky-way-mobile', { body: screenshot, contentType: 'image/png' })
})

test('search opens solar system and exoplanet panels', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.data-stats strong').filter({ hasText: '6,292' })).toBeVisible()

  const search = page.getByRole('textbox', { name: 'Search planets, exoplanets, nebulae, and discoveries' })
  await search.fill('Earth')
  await page.getByRole('button', { name: /Earth planet/ }).click()
  await expect(page.getByRole('heading', { name: 'Earth' })).toBeVisible()
  await expect(page.getByText('1 AU from the Sun')).toBeVisible()

  await search.fill('Proxima Cen b')
  await page.getByRole('button', { name: /Proxima Cen b exoplanet/ }).click()
  await expect(page.getByRole('heading', { name: 'Proxima Cen b' })).toBeVisible()
  await expect(page.getByText(/light-years from the Sun, around Proxima Cen/)).toBeVisible()
})
