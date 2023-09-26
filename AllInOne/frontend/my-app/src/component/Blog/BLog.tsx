import React, { useState } from "react";
import JoditEditor from 'jodit-react';
import { Card, CardBody, Form, Label, Input } from "reactstrap";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";
import { axiosInstance } from "../validate/isAuth";

const StyledCard = styled(Card)`
border: 1px solid #ccc;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
background-color: #fff;
max-width:30
`;
const BlogContainer = styled.div`
& ${StyledCard} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
}
`;


const StyledInput = styled(Input)`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const JoditEditorWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width:50vw;
  height:45vh;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const PublishContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

`;

const PublishLabel = styled(Label)`
  margin-right: 10px; 
`;

const CategorySelect = styled.select`
width: 40%; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
 function Blog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [tags, setTags] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const result = await axiosInstance.get('category')
    console.log(result)
    
  };

  

  return (

    <BlogContainer>
      <StyledCard>
        <CardBody>
          <h3>Blog</h3>
          <Form onSubmit={handleSubmit}>
            <div>
              <StyledInput 
                type="text"
                id="title"
                placeholder="Enter title here"
                value={title}
                onChange={(e:any)=>{setTitle(e.target.value)}}
              />
            </div>
            <div>
              <JoditEditorWrapper>
                <JoditEditor
                  value={content}
                  onChange={(newContent:any)=>{setContent(newContent)}}
                />
              </JoditEditorWrapper>
            </div>
            <div>
              <StyledInput
                type="text"
                id="tags"
                placeholder="Enter tags here"
                value={categoryId}
                onChange={(e:any)=>{setCategoryId(e.target.value)}}
              />
            </div>
            <div>
           
            <PublishContainer>
              <PublishLabel htmlFor="publishToggle">Publish</PublishLabel>
              <FormCheck
                type="switch"
                id="publishToggle"
                label=""
                checked={isPublished}
                onChange={()=>{setIsPublished(!isPublished)}}
              />
            </PublishContainer>
              </div>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </CardBody>
      </StyledCard>
    </BlogContainer>
 
  );

}

export default Blog;
