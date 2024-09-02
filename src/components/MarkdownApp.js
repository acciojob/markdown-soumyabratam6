import React, { useState,useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
const MarkdownApp = () => {
    const[markdown,setMarkdown] = useState();
    const[loading,setLoading] = useState(false)

    const handelCange = (e)=>{
        setLoading(true);
        setMarkdown(e.target.value);
    }

    useEffect(() => {
        if (markdown) {
            setLoading(false);
        }
    }, [markdown])
  return (
    <div className='app'>
        <h1>Markdown Preview Application</h1>
        <div style={{ display: "flex" }}>
        {/* Step 7: Textarea for writing markdown */}
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your markdown here..."
          rows="15"
          cols="50"
        ></textarea>
        
        {/* Step 8: Preview area for rendering markdown as HTML */}
        <div
          className="preview"
          style={{ marginLeft: "20px", border: "1px solid #ddd", padding: "10px" }}
        >
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
      {loading && <p className="loading">Loading preview...</p>}
    </div>
  )
}

export default MarkdownApp