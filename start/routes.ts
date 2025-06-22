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
router.on('/template_1').render('pages/templates/cv_template_1')
