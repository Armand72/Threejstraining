import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const Routes = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact component={Homepage} path="/" />

        {/* <PrivateRoute
          exact
          path="/dashboard/:idUser/chat/chatRoom/:idChild"
          component={ChatRoom}
        ></PrivateRoute> */}
      </Switch>
    </>
  );
};

export default Routes;
