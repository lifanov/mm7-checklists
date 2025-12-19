
from playwright.sync_api import sync_playwright

def verify_skill_limits():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        try:
            print("Navigating...")
            page.goto("http://localhost:5173")

            # Create Profile
            page.get_by_placeholder("New Profile...").fill("Knight Test")
            page.get_by_role("button", name="Create").click()
            page.click("text=Knight Test")

            # Navigate to Char 1 (Knight)
            print("Clicking Char 1 tab...")
            page.click("text=Char 1 (Knight)")

            # Wait for skills table
            page.wait_for_timeout(1000)

            print("Taking screenshot of Knight Skills...")
            page.screenshot(path="verification/knight_skills.png")

            # Change class to Monk for Char 2
            print("Changing Char 2 to Monk...")
            page.click("text=Party Config")
            # Select Character 2 class dropdown.
            # It might be tricky to select specific dropdown.
            # Assuming the second select element corresponds to Char 2
            # Or use locator based on "Character 2" text

            # Locate the select inside the card for Character 2
            # "Character 2" heading, then find select below it?
            # Using xpath or css
            # The screenshot shows "Character 2" header.

            # Let's try to select by label if possible or by order
            selects = page.locator("select") # Assuming class selection is a <select>
            # 0 is Party Stage
            # 1 is Char 1 Class
            # 2 is Char 2 Class
            selects.nth(2).select_option("monk")

            # Check Char 2 tab
            print("Checking Char 2 (Monk)...")
            # The tab text should update to "Char 2 (Monk)"
            page.click("text=Char 2 (Monk)")
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/monk_skills.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error_script.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    verify_skill_limits()
