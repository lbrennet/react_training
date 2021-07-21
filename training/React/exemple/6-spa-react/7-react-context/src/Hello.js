// Hello.js
import React, { Fragment } from "react";
/**
 * On importe cette fois non pas le UserProvider,
 * mais le contexte afin d'accéder au `Consumer`
 */
import { withUser } from "./store/UserProvider";
/**
 * Le Consumer expose le contenu de la propriété `value`
 * du Provider
 */
export default withUser(({ name, setName }) => (
  <Fragment>
    <h1>Hello {name}!</h1>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
  </Fragment>
));
