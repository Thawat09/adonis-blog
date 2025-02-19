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
    body: 'การทำงานของโค้ดส่วนนี้คือ...',
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
    body: `
    โค้ดนี้ใช้สำหรับกำหนดเส้นทาง (routing) ในแอปพลิเคชัน AdonisJS ซึ่งจะช่วยจัดการคำขอ HTTP สำหรับระบบคำถามและคำตอบ (Q&A). โดยเริ่มจากการใช้ router.get() และ router.post() เพื่อกำหนดเส้นทางต่างๆ เช่น การเปลี่ยนเส้นทางไปที่หน้า "qa.home" เมื่อเข้าถึงเส้นทางหลัก (/).

    สำหรับเส้นทางต่างๆ เช่น การแสดงรายการคำถาม (/qa), การค้นหาคำถาม (/qa/search), การเพิ่มคำถาม (/qa/create), การแก้ไข (/qa/:id/edit), และการลบ (/qa/:id/delete), จะเรียกใช้ฟังก์ชันต่างๆ ใน QaController เพื่อจัดการข้อมูลคำถามในระบบ. เส้นทางเหล่านี้ยังมีชื่อที่ตั้งไว้เพื่อให้ใช้งานได้ง่ายและสะดวกในการเรียกใช้ในส่วนอื่นๆ ของแอปพลิเคชัน.

    การใช้วิธีนี้ทำให้สามารถจัดการคำถามในระบบได้ครบวงจร ตั้งแต่การดูคำถาม การสร้าง ค้นหา แก้ไข และลบคำถาม, ซึ่งทั้งหมดจะถูกควบคุมโดย QaController.`,
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
    id: 2,
    title: '',
    header: 'Master',
    body: `
    โค้ดนี้เป็นโครงสร้างของหน้า HTML ที่ใช้ในการสร้างเว็บแอปพลิเคชัน โดยใช้เทคโนโลยีต่างๆ เช่น Semantic UI, jQuery, และ Vite เพื่อช่วยในการจัดการทรัพยากร (CSS, JavaScript) และสร้างอินเตอร์เฟซที่มีการตอบสนองได้ดี

    ใน <head> จะตั้งค่า charset และ viewport เพื่อรองรับการแสดงผลในอุปกรณ์หลากหลายขนาด และใช้ title ที่สามารถกำหนดจากเซิร์ฟเวอร์เพื่อให้แต่ละหน้าแตกต่างกัน

    ไฟล์ CSS และ JavaScript ของ Semantic UI จะถูกโหลดจาก CDN เพื่อใช้ในการตกแต่งหน้าเว็บและเพิ่มฟังก์ชันการทำงานที่ง่าย เช่น เมนูดรอปดาวน์ ขณะที่ @vite ช่วยในการโหลดไฟล์ที่คอมไพล์จากแอปพลิเคชัน

    ใน <body> จะมีการใช้ {{{ await $slots.main() }}} เพื่อแสดงเนื้อหาหลักของหน้าเว็บ และตรวจสอบ $slots.script เพื่อเพิ่มสคริปต์เพิ่มเติมหากมี

    โค้ดนี้ช่วยให้หน้าเว็บมีความยืดหยุ่นในการแสดงผลและรองรับการทำงานในอุปกรณ์ต่างๆ ได้ดี`,
    code: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>
            {{ title }}
          </title>
          <link rel="stylesheet" type="text/css" href="/semantic/semantic.min.css">
          <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
          <script src="/semantic/semantic.min.js"></script>
          @vite(['resources/css/app.css', 'resources/js/app.js'])

          @if($slots.style)
            {{{ await $slots.style() }}}
          @end
        </head>
        <body>
          <div class="ui container">
            {{{ await $slots.main() }}}
          </div>

          @if($slots.script)
            {{{ await $slots.script() }}}
          @end
        </body>
      </html>`,
  },
  {
    id: 3,
    title: '',
    header: 'QA',
    body: `
    โค้ดนี้เป็นการใช้ Blade Templating ของ AdonisJS ในการสร้างหน้า Q&A โดยมีการใช้ layout หลักที่ชื่อ master ซึ่งกำหนดให้หน้าเว็บนี้มีชื่อว่า "Q&A". โค้ดนี้ใช้เพื่อจัดการส่วนต่างๆ ของหน้าต่างๆ รวมถึงการตกแต่ง (styling) และการทำงานแบบ interactive ด้วย JavaScript.

    ในส่วนของ style, โค้ดจะเพิ่มการตกแต่งสำหรับหัวข้อ <h1> ให้มีระยะห่างด้านล่าง (bottom margin) 50px และกำหนดให้ .icons จัดวางอยู่ทางขวา. ส่วนนี้จะช่วยให้การแสดงผลของหน้าเว็บดูสะอาดตาและเข้ากับธีมของเว็บ.

    เนื้อหาของหน้า ประกอบด้วยการแสดงหัวข้อหลักที่ใช้ h1 เพื่อแสดงข้อความ "AdonisJS Q&A", และมีการเรียกใช้งาน partials ต่างๆ เช่น QASearch และ QAAccordion ซึ่งน่าจะเป็นส่วนที่แสดงฟังก์ชันการค้นหาคำถาม และแสดงรายการคำถามในรูปแบบ Accordion.

    ในส่วนของ script, โค้ดนี้ใช้ jQuery เพื่อทำให้ Accordion สามารถคลิกเพื่อแสดงและซ่อนเนื้อหาได้. เมื่อผู้ใช้คลิกที่ชื่อหัวข้อใน Accordion (.title), คอนเทนต์ที่อยู่ใต้หัวข้อนั้นจะถูกแสดงหรือซ่อน (toggle) และมีการหมุนของไอคอน dropdown เพื่อแสดงการเปลี่ยนแปลง.

    โค้ดนี้ช่วยให้หน้า Q&A มีฟังก์ชันที่ใช้งานง่าย และการแสดงผลที่ดีขึ้นทั้งในแง่ของ UI/UX.`,
    code: `
      @layouts.master({ title: 'Q&A'})
        @slot('style')
          <style>
            h1 {
              margin-bottom: 50px !important;
            }

            .icons {
              margin-top: 10px;
              text-align: right;
            }
          </style>
        @end
        <h1 class="ui aligned center header">
          AdonisJS Q&A
        </h1>
        @include('partials/QASearch')
        @include('partials/QAAccordion')

        @slot('script')
          <script>
            $(document).ready(function(){
              $('.ui.accordion').accordion();
                $(".title").click(function(){
                    $(this).next(".content").slideToggle();
                    $(this).find(".dropdown.icon").toggleClass("rotate");
                });
            });
          </script>
        @end
      @end`,
  },
  {
    id: 4,
    title: '',
    header: 'QAAccordion',
    body: `
    โค้ดนี้แสดงการสร้าง Accordion ที่ใช้ในหน้า Q&A โดยใช้ Semantic UI เพื่อทำให้คำถามและคำตอบถูกจัดแสดงในรูปแบบที่สามารถคลิกเพื่อเปิดหรือปิดได้. แต่ละรายการใน Accordion แสดงข้อมูลจากตัวแปร qa ซึ่งน่าจะเป็นคอลเล็กชันของคำถามและคำตอบที่ถูกส่งมาให้กับหน้าเว็บนี้.

    เริ่มต้นจากการใช้ div ที่มีคลาส ui accordion, ซึ่งเป็นคอนเทนเนอร์หลักของ Accordion. ภายใน Accordion จะมีการวนลูป (@each) ผ่านแต่ละโพสต์ในตัวแปร qa, และสำหรับแต่ละโพสต์จะแสดงคำถาม (post.question) ในส่วน .title ซึ่งเป็นชื่อของหัวข้อใน Accordion.

    เมื่อคลิกที่ชื่อคำถามในส่วน .title, จะมีการแสดงคำตอบ (post.answer) ในส่วน .content. นอกจากนี้, ในส่วนของแต่ละคำตอบจะมีไอคอนสำหรับการแก้ไขและลบคำถาม โดยลิงก์เหล่านี้ใช้ route() ของ AdonisJS เพื่อกำหนดเส้นทางสำหรับการแก้ไข (qa.edit) และการลบ (qa.delete) โดยใช้ post.id เพื่ออ้างอิงถึงคำถามที่ต้องการแก้ไขหรือลบ.

    โค้ดนี้ช่วยให้แสดงผลคำถามและคำตอบในรูปแบบ Accordion ที่ดูเรียบร้อย และผู้ใช้สามารถทำการแก้ไขหรือลบคำถามได้จากหน้าเดียว.`,
    code: `
      <div class="ui accordion" hr>
        @each(post in qa)
          <div class="title">
            <i class="dropdown icon"></i>
            {{ post.question }}
          </div>
          <div class="content">
            {{ post.answer }}
            <div class="icons">
              <a href="{{ route('qa.edit',{ id: post.id }) }}">
                <i class="edit outline icon"></i>
              </a>
              <a href="{{ route('qa.delete',{ id: post.id }) }}">
                <i class="trash alternate outline icon"></i>
              </a>
            </div>
          </div>
        @endeach
        <hr />
      </div>`,
  },
  {
    id: 5,
    title: '',
    header: 'QASearch',
    body: `
    โค้ดนี้แสดงฟอร์มการค้นหาคำถามในระบบ Q&A ซึ่งประกอบไปด้วย input field สำหรับการป้อนคำค้นหาและปุ่มค้นหาพร้อมกับลิงก์สำหรับการสร้างคำถามใหม่.

    เริ่มต้นจากการใช้แท็ก <form> ที่มีคลาส ui form, ซึ่งใช้ในการสร้างฟอร์มที่มีสไตล์จาก Semantic UI. ฟอร์มนี้จะส่งข้อมูลไปยังเส้นทาง qa.search โดยใช้วิธีการ POST, และใช้คำสั่ง csrfField() เพื่อป้องกันการโจมตี CSRF (Cross-Site Request Forgery).

    ภายในฟอร์มมีส่วนประกอบของ input field ที่ผู้ใช้สามารถกรอกคำค้นหาลงไปในช่องข้อความ โดยมี placeholder ว่า "Search...". ปุ่ม "Search" ใช้สำหรับการส่งคำค้นหานี้ไปยังเซิร์ฟเวอร์เพื่อทำการค้นหา.

    นอกจากนี้ยังมีปุ่ม "+" ซึ่งเป็นลิงก์ไปยังหน้า qa.create ที่ผู้ใช้สามารถคลิกเพื่อไปสร้างคำถามใหม่ได้. ปุ่มนี้ใช้คลาส ui primary button จาก Semantic UI เพื่อให้ดูเด่นและสามารถแยกแยะได้ง่าย.

    ฟอร์มนี้ช่วยให้ผู้ใช้สามารถค้นหาคำถามที่มีในระบบหรือสร้างคำถามใหม่ได้อย่างสะดวกจากหน้าเดียว.`,
    code: `
      <form class="ui form" action="{{ route('qa.search') }}" method="POST">
        {{ csrfField() }}

        <div class="ui action small fluid input">
          <input type="text" placeholder="Search..." name="txtSearch"/>
          <button class="ui button">Search</button>
          <a class="ui primary button" href="{{ route('qa.create') }}">+</a>
        </div>
      </form>`,
  },
  {
    id: 6,
    title: '',
    header: 'QAForm',
    body: `
    โค้ดนี้เป็นฟอร์มสำหรับการสร้างหรือแก้ไขคำถามและคำตอบในระบบ Q&A ซึ่งใช้ AdonisJS และ Semantic UI ในการออกแบบและควบคุมฟอร์ม. ในส่วนแรกของโค้ด มีการใช้ layout master โดยตั้งชื่อเป็น "Q&A Form" ซึ่งจะแสดงเป็นหัวข้อของหน้า และใช้คำสั่ง @layouts.master เพื่อกำหนดแม่แบบของหน้า. ถ้ามี post (การแก้ไขคำถามที่มีอยู่แล้ว) จะมีข้อความแสดงว่า "Edit Q&A" แต่ถ้าไม่มี post (การสร้างคำถามใหม่) จะมีข้อความว่า "New Q&A".

    ฟอร์มประกอบด้วยฟิลด์สองส่วนหลักคือคำถามและคำตอบ. สำหรับคำถาม จะมีการใช้ <input> เพื่อให้ผู้ใช้กรอกคำถาม โดยค่าเริ่มต้นจะเป็นคำถามที่มีอยู่แล้วหากมี post, หรือจะเป็นช่องว่างหากเป็นการสร้างคำถามใหม่. ฟิลด์คำถามนี้ถูกตั้งค่าให้เป็น required ซึ่งหมายความว่าผู้ใช้ต้องกรอกข้อมูลก่อนที่จะส่งฟอร์ม. ส่วนของคำตอบจะใช้ <textarea> เพื่อกรอกคำตอบ โดยค่าเริ่มต้นจะเป็นคำตอบที่มีอยู่แล้วหากมี post, หรือจะเป็นช่องว่างหากเป็นการสร้างคำถามใหม่. ฟิลด์คำตอบนี้ก็เช่นกัน ถูกตั้งค่าเป็น required เพื่อให้ผู้ใช้กรอกคำตอบก่อนการส่ง.

    เมื่อกรอกข้อมูลครบแล้ว ผู้ใช้สามารถคลิกปุ่ม "Save" หรือ "Update" ขึ้นอยู่กับการกระทำที่เลือก. ถ้าผู้ใช้กำลังแก้ไขคำถาม, ปุ่มจะใช้คำว่า "Update" และจะส่งข้อมูลไปยังเส้นทาง qa.update พร้อมกับ id ของคำถามที่ต้องการแก้ไข. แต่ถ้าผู้ใช้กำลังสร้างคำถามใหม่, ปุ่มจะใช้คำว่า "Save" และจะส่งข้อมูลไปยังเส้นทาง qa.store เพื่อบันทึกคำถามใหม่. นอกจากนี้ยังมีปุ่ม Back ที่จะพาผู้ใช้กลับไปที่หน้า qa.home เพื่อให้ผู้ใช้สามารถกลับไปที่หน้าหลักได้ง่ายๆ.

    ฟอร์มนี้จึงทำหน้าที่ในการจัดการข้อมูลคำถามและคำตอบในระบบ Q&A ให้สะดวกและรวดเร็ว โดยไม่ต้องเปลี่ยนหน้าหรือโหลดใหม่.`,
    code: `
      @layouts.master({ title: 'Q&A Form' })
        <h3>
          {{ post ? 'Edit Q&A' : 'New Q&A' }}
        </h3>
        <form
          class="ui form"
          action="{{ post ? route('qa.update',{ id: post.id }) : route('qa.store') }}"
          method="POST"
        >
          {{ csrfField() }}
          <div class="field">
            <label>Question</label>
            <input type="text" name="question" value="{{ post ? post.question : '' }}" required />
          </div>
          <div class="field">
            <label>Answer</label>
            <textarea name="answer" rows="5" required>{{ post ? post.answer : '' }}</textarea>
          </div>
          <input class="ui button" type="submit" value="{{post ? 'Update' : 'Save' }}" />
          <a class="ui button" href="{{route('qa.home')}}">Back</a>
        </form>
      @end`,
  },
  {
    id: 7,
    title: '',
    header: 'โครงสร้าง',
    body: `
    โค้ดนี้เป็นการสร้าง interface และตัวแปรที่ใช้เก็บข้อมูลคำถามและคำตอบ (Q&A) ในแอปพลิเคชัน โดยใช้ AdonisJS ซึ่งเป็น framework สำหรับพัฒนาเว็บแอปพลิเคชัน.

    เริ่มต้นที่การสร้าง interface QandA ซึ่งใช้กำหนดรูปแบบของข้อมูลที่มีในระบบ Q&A โดยจะมี 3 ฟิลด์หลัก ได้แก่ id ซึ่งเป็นตัวเลขที่ใช้ระบุคำถาม, question ซึ่งเก็บข้อความคำถาม, และ answer ซึ่งเก็บข้อความคำตอบ. การใช้ interface ช่วยให้การทำงานกับข้อมูล Q&A เป็นระเบียบและชัดเจนขึ้น, ทำให้สามารถเข้าถึงข้อมูลได้อย่างถูกต้องตามโครงสร้างที่กำหนดไว้.

    ถัดมา, มีการสร้างตัวแปร lastID เพื่อเก็บค่า ID ล่าสุดที่ใช้ในการสร้างคำถามใหม่ ซึ่งเริ่มต้นที่ 3. ในการพัฒนาแอปพลิเคชันจริงๆ ค่านี้จะถูกปรับตามการเพิ่มคำถามใหม่.

    ตัวแปร qas คือ Array ที่เก็บข้อมูลคำถามและคำตอบตัวอย่างในรูปแบบของ QandA[]. ข้อมูลในนี้จะมี 2 รายการ ได้แก่คำถามเกี่ยวกับ AdonisJS และ NestJS. ข้อมูลเหล่านี้จะถูกใช้ในแอปพลิเคชันเพื่อแสดงผลในหน้าต่างๆ หรือใช้ในการทดสอบการทำงานของระบบ.

    สุดท้าย, มีการสร้าง QandAsController ซึ่งเป็น class ที่ใช้สำหรับจัดการข้อมูล Q&A ในระบบ. ฟังก์ชันต่างๆ ที่เกี่ยวข้องกับการทำงานของ Q&A (เช่น การดึงข้อมูลคำถาม การเพิ่มคำถามใหม่ หรือการแก้ไขคำถาม) จะถูกนำมาใส่ภายใน class นี้. QandAsController จะช่วยให้สามารถจัดการข้อมูล Q&A ได้อย่างมีระเบียบและสามารถเรียกใช้ได้ง่าย.

    โค้ดนี้เป็นการเตรียมความพร้อมสำหรับการทำงานกับคำถามและคำตอบในแอปพลิเคชัน โดยตั้งโครงสร้างข้อมูลและสร้างตัวควบคุมที่เหมาะสมกับการทำงานในอนาคต.`,
    code: `
      import type { HttpContext } from '@adonisjs/core/http'

      interface QandA {
        id: number;
        question: string;
        answer: string;
      }

      var lastID: number = 3

      const qas: QandA[] = [
        {
          id: 1,
          question: 'What is AdonisJS?',
          answer: 'AdonisJS is a TypeScript-first web framework for building web apps and API servers. It comes with support for testing, modern tooling, an ecosystem of official packages, and more. TypeScript 16.6k 630. lucid Public. AdonisJS SQL ORM.',
        },
        {
          id: 2,
          question: 'What is the difference between AdonisJS and NestJS',
          answer: 'AdonisJS is written in JavaScript and is built on top of the Node. js runtime, making it highly suitable for server-side applications. On the other hand, NestJS is written in TypeScript, a statically-typed superset of JavaScript, which offers enhanced tooling and compile-time checks.',
        }
      ]

      export default class QandAsController {
        ... นำฟังก์ชันมาใส่ข้างในนี้
      }`,
  },
  {
    id: 8,
    title: '',
    header: 'Index',
    body: `
    โค้ดในส่วนนี้เป็นฟังก์ชัน index ที่อยู่ใน Controller ของ AdonisJS ซึ่งทำหน้าที่ในการแสดงผลข้อมูลบนหน้าเว็บ. ฟังก์ชันนี้รับพารามิเตอร์ { view }: HttpContext ซึ่ง view เป็น object ที่ใช้ในการแสดงผลข้อมูลในหน้า HTML. ฟังก์ชันนี้มีการใช้คำสั่ง view.render() เพื่อแสดงผลไฟล์ view ที่ชื่อว่า QA ซึ่งอยู่ในโฟลเดอร์ pages.

    ในฟังก์ชันนี้, เราได้ส่งข้อมูล qas ไปให้กับ view โดยใช้ { qa: qas }. ตัวแปร qas เป็น array ที่เก็บข้อมูลคำถามและคำตอบ (Q&A) ซึ่งได้เตรียมไว้ในส่วนของโค้ดก่อนหน้านี้. ข้อมูล qas จะถูกส่งไปยัง view เพื่อนำไปแสดงผลบนหน้าเว็บ. โดยที่ใน view, เราสามารถเข้าถึงข้อมูลคำถามและคำตอบผ่านตัวแปร qa.

    สรุปได้ว่า, โค้ดนี้ทำหน้าที่ในการดึงข้อมูลคำถามและคำตอบทั้งหมดจากตัวแปร qas และแสดงผลข้อมูลเหล่านี้ในหน้า QA โดยใช้ view rendering ใน AdonisJS.`,
    code: `
      async index({ view }: HttpContext) {
        return view.render('pages/QA', { qa: qas })
      }`,
  },
  {
    id: 9,
    title: '',
    header: 'Search',
    body: `
    โค้ดในส่วนนี้เป็นฟังก์ชัน search ที่อยู่ใน Controller ของ AdonisJS ซึ่งทำหน้าที่ในการค้นหาคำถาม (Q&A) จากข้อมูลที่มีอยู่ในตัวแปร qas ตามคำค้นที่ผู้ใช้กรอกเข้ามาในฟอร์มค้นหา.

    ฟังก์ชันนี้รับพารามิเตอร์ { view, request }: HttpContext. โดยตัวแปร request จะใช้เพื่อดึงข้อมูลที่ผู้ใช้ส่งมาจากฟอร์ม, ในกรณีนี้ก็คือค่าที่ผู้ใช้กรอกในช่องค้นหาหรือ txtSearch. ฟังก์ชันจะเริ่มต้นโดยการดึงค่าคำค้นจากฟอร์มที่ผู้ใช้กรอก โดยจะใช้ค่าว่างเป็นค่าเริ่มต้นถ้าผู้ใช้ไม่ได้กรอกอะไร และทำการแปลงค่าคำค้นเป็นตัวพิมพ์เล็กเพื่อให้การค้นหาทำงานได้อย่างไม่สนใจตัวพิมพ์ใหญ่หรือตัวพิมพ์เล็ก.

    ถ้าผู้ใช้กรอกคำค้นเข้ามา ฟังก์ชันจะใช้คำค้นนี้ในการกรองรายการคำถามทั้งหมดในตัวแปร qas โดยฟังก์ชัน filter() จะค้นหาคำถามที่มีคำค้นนั้นๆ อยู่ในข้อความคำถาม โดยไม่คำนึงถึงตัวพิมพ์ใหญ่หรือตัวพิมพ์เล็ก. เมื่อได้ผลลัพธ์ที่กรองแล้ว ระบบจะส่งข้อมูลไปยัง view ที่ชื่อว่า QA พร้อมทั้งข้อมูลคำถามที่กรองแล้ว และคำค้นที่ผู้ใช้กรอกไปแสดงผลในหน้าจอ.

    โดยสรุป, ฟังก์ชันนี้จะช่วยให้ผู้ใช้สามารถค้นหาคำถามจากระบบ Q&A ได้ โดยแสดงผลเฉพาะคำถามที่ตรงกับคำค้นที่ผู้ใช้กรอก และจะทำให้การค้นหามีความแม่นยำมากขึ้นแม้จะไม่สนใจตัวพิมพ์ใหญ่หรือตัวพิมพ์เล็ก.`,
    code: `
      async search({ view, request }: HttpContext) {
        const searchQuery = request.input('txtSearch', '').toLowerCase()
        let filteredQAs = qas

        if (searchQuery) {
          filteredQAs = qas.filter(q => q.question.toLowerCase().includes(searchQuery))
        }

        return view.render('pages/QA', { qa: filteredQAs, searchQuery })
      }`,
  },
  {
    id: 10,
    title: '',
    header: 'Create',
    body: `
    โค้ดในส่วนนี้เป็นฟังก์ชัน create ที่อยู่ใน Controller ของ AdonisJS ซึ่งทำหน้าที่ในการแสดงหน้าแบบฟอร์ม (form) สำหรับการสร้างคำถามใหม่ในระบบ Q&A.

    ฟังก์ชันนี้รับพารามิเตอร์ { view }: HttpContext ซึ่งใช้เพื่อดึงตัวแปร view ที่จะใช้ในการแสดงผลหน้าเว็บ. เมื่อมีการเรียกฟังก์ชันนี้, ระบบจะทำการเรนเดอร์ (render) หน้า HTML ที่อยู่ในไฟล์ QAForm ซึ่งอยู่ในโฟลเดอร์ pages. หน้าที่ถูกเรนเดอร์นี้จะเป็นแบบฟอร์มที่ให้ผู้ใช้กรอกข้อมูลสำหรับคำถามใหม่ เช่น กรอกคำถามและคำตอบ.

    ฟังก์ชันนี้จะไม่มีการรับข้อมูลจากผู้ใช้ในขั้นตอนนี้ แต่จะเป็นการแสดงหน้าแบบฟอร์มที่ผู้ใช้สามารถกรอกข้อมูลได้. เมื่อกรอกข้อมูลเสร็จแล้ว, ผู้ใช้สามารถส่งข้อมูลไปยังเส้นทางที่เกี่ยวข้องเพื่อลงทะเบียนคำถามใหม่ในระบบ.

    โดยสรุป, ฟังก์ชัน create จะทำหน้าที่ในการแสดงหน้าฟอร์มสำหรับการสร้างคำถามใหม่ โดยไม่มีการดำเนินการใดๆ กับข้อมูลจนกว่าผู้ใช้จะกรอกข้อมูลและส่งข้อมูลฟอร์มไปยังเซิร์ฟเวอร์.`,
    code: `
      async create({ view }: HttpContext) {
        return view.render('pages/QAForm')
      }`,
  },
  {
    id: 11,
    title: '',
    header: 'Store',
    body: `
    โค้ดในส่วนนี้เป็นฟังก์ชัน store ที่อยู่ใน Controller ของ AdonisJS ซึ่งทำหน้าที่ในการบันทึกคำถามและคำตอบใหม่ที่ผู้ใช้กรอกผ่านฟอร์ม และบันทึกข้อมูลเหล่านั้นลงในแอปพลิเคชันก่อนที่จะนำทางผู้ใช้ไปยังหน้าหลักของระบบ Q&A.

    เมื่อฟังก์ชันนี้ถูกเรียกใช้, มันจะเริ่มต้นโดยการดึงข้อมูลจากฟอร์มที่ผู้ใช้กรอกมา โดยใช้คำสั่ง request.input('question') และ request.input('answer') เพื่อรับค่าคำถามและคำตอบที่ถูกส่งมาจากฟอร์ม.

    จากนั้น ฟังก์ชันจะสร้างรหัส (ID) ใหม่ให้กับคำถามที่ต้องการเพิ่มโดยใช้ความยาวของอาร์เรย์ qas แล้วเพิ่ม 1 เพื่อให้เป็น ID ใหม่สำหรับโพสต์ใหม่.

    หลังจากนั้นจะสร้างอ็อบเจ็กต์ newPost ที่มีข้อมูลของคำถามและคำตอบที่ผู้ใช้กรอก ซึ่งอ็อบเจ็กต์นี้จะถูกเพิ่มเข้าไปในอาร์เรย์ qas ซึ่งเป็นแหล่งเก็บข้อมูลคำถามและคำตอบในระบบ.

    สุดท้าย, ฟังก์ชันจะใช้คำสั่ง response.redirect().toRoute('qa.home') เพื่อทำการเปลี่ยนเส้นทางผู้ใช้ไปยังหน้า "qa.home" ซึ่งคือหน้าหลักของระบบ Q&A หลังจากที่ข้อมูลคำถามใหม่ถูกบันทึกเรียบร้อยแล้ว.

    โดยสรุป, ฟังก์ชัน store ทำหน้าที่รับข้อมูลจากฟอร์มคำถามและคำตอบ, สร้างอ็อบเจ็กต์ใหม่, เพิ่มข้อมูลลงในระบบ, และนำทางผู้ใช้กลับไปยังหน้าหลักหลังจากที่ข้อมูลถูกบันทึกสำเร็จ.`,
    code: `
      async store({ request, response }: HttpContext) {
        const question = request.input('question')
        const answer = request.input('answer')
        const newId = qas.length + 1
        const newPost: QandA = { id: newId, question: question, answer: answer }

        qas.push(newPost)

        response.redirect().toRoute('qa.home')
      }`,
  },
  {
    id: 12,
    title: '',
    header: 'Edit',
    body: ``,
    code: `
      async edit({ params, view }: HttpContext) {
        const id = params.id
        const post = qas.find(p => p.id == Number(id))

        return view.render('pages/QAForm', { post: post })
      }`,
  },
  {
    id: 13,
    title: '',
    header: 'Update',
    body: `
    โค้ดในส่วนนี้เป็นฟังก์ชัน edit ใน Controller ของ AdonisJS ซึ่งมีหน้าที่ในการแสดงฟอร์มแก้ไขคำถามและคำตอบที่ผู้ใช้ต้องการปรับปรุง.

    เมื่อฟังก์ชันนี้ถูกเรียกใช้, ขั้นตอนแรกจะดึงค่าพารามิเตอร์ id จาก URL ซึ่งเป็นการระบุว่าเราต้องการแก้ไขคำถามใดในระบบ โดยใช้ params.id ซึ่งจะเป็นรหัสของคำถามที่ต้องการแก้ไข.

    จากนั้น, ฟังก์ชันจะค้นหาคำถามที่มี ID ตรงกับ id ที่ได้รับจาก URL ในอาร์เรย์ qas ซึ่งเก็บข้อมูลคำถามและคำตอบทั้งหมดไว้โดยใช้ฟังก์ชัน find() เพื่อหาคำถามที่ตรงกับ ID ที่ระบุ.

    เมื่อพบคำถามที่ต้องการแก้ไข, ฟังก์ชันจะส่งข้อมูลคำถามนั้นไปยังมุมมอง (view) ที่จะทำการแสดงฟอร์มสำหรับการแก้ไข โดยใช้คำสั่ง view.render('pages/QAForm', { post: post }). ข้อมูลคำถามที่ค้นพบจะถูกส่งไปในรูปแบบของอ็อบเจ็กต์ post, ซึ่งจะถูกใช้ในฟอร์มแก้ไขในหน้า QAForm.

    สรุปได้ว่า ฟังก์ชัน edit ทำหน้าที่ในการดึงข้อมูลคำถามที่ต้องการแก้ไขจาก qas, และแสดงฟอร์มแก้ไขพร้อมข้อมูลคำถามที่ผู้ใช้ต้องการปรับปรุง.`,
    code: `
      async update({ params, request, response }: HttpContext) {
        const id = params.id
        const index = qas.findIndex(p => p.id == Number(id))

        qas[index].question = request.input('question')
        qas[index].answer = request.input('answer')

        response.redirect().toRoute('qa.home')
      }`,
  },
  {
    id: 14,
    title: '',
    header: 'Destroy',
    body: `
    โค้ดในส่วนนี้เป็นฟังก์ชัน destroy ใน Controller ของ AdonisJS ซึ่งมีหน้าที่ในการลบคำถามจากระบบตามที่ผู้ใช้ระบุ.

    เมื่อฟังก์ชันนี้ถูกเรียกใช้, ขั้นตอนแรกจะดึงค่าพารามิเตอร์ id จาก URL ซึ่งใช้เพื่อระบุคำถามที่ต้องการลบ โดยใช้ params.id.

    จากนั้น, ฟังก์ชันจะค้นหาตำแหน่ง (index) ของคำถามที่ต้องการลบในอาร์เรย์ qas โดยใช้ findIndex(), ซึ่งจะหาตำแหน่งของคำถามที่มี id ตรงกับค่าที่ได้รับจากพารามิเตอร์ id. ถ้าพบคำถามที่ตรงกัน, ฟังก์ชันจะลบคำถามออกจากอาร์เรย์ qas โดยใช้ splice() ซึ่งจะลบข้อมูลที่ตำแหน่ง index ที่ค้นพบจากอาร์เรย์.

    เมื่อทำการลบคำถามเสร็จสิ้นแล้ว, ฟังก์ชันจะทำการเปลี่ยนเส้นทางผู้ใช้กลับไปที่หน้า "qa.home" โดยใช้ response.redirect().toRoute('qa.home'), ซึ่งเป็นเส้นทางที่พาผู้ใช้กลับไปยังหน้าหลักของระบบ Q&A.

    สรุปได้ว่า ฟังก์ชัน destroy มีหน้าที่ในการลบคำถามออกจากระบบตาม ID ที่ผู้ใช้ระบุ, และหลังจากการลบคำถามเสร็จแล้ว ระบบจะเปลี่ยนเส้นทางไปยังหน้าแรกของระบบ.`,
    code: `
      async destroy({ params, response }: HttpContext) {
        const id = params.id
        const index = qas.findIndex(p => p.id == Number(id))
        qas.splice(index, 1)

        response.redirect().toRoute('qa.home')
      }`,
  },
]
