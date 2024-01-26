// import classes from  "./Home.module.css";
// import MainNavigation from "../Layout/MainNavigation";
// import NavBar from "../Layout/NavBar";
// import { navActions } from "../../store/home";
// import { useDispatch, useSelector } from "react-redux";
// import React, { useEffect } from "react";
// import DropNavigation from "../Layout/DropNavigation";
// import Logo from "../Layout/Logo";
// import Footer from "../Layout/Footer";


// const Home = () => {
//     const width = useSelector((state) => state.nav.width);
//     const dispatch = useDispatch();
//     const isDrawing = useSelector((state) => state.nav.isHamTouched);
  
//     const setDimenson = () => {
//       dispatch(navActions.setWindow());
//     };
//     useEffect(() => {
//       window.addEventListener("resize", setDimenson);
//     }, [width]);
  
//     return (
//       <div className={classes.Layout}>
//         <div className={classes.LayoutNavigation}>
//         {width >= 640 && <MainNavigation />}
//         {!isDrawing && width < 640 && (
//           <div className={classes.layoutHam}>
//             <Logo />
//             <NavBar />
//           </div>
//         )}
//         {isDrawing && width < 640 && <DropNavigation />}
//         </div>
//         <Logo />
//         <Logo />
//         <Logo />
//         <div className={classes.LayoutFooter}>
//           <Footer />
//         </div>
//       </div>
//     );
//   };

// export default Home;