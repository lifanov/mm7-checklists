from playwright.sync_api import sync_playwright, expect
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        print("Navigating to app...")
        page.goto("http://localhost:3000")

        # Check if we need to create a profile (if not already there from previous run)
        if page.get_by_text("Please select or create a profile.").is_visible():
            print("Creating new profile...")
            page.fill("input[placeholder='New Profile...']", "Test Profile")
            page.click("button:text('Create')")

        # Wait for content to load
        page.wait_for_selector("h1")

        print("Verifying Character View...")
        # Navigate to Character 1 (Tab 4)
        page.locator("button.tab").nth(4).click()

        # Check skill links for a Magic Skill
        print("Checking Fire Skill Links...")
        # Since Character 1 is a Knight by default (set in AppContext), it doesn't have Magic skills.
        # We need to change the class to something with Magic, e.g., Sorcerer.

        # Go to Party Config
        print("Navigating to Party Config...")
        page.locator("button.tab").first.click()

        # Change Character 1 Class to Sorcerer
        print("Changing Char 1 to Sorcerer...")
        char1_card = page.locator(".char-card").nth(0)
        char1_card.locator("select").select_option("sorcerer")

        # Wait a bit
        time.sleep(0.5)

        # Go back to Character 1
        print("Navigating back to Character 1...")
        page.locator("button.tab").nth(4).click()

        # Click 'Fire'
        print("Clicking Fire Skill...")
        # Note: The button text is "Fire"
        page.get_by_role("button", name="Fire", exact=True).click()

        # Verify Trainer Modal
        modal = page.locator("div[style*='position: fixed']")
        expect(modal).to_be_visible()
        expect(modal).to_contain_text("Trainers for Fire")
        expect(modal).to_contain_text("Lisha Redding") # Expert

        # Take screenshot of Magic Trainer
        page.screenshot(path="verification/magic_trainer.png")

        print("Verification Complete.")
        browser.close()

if __name__ == "__main__":
    run()
