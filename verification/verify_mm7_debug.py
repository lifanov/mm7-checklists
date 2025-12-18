from playwright.sync_api import sync_playwright, expect
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        print("Navigating to app...")
        page.goto("http://localhost:3000")

        print("Waiting for root...")
        page.wait_for_selector("#root")

        print("Waiting for h1...")
        try:
            page.wait_for_selector("h1", timeout=5000)
        except Exception as e:
            print("Timed out waiting for h1. Taking screenshot.")
            page.screenshot(path="verification/error.png")

            # Print console logs
            page.on("console", lambda msg: print(f"Console: {msg.text}"))

            # Print content
            print(page.content())
            raise e

        print("Page loaded successfully.")

        browser.close()

if __name__ == "__main__":
    run()
