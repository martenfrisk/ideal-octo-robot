// import { render } from "@testing-library/svelte"
import { chromium, Browser, Page } from 'playwright-chromium'
// import App from "../App.svelte"

let browser: Browser, page: Page

beforeAll(async () => {
  browser = await chromium.launch()
})
afterAll(async () => {
  await browser.close()
})
beforeEach(async () => {
  page = await browser.newPage()
})
afterEach(async () => {
  await page.close()
})

it("Home page should have the correct title", async () => {
  await page.goto('http://localhost:3000')
  expect(await page.title()).toBe("Svelte + TS + Vite App");
});

// test("should render", async () => {
//   const browser = await page.$eval('main', (el) => el.innerHTML)
//   expect(browser).toContain('Chrome')
// })