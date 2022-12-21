import React from 'react'

function WidgetTags() {
    const tags = ['c', 'css', 'c++', 'java', 'python','javscript','php','node js','react js','express','HTML']
  return (
      <div className='widget-tags'>
          <h4>Watched tags</h4>
          <div className='widget-tags-div'>
              {tags.map((tag) => (
                  <p key={tag}>{tag}</p>
              ))}
          </div>
    </div>
  )
}

export default WidgetTags