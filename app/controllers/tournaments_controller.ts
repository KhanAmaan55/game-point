import Tournament from '#models/tournament';
import type { HttpContext } from '@adonisjs/core/http'

export default class TournamentsController {
  
  public async index({ params, inertia }: HttpContext) {
    if(params.id){
      const tournament =  await Tournament.query().where('id',params.id)
      return inertia.render('tournament/view', {tournament:tournament});
    }
    const tournaments =  await Tournament.all()
    return inertia.render('tournament/index', {tournaments:tournaments});
    // return tournaments;
  }
  
  async create({ inertia }: HttpContext) {
    return inertia.render('tournament/create')
  }
  
  async store({request}: HttpContext) {
    const tournament = new Tournament();
    const requestData = request.all();
    tournament.name = requestData.name;
    tournament.description = requestData.description;
    await tournament.save()
    return 123;
  }
  async update({request}: HttpContext) {
    // const tournament = new Tournament();
    // const requestData = request.all();
    // tournament.name = requestData.name;
    // tournament.description = requestData.description;
    // await tournament.save()
    return 123;
  }
  
  async delete({request}: HttpContext) {
    console.log(request)
  }
  
}