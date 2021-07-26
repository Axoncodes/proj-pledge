## Quick node start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://gitlab.rastava.com/client-contracts/d-c-ca/pledge/pledge-frontend.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
5.  Run `npm run clean` to delete the example app.


## Quick docker start

1.  Once the cloning is complete, you can buold the image by `docker build -t <name>/<project_name>:<project_version> .`
2.  Now to run the image execute `docker run -p <local>:140 <image_id>`




notes:
    using superagent for flexible api handling