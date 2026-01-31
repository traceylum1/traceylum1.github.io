import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownPost({src}) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(src).then(res => res.text()).then(setContent);
    }, [src]);

    return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default MarkdownPost;