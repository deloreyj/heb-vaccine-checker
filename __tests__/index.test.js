describe("Google", () => {
  beforeAll(async () => {
    await page.goto("https://vaccine.heb.com/scheduler");
  });

  it("shoud be out of appointments", async () => {
    await expect(page).toMatch(
      "There are no appointments available, but we add new spots as we receive more vaccines. Please check back for updates."
    );
  });
});

// 1
