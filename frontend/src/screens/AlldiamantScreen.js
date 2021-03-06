import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { ListeDiamants } from '../actions/diamantActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import "react-input-range/lib/css/index.css";
import Table from 'react-bootstrap/Table'
import "../styles/listeprod.css";
import Diamant from '../componnent/Diamant';
import MultiRangeSlider from "multi-range-slider-react";
import Service from '../componnent/Service';



 export default function AlldiamantScreen(props) {
  const navigate = useNavigate();
  const { 
    pageNumber = 1,
    cut='all',
    couleur='all',
    clarity='all',
  shape = 'all' ,
  order = 'newest',
  min,
  max
  } = useParams();
  const [minValue, set_minValue] = useState(0);
const [maxValue, set_maxValue] = useState(11);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};

  const dispatch = useDispatch();
  const diamantList = useSelector((state) => state.diamantList);
  const { loading, error, diamants, page, pages } = diamantList;
  const diamantShapeList = useSelector((state) => state.diamantList);

  const {
    loading: loadingShapes,
    error: errorShapes,
    shapes,
  } =diamantShapeList;
  useEffect(() => {
    dispatch(ListeDiamants(
      { 
      shape: shape !== 'all' ? shape : '', cut: cut !== 'all' ? cut : '',
       couleur: couleur !== 'all' ? couleur : '',clarity: clarity !== 'all' ? clarity: '',
      order,  min,
      max, pageNumber}));

  }, [dispatch, order,cut,couleur,clarity, shape,  min,
    max, pageNumber]);
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;

    const filterShape = filter.shape || shape;
    const filterCut = filter.cut || cut;
    const filterCouleur = filter.couleur || couleur;
    const filterClarity = filter.clarity || clarity;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    const sortOrder = filter.order || order;
  
    return `/searchdiamant/shape/${filterShape}/min/${filterMin}/max/${filterMax}/cut/${filterCut}/couleur/${filterCouleur}/clarity/${filterClarity}/order/${sortOrder}/pageNumber/${filterPage}`;
  };
  return (
    <div className='toon'>
       
       <header className='head' >
       <NavBar/>
               </header>

    
      <div>
      <hr class="ligne">
                </hr>
                <div class="section-title-2 text-center mb-60"><h2>Nos Services</h2></div>
              
                <div>
              <Service/>
              </div>
              <hr class="ligne">
                </hr>
      <div class="section-title-2 text-center mb-60"><h2 className="ob dorey espaci">Filter Diamants</h2></div>
      <div className="section">

<div class="certiblocs" >
  <div class="col5a grid-child purple">
        <form >
        <strong>Choisir la forme: </strong><br/>
                            
                                  <div class="radio-group">
                             <input type="radio" id="option-one" name="selector" value="Round"  onChange={(e) => {
              navigate(getFilterUrl({ shape: e.target.value }));
            }} />
                             
                           <label for="option-one" >
                           <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M16.148 2l.233.002m0 0c7.796.146 13.997 6.583 13.852 14.38-.145 7.794-6.583 13.996-14.378 13.85-7.796-.144-13.998-6.582-13.853-14.377.146-7.796 6.584-13.998 14.38-13.853zm-4.309 23.936l-5.544.199a13.82 13.82 0 009.331 3.847h.011l-3.798-4.046zm8.13-.017l-3.78 4.062a13.824 13.824 0 009.325-3.885l-5.545-.177zm-4.087-1.714l-3.828 1.596 3.858 4.111 3.832-4.116-3.862-1.59zM6.56 20.272l-.179 5.62 5.595-.2-1.605-3.85-3.811-1.57zm19.131-.054l-3.84 1.6-1.588 3.856 5.63.18-.202-5.636zM2.252 16.421a13.824 13.824 0 003.885 9.326l.176-5.546-4.06-3.78zm27.732-.055l-4.046 3.796.2 5.544a13.818 13.818 0 003.846-9.33v-.01zm-19.287 5.61l1.498 3.595 3.595-1.498-5.093-2.097zm10.829-.023l-5.085 2.119 3.602 1.483 1.483-3.602zm-5.443-13.71l-5.544 2.31-2.287 5.554 2.31 5.543 5.554 2.288 5.543-2.31 2.288-5.555-2.31-5.543-5.554-2.287zm-7.965 8.189l-1.483 3.602 3.601 1.483-2.118-5.085zm15.964-.033l-2.097 5.094 3.596-1.499-1.499-3.595zm-17.68-4.084l-4.081 3.83 4.081 3.8 1.58-3.839-1.58-3.791zm19.39-.064l-1.576 3.823 1.607 3.855 4.091-3.84-4.123-3.838zM6.097 6.53a13.82 13.82 0 00-3.847 9.33v.01l4.046-3.796-.2-5.544zm20-.04l-.176 5.545 4.061 3.78a13.824 13.824 0 00-3.885-9.326zm-15.884 4.2l-3.595 1.497 1.498 3.595 2.097-5.093zm11.749-.025l2.118 5.084 1.483-3.6-3.601-1.484zM6.343 6.381l.199 5.567 3.806-1.585 1.567-3.805-5.573-.177zm19.51-.039l-5.607.2 1.581 3.797 3.85 1.586.177-5.583zm-13.697.284l-1.483 3.601 5.085-2.118-3.601-1.483zm7.848-.016L16.41 8.108l5.093 2.097-1.498-3.595zM16.09 2.32l-3.805 4.09 3.8 1.564 3.818-1.591-3.813-4.062zm-.276-.068a13.824 13.824 0 00-9.325 3.885l5.545.176 3.78-4.06zm.563 0h-.01l3.796 4.045 5.545-.2a13.818 13.818 0 00-9.33-3.846z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Round
            </div>
                         </label>
                         
                           <input type="radio" id="option-two" name="selector" value="Round"  onChange={(e) => {
              navigate(getFilterUrl({ shape: e.target.value }));
            }}/>
                                <label for="option-two">
                                <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M31.846 0c.085 0 .154.07.154.154v31.692c0 .085-.07.154-.154.154H.154A.154.154 0 010 31.846V.154C0 .07.07 0 .154 0h31.692zM27.33 27.55H4.67L.528 31.69h30.944l-4.14-4.14zM.308.526v30.948L4.45 27.33V4.67L.308.526zm31.383.002l-4.14 4.14v22.664l4.14 4.14V.528zm-9.162 22.22H9.47L4.977 27.24h22.046l-4.494-4.494zM4.759 4.976v22.046l4.493-4.494V9.471L4.758 4.977zm22.482 0l-4.495 4.496v13.054l4.495 4.496V4.977zm-4.803 4.585H9.56v12.876h12.877V9.562zm4.585-4.804H4.977l4.495 4.495h13.056l4.495-4.495zm4.45-4.45H.527L4.668 4.45h22.664L31.474.308z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Princess
            </div></label>

                                  <input type="radio" id="option-three" name="selector" value="Heart"  onChange={(e) => {
              navigate(getFilterUrl({ shape: e.target.value }));
            }} />
                                       <label for="option-three"> <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M16.37 1c1.782.006 3.257.127 5.445.537C27.85 2.664 31 6.06 31 12.515v6.97c0 6.455-3.15 9.85-9.185 10.979-2.034.38-4.029.536-5.82.536h-.365c-1.78-.006-3.257-.127-5.445-.536C4.15 29.336 1 25.94 1 19.484v-6.97c0-6.454 3.15-9.85 9.185-10.977A32.015 32.015 0 0116.005 1h.365zm-4.626 25.46l-7.542 1.017c1.3 1.2 3.031 2.03 5.18 2.535l.422.094c.142.03.286.059.432.086 2.17.406 3.63.526 5.395.531h.089l-3.976-4.264zm8.553-.018l-3.974 4.279h.055a31.745 31.745 0 004.954-.451l.432-.078c.146-.027.29-.056.432-.086l.422-.094c2.192-.515 3.948-1.367 5.258-2.608l-7.579-.962zm-4.277-4.224l-3.995 4.136 3.996 4.285 3.995-4.302-3.996-4.12zM5.9 20.486l-1.73 6.716 7.416-1-1.67-4.154L5.9 20.486zm-4.622-4.302v3.3c0 3.394.88 5.913 2.612 7.689l1.748-6.789-.114-.044-.038-.185-4.208-3.971zm29.444-.06l-4.19 3.985-.037.19-.117.046 1.75 6.81c1.678-1.732 2.551-4.168 2.592-7.428l.002-.242v-3.361zm-4.605 4.324l-4.034 1.6-1.63 4.135 7.377.936-1.713-6.67zm-10.333 1.615h-5.562l1.634 4.066 3.928-4.066zm5.994 0h-5.52l3.925 4.047 1.595-4.047zm.048-11.85H10.173v11.574h11.653V10.213zM9.895 16.265l-4.034 3.86.047.045.007.023 3.98 1.55v-5.478zm12.209-.041v5.517l3.997-1.585.007-.027.046-.044-4.05-3.861zM5.607 12.08l-4.12 3.918 4.173 3.938 4.085-3.911-4.138-3.945zm20.77-.043l-4.123 3.946 4.1 3.91 4.158-3.954-4.135-3.902zM3.867 4.851C2.15 6.626 1.277 9.137 1.277 12.515v3.3l4.207-4.002.02-.1.133-.054L3.866 4.85zm6.028 5.416l-4.085 1.62-.001.002 4.086 3.896v-5.518zm18.056-5.6l-1.61 6.951.136.053.02.097 4.225 3.987v-3.24c0-3.496-.935-6.064-2.771-7.847zm-5.847 5.6v5.477l4.07-3.895-4.07-1.583zM4.169 4.908l1.73 6.646 4.017-1.593 1.656-4.2-7.403-.853zm23.497-.245l-7.28 1.075 1.698 4.223 3.995 1.554 1.587-6.852zM11.816 5.9l-1.59 4.037h5.505l-3.914-4.037zm8.327-.018l-3.917 4.055h5.548l-1.63-4.055zM15.99 1.359L11.95 5.64l4.028 4.154 4.029-4.171-4.02-4.263zm-.305-.08a31.742 31.742 0 00-5.448.53c-2.61.487-4.662 1.4-6.14 2.813l7.606.876 3.982-4.22zm.685-.002h-.077l3.963 4.202 7.392-1.092c-1.455-1.28-3.421-2.119-5.883-2.579-2.17-.406-3.628-.526-5.395-.531z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Cushion
            </div></label>
                                       <input type="radio" id="option-four" name="selector" value=""  onChange={(e) => {
              navigate(getFilterUrl({ shape: e.target.value }));
            }} />
                                       <label for="option-four">
                                       <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M16.187 1.003c5.532.155 9.913 7.002 9.811 15.276-.102 8.275-4.652 14.873-10.185 14.718-5.533-.155-9.913-7.001-9.811-15.276C6.104 7.446 10.653.848 16.187 1.003zm6.485 25.738H18.89l-2.635 3.99c2.473-.095 4.727-1.59 6.418-3.99zm-9.56 0H9.327c1.702 2.416 3.979 3.921 6.491 3.992l-.073-.003-2.635-3.989zM16 24.964l-2.649 1.68 2.65 4.01 2.648-4.01L16 24.964zm6.773-4.297l-2.685 1.704-1.104 4.105h3.789v-5.809zm-13.546 0v5.81h3.789l-1.104-4.106-2.685-1.704zm2.998 1.902l1.03 3.829 2.501-1.588-3.531-2.24zm7.549 0l-3.53 2.24 2.501 1.588 1.029-3.827zM6.252 16.36c.06 3.82 1.086 7.287 2.726 9.859v-5.734L6.251 16.36zm19.495 0l-2.724 4.124v5.734c1.646-2.582 2.678-6.073 2.726-9.943l-.002.085zm-9.748-9.045l-3.89 2.43-1.664 6.201 1.68 6.251L16 24.656l3.875-2.459 1.68-6.25-1.663-6.202L16 7.315zm-5.684 9.114l-1.059 3.948L11.812 22l-1.497-5.57zm11.37.002l-1.497 5.567 2.556-1.62-1.06-3.947zM9.059 11.754l-2.785 4.177 2.785 4.216 1.127-4.2-1.127-4.193zm13.883.001l-1.128 4.193 1.127 4.199 2.785-4.216-2.784-4.176zm.08-5.974v5.637l2.723 4.084c-.082-3.764-1.103-7.18-2.723-9.72zm-14.045 0C7.331 8.364 6.3 11.855 6.251 15.726l.004-.225 2.722-4.083V5.782zm2.82 4.158l-2.54 1.587 1.058 3.938 1.482-5.525zm8.405 0l1.482 5.524 1.059-3.937-2.54-1.587zm-7.22-4.416H9.227v5.715l2.67-1.667 1.085-4.048zm9.791 0h-3.756l1.086 4.048 2.67 1.667V5.523zm-9.547.06l-1.019 3.793 3.547-2.215-2.528-1.578zm5.548 0L16.245 7.16l3.547 2.215-1.018-3.793zM16 1.345l-2.666 3.998 2.665 1.665 2.667-1.665L16 1.345zm.256-.075l2.66 3.988h3.756c-1.702-2.415-3.979-3.92-6.491-3.99l.075.002zm-.511 0c-2.472.095-4.726 1.59-6.417 3.988h3.756l2.66-3.989z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Oval
            </div></label>
                                       <input type="radio" id="option-five" name="selector" value="Vintage" />
                                       <label for="option-five">
                                       <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M23.82 1l.099.042 3.54 3.668.041.102v22.225l-.04.102-3.687 3.819-.1.042H8.68l-.099-.042-3.54-3.668L5 27.186V4.963l.04-.102 3.687-3.819.1-.042H23.82zm-2.933 26.077h-9.368L8.954 30.71h14.448l-2.515-3.633zM9.183 24.788l-3.82 2.427 3.3 3.418 2.602-3.686-2.082-2.159zm14.134-.096l-2.176 2.255 2.55 3.684 3.443-3.566-3.817-2.373zM5.279 5.217V26.93l3.785-2.405V7.55L5.279 5.217zm14.295 18.468h-6.652l-2.406 2.076.99 1.027H20.9l1.03-1.07-2.356-2.033zM27.22 5.07l-3.785 2.405v16.953l3.785 2.354V5.07zM10.39 6.465L9.343 7.55v16.994l.975 1.01 2.462-2.124V8.527l-2.39-2.062zm11.768-.045L19.72 8.524v14.91l2.409 2.079 1.027-1.064V7.455l-.998-1.035zM19.44 8.604h-6.38v14.791h6.38V8.604zm1.553-3.392h-9.394l-1.01 1.047 2.38 2.055h6.557l2.434-2.1-.967-1.002zM8.795 1.38l-3.43 3.553 3.83 2.362 2.18-2.26-2.58-3.655zm15.04-.014l-2.6 3.686 2.081 2.16 3.82-2.428-3.3-3.418zm-.29-.077H9.076l2.564 3.633h9.34l2.565-3.633z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Emerald
            </div>
                                       </label>
                                       
                                       <input type="radio" id="option-five" name="selector" value="Vintage" />
                                       <label for="option-five">
                                       <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M16.131 1v.165c.044.012.08.03.138.077l.066.059.088.085.306.31.292.306.153.163.317.347a39.683 39.683 0 013.408 4.36l.281.424.036.06-.008-.017c1.29 1.974 2.338 3.98 3.118 5.969l.174.454.12.332c.853 2.388 1.313 4.75 1.372 7.03l.008.503-.004.258a8.895 8.895 0 01-.123 1.232l-.06.32-.04.18c-.99 4.27-5.047 7.383-9.774 7.383-4.726 0-8.784-3.113-9.775-7.395l-.04-.187-.001-.005-.047-.243-.03-.172a.14.14 0 01-.008-.053l.038.225a8.75 8.75 0 01-.134-1.284L6 21.503l.002-.029.006-.347c.055-2.162.47-4.395 1.239-6.65l.252-.716.021-.055c.744-1.986 1.758-3.993 3.03-5.989l.257-.399-.01.01.054-.083.115-.174a39.541 39.541 0 013.718-4.751l.303-.326.288-.3.422-.424a.46.46 0 01.17-.098V1h.264zm-.264 25.232l-6.461 2.09c1.715 1.476 3.99 2.38 6.461 2.41v-4.5zm.264 0v4.5h.065c2.446-.046 4.696-.946 6.396-2.41l-6.46-2.09zm9.473-3.11l-6.315 1.445 3.562 3.523c1.308-1.211 2.255-2.77 2.664-4.533l.046-.203.043-.232zm-19.207.018l.048.242c.385 1.832 1.35 3.455 2.7 4.707l3.56-3.522-6.31-1.444.002.017zm6.604 1.508L9.653 27.96l6.005-1.941L13 24.649zm5.994.002l-2.657 1.37 6.004 1.94-3.347-3.31zm-3.127-14.18l-2.669 3.151-1.632 7.03 1.515 3.74 2.785 1.437V10.47zm.263.003v15.353l2.784-1.435 1.517-3.74-1.633-7.03-2.668-3.148zm-4.774 10.362L6.65 22.908l6.112 1.398-1.406-3.471zm9.285.002l-1.407 3.469 6.108-1.398-4.701-2.072zm3.824-6.38L20.769 20.6l4.892 2.156c.037-.278.06-.557.07-.838l.005-.36-.002-.07c-.016-2.246-.43-4.573-1.235-6.935l-.033-.097zm-16.934.003l.096-.274c-.844 2.361-1.3 4.694-1.356 6.948l-.006.355-.003.07v.068c0 .376.025.75.075 1.128l4.888-2.154-3.694-6.141zm5.377-.753l-5.184.56 3.646 6.061 1.537-6.62zm6.181 0l1.537 6.616 3.643-6.056-5.18-.56zm1.778-6.405l-1.772 6.138 5.21.563-.008-.023-.066-.18c-.735-1.96-1.734-3.941-2.969-5.888l-.335-.52-.06-.09zm-9.74.005l-.121.183-.25.388c-1.164 1.833-2.117 3.689-2.839 5.528l-.15.394-.074.202 5.206-.562-1.773-6.133zm.294.066l1.71 5.918 2.669-3.153-4.379-2.765zm9.15 0l-4.377 2.765 2.67 3.15 1.707-5.915zm-4.704-5.9l-.405.407-.285.298a30.66 30.66 0 00-.148.158l-.308.337c-.106.116-.213.237-.323.361a39.327 39.327 0 00-2.933 3.77l-.134.199 4.536 2.863V1.472zm.263.002v8.387l4.536-2.861a39.433 39.433 0 00-3.04-3.937l-.33-.372c-.108-.12-.213-.234-.315-.344l-.299-.317-.367-.377-.164-.16a1.55 1.55 0 00-.02-.02z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Pear
            </div>
                                       </label>
                                       <input type="radio" id="option-five" name="selector" value="Vintage" />
                                       <label for="option-five">
                                       <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M27.183 1l.104.043 3.67 3.667.043.104v22.222l-.043.104-3.822 3.817-.103.043H4.817l-.104-.043-3.67-3.666L1 27.187V4.965l.043-.104 3.823-3.818L4.969 1h22.214zm-2.708 26.609H7.413L5.11 30.707h21.633l-2.267-3.098zM4.695 24.91l-3.321 2.296L4.8 30.631l2.323-3.122-2.385-2.383-.043-.104v-.11zm22.61-.11v.122l-.042.103-2.494 2.49 2.28 3.114 3.575-3.572-3.318-2.257zm-5.331-.61H9.955l-2.324 3.125h16.63l-2.287-3.124zm1.876-1.74l-1.61 1.609 2.354 3.216 2.419-2.415v-.259l-3.163-2.15zm-15.7.071L4.987 24.71v.252L7.3 27.27l2.39-3.211-1.54-1.538zM1.292 5.241v21.667l3.403-2.353v-17L1.292 5.24zm29.414-.148l-3.4 2.351v17.004l3.4 2.311V5.093zM4.987 7.753v16.6l3.034-2.097V9.815L4.987 7.753zm22.026-.106l-3.034 2.098v12.44l3.034 2.063V7.647zm-4.955.454H10.013l-1.7 1.697v12.475l1.63 1.626h12.044l1.699-1.698V9.728l-1.628-1.627zM7.406 4.722L4.987 7.14v.26L8.15 9.548l1.61-1.61-2.354-3.217zm17.294.006L22.31 7.94l1.54 1.538 3.163-2.187v-.252L24.7 4.728zm-.332-.044H7.74l2.287 3.125h12.016l2.325-3.125zM4.952 1.37L1.374 4.943 4.694 7.2l.001-.12.043-.104L7.23 4.484 4.951 1.37zm22.247 0l-2.322 3.12 2.386 2.385.043.104v.11l3.32-2.296L27.2 1.37zm-.308-.077H5.257l2.27 3.099h17.058l2.306-3.1z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Asscher
            </div>
                                       </label>
                                       <input type="radio" id="option-five" name="selector" value="Vintage" />
                                       <label for="option-five">
                                       <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M20.611 2.36c1.752-.488 3.223-.467 4.986-.013 2.098.54 3.764 1.864 4.76 4.29.89 2.169.822 5.137.005 8.029-.832 2.948-2.142 5.372-4.032 7.545a29.955 29.955 0 01-2.775 2.788l-.01.166-.144.123-.159-.016a34.97 34.97 0 01-3.425 2.592 30.958 30.958 0 01-2.84 1.682l-.33.168-.299.147-.296.139h-.105l-.296-.139-.3-.147-.328-.168-.175-.092c-.848-.45-1.75-.98-2.665-1.59a34.966 34.966 0 01-3.426-2.592l-.16.016-.142-.123-.011-.166A29.957 29.957 0 015.67 22.21c-1.89-2.172-3.2-4.595-4.032-7.545-.817-2.89-.885-5.86.005-8.028.995-2.427 2.661-3.751 4.76-4.291 1.762-.454 3.234-.475 4.986.013.45.126.98.32 1.573.572.287.122.586.257.894.4a38.256 38.256 0 011.682.843l.462.25.222-.122.368-.196a38.256 38.256 0 011.554-.774c.307-.144.606-.279.893-.4a13.283 13.283 0 011.574-.573zM18.598 24.8l-2.321 4.804.255-.125.325-.166.173-.091a30.696 30.696 0 002.643-1.576 34.855 34.855 0 003.21-2.411l-4.285-.436zm-5.197 0l-4.284.435a34.832 34.832 0 003.21 2.41 30.689 30.689 0 002.816 1.668l.325.166.253.124-2.32-4.804zm2.64-1.748l-2.396 1.652 2.354 4.874 2.356-4.876-2.314-1.65zm-7.663-3.547l.32 5.369.144.125 4.48-.455-.845-4.15-4.099-.89zm15.241-.001l-3.952.842-.985 4.198 4.476.455.143-.125.318-5.37zm5.138-1.37l-4.873 1.308-.308 5.188a29.575 29.575 0 002.558-2.592 18.462 18.462 0 002.623-3.905zm-25.514 0a18.457 18.457 0 002.623 3.904 29.57 29.57 0 002.557 2.591l-.31-5.187-4.87-1.309zm16.106 2.424l-3.084 2.332 2.173 1.55.91-3.882zm-6.566.03l.784 3.852 2.282-1.574-3.066-2.278zm.14-11.346l-4.49 1.682.868 5.178 3.365 4.078 3.408 2.526 3.383-2.551 3.29-4.249.818-4.978-4.633-1.537-2.792 1.611h-.13l-3.087-1.76zm-3.69 7.188l-.83 2.812 3.842.834-3.012-3.646zm13.568-.167l-2.926 3.77 3.723-.793-.797-2.977zm-16.995-2.64L3.44 17.914l4.708 1.266.878-2.974-3.221-2.583zm20.413.049l-3.163 2.535.796 2.972 4.707-1.265-2.34-4.242zm4.472-4.45l-4.286 4.215-.001.028 2.457 4.456c.455-.94.838-1.938 1.157-3.006l.093-.32c.52-1.842.731-3.712.58-5.373zm-29.382 0c-.151 1.662.06 3.532.58 5.372.336 1.19.75 2.293 1.25 3.327l2.466-4.473-4.296-4.226zm22.49 1.888l-.787 4.797 3.111-2.493L23.8 11.11zm-15.591.044l-2.246 2.259 3.03 2.43-.784-4.69zM8.157 6.65L1.508 9.05l4.258 4.188 2.39-2.405V6.65zm15.766.03l-.08 4.105 2.433 2.412 4.215-4.146-6.568-2.372zm-7.854 1.613l-2.804.843 2.809 1.601 2.54-1.466-2.545-.978zm7.593-1.602l-4.426 2.525 4.348 1.443.078-3.968zM8.417 6.688v3.962l4.209-1.576-4.209-2.386zm12.227-3.99l-4.337 5.405 2.599 1 4.636-2.645-2.898-3.76zm-9.286-.002L8.483 6.423l4.468 2.534 2.897-.871-4.49-5.39zm-6.639.612c-1.202.702-2.17 1.81-2.835 3.43a8.302 8.302 0 00-.532 2.091l6.74-2.436-3.373-3.085zm22.606.027l-3.366 3.078 6.69 2.416a8.485 8.485 0 00-.457-1.898l-.076-.193c-.657-1.6-1.61-2.7-2.791-3.403zm-7.046-.599c-.344.115-.726.262-1.14.438-.284.12-.58.254-.885.397-.522.244-1.045.507-1.543.769l-.365.194-.283.155h-.127l-.174-.096-.473-.253a37.976 37.976 0 00-1.543-.77 26.594 26.594 0 00-.885-.396c-.409-.173-.786-.319-1.125-.433l4.349 5.221 4.194-5.226zm5.02-.193c-1.617-.386-2.99-.384-4.618.07l.188-.051 2.858 3.709 3.358-3.072a6.835 6.835 0 00-1.38-.552l-.172-.046-.233-.058zm-14.169.019c-1.623-.423-3.006-.388-4.663.039a6.942 6.942 0 00-1.507.574L8.301 6.23l2.83-3.668z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Heart
            </div>
                                       </label>
                                       <input type="radio" id="option-five" name="selector" value="Vintage" />
                                       <label for="option-five">
                                       <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M24.073 1l.106.043 3.777 3.667.044.104v22.222l-.044.104-3.932 3.817-.107.043H7.927l-.107-.043-3.776-3.666L4 27.187V4.965l.044-.104 3.932-3.818L8.083 1h15.99zm-2.547 26.914H10.362l-2.136 2.793H23.62l-2.094-2.793zM7.59 25.357l-3.198 1.859 3.516 3.415 2.178-2.849-2.496-2.425zm16.818-.108l-2.608 2.534 2.135 2.845 3.669-3.562-3.196-1.817zM16 25.182l-5.07 2.44h10.04L16 25.181zm4.616-.654l-4.128.565 4.89 2.4-.762-2.965zm-9.234 0l-.859 2.963 4.976-2.395-4.117-.568zm-.324.035l-3.143.694 2.296 2.23.847-2.924zm9.875-.009l.753 2.927 2.393-2.325-3.146-.602zM4.301 5.22v21.708l3.163-1.838V7.018L4.3 5.22zm23.397-.148L24.536 6.91v18.073l3.162 1.798V5.07zm-17.372 11.68l-2.495 8.224 3.277-.724-.782-7.5zm11.35 0l-.784 7.496 3.277.627-2.493-8.124zm-5.549-9.623l-5.02.404-.56 8.452.861 8.252 4.57.636 4.613-.636.862-8.23-.434-8.475-4.892-.403zm-8.362.81v16.219L10.239 16 7.765 7.938zm16.47-.097L21.76 16l2.474 8.062V7.842zm-16.409-.73l2.475 8.062.505-7.65-2.98-.413zm16.345-.099l-2.85.506.387 7.616 2.463-8.122zM10.596 4.491l.495 2.75 4.485-.362-4.98-2.388zm10.935.003L16.67 6.88l4.37.36.492-2.746zm-11.233.04L7.934 6.83l2.848.395-.484-2.691zm11.529.015l-.478 2.667 2.726-.483-2.248-2.184zm-.727-.171H11.04l5.087 2.44 4.973-2.44zM8.064 1.37l-3.67 3.564L7.59 6.75l2.61-2.535L8.063 1.37zm16.025 0l-2.178 2.847 2.498 2.426 3.197-1.859-3.517-3.415zm-.316-.077H8.38l2.095 2.792h11.163l2.136-2.792z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Radiant
            </div>
                                       </label>
                                       <input type="radio" id="option-five" name="selector" value="Vintage" />
                                       <label for="option-five">
                                       <svg
              data-component-name="SvgIcon"
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="css-rex2z0"
            >
              <g>
                <path
                  stroke-width="0.5"
                  d="M16.448 1.144l.143.115.193.16.106.09a29.493 29.493 0 013.825 3.95C23.393 8.805 25 12.363 25 15.988c0 2.478-.756 4.994-2.091 7.313l-.13.22v.022a.35.35 0 01-.102.217l-.037.037c-1.094 1.815-2.446 3.498-3.909 4.988l-.208.209-.208.205-.206.2-.303.285-.289.265-.27.24-.244.212-.213.177-.177.139-.094.069-.074.048c-.27.204-.555.219-.827.044l-.063-.044.072-.097-.078.092-.468-.391a29.36 29.36 0 01-3.792-3.902 23.623 23.623 0 01-2.3-3.398l-.019-.019.006-.006C7.711 20.806 7 18.418 7 15.989c0-5.166 3.66-11.066 8.555-14.847.266-.2.622-.179.893.002zm3.205 19.01l-3.629 10.592a.484.484 0 00.224-.08l.128-.087.092-.067.053-.04.12-.096.21-.174.156-.135.258-.228.28-.254.294-.275.202-.194.307-.3.205-.207c1.45-1.477 2.79-3.145 3.891-4.966.06-.058.08-.086.085-.13l.002-.028.018-.065.098-.168-2.994-3.098zm-7.402-.068l-2.965 3.069a23.524 23.524 0 002.198 3.223 29.096 29.096 0 003.573 3.708l.355.304.25.207-3.41-10.51zm.226-.116l3.392 10.455 3.479-10.154-3.067 2.186-.142.001-3.662-2.488zm12.264-3.54l-4.939 3.517 2.976 3.078c1.182-2.103 1.882-4.361 1.963-6.596zM9.16 22.923l3.004-3.108-.024-.076-4.88-3.317c.078 2.21.752 4.387 1.9 6.502zm6.963-13.122l-3.678 2.666-1.198 3.706 1.104 3.404 3.857 2.622 3.28-2.337 1.266-3.69-1.271-3.867-3.36-2.504zm3.71 2.764l1.172 3.568v.081l-1.166 3.398 4.831-3.442-4.837-3.605zm-7.732.151L7.335 16.17l4.677 3.179-1.017-3.136v-.078l1.105-3.418zm-4.85 3.204l4.888-3.543-3.056-3.161c-1.144 2.222-1.817 4.53-1.831 6.704zM22.86 9.11l-3.034 3.14 4.922 3.668-.001-.17c-.046-2.247-.719-4.472-1.887-6.638zm-7.153-7.766c-2.676 2.066-4.978 4.773-6.502 7.639l3.074 3.18L15.79 1.292a.444.444 0 00-.084.05zm.253.24l-3.386 10.48 3.475-2.519.148.001 3.15 2.347L15.96 1.583zm.161-.315l3.543 10.786 3.025-3.13.15.147a23.512 23.512 0 00-2.319-3.455 29.257 29.257 0 00-3.792-3.915l-.203-.17-.225-.183a.577.577 0 00-.179-.08z"
                ></path>
              </g>
            </svg>
            <div data-component-name="Text" className="css-q7y8co">
              Marquise
            </div>
                                       </label>
                                       
                                          </div>
                                          </form>
                                          </div>
		</div>
    <div class="certiblocs" >
			<div class="col5a grid-child green " >
          <form >
        <strong>Choisir le Cut: </strong><br/>
                            
                                  <div class="radio-group">
                             <input type="radio" id="cut-one" name="selector" value="good"  onChange={(e) => {
              navigate(getFilterUrl({cut: e.target.value }));
            }} />
                             
                           <label for="cut-one" >
                          Good
                          </label>
                         
                           <input type="radio" id="cut-two" name="selector" value="VeryGood"  onChange={(e) => {
              navigate(getFilterUrl({ cut: e.target.value }));
            }}/>
                                <label for="cut-two">
                                Very Good
                          </label>

                                  <input type="radio" id="cut-three" name="selector" value="Ideal"  onChange={(e) => {
              navigate(getFilterUrl({ cut: e.target.value }));
            }} />
                                       <label for="cut-three"> 
                                       Ideal</label>
                                                                                </div>
                                          </form>

      </div>
      </div>
      <div class="certiblocs" >
			<div class="col5a grid-child green " >
       
                                          <form>
                                          <strong>Choisir la Clarit??: </strong><br/>
                            
                            <div class="radio-group">
                       <input type="radio" id="clarity-one" name="selector" value="IS2"  onChange={(e) => {
        navigate(getFilterUrl({ clarity: e.target.value }));
      }} />
                       
                     <label for="clarity-one" >
                     SI2
                   </label>
                   
                     <input type="radio" id="clarity-two" name="selector" value="SI1"  onChange={(e) => {
        navigate(getFilterUrl({ clarity: e.target.value }));
      }}/>
                          <label for="clarity-two">
                          SI1
                        </label>
                                 <input type="radio" id="clarity-four" name="selector" value="VS2"  onChange={(e) => {
        navigate(getFilterUrl({ clarity: e.target.value }));
      }} />
                                 <label for="clarity-four">
                                 VS2
                          </label>
                                 <input type="radio" id="clarity-five" name="selector" value="VS1" onChange={(e) => {
        navigate(getFilterUrl({ clarity: e.target.value }));}} />
                                 <label for="clarity-five">
                                  VS1
                                 </label>
                                 
                                 <input type="radio" id="flarity-five" name="selector" value="VVS2" onChange={(e) => {
        navigate(getFilterUrl({ clarity: e.target.value }));}} />
                                 <label for="flarity-five">
                                  VVS2                             </label>
                                 <input type="radio" id="clariti-five" name="selector" value="VVS1" onChange={(e) => {
        navigate(getFilterUrl({ clarity: e.target.value }));}} />
                                 <label for="clariti-five">
                                      VVS1 </label>
                                 <input type="radio" id="ctn-five" name="selector" value="IF" onChange={(e) => {
        navigate(getFilterUrl({ clarity: e.target.value }));}} />
                                 <label for="ctnn-five">
                                 IF
                                 </label>
                                 <input type="radio" id="n-five" name="selector" value="LF" onChange={(e) => {
        navigate(getFilterUrl({ clarity: e.target.value }));}} />
                                 <label for="n-five">
                                   LF         </label>
                                 
                                 
                                    </div>
                                    </form>

      </div>
      </div>
      <div class="certiblocs" >
  <div class="col5a grid-child purpule">
  <strong>Choisir le carat: </strong>
                                          <MultiRangeSlider
			min={0}
			max={11}
			step={0.05}
			ruler={true}
			label={true}
			preventWheel={false}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
        navigate(getFilterUrl({ min: e.minValue, max: e.maxValue }));
			}}
      
		/>
    </div>
    </div>
                                          
            
      <div class="certiblocs" >
  <div class="col5a grid-child green">
        <form >
        <strong>Choisir la Couleur: </strong><br/>
                            
                                  <div class="radio-group">
                             <input type="radio" id="ty-one" name="selector" value="K"  onChange={(e) => {
              navigate(getFilterUrl({ couleur: e.target.value }));
            }} />
                             
                           <label for="ty-one" >
                           K
                         </label>
                         
                           <input type="radio" id="ty-two" name="selector" value="J"  onChange={(e) => {
              navigate(getFilterUrl({ couleur: e.target.value }));
            }}/>
                                <label for="ty-two">
                                J
                              </label>
                                       <input type="radio" id="ty-four" name="selector" value="I"  onChange={(e) => {
              navigate(getFilterUrl({ couleur: e.target.value }));
            }} />
                                       <label for="ty-four">
                                       I
                                </label>
                                       <input type="radio" id="ty-five" name="selector" value="H" onChange={(e) => {
        navigate(getFilterUrl({ couleur: e.target.value })); }}/>
                                       <label for="ty-five">
                                        H
                                       </label>
                                       
                                       <input type="radio" id="ity-five" name="selector" value="G" onChange={(e) => {
        navigate(getFilterUrl({ couleur: e.target.value }));}} />
                                       <label for="ity-five">
                                        G                            </label>
                                       <input type="radio" id="iti-five" name="selector" value="F" onChange={(e) => {
        navigate(getFilterUrl({ couleur: e.target.value }));}} />
                                       <label for="iti-five">
                                            F </label>
                                       <input type="radio" id="tn-five" name="selector" value="E" onChange={(e) => {
        navigate(getFilterUrl({ couleur: e.target.value }));}} />
                                       <label for="tn-five">
                                       E
                                       </label>
                                       <input type="radio" id="n-fve" name="selector" value="D" onChange={(e) => {
        navigate(getFilterUrl({ couleur: e.target.value }));}} />
                                       <label for="n-fve">
                                         D       </label>
                                          </div>
                                          </form>
                                          </div>
                                          </div>
                             </div>
                             <Link to={`/searchdiamant/shape/all/min/undefined/max/undefined/cut/all/couleur/all/clarity/all/order/newest/pageNumber/1`}>
                             <button style={{color:"white"}}>Supprimer les filtres</button></Link>


     
        <div >
          {loadingShapes ? (
            <LoadingBox></LoadingBox>
          ) : errorShapes ? (
            <MessageBox variant="danger">{errorShapes}</MessageBox>
          ) : (
            <ul>
              {shapes && shapes.map((c) => (
                <li key={c}>
                  <Link
                    className={c === shape ? 'active' : ''}
                    to={getFilterUrl({ shape: c })}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          
        </div>
        </div>

        <div className='choice-Price'>
         <strong> Afficher Selon</strong>{' '}<br/>
          <select
            value={order}
            onChange={(e) => {
              navigate(getFilterUrl({ order: e.target.value }));
            }}
          >
  
            <option value="lowest">Prix croissant</option>
            <option value="highest">Prix d??croissant</option>
          </select>
        </div><br></br>
        <div >
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {
                   diamants.length === 0 &&
                <MessageBox>No Product Found</MessageBox>
              }
           
              { diamants.length != 0 && 

          
              <div >

            
               
                  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Shape</th>
      <th>Carat</th>
      <th>cut</th>
      <th>Clarity</th>
      <th>Color</th>
      <th>Prix</th>
      <th>Details</th>

    </tr>
  </thead>

  {diamants.map((diamant) => (
      
   <Diamant key={diamant.id} diamant={diamant}></Diamant>

  ))
  }
  
</Table>
               
               <div className="pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? 'active' : ''}
                key={x + 1}
                to={`/diamants/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
            </div>
              </div>
              }
              
            </>
          )}

        </div>


      </div>
  
  );
}