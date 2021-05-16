import Link from 'next/link'

import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

import App from "App";

let authenticationSuccess = function() {
  console.log('Successful authentication');
};

let authenticationFailure = function() {
  console.log('Failed authentication');
};

window.Trello.authorize({
  type: 'popup',
  name: 'Getting Started Application',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});

// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

let trelloResponse = "loading trello response here...";

fetch('https://api.trello.com/1/actions/{id}?key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548', {
  method: 'GET'
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));

let myList = 'INSERT YOUR IDLIST HERE';

let creationSuccess = function (data) {
  console.log('Card created successfully.');
  console.log(JSON.stringify(data, null, 2));
};

let newCard = {
  name: 'New Test Card',
  desc: 'This is the description of our new card.',
  // Place this card at the top of our list
  idList: myList,
  pos: 'top'
};

window.Trello.post('/cards/', newCard, creationSuccess);

window.Trello.put('/cards/[ID]', {name: 'New Test Card'});

export default function IndexPage() {
  return (
    <div>
      <h1>Hello World Trello Tasks with timedoctor trial. </h1>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>
        {trelloResponse}
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {{ trelloResponse }  | {fetch} }
        </Modal>

        <App />
        
      </div>
    </div>
  );
}
