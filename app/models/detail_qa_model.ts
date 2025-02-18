export interface Detail {
  id: number
  title: string
  header: string
  body: string
  code: string
}

export const detailQa: Detail[] = [
  {
    id: 1,
    title: 'Q&A',
    header: 'Home',
    body: `โค้ดด้านล่างนี้จะทำการแสดงข้อมูลโพสต์ทั้งหมดที่อยู่ในตัวแปร posts บนหน้าเว็บ โดยเริ่มจากการแสดงหัวข้อ "Posts" ด้วยแท็ก <h1> 
    ให้ผู้ใช้รู้ว่ากำลังดูหน้าโพสต์ หลังจากนั้นจะทำการวนลูปผ่านข้อมูลใน posts และสร้างรายการของโพสต์ในรูปแบบลิสต์ (<ul>) โดยทุกโพสต์จะแสดงในรูปแบบของลิงก์ที่
    สามารถคลิกเพื่อไปดูรายละเอียดของโพสต์นั้น ๆ ได้ นอกจากนี้ยังมีปุ่ม "New" ที่อยู่ด้านล่างของลิสต์โพสต์ ซึ่งเป็นลิงก์ที่จะนำผู้ใช้ไปยังหน้าสำหรับสร้างโพสต์ใหม่.`,
    code: `
      @layouts.master({title:"Posts"})
        <h1 class="ui header">Posts</h1>
        <ul class="ui bullet list">
          @each(post in posts)
            <li>
              <a href="{{ route('posts.show',{id: post.id}) }}">{{post.title}}
              </a>
            </li>
          @endeach
        </ul>
        <a class="ui button" href="{{route('posts.create')}}">New</a>
      @end`,
  },
  {
    id: 2,
    title: '',
    header: 'Routes',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      import type { HttpContext } from '@adonisjs/core/http'
      import router from '@adonisjs/core/services/router'
      import PostsController from '#controllers/posts_controller'

      router.get('/',({response}:HttpContext)=>{
          response.redirect().toRoute('posts.home')
      })

      router.get('/posts',[PostsController,'index']).as('posts.home')
      router.post('/posts',[PostsController,'store']).as('posts.store')
      router.get('/posts/create',[PostsController,'create']).as('posts.create')
      router.get('/posts/:id',[PostsController,'show']).as('posts.show')
      router.get('/posts/:id/edit',[PostsController,'edit']).as('posts.edit')
      router.post('/posts/:id/update',[PostsController,'update']).as('posts.update')
      router.get('/posts/:id/delete',[PostsController,'destroy']).as('posts.delete')`,
  },
]
