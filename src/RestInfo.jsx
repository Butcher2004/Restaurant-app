import React, { useEffect, useState } from 'react'
import './css/restinfo.css'
import Business from './details/Business'
import Events from './details/Events'
import { useParams } from 'react-router-dom'


function RestInfo() {

    const[data, setData] = useState([])
    const[render1,setRender] = useState('business')

    const { id } = useParams();
    console.log("ID : ",id)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`/information/${id}`);
            const data1 = await response.json();
            setData(data1);
            console.log("Retrieved Data : ",data1)
            // setIsLoading(false);
          } catch (error) {
            console.error("Error fetching the restaurant data:", error);
            // setIsLoading(false);
          }
        };
    
        fetchData();
      }, [id]);

    // console.log("Retrieved Data : ",data)
    
    const flag = false

    

  return (
    <div className="everything">
        {data.length==0 ? <><img  src="" alt="" />
        <div className="restname">
            <h1>RestName</h1>
            <p>4.8 <i class="fas fa-star"></i> &nbsp;&nbsp;&nbsp;Country</p>
        </div>
        <div className='info_out'>
            <h1>Address</h1>
            <p></p>
        </div>
        <div className='info_out'>
            <h1>Cuisines</h1>
            <p>Give list of cuisines here</p>
        </div>
        <div className="headds">
            <button className={render1=='business'? 'active':''} onClick={()=>{setRender('business')}} >Business Details</button>
            <button className={render1=='events'? 'active':''}  onClick={()=>{setRender('events')}}>Events</button>
            <button className={render1=='menu'? 'active':''} onClick={()=>{setRender('menu')}} >Menu</button>

        </div>
        <div className="reder">
        {render1=='business' ? <Business/> : ""}
        {render1=='events' ? <Events/> : ""}
        </div></>:<><img  src={data['featured_image']} alt="" />
        <div className="restname">
            <h1>{data['name']}</h1>
            <p>{data["user_rating"]["aggregate_rating"]} <i class="fas fa-star"></i> &nbsp;&nbsp;&nbsp;{data['location']['city']}</p>
        </div>
        <div className='info_out'>
            <h1>Address</h1>
            <p>{data['location']['address']}</p>
        </div>
        <div className='info_out'>
            <h1>Cuisines</h1>
            <p>{data["cuisines"]}</p>
        </div>
        <div className="headds">
            <button className={render1=='business'? 'active':''} onClick={()=>{setRender('business')}} >Business Details</button>
            <button className={render1=='events'? 'active':''}  onClick={()=>{setRender('events')}}>Events</button>
            <button className={render1=='menu'? 'active':''} onClick={()=>{setRender('menu')}} >Menu</button>

        </div>
        <div className="reder">
        {render1=='business' ? <Business locality = {data['location']['locality'] } Pr = {data['price_range']}  OnlineD = {data["has_online_delivery"]==1?"Yes":"No"} TableB = {data["has_table_booking"]==1?"Yes":"No"} Blink = {data['book_url']} Plink = {data['photos_url']}  cur = {data['currency']} ctwo = {data["average_cost_for_two"]}/> : ""}
        {render1=='events' ? flag? <Events title = {data["zomato_events"]['title']} desc = {data["zomato_events"]['event']['description'] } sd = {data["zomato_events"]['event']['start_date']} st = {data["zomato_events"]['event']['start_time']} ed = {data["zomato_events"]['event']['end_date'] } et = {data["zomato_events"]['event']['end_time']} desclaim = {data["zomato_events"]['event']['disclaimer']} />:<Events /> : ""}
        </div></>}
    </div>
  )
}

export default RestInfo