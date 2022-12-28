import React from 'react'
import Image from 'next/image'
import flaguk from '../public/image/flag-uk.png'
import flagfrance from '../public/image/flag-france.png'
import jhumka from '../public/image/jhumka-img.png'
import laptop from '../public/image/laptop-img.png'
import logo from '../public/image/logo.png'
import toggle from '../public/image/toggle-icon.png'
import footer from '../public/image/footer-logo.png'
import { Style } from '../styles/uielements'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {BiSearchAlt} from 'react-icons/bi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {ProductList} from './Data'
import { Jewellery} from './Data_two'
import {Electronic} from './Data_three'
 

function Home() {
    const dataList = ProductList?.map((data,index) => 
       <div className="col-lg-4 col-sm-4">
               <div className="box_main">
                  <h4 className="shirt_text">{data.name}</h4>
                  <p className="price_text">Price  <span >{data.price}</span></p>
                  <div className="tshirt_img"><Image src={data.img} width={284} height={369} /></div>
                  <div className="btn_main">
                     <div className="buy_bt"><a href="#">{data.btn}</a></div>
                     <div className="seemore_bt"><a href="#">{data.detail}</a></div>
                  </div>
               </div>
            </div>
            )
    const electList = Electronic?.map((input,index) => 
       <div className="col-lg-4 col-sm-4">
               <div className="box_main">
                  <h4 className="shirt_text">{input.name}</h4>
                  <p className="price_text">Price  <span >{input.price}</span></p>
                  <div className="tshirt_img"><Image src={input.img} width={310} height={250} /></div>
                  <div className="btn_main">
                     <div className="buy_bt"><a href="#">{input.btn}</a></div>
                     <div className="seemore_bt"><a href="#">{input.detail}</a></div>
                  </div>
               </div>
            </div> 
    )
    const jewelList = Jewellery?.map((info,index) =>
       <div className="col-lg-4 col-sm-4">
               <div className="box_main">
                  <h4 className="shirt_text">{info.name}</h4>
                  <p className="price_text">Price  <span >{info.price}</span></p>
                  <div className="tshirt_img"><Image src={info.img} width={310} height={310} /></div>
                  <div className="btn_main">
                     <div className="buy_bt"><a href="#">{info.btn}</a></div>
                     <div className="seemore_bt"><a href="#">{info.detail}</a></div>
                  </div>
               </div>
            </div> 
    )
   
  return (
        <Style>
            <div className="banner_bg_main">
         {/* <!-- header top section start --> */}
         <div className="container">
            <div className="header_section_top">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="custom_menu">
                        <ul>
                           <li><a href="#">Best Sellers</a></li>
                           <li><a href="#">Gift Ideas</a></li>
                           <li><a href="#">New Releases</a></li>
                           <li><a href="#">Today's Deals</a></li>
                           <li><a href="#">Customer Service</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- header top section start -->
         <!-- logo section start --> */}
         <div className="logo_section">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="logo"><a href="index.html"><Image src={logo}/></a></div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- logo section end -->
         <!-- header section start --> */}
         <div className="header_section">
            <div className="container">
               <div className="containt_main">
                  <div id="mySidenav" className="sidenav">
                     <a href="javascript:void(0)" className="closebtn" onclick= "closeNav()">&times;</a>
                     <a href="index.html">Home</a>
                     <a href="fashion.html">Fashion</a>
                     <a href="electronic.html">Electronic</a>
                     <a href="jewellery.html">Jewellery</a>
                  </div>
                  <span className="toggle_icon" onclick="openNav()"><Image src={toggle}/></span>
                  <DropdownButton id="dropdown-basic-button" className='btn btn-secondary' title="All Catergory">
                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </DropdownButton>
                  <div className="main">
                     {/* <!-- Another variation with a button --> */}
                     <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search this blog"/>
                        <div className="input-group-append">
                           <button className="btn btn-secondary" type="button" 
                           style={{backgroundColor: '#f26522!important',
                            borderColor: '#f26522!important',
                            borderTopLeftRadius: '0',
                            borderBottomLeftRadius: '0',
                            padding: '.8rem'
                            }}>
                           <BiSearchAlt />
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="header_box">
                     <div className="lang_box ">
                        <a href="#" title="Language" className="nav-link" data-toggle="dropdown" aria-expanded="true">
                        <Image src={flaguk} alt="flag" className="mr-2 " title="United Kingdom"/> English <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                        </a>
                        <div className="dropdown-menu ">
                        
                            <a href="#" className="dropdown-item">
                           <Image src={flagfrance} className="mr-2" alt="flag"/>
                           French
                           </a> 
                           
                        </div>
                     </div>
                     <div className="login_menu">
                        <ul>
                           <li><a href="#">
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span></a>
                           </li>
                           <li><a href="#">
                              <i className="fa fa-user" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- header section end -->
         <!-- banner section start --> */}
         <div className="banner_section layout_padding">
            <div className="container">
               <div id="my_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-sm-12">
                              <h1 className="banner_taital">Get Start <br/>Your favriot shoping</h1>
                              <div className="buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                  <AiOutlineArrowLeft/>
                  </a>
                  <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <AiOutlineArrowRight/>
                  </a>
               </div>
            </div>
         </div>
         {/* <!-- banner section end --> */}
      </div>
      {/* <!-- banner bg main end -->
      <!-- fashion section start --> */}
      <div className="fashion_section">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Man & Woman Fashion</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                        {/* <div className="col-lg-4 col-sm-4">
                           <div className="box_main">
                              <h4 className="shirt_text">{data.name}</h4>
                              <p className="price_text">Start Price  <span >$ 100</span></p>
                              <div className="electronic_img">{data.img}</div>
                              <div className="btn_main">
                                 <div className="buy_bt"><a href="#">{data.btn}</a></div>
                                 <div className="seemore_bt"><a href="#">{data.details}</a></div>
                              </div>
                           </div>
                        </div> */}
                        {dataList}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <AiOutlineArrowLeft/>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <AiOutlineArrowRight/>
            </a>
         </div>
      </div>
      {/* <!-- fashion section end -->
      <!-- electronic section start --> */}
      <div className="fashion_section">
         <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Electronic</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           {electList }
                           
                        </div>
                     </div>
                  </div>
               </div>
            <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
            <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
            <i className="fa fa-angle-right"></i>
            </a>
         </div>
      </div>
      </div>
      <div className="jewellery_section">
         <div id="jewellery_main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Jewellery Accessories</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           {jewelList}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#jewellery_main_slider" role="button" data-slide="prev">
            <AiOutlineArrowLeft/>
            </a>
            <a className="carousel-control-next" href="#jewellery_main_slider" role="button" data-slide="next">
            <AiOutlineArrowRight/>
            </a>
            <div className="loader_main">
               <div className="loader"></div>
            </div>
         </div>
      </div>
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="footer_logo"><a href="index.html"><Image src={footer}/></a></div>
            <div className="input_bt">
               <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email"/>
               <span className="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
            </div>
            <div className="footer_menu">
               <ul>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Gift Ideas</a></li>
                  <li><a href="#">New Releases</a></li>
                  <li><a href="#">Today's Deals</a></li>
                  <li><a href="#">Customer Service</a></li>
               </ul>
            </div>
            <div className="location_main">Help Line  Number : <a href="#">+1 1800 1200 1200</a></div>
         </div>
      </div>
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">© 2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
         </div>
      </div>
      {/* <!-- copyright section end --> */}
        </Style>

   )
}  

export default Home;