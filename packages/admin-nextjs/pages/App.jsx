import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

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

function App() {
    return (
      <Button variant="contained">
        Hello World mdc modal
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {{ trelloResponse } | {fetch} }
        </Modal>
      </Button>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));
