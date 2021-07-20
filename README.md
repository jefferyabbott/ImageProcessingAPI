# ImageProcessingAPI

This API returns a thumbnail image with the requested size. It is a requirement of the Udacity Full Stack JavaScript nanodegree program.

## Installation

Install the NPM dependencies:
`npm install`

Start the server:
`npm run start`

Run tests:
`npm run test`

Compile for release:
`npm run build`

## Usage

request format:
`localhost:3000/api/images?filename={{image.jpg}}&height={{size}}&width={{size}}`

example:
`localhost:3000/api/images?filename=santamonica.jpg&height=200&width=200`
