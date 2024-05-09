import { useState } from 'react'
import {FaFire} from 'react-icons/fa'
import './App.css'
import {marked} from "marked";
import {Button, Alert} from 'react-bootstrap';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  breaks: true
})

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown)
  const updateMarkdownText = (event) => {
    setMarkdownText(event.target.value);
  }

  return (
    <div className="background">
      <h1 style={{ textAlign: 'center'}}>Markdown Previewer </h1>
      <div className='box-container'>
          {/* <div className="toolbar">
            <div className='editorWrapper'>
            <div className="toolbar">
              <FaFire size="10" style={{marginRight: "10px"}}/>
              <h4>Editor</h4>
            </div> 
          </div>
          </div> */}
          <textarea name="editor" id="editor" type="text" onChange={updateMarkdownText} value={markdownText}></textarea>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdownText)}}></div>
      </div>
    </div>
  );
}

export default App
