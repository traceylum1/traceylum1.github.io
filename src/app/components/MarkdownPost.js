import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownPost(path) {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(path).then(res => res.text()).then(setContent);
    }, [path]);

    return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default MarkdownPost;