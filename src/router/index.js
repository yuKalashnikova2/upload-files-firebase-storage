import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import UploadFiles from '../views/UploadFiles.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/upload-files',
            name: 'UploadFiles',
            component: UploadFiles
        }
    ]
})

export default router