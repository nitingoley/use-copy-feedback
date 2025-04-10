
# use-copy-feedback

A lightweight React hook to copy text to clipboard and show instant feedback like “Copied!”.  
Perfect for buttons, tooltips, toast notifications, and more.


[![NPM Version](https://img.shields.io/npm/v/use-copy-feedback.svg)](https://www.npmjs.com/package/use-copy-feedback)  

[![License](https://img.shields.io/npm/l/use-copy-feedback.svg)](./LICENSE)


## Features

- ✅ Simple API: Just copy() and copied
- 🔁 Auto-reset after delay
- ⚙️ Customizable delay (default: 1500ms)
- 📦 Super lightweight (zero dependencies)
- 🧠 Built with React & TypeScript


## Installation

npm install use-copy-feedback
# or
yarn add use-copy-feedback
# or
pnpm add use-copy-feedback
## License

[MIT](https://choosealicense.com/licenses/mit/)

MIT — Feel free to use, modify & contribute!
## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


# Hi, I'm Nitingoley! 👋


## Support

For support, email nitingoley42@gmail.com or join our Slack channel.


## Usage/Examples

```javascript
import { useCopyFeedback } from "use-copy-feedback";

export default function CopyButton() {
  const { copied, copy } = useCopyFeedback("Hello world!");

  return (
    <button onClick={copy}>
      {copied ? "✅ Copied!" : "📋 Copy"}
    </button>
  );
}


⚙️ Usage
Here's how to use use-copy-feedback in your React app:

import React from "react";
import { useCopyFeedback } from "use-copy-feedback";

function App() {
  const { copy, copied } = useCopyFeedback("Hello from use-copy-feedback!", 2000);

  return (
    <div style={styles.container}>
      <h1>📋 use-copy-feedback Demo</h1>
      <button onClick={copy} style={styles.button}>
        {copied ? "✅ Copied!" : "Click to Copy"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f4f4",
    fontFamily: "sans-serif",
  },
  button: {
    padding: "0.8rem 1.2rem",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "0.5rem",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
    transition: "background 0.3s",
  },
};

export default App;