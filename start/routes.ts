import router from '@adonisjs/core/services/router'
const CvsController = () => import('#controllers/cvs_controller')

router.get('/', [CvsController, 'show'])
router.post('/generate', [CvsController, 'generate'])

router.get('/preview/:templateId', [CvsController, 'preview'])
