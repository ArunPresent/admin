import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {getAds} from '../../redux/actions/userlist'
const Adsposted = () => {
    const {auth,list} = useSelector(state => state)
    const dispatch = useDispatch()

useEffect(() => {
    dispatch(getAds(auth))  
  
}, []);
    return (
        <div>
<Link to='/ads'>Create an Advertiesement +</Link>
<h3>List of all the ads posted till now</h3>
          <div class="card-deck">
{list.ads.map(ad=>
  <div class="card"  >
    <img class="card-img-top" src={ad.images[0]} alt="Card image cap" / >
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">{ad.content}</p>
      {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>)
}
</div>
        </div>
    )
}

export default Adsposted
