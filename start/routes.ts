import router from '@adonisjs/core/services/router'
const CvsController = () => import('#controllers/cvs_controller')
import { throttle } from '#start/limiter';

router.get('/', [CvsController, 'index']).use(throttle)
router.get('/create', [CvsController, 'create']).use(throttle)
router.post('/generate', [CvsController, 'generate']).use(throttle);

router.on('/privacy').render('pages/privacy').use(throttle)
router.on('/contact').render('pages/contact').use(throttle)

router.get('/preview/:templateId', [CvsController, 'preview']).use(throttle)
