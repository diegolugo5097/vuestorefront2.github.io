const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['checkout'] = require('../middleware/checkout.js')
middleware['checkout'] = middleware['checkout'].default || middleware['checkout']

middleware['is-authenticated'] = require('../middleware/is-authenticated.js')
middleware['is-authenticated'] = middleware['is-authenticated'].default || middleware['is-authenticated']

export default middleware
