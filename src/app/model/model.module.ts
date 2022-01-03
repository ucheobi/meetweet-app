import { NgModule } from "@angular/core";
import { PostRepository } from "../repository/post.repository";
import { UserRepository } from "../repository/user.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [PostRepository, UserRepository, StaticDataSource]
})
export class ModelModule {}