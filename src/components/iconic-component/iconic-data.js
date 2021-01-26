import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";

export const IconData = [
  {
    icon: <HiIcons.HiOutlineClipboardList className="svg-icons" size={30} />,
    name: "All orders",
  },
  {
    icon: <HiIcons.HiOutlineCreditCard className="svg-icons" size={30} />,
    name: "Unpaid",
  },
  {
    icon: <FiIcons.FiPackage className="svg-icons" size={28} />,
    name: "Processing",
  },
  {
    icon: <RiIcons.RiTruckLine className="svg-icons" size={29} />,
    name: "Shipped",
  },
];
export const MyAssets = [
  { title: "Points", value: 5, link: "Get & Use" },
  { title: "Coupons", value: 2, link: "View" },
  { title: "Wishlists", value: 0, link: "View" },
  { title: "View history", value: 0, link: "View" },
];
export const InteractiveData = [
  {
    icon: <RiIcons.RiCalendarCheckLine className="svg-icons" size={28} />,
    name: "Check In",
  },
  {
    icon: <CgIcons.CgPerformance className="svg-icons" size={28} />,
    name: "Lottery activity",
  },
  {
    icon: <FaIcons.FaVoteYea className="svg-icons" size={28} />,
    name: "Vote",
  },
  {
    icon: <FaIcons.FaHandHoldingUsd className="svg-icons" size={28} />,
    name: "Make Money",
  },
  {
    icon: <BiIcons.BiHomeHeart className="svg-icons" size={28} />,
    name: "Community",
  },
  {
    icon: <CgIcons.CgShoppingBag className="svg-icons" size={28} />,
    name: "$0.01 sale",
  },
];
