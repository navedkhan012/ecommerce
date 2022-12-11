import React, {   useState } from "react";
import {  Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../actions/products";
import { createCategoryList } from "./Category";
import Layout from "./Layout";
function Products() {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  console.log('categories', categories)

  const [name, setName] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');
  const [productPicture, setproductPicture] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    const from = new FormData()
    from.append('name', name)
    from.append( 'price', price)
    from.append( 'description', description)
    from.append( 'category', category)

    for (const pic of productPicture) {
     from.append( 'productPicture', pic)
    }

    dispatch(createProduct(from))
    setShow(false)
  };
  const handleShow = () => setShow(true);
  

  const handleProductPictures = (e) => {
    setproductPicture([
      ...productPicture,
      e.target.files[0]
    ])
  }

   

  return (
    <>
    <Layout>
      <h2>products</h2>
      <Button onClick={handleShow}>add</Button>
    </Layout>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </Form.Group>
            <Form.Label>category</Form.Label>
            <Form.Select 
              value={category}
             onChange={(e) => setcategory(e.target.value)}>
              <option>choose Sub category</option>
              {categories.categories && categories.categories.categoryList && createCategoryList(categories.categories.categoryList).map((data)=>{
                return (
                  <option key={data.id} value={data.value}>{data.name}</option> 
                )
              }) }
            </Form.Select>
             
              {
                productPicture.length > 0 && 
                productPicture.map((pic, index) => <div key={index}>{pic.name}</div>)
              }
            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
              <Form.Label>Add Product image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Category Name"
                name="productPicture"
                onChange={handleProductPictures}
              />
            </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>

    )
}

export default Products;
