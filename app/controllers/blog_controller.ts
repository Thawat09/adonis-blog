import type { HttpContext } from '@adonisjs/core/http'
import { mainmenu } from '#models/mainmenu_model'
import { submenu } from '#models/submenu_model'
import { detailIndex } from '#models/detail_index_model'
import { detailQa } from '#models/detail_qa_model'
import { detailLab } from '#models/detail_lab_model'

export default class BlogController {
  async index({ view, request }: HttpContext) {
    const currentRoute = request.url()
    const detail = detailIndex
    return view.render('pages/index', { mainmenu, submenu, currentRoute, detail })
  }

  async qa({ view, request }: HttpContext) {
    const currentRoute = request.url()
    const detail = detailQa
    return view.render('pages/index', { mainmenu, submenu, currentRoute, detail })
  }

  async lab({ view, request }: HttpContext) {
    const currentRoute = request.url()
    const detail = detailLab
    return view.render('pages/index', { mainmenu, submenu, currentRoute, detail })
  }
}
