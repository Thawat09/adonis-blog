import type { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'
const BlogController = () => import('#controllers/blog_controller')

router.get('/', ({ response }: HttpContext) => {
  response.redirect().toRoute('home')
})

router.get('/blog', [BlogController, 'index']).as('home')
router.get('/qa', [BlogController, 'qa']).as('qa')
router.get('/lab', [BlogController, 'lab']).as('lab')
