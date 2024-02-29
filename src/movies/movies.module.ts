import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'Users',
          collection: 'users1234'
        }
      ]
    )
  ]
})
//Probando
export class MoviesModule {}
