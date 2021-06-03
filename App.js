import Dashboard from "./components/Dashboard/dashboard";
import { useEffect } from "react";
import Footer from "./components/Footer/footer";
import {Edit} from './components/Edit/Edit'
import Header from "./components/Header/header";
import Menu from "./components/Menubar/Menu";
import { StudentTable } from "./components/Tables/StudentTable";
import { PostTable } from "./components/Tables/PostTable";
import { SkillsTable } from "./components/Tables/SkillsTable";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SchoolTable } from "./components/Tables/SchoolTable";
import { AdsCreate } from "./components/Ads/Adscreate";
import { useSelector, useDispatch } from "react-redux";
import {  refreshToken } from "./redux/actions/auth";
import Login from "./components/login";
import Adsposted from "./components/Ads/Adsposted";
import CreateSkills from "./components/Create/CreateSkills";

function App() {


  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
 
console.log(auth.token)


  return (
    <Router>
    <div className="wrapper">
    {auth.token?<Header/>:null}    
    {auth.token?<Menu/>:null}    
    <Switch>

<Route path="/login">
{auth.token?
<div class="content-wrapper">
<Dashboard/>
</div>
:<Login/>}   
</Route>

        <div class="content-wrapper">

        <Route path="/" exact>
        {auth.token?

<Dashboard/>
:<Login/>}          </Route>
        <Route path="/students" exact>
        {auth.token?

<StudentTable/>
:<Login/>}          </Route>
        <Route path="/schools" exact>
        {auth.token?

<SchoolTable/>
:<Login/>}          </Route>
        <Route path="/posts" exact>
        {auth.token?

<PostTable/>
:<Login/>}          </Route>
        <Route path="/ads" exact>
        {auth.token?

<AdsCreate/>
:<Login/>}          </Route>
        <Route path="/showads" exact>
        {auth.token?

<Adsposted/>
:<Login/>}          </Route>
        <Route path="/skills" exact>
        {auth.token?

<SkillsTable/>
:<Login/>}          </Route>
        <Route path="/createskills" exact>
        {auth.token?

<CreateSkills/>
:<Login/>}          
</Route>

<Route path="/:edits/:id" exact>
{auth.token?
<Edit/>
:<Login/>}
</Route>

        </div>


        </Switch>

   
        {/* <Footer/> */}

    </div>
  
  

    </Router>
  );
}

export default App;
