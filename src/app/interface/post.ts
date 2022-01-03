export class Post {

    constructor(
        id: number,
        username: string,
        email: string,
        content: string,
        timeStamp: Date,
        avatarUrl?: string,
        imageUrl?: string,
        videoUrl?: string,
        likes?: number,
        dislikes?: number,
    ) { }
}