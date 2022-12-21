import React from 'react';
import LeftSidebar from '../../components/Navbar/Sidebar/LeftSidebar';
import TagList from './TagList';
import './Tags.css'

export const Tags = () => {

  const tagList = [{
    id: 1,
    tagName: 'javascript',
    tagDesc:'Lorem ipsum dolor sit  laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem ratione, aperiam, voluptates explicabo magni voluptate beatae sit animi ex eveniet eos.'
  },
  {
    id: 2,
    tagName: 'java',
    tagDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, harum dignissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem rationenimi ex eveniet eos.'
    },
    {
      id: 3,
      tagName: 'c++',
      tagDesc:' Corrupti, harum dignissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem ratione, aperiam, voluptates explicabo magni voluptate beatae sit animi ex eveniet eos.'
    },
    {
      id: 4,
      tagName: 'React.js',
      tagDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, harum dignissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem ratione, aperiam, .'
    },
    {
      id: 5,
      tagName: 'node.js',
      tagDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, harum dignissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem eveniet eos.'
    },
    {
      id: 6,
      tagName: 'python',
      tagDesc:'Lorem i harum dignissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem ratione, aperiam, voluptates explicabo magni voluptate beatae sit animi ex eveniet eos.'
    },
    {
      id: 7,
      tagName: 'html',
      tagDesc:'Lognissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem ratione, aperiam, voluptates explicabo magni voluptate beatae sit animi ex eveniet eos.'
    },
    {
      id: 8,
      tagName: 'android',
      tagDesc:'Lorem  adipisicing elit. Corrupti, harum dignissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem ratione, aperiam, voluptates explicabo magni voluptate beatae sit animi ex eveniet eos.'
    },
    {
      id: 9,
      tagName: 'php',
      tagDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, harum dignissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem rbeatae sit animi ex eveniet eos.'
    },
    {
      id: 10,
      tagName: 'HTML',
      tagDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, harum dignissimos voluptates laborum veniam dolores nisi delectus non nemo modi, fugiat ut! Quidem ratioeatae sit animi ex eveniet eos.'
    },]

  return (
      <div className='home-container-1'>
          <LeftSidebar />
          <div className='home-container-2'>
              <h1 className='tags-h1'>Tags</h1>
              <p tags-p> A tag is a label or keyboard that categorizes your question with other ,similar questions</p>
              <p tags-p>using the right tags makes it easier for others to find and answer your question.</p>
        <div className='tags-list-container'>
          {
            tagList.map((tag) => (
              <TagList tag={tag} key={tagList.id} />
            ))
          }
          
              </div>
      
          </div>
          
    </div>
  )
}
