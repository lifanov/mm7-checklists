from playwright.sync_api import sync_playwright, expect
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        print("Navigating to app...")
        page.goto("http://localhost:3000")

        # Check if we need to create a profile
        if page.get_by_text("Please select or create a profile.").is_visible():
            print("Creating new profile...")
            page.fill("input[placeholder='New Profile...']", "Test Profile")
            page.click("button:text('Create')")

        # Wait for content to load
        page.wait_for_selector("h1")

        print("Verifying Party Config (Party Stage)...")
        # Check for Party Stage dropdown
        expect(page.get_by_text("Party Stage:")).to_be_visible()

        # Select 'Light' path
        print("Selecting Light Path...")
        page.select_option("div.config-section select", "Light")

        # Check if titles updated (Character 1 should be 'Champion' if Knight is default)
        time.sleep(1) # Allow React to update

        # Click the first character's title (should be Champion)
        print("Clicking Character 1 Title...")
        # Locating the button. It's inside the first .char-card
        char1_card = page.locator(".char-card").nth(0)
        title_btn = char1_card.locator("button.link-button")

        # Get text content
        title_text = title_btn.text_content()
        print(f"Title text: {title_text}")

        title_btn.click()

        # Verify modal appears
        print("Verifying Promotion Modal...")
        modal = page.locator("div[style*='position: fixed']")
        expect(modal).to_be_visible()
        # Verify modal content - Champion is Knight's Light title
        expect(modal).to_contain_text("Promotion: Champion")
        expect(modal).to_contain_text("NPC: Leda Rowan")

        # Close modal
        modal.get_by_text("Close").click()
        expect(modal).not_to_be_visible()

        print("Verifying Alchemy View...")
        # Navigate to Alchemy
        page.get_by_text("Alchemy").click()
        expect(page.get_by_text("Permanent Stat Boosts (Pure Potions)")).to_be_visible()
        expect(page.get_by_text("Recipe Reference")).to_be_visible()

        # Take screenshot of Alchemy
        page.screenshot(path="verification/alchemy.png")

        print("Verifying Character View...")
        # Navigate to Character 1
        page.locator("button.tab").nth(4).click() # 0-3 are main tabs, 4 is Char 1

        # Check skill links
        print("Checking Skill Links...")
        # Click 'Sword' (Knight has Sword)
        # Note: The button text is "Sword"
        page.get_by_role("button", name="Sword").click()

        # Verify Trainer Modal
        expect(modal).to_be_visible()
        expect(modal).to_contain_text("Trainers for Sword")

        # Take screenshot of Character View with Modal
        page.screenshot(path="verification/character_trainer.png")

        print("Verification Complete.")
        browser.close()

if __name__ == "__main__":
    run()
