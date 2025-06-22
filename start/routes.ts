/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CvsController = () => import('#controllers/cvs_controller')

router.get('/', [CvsController, 'show'])
router.post('/generate', [CvsController, 'generate'])
