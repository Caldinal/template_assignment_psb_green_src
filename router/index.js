import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MemberView from '../views/MemberView.vue'

import CompanyView from '../views/CompanyView.vue'
import GreetingsView from '@/views/Company/GreetingsView.vue'
import HistoryView from '@/views/Company/HistoryView.vue'
import InteriorView from '@/views/Company/InteriorView.vue'
import DirectionsView from '@/views/Company/DirectionsView.vue'

import BusinessView from '../views/BusinessView.vue'
import BusinessView_1 from '@/views/Business/BusinessView_1.vue'
import BusinessView_2 from '@/views/Business/BusinessView_2.vue'
import BusinessView_3 from '@/views/Business/BusinessView_3.vue'

import ProductView from '../views/ProductView.vue'
import ProductView_1 from '@/views/Product/ProductView_1.vue'
import ProductView_2 from '@/views/Product/ProductView_2.vue'
import ProductView_3 from '@/views/Product/ProductView_3.vue'


import CsView from '../views/CsView.vue'

import NoticeView from '@/views/Cs/NoticeView.vue'
import NoticeList from '@/views/Cs/NoticeList.vue'
import NoticeRead from '@/views/Cs/NoticeRead.vue'
import NoticeModify from '@/views/Cs/NoticeModify.vue'
import NoticeWrite from '@/views/Cs/NoticeWrite.vue'

import OnlineView from '@/views/Cs/OnlineView.vue'
import OnlineList from '@/views/Cs/OnlineList.vue'
import OnlineRead from '@/views/Cs/OnlineRead.vue'
import OnlineModify from '@/views/Cs/OnlineModify.vue'
import OnlineWrite from '@/views/Cs/OnlineWrite.vue'

import QnaView from '@/views/Cs/QnaView.vue'
import QnaList from '@/views/Cs/QnaList.vue'
import QnaRead from '@/views/Cs/QnaRead.vue'
import QnaModify from '@/views/Cs/QnaModify.vue'
import QnaWrite from '@/views/Cs/QnaWrite.vue'

import GalleryView from '@/views/Cs/GalleryView.vue'
import GalleryList from '@/views/Cs/GalleryList.vue'
import GalleryRead from '@/views/Cs/GalleryRead.vue'
import GalleryModify from '@/views/Cs/GalleryModify.vue'
import GalleryWrite from '@/views/Cs/GalleryWrite.vue'

import NotView from '@/views/NotView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/member',
    name: 'MemberView',
    component: MemberView,
  },
  {
    path: '/company',
    name: 'CompanyView',
    component: CompanyView,
    redirect: '/company/greetings', // nav에서 회사소개를 누르면 자동으로 인사말 페이지로 이동시킨다.
    children: [
      {
        path: '/company/greetings',
        name: 'GreetingsView',
        component: GreetingsView
      },
      {
        path: '/company/history',
        name: 'HistoryView',
        component: HistoryView
      },
      {
        path: '/company/interior',
        name: 'InteriorView',
        component: InteriorView
      },
      {
        path: '/company/directions',
        name: 'DirectionsView',
        component: DirectionsView
      }
    ]
  },
  {
    path: '/business',
    name: 'BusinessView',
    component: BusinessView,
    redirect: '/business/businessView_1',
    children: [
      {
        path: '/business/businessView_1',
        name: 'BusinessView_1',
        component: BusinessView_1
      },
      {
        path: '/business/businessView_2',
        name: 'BusinessView_2',
        component: BusinessView_2
      },
      {
        path: '/business/businessView_3',
        name: 'BusinessView_3',
        component: BusinessView_3
      }
    ]
  },
  {
    path: '/product',
    name: 'ProductView',
    component: ProductView,
    redirect: '/product/productView_1',
    children: [
      {
        path: '/product/productView_1',
        name: 'ProductView_1',
        component: ProductView_1
      },
      {
        path: '/product/productView_2',
        name: 'ProductView_2',
        component: ProductView_2
      },
      {
        path: '/product/productView_3',
        name: 'ProductView_3',
        component: ProductView_3
      },
    ]
  },
  {
    path: '/cs',
    name: 'CsView',
    component: CsView,
    redirect: '/cs/notice',
    children: [
      {
        path: '/cs/notice',
        name: 'NoticeView',
        component: NoticeView,
        redirect: "/cs/notice/list",
        children: [
          {
            path: "/cs/notice/list",
            name: "NoticeList",
            component: NoticeList
          },
          {
            path: "/cs/notice/write",
            name: "NoticeWrite",
            component: NoticeWrite
          },
          {
            path: "/cs/notice/read",
            name: "NoticeRead",
            component: NoticeRead
          },
          {
            path: "/cs/notice/modify",
            name: "NoticeModify",
            component: NoticeModify
          },
        ]
      },
      {
        path: '/cs/online',
        name: 'OnlineView',
        component: OnlineView,
        redirect: '/cs/online/list',
        children: [
          {
            path: "/cs/online/list",
            name: "OnlineList",
            component: OnlineList
          },
          {
            path: "/cs/online/write",
            name: "OnlineWrite",
            component: OnlineWrite
          },
          {
            path: "/cs/online/read",
            name: "OnlineRead",
            component: OnlineRead
          },
          {
            path: "/cs/online/modify",
            name: "OnlineModify",
            component: OnlineModify
          }
        ]
      },
      {
        path: '/cs/qna',
        name: 'QnaView',
        component: QnaView,
        redirect: '/cs/qna/list',
        children: [
          {
            path: "/cs/qna/list",
            name: "QnaList",
            component: QnaList
          },
          {
            path: "/cs/qna/write",
            name: "QnaWrite",
            component: QnaWrite
          },
          {
            path: "/cs/qna/read",
            name: "QnaRead",
            component: QnaRead
          },
          {
            path: "/cs/qna/modify",
            name: "QnaModify",
            component: QnaModify
          }
        ]
      },
      {
        path: '/cs/gallery',
        name: 'GalleryView',
        component: GalleryView,
        redirect: '/cs/gallery/list',
        children: [
          {
            path: "/cs/gallery/list",
            name: "GalleryList",
            component: GalleryList
          },
          {
            path: "/cs/gallery/write",
            name: "GalleryWrite",
            component: GalleryWrite
          },
          {
            path: "/cs/gallery/read",
            name: "GalleryRead",
            component: GalleryRead
          },
          {
            path: "/cs/gallery/modify",
            name: "GalleryModify",
            component: GalleryModify
          },
        ]
      }
    ]
  },
  {
    path: '/404',
    name: 'NotView',
    component: NotView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
