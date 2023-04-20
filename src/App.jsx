import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import apiData from './apiData';
import FilterContainer from './FilterContainer';
import Footer from './Footer';
import Hero from './Hero';

function App() {


    // since I couldn't access the given api. I create a dummy api 
    // and imported it as apiData.
    // But if I could have accessed the api I would have written the below code 
    // to fetch data from api rest things would have been the same

    // async function fetchData(){
    //     try{
    //         const response = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products');
    //         const data = response.data;
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])


    //api section ends


    
    //for cart number 
    const [count ,setCount] = useState(0);

    useEffect(()=>{
        const count = Number(localStorage.getItem('Count'));
        console.log("count",count);
        if(count=== null || count===0){
            setCount(0);
        }else setCount(count+1);
    },[])

    function increment(){
        setCount(count+1);
        // alert("added to cart");
        localStorage.setItem('Count', count);
        // console.log("inside", count);

        // localStorage.removeItem('Count');
    }

    
    // I haven't hard coded the filter categories for both material and color
    // so to get all the different and unique material and color
    // to put in the filterlist i looped through the api data

    const uniquemateriallist = [
        ...new Set(
            apiData.map((currElem)=>{
                return currElem.material;

            })
        ), 'All'    
    ];

    const uniquecolorlist = [
        ...new Set(
            apiData.map((currElem)=>{
                return currElem.color;
            })
        ), 'All'
    ]

    const [data, setData] = useState(apiData);
    const [materiallist, setMaterallist] = useState(uniquemateriallist); 

    const [colorlist, setColorlist] = useState(uniquecolorlist);



    // when user will click on any of the material or color filter
    const filtermateriallist = (material) =>{
        if(material === 'All'){
            setData(apiData);
            return;
        }
        const updatedList = apiData.filter((currElem)=>{
            return currElem.material === material;

        });

        setData(updatedList);
    }

    const filtercolorlist = (color) =>{
        if(color==="All") {
            setData(apiData)
            return;
        }
        
        const updatedList = data.filter((currElem)=>{
            return currElem.color === color;
        });

        if(updatedList.length !== 0) setData(updatedList);

        else {
            const updatedList = apiData.filter((currElem)=>{
                return currElem.color === color;
            })
            setData(updatedList);
        }
    }



    
    return (
        <div className="App">
            <div className="maincontainer">
                
                <Navbar count={count}/>
                
                <Hero/>

                <div className="productscontainer">
                    
                    <FilterContainer  
                    materiallist={materiallist} 
                    colorlist = {colorlist}
                    filtermateriallist={filtermateriallist}
                    filtercolorlist = {filtercolorlist}
                    />

                    <div className="productcardcontainer">
                        {
                            data.map((item)=>{
                                return(
                                    <ProductCard item={item} count={count} increment={increment}/>
                                )
                                
                            })
                        }
                    </div>
                    

                </div>


                <Footer/>
                

            </div>


        </div>
    );
}

export default App;
