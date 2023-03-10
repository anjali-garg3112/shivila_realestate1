
import React,{useState} from 'react';
import logo  from './images/logo.jpeg'; 


import './Nav.css';
function Nav(){
    const[popup,setPop]=useState(false);
    const[popup1,setPop1]=useState(false);
    
    const[popup2,setPop2]=useState(false);
    
    const[popup3,setPop3]=useState(false);
    const[popup4,setPop4]=useState(false);
    
    const trackbuy=()=>{
        setPop(!popup);
    }
    const trackbuy1=()=>{
        setPop1(!popup1);
    }
    const trackbuy2=()=>{
        setPop2(!popup2);
    }
    const trackbuy3=()=>{
        setPop3(!popup3);
    }
    const trackbuy4=()=>{
        setPop4(!popup4);
    }
    return(
        <>
       
<nav className="navbar">
<div className="nav-img"><img src={logo}/></div> 
  
    <div className="nav-1">
        <button className="nav-btn" onMouseEnter={trackbuy}>Buy
        <div>
                    {popup?
                    <div className="popup">
                        <div className="buy-header">
                            <h3>Popular Choices</h3>
                            <h3>Property Types</h3>
                            <h3>Budget</h3>
                            
                        </div>
                        <div className="buy-subheader">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                        <div className="buy-subheader">
                         <a href="">Owner Property</a>
                         <a href="">House For Sale In Delhi</a>
                         <a href=""> Rs40Lacs-1Cr</a>
                         

                        </div>
                        <div className="buy-subheader">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                    </div>:""}
        </div>
        
        </button>
        <button className="nav-btn" onMouseEnter={trackbuy1}>Sell
        <div>
                    {popup1?
                    <div className="popup1">
                        <div className="buy-header1">
                            <h3>Popular Choices</h3>
                            <h3>Property Types</h3>
                            <h3>Budget</h3>
                            
                        </div>
                        <div className="buy-subheader1">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                        <div className="buy-subheader1">
                         <a href="">Owner Property</a>
                         <a href="">House For Sale In Delhi</a>
                         <a href=""> Rs40Lacs-1Cr</a>
                         

                        </div>
                        <div className="buy-subheader1">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                    </div>:""}
                    
</div>
       
        </button>
        <button className="nav-btn" onMouseEnter={trackbuy2}>Rent
        <div>
                    {popup2?
                    <div className="popup2">
                        <div className="buy-header2">
                            <h3>Popular Choices</h3>
                            <h3>Property Types</h3>
                            <h3>Budget</h3>
                            
                        </div>
                        <div className="buy-subheader2">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                        <div className="buy-subheader2">
                         <a href="">Owner Property</a>
                         <a href="">House For Sale In Delhi</a>
                         <a href=""> Rs40Lacs-1Cr</a>
                         

                        </div>
                        <div className="buy-subheader2">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                    </div>:""}
                    
</div>
       
        </button>
        
<button className="nav-btn" onMouseEnter={trackbuy3}>Mortgage
<div>
                    {popup3?
                    <div className="popup3">
                        <div className="buy-header3">
                            <h3>Popular Choices</h3>
                            <h3>Property Types</h3>
                            <h3>Budget</h3>
                            
                        </div>
                        <div className="buy-subheader3">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                        <div className="buy-subheader3">
                         <a href="">Owner Property</a>
                         <a href="">House For Sale In Delhi</a>
                         <a href=""> Rs40Lacs-1Cr</a>
                         

                        </div>
                        <div className="buy-subheader3">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                    </div>:""}
                    
</div>

</button>
        <button className="nav-btn" onMouseEnter={trackbuy4}>Agent Finder
        <div>
                    {popup4?
                    <div className="popup4">
                        <div className="buy-header4">
                            <h3>Popular Choices</h3>
                            <h3>Property Types</h3>
                            <h3>Budget</h3>
                            
                        </div>
                        <div className="buy-subheader4">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                        <div className="buy-subheader4">
                         <a href="">Owner Property</a>
                         <a href="">House For Sale In Delhi</a>
                         <a href=""> Rs40Lacs-1Cr</a>
                         

                        </div>
                        <div className="buy-subheader4">
                         <a href="">Ready to move</a>
                         <a href="">Flats in New-Delhi</a>
                         <a href="">Under Rs40Lacs</a>
                         

                        </div>
                    </div>:""}
                    
</div>

        
        </button>
        <button className="nav-btn">My Homes</button>
        <button className="nav-btn">Advertise</button>
        <form action="" className='page'>
        
            

        
        
        <button className="nav-btn">Login</button>
    
        
        <button className="nav-btn1">Sign up</button>
        </form>
    </div>
    
</nav>

        </>
    )
}

export default Nav;