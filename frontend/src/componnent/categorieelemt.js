import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listBaguestestCategories } from "../actions/baguetestActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
export default function Categorieelemt()
{  
     const dispatch = useDispatch();
    const baguetestCategorieList = useSelector((state) => state.baguetestCategorieList);
    const {
      loading: loadingCategories,
      error: errorCategories,
      categories,
    } =  baguetestCategorieList;
    useEffect(() => {
      dispatch(listBaguestestCategories ());
    }, [dispatch]);
return(
    <div>
          <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Nos Categorie</a>
    <div class="dropdown-content">
    {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/categorie/${c}`}
                   
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
    </div>
  </li>       
    </div>
);
};