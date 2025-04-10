# ✨ use-copy-feedback

A lightweight React hook to copy text to clipboard and show instant feedback like “Copied!”.  
Perfect for buttons, tooltips, toast notifications, and more.

[![NPM Version](https://img.shields.io/npm/v/use-copy-feedback.svg)](https://www.npmjs.com/package/use-copy-feedback)
[![License](https://img.shields.io/npm/l/use-copy-feedback.svg)](./LICENSE)

---

## 🚀 Features

- ✅ Simple API: Just `copy()` and `copied`
- 🔁 Auto-reset after delay
- ⚙️ Customizable delay (default: 1500ms)
- 🧠 Built with React & TypeScript
- 📦 Super lightweight (zero dependencies)

---

## 📦 Installation

```bash
npm install use-copy-feedback
# or
yarn add use-copy-feedback
# or
pnpm add use-copy-feedback
🧠 Usage
tsx
Copy
Edit
import { useCopyFeedback } from "use-copy-feedback";

export default function CopyButton() {
  const { copied, copy } = useCopyFeedback("Hello world!");

  return (
    <button onClick={copy}>
      {copied ? "✅ Copied!" : "📋 Copy"}
    </button>
  );
}

⚙️ API
useCopyFeedback(text: string, delay?: number)
Param	Type	Description
text	string	The text to be copied to clipboard
delay	number	(Optional) Reset delay in milliseconds
Returns:

ts
Copy
Edit
{
  copied: boolean;
  copy: () => void;
}
📸 Screenshot (Example UI)
Coming soon... (or embed a Vercel demo here)

📁 Project Structure
pgsql
Copy
Edit
use-copy-feedback/
├── src/
│   └── useCopyFeedback.ts
├── dist/
├── tsconfig.json
├── package.json
└── README.md

👨‍💻 Author
Nitin Goley
GitHub • LinkedIn

🧪 License
MIT — Feel free to use, modify & contribute!

🌟 Star This Repo
If you like this package, consider starring it 🙌

bash
Copy
Edit
git clone https://github.com/nitingoley/use-copy-feedback