export default [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    name: 'About',
    path: '/about/',
    component: () => import('@/views/About'),
    children: [
      {
        name: 'Education',
        path: 'education',
        component: () => import('@/views/Education'),
        meta: {
          first: 'Mokykla',
          second: 'Mokykla 2',
          third: 'VU ( IT Spec)'
        }
      },
      {
        name: 'Carreer',
        path: 'carreer',
        component: () => import('@/views/Carreer'),
        meta: {
          first: 'Web developer',
          second: 'Software Engineer',
          third: 'Designer'
        }
      },
      {
        name: 'Knowledge',
        path: 'knowledge',
        component: () => import('@/views/Knowledge'),
        meta: {
          first: 'HTML5',
          second: 'CSS',
          third: 'JS'
        }
      }

    ]
  },
  {
    name: 'Contacts',
    path: '/contacts/',
    component: () => import('@/views/Contacts')

  }
]
