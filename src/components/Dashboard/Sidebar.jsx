import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  useSelect,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
 
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/authAPI";
import toast from 'react-hot-toast'
import ConfirmationModal from "../common/ConfirmationModal";
import { ACCOUNT_TYPE } from '../../utils/contants';

const Sidebar = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null)
  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const location = useLocation()

  return (
    <div> 
      <Card className="h-[100vh] w-[15rem] max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed top-0 left-0 text-white bg-gray-700 ">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
         
          {/* <ListItem className={location.pathname === "/dashboard" ? 'text-blue-500':'text-white'}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Dashboard
          </ListItem> */}
       
          
         
          {
            user?.AccountType === ACCOUNT_TYPE.PERSONAL &&(
              <Link to='dashboard/orders'>
              <ListItem className={location.pathname === "/dashboard/orders" ? 'text-blue-500':'text-white'}>
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5 mr-2" />
                </ListItemPrefix>
                Orders
              </ListItem>
              </Link>
            )
          }

          <ListItem className={location.pathname === "/dashboard/inbox" ? 'text-blue-500':'text-white'}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>

          <Link to='/dashboard/my-profile'>
          <ListItem className={location.pathname === "/dashboard/my-profile" ? 'text-blue-500':'text-white'}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Profile
          </ListItem>
          </Link>
            

          <ListItem className={location.pathname === "/dashboard/settings" ? 'text-blue-500':'text-white'}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5 mr-2" />
            </ListItemPrefix>
            Settings
          </ListItem>
        
          {
            token !== null && (
              <Link  onClick={() => {
                
                setConfirmationModal({
                  text1: "Are you sure?",
                  text2: "You will be logged out of your account.",
                  btn1Text: "Logout",
                  btn2Text: "Cancel",
                  btn1Handler: () =>  dispatch(logout(navigate)),
                  btn2Handler: () => setConfirmationModal(null),
                })
              }}> 
                <ListItem className="text-red-500 hover:text-red-600 duration-200">
               <ListItemPrefix>
                  <PowerIcon className="h-5 w-5 mr-2" />
                </ListItemPrefix>
                  Log Out
                 </ListItem>
              </Link>
            )
          }
          
         
        </List>
      </Card>
      {confirmationModal && <ConfirmationModal modalData = {confirmationModal}/>}
      </div>
    );
}

export default Sidebar