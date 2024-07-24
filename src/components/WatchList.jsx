import React, {useState, useContext} from 'react'
import {Tooltip, Grow, stepLabelClasses} from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';

import { watchlist } from '../Data/data'
import { DoughnutChart } from "./DoughnoutChart";
import GeneralContext from "./GeneralContext";


const labels = watchlist.map((subArray) => subArray["name"]);

function WatchList() {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
        className="search .text-body-tertiary"
      />
      <span className="counts">{watchlist.length}/50</span>
    </div>
    <ul className='list'>
      {watchlist.map((stock, index)=>{
        return(<WatchListItem stock={stock} key={index}/>);
      })}
    </ul>
    <DoughnutChart data={data} />
  </div>
  )
}

export default WatchList




const WatchListItem = ({stock, key})=> {
  const [showWatchlistActions, setShowWatchlistAction] = useState(false);

  const handleMouseEnter = (e)=>{
      setShowWatchlistAction(true);
  }
  const handleMouseLeave = (e)=>{
      setShowWatchlistAction(false);
  }
return  (

<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <div className='watchlist-div'>
  <div className='items'>
    <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
  </div>
  <div className="itemInfo ">
    <span className='percent'>{stock.percent}</span>
    {stock.isDown ? 
      <i class="price-1 fa-solid fa-chevron-down fs-10 icon"></i>  : <i class="price-1 fa-solid fa-chevron-up icon"></i>
    }

<span className='price'>{stock.price}</span>
  </div>
  </div>
  {showWatchlistActions && <WatchListActions uid={key}/>}
</li>

);
}



const WatchListActions = ({uid})=>{
  const generalContext = useContext(GeneralContext);


  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
      <span className='actions'>
        <span>
          <Tooltip
          title="Buy (B)"
          placement='top'
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}>
            <button className='buy'>Buy</button>
          </Tooltip>

          <Tooltip
          title="Sell (s)"
          placement='top'
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}>
            <button className='sell'>Sell</button>
          </Tooltip>

          <Tooltip
          title="Analtics (A)"
          placement='top'
          arrow
          TransitionComponent={Grow}>
            <button className='action'>
              <BarChartIcon className="icon"/>
            </button>
          </Tooltip>


          <Tooltip
          title="Delete"
          placement='top'
          arrow
          TransitionComponent={Grow}>
            <button className='action'>
              <DeleteIcon />
            </button>
          </Tooltip>
          
          <Tooltip
          title="More"
          placement='top'
          arrow
          TransitionComponent={Grow}>
            <button className='action'>
              <MoreHorizIcon />
            </button>
          </Tooltip>

        </span>
      </span>
  );
}