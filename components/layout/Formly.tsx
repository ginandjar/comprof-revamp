import React, { Component } from 'react';

class SimpleForm extends Component {
  componentDidMount() {
    if (document.getElementById('lf-load-scripts') === null) {
      var s = document.createElement('script');
      s.id = 'lf-load-scripts';
      s.type = 'text/javascript';

      // Replace with your forms JS src root //
      s.src = 'https://d2erq0e4xljvr7.cloudfront.net/assets/js/leadformly-embed_advance.min.js';

      document.body.appendChild(s);
    }
  }

  render() {
    return (
      <div

        // Copy and paste the contents of the opening div //
        id="lf-iframe-embed-code-61070"
        className="lf-container"
        lf-include-html="https://s3.amazonaws.com/leadformlyimages/iframe/form/61070.html?ts=1542084198"
        data-token="1YtSyI37K7C36YSfWDrQcC4gtRTXUPsKfIBRcZb2+43668"
        data-embed-type="simple"
        lf-elements="2,10,-1"

      />
    );
  }
}

export default SimpleForm;