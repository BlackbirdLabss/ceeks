# cookiesstealer chrome extension
Stealer all cookies from all tabs.

## Cookie Stealing Extension Demonstration
This extension is designed to demonstrate a security vulnerability related to the misuse of ```chrome.runtime.onMessage.addListener()``` and ```chrome.cookies.getAll()``` APIs.

**How It Works**
1. The extension is installed on the victim's computer with developer mode enabled.
2. Once active, the extension listens for messages via ```chrome.runtime.onMessage.addListener()```.
3. When the user browses a website, the extension sends a message to the background script requesting cookies for the current tab's URL.
4. The background script retrieves all cookies for the specified URL using ```chrome.cookies.getAll()``` and sends the data back to the content script.
5. The content script then exfiltrates the stolen cookies to an external server controlled by the attacker.
**Impact**
- This demonstrates how malicious extensions can steal session cookies or sensitive data stored in cookies, leading to unauthorized access or other malicious activities.
- This requires the victim to have installed the malicious extension with developer mode enabled.
Disclaimer
This extension is for educational purposes to illustrate potential vulnerabilities. Do not use it for unauthorized or malicious purposes.

