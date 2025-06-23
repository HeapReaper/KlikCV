import router from '@adonisjs/core/services/router'
const CvsController = () => import('#controllers/cvs_controller')

router.get('/', [CvsController, 'index'])
router.get('/create', [CvsController, 'create'])
router.post('/generate', [CvsController, 'generate'])

router.get('/preview/:templateId', [CvsController, 'preview'])
