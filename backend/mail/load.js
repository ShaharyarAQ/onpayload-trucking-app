const LOAD_TEMPLATE = (data) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>OnPayload</title>
        <style>
          .container {
            width: 100%;
            height: 100%;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .email {
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
          }
          .email-header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .email-body {
            padding: 20px;
          }
          .email-footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="email">
            <div class="email-header">
              <h1>OnPayLoad</h1>
            </div>
            <div class="email-body">
              <h2>Load Info</h2>
              <p>Pickup City: ${data.loadDetails.pickupCity}</p>
              <p>Pickup State: ${data.loadDetails.pickupState}</p>
              <p>Pickup Zip Code: ${data.loadDetails.pickupZipcode}</p>
              <p>Destination City: ${data.loadDetails.destinationCity}</p>
              <p>Destination State: ${data.loadDetails.destinationState}</p>
              <p>Destination Zip Code: ${data.loadDetails.destinationZipcode}</p>
              <p>Distance: ${data.loadDetails.distance}</p>
              <p>Pay: ${data.loadDetails.pay}</p>
              <h2>Load Link</h2>
              <a href="${data.link}">${data.link}</a>
            </div>
            <div class="email-footer">
              <p>Copyright @ OnPayload 2023</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

module.exports = { LOAD_TEMPLATE }