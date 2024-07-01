import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class PointsTable extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare teamsId: number

  @column()
  declare tournamentId: number

  @column()
  declare points: number

  @column()
  declare netRunRate: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}