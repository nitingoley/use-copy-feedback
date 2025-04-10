import { useState } from "react";

type Options = {
  timeout?: number;
  onCopy?: () => void;
  successText?: string;
  resetText?: string;
  autoReset?: boolean;
  format?: "text/plain" | "text/html";
};

function useCopyFeedback(text: string, options: Options = {}) {
  const {
    timeout = 1500,
    onCopy,
    successText = "Copied!",
    resetText = "Copy",
    autoReset = true,
    format = "text/plain",
  } = options;

  const [copied, setCopied] = useState(false);
  const [feedbackText, setFeedbackText] = useState(resetText);

  const copy = async () => {
    try {
      const blob = new Blob([text], { type: format });
      const data = [new ClipboardItem({ [format]: blob })];
      await navigator.clipboard.write(data);

      setCopied(true);
      setFeedbackText(successText);
      onCopy?.();

      if (autoReset) {
        setTimeout(() => {
          setCopied(false);
          setFeedbackText(resetText);
        }, timeout);
      }
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const reset = () => {
    setCopied(false);
    setFeedbackText(resetText);
  };

  return { copied, copy, reset, feedbackText };
}

export { useCopyFeedback };
