import  { useEffect, useState } from "react";
// import { ADDPRODUCT, UPDATEPRODUCT } from "../Api";
// import { GETPRODUCT } from "../Api";
// import { DELETEPRODUCT } from "../Api";
// import { SEARCHPRODUCT } from "../Api";
import ReactPaginate from "react-paginate";
import { Modal, Button, Form } from "react-bootstrap";
function MyVerticallyCenteredModal(props){
  const product = props.products;
  const onHide=props.onHide
  const setModalShow=props.setModalShow
  const [values,setValues] = useState({
    ProductName: "",
    ProductType: "",
    ProductDescription: "",
    ProductQuantity: "",
    ProductPrice: "",
  });
//=============================getid===================================
  useEffect(()=>{
     console.log  ("updateid", props?.updateid)
     let productupdate = product[props.updateid]
     setValues({...productupdate})
     },[props?.updateid])

   const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  //===============================addData==========================
  const addData =async(e) => {
    e.preventDefault();
    onHide()
    try{
     const userId= JSON.parse(localStorage.getItem("Token"));
     console.log(userId,'userr')
        let newData=[...product,values];
       props.setProducts(newData)
        console.log("",newData)
     }
     catch (error){
        console.log("don't fill the values")               
     }
    }
    //============================updatedata====================================
  const UpdateData= async()=>{
        let index = product[props?.updateid];
        let newProduct=[...product];
        newProduct[props?.updateid]=values
        props.setProducts(newProduct)
        onHide()
      }
  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.show==='add'?"ADD PRODUCT":"UPDATE PRODUCT"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              placeholder="productName"
              name="ProductName"
              value={values.ProductName}
              onChange={handleChange}
            />
            <br/>
            <br/>
            <label htmlFor="">ProductType</label>
            <input
              type="text"
              placeholder=" ProductType"
              value={values.ProductType}
              name="ProductType"
              onChange={handleChange}
            />
            <br/>
            <br/>
            <label htmlFor="">Product Description</label>
            <input
              type="text"
              placeholder="ProductDescription"
              name="ProductDescription"
              value={values.ProductDescription}
              onChange={handleChange}
            />
            <br/>
            <br/>

            <label htmlFor="">Product Quantity</label>
            <input
              type="number"
              placeholder="ProductQuantity"
              name="ProductQuantity"
              value={values.ProductQuantity}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor=""> Product Price</label>
            <input
              type="number"
              placeholder=" ProductPrice"
              name="ProductPrice"
              value={values.ProductPrice}
              onChange={handleChange}
            />
            <br />
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {props.show==='add'?(
          <Button onClick={addData}>ADD DATA</Button>):
          <Button onClick={UpdateData}>UPDATE DATA</Button>}
        </Modal.Footer>
      </Modal>
    );
   };
  const AddProduct = () => {
  const [products,setProducts]=useState([])
  const [data,setData]=useState([])
  const [modalShow, setModalShow] = useState('');
  const [updateId,setUpdateId]=useState();
  // const [page, setPage] = useState(5);
  // const [pageNumber, setPageNumber] = useState(0);
  // const [currentPage, setCurrentPage] = useState();
  // const [checked, setChecked] = useState(false);
  // const perPage = 4;

//=============================getData product==========================================
//   useEffect(()=>{
//     getProducts();
//  },[])
//   const getProducts= async()=>{
//   const result= await GETPRODUCT();
//    setProducts(result.data);
//   }
//=============================DELETE DATA====================================
  const deleteItem =(id)=>{
    let  deleteProduct = products.filter((elm,index)=>{
       return index!==id
    })
        //  console.log("data",id)
         setProducts(deleteProduct)
      //const res= await DELETEPRODUCT(id);
      //console.log(res,'resssf')
//       getProducts();
}
//==================================searchdata==================================
     const SearchData= async(key)=>{
  //    const res= await SEARCHPRODUCT(key)
  //     console.log(res,'search')
  //     if(res){
  //     setProducts(res.data)
  //     }
  };
     ///============================getid===================================
   const updatehandle=(index)=>{
      setModalShow('edit');
      setUpdateId(index);
     console.log("id",index)
  }
  return (
    <>
     <input type="text" onChange={(e)=>SearchData(e.target.value)} placeholder="searchProduct....."style={{marginLeft:"600px",border:"1px solid black"}}/>
     <table border="1"  style={{ margin: "auto", textAlign: "center",padding:"34px" }}>
      <button className="btn btn-success" onClick={()=>setModalShow('add')}setData={true}>
          ADD PRODUCT
      </button>
        <br/>
       <br />
        <tbody >
        <tr>
            <th>ProductName</th>
            <th>ProductType</th>
            <th>ProductDescription</th>
            <th>ProductQuantity</th>
            <th>ProductPrice</th>
          </tr>
           {products.map((elm,index) => {
            return (
               <tr key={elm._id}>
                <th>{elm.ProductName}</th>
                <th>{elm.ProductType}</th>
                <th>{elm.ProductDescription}</th>
                <th>{elm.ProductQuantity}</th>
                <th>{elm.ProductPrice}</th>
                <button className="btn btn-success" onClick={()=>updatehandle(index)}>UPDATE</button>
                <button
                  className="btn btn-danger"
                  onClick={()=>deleteItem(index)}
                >DELETE </button>
              </tr>
            )
            })}
          </tbody>
          <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    breakLabel={"..."}
                    pageCount={25}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    // onPageChange={(e) => setPageNumber(e.selected)}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"active"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                  />  
                  </table>
        <MyVerticallyCenteredModal
        show={modalShow}
        setProducts={setProducts}
        products={products}
        data={data}
        onHide={() =>setModalShow('')}
        setModalShow={setModalShow}
        updateid={updateId}
      />
    </>
  );
};

export default AddProduct;
