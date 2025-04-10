import { useCallback , useState } from "react";

function useCopyFeedback(text: string, delay=1500) {
    const[copied , setCopied] = useState(false);

    const copy = useCallback(()=>{
        navigator.clipboard.writeText(text).then(()=>{
            setCopied(true);
            setTimeout(()=> setCopied(false), delay);
        })
    },[text , delay]);

    return {copied , copy};
};

export {useCopyFeedback};