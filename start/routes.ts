/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import TournamentsController from '#controllers/tournaments_controller'
router.on('/').renderInertia('home')
router.get('tournaments/:id?', [TournamentsController, 'index'])
router.get('tournaments/create', [TournamentsController, 'create'])
router.post('tournaments/create', [TournamentsController, 'store'])
router.post('tournaments/update', [TournamentsController, 'update'])
router.delete('tournaments/delete/:id?', [TournamentsController, 'delete'])

