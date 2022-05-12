import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailsDiamant, updatedDiamant } from "../actions/diamantActions";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
export default function DiamantEditScreen(props)
{
const params=useParams();
const {id: diamantId}=params;
const navigate= useNavigate();
const [shape, setShape] = useState('');
const [cut, setCut] = useState('');
const [couleur, setCouleur] = useState('');
const [carat, setCarat] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');
const [countInStock, setCountInStock] = useState('');
const [clarity, setClarity] = useState('');

const diamantDetails = useSelector((state) => state.diamantDetails);
  const { loading, error, diamant } = diamantDetails;

  const dispatch = useDispatch();
  const diamantUpdate = useSelector((state) => state.diamantUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = diamantUpdate;

  useEffect(() => {
    if (successUpdate) {
        navigate('/diamantlist');
      }
    if (!diamant || diamant._id !== diamantId) {
      dispatch(detailsDiamant(diamantId));
    } else {
      setShape(diamant.shape);
      setPrice(diamant.price);
      setImage(diamant.image);
      setCarat(diamant.carat);
      setCountInStock(diamant.countInStock);
      setClarity(diamant.clarity);
      setCouleur(diamant.couleur);
      setCut(diamant.cut);
      
    }
  }, [diamant, dispatch, diamantId, successUpdate, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
        updatedDiamant({
          _id: diamantId,
          shape,
          price,
          image,
          carat,
          countInStock,
          clarity,
          couleur,
          cut,
         
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
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {diamantId}</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="shape">shape</label>
              <input
                id="shape"
                type="text"
                placeholder="Enter shape"
                value={shape}
                onChange={(e) => setShape(e.target.value)}
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
            <label htmlFor="carat">carat</label>
              <input
                id="carat"
                type="text"
                placeholder="Enter carat"
                value={carat}
                onChange={(e) => setCarat(e.target.value)}
              ></input>
              </div>
              <div> <label htmlFor="cut">Cut</label>
              <input
                id="cut"
                type="text"
                placeholder="Enter cut"
                value={cut}
                onChange={(e) => setCut(e.target.value)}
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
              <label htmlFor="couleur">Couleur</label>
              <input
                id="couleur"
                type="text"
                placeholder="Enter couleur"
                value={couleur}
                onChange={(e) => setCouleur(e.target.value)}
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
              <label htmlFor="clarity">clarity</label>
              <input
                id="clarity"
                type="text"
                placeholder="Enter clarity"
                value={clarity}
                onChange={(e) => setClarity(e.target.value)}
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