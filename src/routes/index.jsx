import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';


const Home = lazy(() => import('../pages/home'));
const Contact = lazy(() => import('../pages/contact'));

// const LoadingStyles = {
//   position: 'absolute',
//   right: '5%',
//   bottom: '5%',
// };

// const Loading = (
//   <div style={LoadingStyles}>
//     loading...
//   </div>
// );


export default () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Suspense>
);
