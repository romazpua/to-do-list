import React, {useState} from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {

    const [content, setContent] = useState('')
    const [showToolbar, setShowToolbar] = useState(true)
    const modules = {
        toolbar: true
    }
    const handleToolbar = () => {
        setShowToolbar(!showToolbar)
    }
    const handleChange = (value) => {
        setContent(value)
    }
    
    return (
        <div>
            <button onClick={handleToolbar}>ToolBar</button>
            <ReactQuill
                style={{background: 'white'}}
                theme="snow"
                value={content}
                onChange={handleChange}
                modules={modules}
                readOnly={false}/>
        </div>
    );
};

export default QuillEditor;