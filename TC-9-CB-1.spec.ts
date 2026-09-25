import { leapwork } from "./leapwork";

import { TOTP } from "@assets/TOTP";

// ai-studio-step-id: pw6ktvwc00
await leapwork.step("Open https://orgfarm-7a9f6c7e1b-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home", async () => {
    // [AI Studio self-heal preserved previous code]
    // await page.goto("https://orgfarm-7a9f6c7e1b-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home", { waitUntil: 'load' });
    // [/AI Studio self-heal preserved previous code]
    
    await page.goto('https://orgfarm-7a9f6c7e1b-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home');
});

// ai-studio-step-id: pwgavc1j00
await leapwork.step("Fill the Username field with demo1@leapwork.com", async () => {
    const username = page.getByLabel('Username', { exact: true });
        await username.fill('amku@leapwork.com');
}, { action: "input", relativeXpath: "//*[@id=\"username\"]" });

// ai-studio-step-id: pw1x7bnhc0
await leapwork.step("Fill the Password field with Leapwork@123", async () => {
    const password = page.locator('#password');
        await password.fill('Leapwork@123');
}, { action: "input", relativeXpath: "//*[@id=\"password\"]" });

// ai-studio-step-id: pw64689700
await leapwork.step("Click the Log In button on the Salesforce login form", async () => {
    const loginButton = page.getByRole('button', { name: 'Log In', exact: true });
        await loginButton.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"Login\"]" });

// ai-studio-step-id: pw1km66wu0
await leapwork.step("Use TypeScript asset: TOTP", async () => {
    return await leapwork.asset("57");
}, { action: "asset_reference" });

// ai-studio-step-id: df73d384
await leapwork.step("Use TypeScript asset: TOTP", async () => {
    return await TOTP();
}, { action: "asset_reference" });

// ai-studio-step-id: XS2Lz31L
await leapwork.step("Fill the Password field on the Salesforce login page", async () => {
    const password = page.getByRole('textbox', { name: 'Password', exact: true });
    await expect(password).toHaveCount(1);
    await password.fill(leapwork.variables.getSecret("pwd_XS2Lz31L"));
}, { action: "input", relativeXpath: "//*[@id=\"password\"]" });
