import { leapwork } from "./leapwork";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pwdom34q00
await leapwork.step("Click the App Launcher button in Salesforce Setup.", async () => {
    // Click div
    await page.getByRole('button', { name: 'App Launcher' }).click();
}, { action: "click", relativeXpath: ".//div/div/div[@aria-label=\"App\"]/one-app-launcher-header/button/div" });

// ai-studio-step-id: pw1l719nf0
await leapwork.step("Click the Sales Operations option in the Apps list", async () => {
    // Click paragraph
    await page.getByRole('option', { name: 'Sales Operations' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"07pUD0000003pE6YAI\"]/div/lightning-formatted-rich-text/span/p" });

// ai-studio-step-id: pw5oobug00
await leapwork.step("Click the Products link in the global navigation.", async () => {
    const productsLink = page.getByRole('link', { name: 'Products', exact: true });
    await expect(productsLink).toHaveCount(1);
    await Promise.all([
      page.waitForTimeout(1000),
      productsLink.click({ force: true }),
    ]);
}, { action: "click", relativeXpath: ".//one-app-nav-bar/nav[@aria-label=\"Global\"]/div/one-app-nav-bar-item-root[4]/a/span" });

// ai-studio-step-id: pw1143k8l0
await leapwork.step("Click the New button on the Recently Viewed Products page", async () => {
    // Click "New"
    await page.getByRole('button', { name: 'New' }).click();
}, { action: "click", relativeXpath: ".//div[3]/div/ul/li/a/div" });

// ai-studio-step-id: pwt85b7a00
await leapwork.step("Click the Product Currency dropdown on the New Product form", async () => {
    const dropdown = page.getByRole('combobox', { name: 'Product Currency', exact: true });
    await expect(dropdown).toHaveCount(1);
    await dropdown.evaluate((el) => el.scrollIntoView());
    await dropdown.click({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"combobox-button-335\"]" });

// ai-studio-step-id: pw1fottwp0
await leapwork.step("Set \"Active\" checkbox", async () => {
    // const checkbox = page.getByLabel("Active", { exact: true });
    // await expect(checkbox).toHaveCount(1);
    // await checkbox.setChecked(true, { force: true });
  //   const frame = page.frame({ name: 'marketing' });

  // if (frame) {
  //   await frame.waitForLoadState('domcontentloaded');
  //   logInfo(frame.url());
  //   logInfo(frame.isDetached());

  //   const parent = frame.parentFrame();
  //   const children = frame.childFrames();
  // }
  const pages = context.pages();

logInfo(`Open tabs: ${pages.length}`);

  for (const [index, currentPage] of pages.entries()) {
    console.log(index, await currentPage.title(), currentPage.url());
  }
}, { action: "click", relativeXpath: "//*[@id=\"checkbox-321\"]" });
