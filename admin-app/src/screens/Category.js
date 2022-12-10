import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getCategories } from "../actions/category";
import Layout from "./Layout";

function Category() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories)

  const [show, setShow] = useState(false);
  const handleClose = () => {
    const from = new FormData()

    from.append('name', categoryName  )
    from.append( 'parentId', parentCategoryId  )
    from.append( 'categoryImage', categoryImage)

    dispatch(addCategory(from))
    // const cat = {
    //   categoryName,
    //   parentCategoryId,
    //   categoryImage
    // }
    // console.log('cat', cat)

    setShow(false)
  };
  const handleShow = () =>  setShow(true);
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState('');
  const [categoryImage, setCategoryImage] = useState('');

  

  useEffect(()=>{
    dispatch(getCategories())
  }, [dispatch])
  
  const renderCategories = (categories) => {
    let categoriesArr = [];
    for (const category of categories) {
      categoriesArr.push(<li>{category.name} {category.children.length > 0 && <ul>{renderCategories(category.children)}</ul>} </li>)
    }
    return categoriesArr
  }

  const createCategoryList = (categories, options =[]) => {

    for (const category of categories) {
      options.push({
        value: category.id,
        name: category.name
      })
      if(category.children.length > 0){
        createCategoryList(category.children, options)
      }
    }
    return options
  }

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0])
  }

  return (
    <>
    <Layout>
      <Container>
          <Row>
            <Col>
           <h2>category</h2>
           <Button onClick={handleShow}>add</Button>
           <ul>
              {categories.categories.categoryList && renderCategories(categories.categories.categoryList)}
              {categories.categories.categoryList && JSON.stringify(createCategoryList(categories.categories.categoryList))}
           </ul>
           </Col>
          </Row>
        </Container>
    </Layout>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>

            <Form.Select 
              value={parentCategoryId}
            onChange={(e) => setParentCategoryId(e.target.value)}>
              <option>choose Sub category</option>
              {categories.categories.categoryList && createCategoryList(categories.categories.categoryList).map((data)=>{
                return (
                  <option key={data.id} value={data.value}>{data.name}</option> 
                )
              }) }
            </Form.Select>

             <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label>Add Category image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Category Name"
                onChange={(e) => handleCategoryImage(e)}
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleClose)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal></>
    )
}

export default Category;
