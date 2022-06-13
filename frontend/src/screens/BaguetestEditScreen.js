import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailsBaguetest, updatedBaguetest } from "../actions/baguetestActions";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import NavBar from "../componnent/Navbar";
export default function BaguetestEditScreen(props)
{
const params=useParams();
const {id: baguetestId}=params;
const navigate= useNavigate();
const [name, setName] = useState('');
const [displayhome, setDisplayhome] = useState('');
const [masse, setMasse] = useState('');
const [nbrpiere, setNbrpiere] = useState('');
const [choicecarat, setChoicecarat] = useState('');
const [simpleproduct, setSimpleproduct] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');
const [categorie, setCategorie] = useState('');
const [countInStock, setCountInStock] = useState('');
const [brand, setBrand] = useState('');
const [description, setDescription] = useState('');
const baguetestDetails = useSelector((state) => state.baguetestDetails);
  const { loading, error, baguetest } = baguetestDetails;

  const dispatch = useDispatch();
  const baguetestUpdate = useSelector((state) => state.baguetestUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = baguetestUpdate;

  useEffect(() => {
    if (successUpdate) {
        navigate('/baguetestlist');
      }
    if (!baguetest || baguetest._id !== baguetestId) {
      dispatch(detailsBaguetest(baguetestId));
    } else {
      setName(baguetest.name);
      setPrice(baguetest.price);
      setImage(baguetest.image);
      setCategorie(baguetest.categorie);
      setCountInStock(baguetest.countInStock);
      setBrand(baguetest.brand);
      setDescription(baguetest.description);
      setNbrpiere(baguetest.nbrpiere);
      setMasse(baguetest.masse);
      setDisplayhome(baguetest.displayhome);
      setChoicecarat(baguetest.choicecarat);
      setSimpleproduct(baguetest.simpleproduct);
    }
  }, [baguetest, dispatch, baguetestId, successUpdate, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
        updatedBaguetest({
          _id: baguetestId,
          name,
          price,
          image,
          categorie,
          brand,
          countInStock,
          description,
          displayhome,
          nbrpiere,
          masse,
          simpleproduct,
          choicecarat,
        })
      );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div className="aboutmain">
      <header className='head' >
      <NavBar/>
              </header>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {baguetestId}</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
            <label htmlFor="masse">Poids</label>
              <input
                id="masse"
                type="text"
                placeholder="Enter poids"
                value={masse}
                onChange={(e) => setMasse(e.target.value)}
              ></input>
              </div>
              <div> <label htmlFor="nbrpiere">Nombre de piere</label>
              <input
                id="nbrpiere"
                type="text"
                placeholder="Enter Nombre de piere"
                value={nbrpiere}
                onChange={(e) => setNbrpiere(e.target.value)}
              ></input>
              </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
              ></input>
              </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="choicecarat">Disponible on tout carat</label>
              <input
                id="choicecarat"
                type="checkbox"
                checked={choicecarat}
                onChange={(e) => setChoicecarat(e.target.checked)}
              ></input>
            </div>
            
            <div>
              <label htmlFor="simpleproduct">simple produit</label>
              <input
                id="simpleproduct"
                type="checkbox"
                checked={simpleproduct}
                onChange={(e) => setSimpleproduct(e.target.checked)}
              ></input>
            </div>
            
            <div>
              <label htmlFor="displayhome">Afficher dans la page d'acueil</label>
              <input
                id="displayhoma"
                type="checkbox"
                checked={displayhome}
                onChange={(e) => setDisplayhome(e.target.checked)}
              ></input>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}