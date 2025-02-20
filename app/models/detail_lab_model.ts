export interface Detail {
  id: number
  title: string
  header: string
  body: string
  code: string
}

export const detailLab: Detail[] = [
  {
    id: 15,
    title: 'Lab',
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
  {
    id: 16,
    title: '',
    header: 'Master',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{{ title }}</title>
            <link rel="stylesheet" type="text/css" href="/semantic/semantic.min.css">
            <script
                src="https://code.jquery.com/jquery-3.1.1.min.js"
                integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                crossorigin="anonymous">
            </script>
            <script src="/semantic/semantic.min.js"></script>
        </head>
        <body>
            @include('partials/navbar')
            <div class="ui container">
                {{{await $slots.main()}}}
            </div>

            @if($slots.script)
                {{{await $slots.script()}}}
            @end
        </body>
      </html>`,
  },
  {
    id: 17,
    title: '',
    header: 'Navbar',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      <div class="ui grey large menu inverted">
        <div class="header item">
            <a href="{{ route('posts.home') }}">Blog</a>
        </div>
      </div>`,
  },
  {
    id: 18,
    title: '',
    header: 'Alert',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      <div class="ui tiny modal">
        <div class="header">
            {{ title }}
        </div>
        <div class="content">
            @if($slots.main)
                {{{await $slots.main()}}}
            @end
        </div>
        <div class="actions">
            @if($slots.actions)
                {{{await $slots.actions()}}}
            @end
        </div>
      </div>`,
  },
  {
    id: 19,
    title: '',
    header: 'Button',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      <a class="ui button {{ name }}" href="{{ action }}">{{ label }}</a>`,
  },
  {
    id: 20,
    title: '',
    header: 'Input',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      <div class="field">
        @if(label)
            <label for="{{ name }}">{{ label }}</label>
        @end
        @if(type=="submit")
            <input id="{{ name }}" class="ui button" {{ $props.except(['label']).toAttrs() }}>
        @else
            <input id="{{ name }}" type="{{ type }}" name="{{ name }}" size="{{ size }}" value="{{ value }}" {{ $props.except(['label']).toAttrs() }} placeholder="{{ placeholder }}" required>
        @end
      </div>`,
  },
  {
    id: 21,
    title: '',
    header: 'Textarea',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      <div class="field">
        <label for="{{ name }}">{{ label }}</label>
        <textarea name="{{ name }}" rows="{{ rows }}" cols="{{ cols }}" placeholder="{{ placeholder }}" required>{{ value }}</textarea>
      </div>`,
  },
  {
    id: 22,
    title: '',
    header: 'Posts',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      @layouts.master({title:"Posts"})
        <h1 class="ui header">Posts</h1>
        <ul class="ui bullet list">
          @each(post in posts)
            <li>
              <a href="{{ route('posts.show',{id: post.id}) }}">{{ post.title }}</a>
            </li>
          @endeach
        </ul>
        @!button({ label: 'New', action: route('posts.create') })
      @end`,
  },
  {
    id: 23,
    title: '',
    header: 'Detail',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      @layouts.master({ title: post.title })
        @alert({ title: 'Delete?' })
            @slot('main')
                <p>Do you want to delete {{ post.title }}?</p>
            @end
            @slot('actions')
                <div class="ui green approve button">Delete</div>
                <div class="ui red deny button">Cancel</div>
            @end
        @end
        <h1 class="ui header">{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        @!button({ label: 'Back', action: route('posts.home') })
        @!button({ label: 'Edit', action: route('posts.edit', { id: post.id }) })
        @!button({ label: 'Delete', action: 'javascript:void(0);', name: 'delete' })

        @slot('script')
            <script>
                $(document).ready(function() {
                    $('.ui.button.delete').click(function() {
                        $('.ui.modal').modal({
                            closable: false,
                            onApprove: function() {
                                window.location.href = "{{ route('posts.delete', { id: post.id }) }}";
                            }
                        }).modal('show');
                    });
                });
            </script>
        @end
      @end`,
  },
  {
    id: 24,
    title: '',
    header: 'Post',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      @layouts.master({title:"New Post"})
        <h1>{{ post ? 'Edit Post' : 'New Post' }} </h1>

        <form class="ui form" action="{{ post ? route('posts.update',{id: post.id}) : route('posts.store') }}" method="POST">
            {{ csrfField() }}
            @!input({ label: 'Title', name: 'title', value: post ? post.title : '', size: 50, type: 'text', placeholder: 'Please fill out this field.', })
            @!textarea({ label: 'Body', name: 'body', value: post ? post.body : '', placeholder: 'Please fill out this field.', rows: 5, cols: 50 })
            <div class="ui buttons">
                @!input({ name: 'submit', value: 'Save', type: 'submit' })
                <div style="margin-right: 10px;"></div>
                @!button({ label: 'Cancel', action: route('posts.home') })
            </div>
        </form>
      @end`,
  },
  {
    id: 25,
    title: '',
    header: 'โครงสร้าง',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      import type { HttpContext } from '@adonisjs/core/http'

      interface Post {
          id: number
          title: string
          body: string
      }

      const posts: Post[] = [
          {
              id: 1,
              title: 'Hello AdonisJS',
              body: 'Adonis includes everything you need to create fully functional web app or an API server.'
          },
          {
              id: 2,
              title: 'VueJS',
              body: 'Vue is a progressive framework for building user interfaces.'
          }
      ]

      export default class PostsController {
          ... นำฟังก์ชันมาใส่ข้างในนี้
      }`,
  },
  {
    id: 26,
    title: '',
    header: 'Index',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      async index({ view }: HttpContext) {
        return view.render('posts', { posts: posts })
      }`,
  },
  {
    id: 27,
    title: '',
    header: 'Show',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      async show({ params, view }: HttpContext) {
        const id = params.id
        const post = posts.find((p) => p.id == Number(id))

        return view.render('detail', { post: post })
      }`,
  },
  {
    id: 28,
    title: '',
    header: 'Create',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      async create({ view }: HttpContext) {
        return view.render('post')
      }`,
  },
  {
    id: 29,
    title: '',
    header: 'Store',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      async store({ request, response }: HttpContext) {
        const title = request.input('title')
        const body = request.input('body')
        const newId = posts.length + 1
        const newPost: Post = { id: newId, title: title, body: body }

        posts.push(newPost)

        response.redirect().toRoute('posts.home')
      }`,
  },
  {
    id: 30,
    title: '',
    header: 'Edit',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      async edit({ params, view }: HttpContext) {
        const id = params.id
        const post = posts.find((p) => p.id == Number(id))

        return view.render('post', { post: post })
      }`,
  },
  {
    id: 31,
    title: '',
    header: 'Update',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      async update({ params, request, response }: HttpContext) {
        const id = params.id
        const index = posts.findIndex((p) => p.id == Number(id))

        posts[index].title = request.input('title')
        posts[index].body = request.input('body')
        response.redirect().toRoute('posts.home')
      }`,
  },
  {
    id: 32,
    title: '',
    header: 'Destroy',
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
    code: `
      async destroy({ params, response }: HttpContext) {
        const id = params.id
        const index = posts.findIndex((p) => p.id == Number(id))
        posts.splice(index, 1)

        response.redirect().toRoute('posts.home')
      }`,
  },
]
