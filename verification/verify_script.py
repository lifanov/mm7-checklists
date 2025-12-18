
from playwright.sync_api import Page, expect, sync_playwright

def verify_checklist(page: Page):
    # 1. Arrange: Go to the app homepage
    page.goto("http://localhost:3000")

    # 2. Assert: Verify Sidebar is present
    expect(page.get_by_role("heading", name="Profiles")).to_be_visible()

    # 3. Act: Create a profile
    page.get_by_placeholder("New Profile...").fill("Verification Run")
    page.get_by_role("button", name="Create").click()

    # 4. Assert: Main Heading is now visible
    expect(page.get_by_role("heading", name="Might & Magic VII Tracker")).to_be_visible()

    # 5. Act: Configure Party
    # Change Alignment to Light
    page.get_by_label("Alignment Path:").select_option("Light")

    # Change Character 1 Class to Sorcerer
    # Use nth(0) because there are 4 chars
    page.locator(".char-card").nth(0).get_by_role("combobox").select_option("sorcerer")
    page.locator(".char-card").nth(0).get_by_role("textbox").fill("Gandalf")

    # 6. Act: Navigate to Character Tab
    # The tab button text will be "Gandalf (Sorcerer)"
    page.get_by_role("button", name="Gandalf (Sorcerer)").click()

    # 7. Assert: Check Spell Book visibility (Light magic should be visible for Sorcerer?)
    # Sorcerer has Light GM.
    expect(page.get_by_role("heading", name="Light")).to_be_visible()

    # 8. Act: Toggle a skill
    # Find a checkbox in the skill table and click it.
    page.locator(".skill-matrix input[type=checkbox]").first.click()

    # 9. Screenshot
    page.screenshot(path="verification/verification.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_checklist(page)
        finally:
            browser.close()
