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
  'Fermi Bubble North',
  'Fermi Bubble South',
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

test('cinematic navigation, time simulation, focus mode, and required screenshots work', async ({ page }, testInfo) => {
  test.setTimeout(90_000)
  test.skip(testInfo.project.name !== 'chromium', 'Required screenshot pass is desktop-only; mobile is covered by layout and search smoke tests.')
  await page.goto('/')
  await expect(page.locator('canvas')).toBeVisible()
  await page.waitForTimeout(900)

  let shot = await page.screenshot({ path: 'public/screenshots/full-galaxy-view.png', fullPage: true })
  expect(countBrightPixels(shot)).toBeGreaterThan(20000)
  await testInfo.attach('full-galaxy-view', { body: shot, contentType: 'image/png' })

  await page.getByRole('button', { name: 'Edge-on galaxy view' }).click()
  await page.waitForTimeout(1600)
  shot = await page.screenshot({ path: 'public/screenshots/edge-on-galaxy-view.png', fullPage: true })
  expect(countBrightPixels(shot)).toBeGreaterThan(14000)
  await testInfo.attach('edge-on-galaxy-view', { body: shot, contentType: 'image/png' })

  const search = page.getByRole('textbox', { name: 'Search planets, exoplanets, nebulae, and discoveries' })
  await search.fill('Proxima Centauri')
  await page.getByRole('button', { name: /Proxima Centauri star/ }).click()
  await expect(page.getByRole('heading', { name: 'Proxima Centauri' })).toBeVisible()
  await expect(page.getByText(/HYG Cartesian velocity/)).toBeVisible()

  await search.fill('Proxima Cen b')
  await page.getByRole('button', { name: /Proxima Cen b exoplanet/ }).click()
  await expect(page.getByRole('heading', { name: 'Proxima Cen b' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Return' })).toBeVisible()
  await page.waitForTimeout(2000)
  shot = await page.screenshot({ path: 'public/screenshots/selected-exoplanet.png', fullPage: true })
  expect(countBrightPixels(shot)).toBeGreaterThan(12000)
  await testInfo.attach('selected-exoplanet', { body: shot, contentType: 'image/png' })

  await page.getByRole('button', { name: 'Object focus' }).click()
  await expect(page.getByLabel('Proxima Cen b object focus mode').getByRole('heading', { name: 'Proxima Cen b' })).toBeVisible()
  await expect(page.getByText(/Artist’s visualization/)).toBeVisible()
  shot = await page.screenshot({ path: 'public/screenshots/close-planet-focus-mode.png', fullPage: true })
  expect(countBrightPixels(shot)).toBeGreaterThan(10000)
  await testInfo.attach('close-planet-focus-mode', { body: shot, contentType: 'image/png' })
  await page.getByRole('button', { name: 'Close object focus mode' }).click()

  await page.getByRole('button', { name: 'Return' }).click()
  await page.waitForTimeout(900)

  await search.fill('Earth')
  await page.getByRole('button', { name: /Earth planet/ }).click()
  await expect(page.getByRole('heading', { name: 'Earth' })).toBeVisible()
  await page.getByRole('slider', { name: 'Zoom from galaxy scale to solar neighborhood' }).fill('90')
  await page.waitForTimeout(1200)
  shot = await page.screenshot({ path: 'public/screenshots/solar-neighborhood.png', fullPage: true })
  expect(countBrightPixels(shot)).toBeGreaterThan(12000)
  await testInfo.attach('solar-neighborhood', { body: shot, contentType: 'image/png' })

  await page.getByRole('combobox', { name: 'Simulation time scale' }).selectOption('100000')
  await expect(page.getByText(/Simulation offset/)).toBeVisible()
  await page.waitForTimeout(1200)
  shot = await page.screenshot({ path: 'public/screenshots/accelerated-time-simulation.png', fullPage: true })
  expect(countBrightPixels(shot)).toBeGreaterThan(12000)
  await testInfo.attach('accelerated-time-simulation', { body: shot, contentType: 'image/png' })

  await page.getByRole('button', { name: 'Present' }).click()
  await expect(page.getByText(/Simulation offset/)).not.toBeVisible()

  await search.fill('Sagittarius A')
  await page.getByRole('button', { name: /Sagittarius A\* core/ }).click()
  await expect(page.getByRole('heading', { name: 'Sagittarius A*' })).toBeVisible()

  await search.fill('Orion Spur')
  await page.getByRole('button', { name: /Orion Spur arm/ }).click()
  await expect(page.getByRole('heading', { name: 'Orion Spur' })).toBeVisible()

  await search.fill('Fermi Bubble North')
  await page.getByRole('button', { name: /Fermi Bubble North region/ }).click()
  await expect(page.getByRole('heading', { name: 'Fermi Bubble North' })).toBeVisible()
  await page.waitForTimeout(1400)
  shot = await page.screenshot({ path: 'public/screenshots/fermi-bubble-view.png', fullPage: true })
  expect(countBrightPixels(shot)).toBeGreaterThan(12000)
  await testInfo.attach('fermi-bubble-view', { body: shot, contentType: 'image/png' })

  await search.fill('Fermi Bubble South')
  await page.getByRole('button', { name: /Fermi Bubble South region/ }).click()
  await expect(page.getByRole('heading', { name: 'Fermi Bubble South' })).toBeVisible()
})
