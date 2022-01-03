export class Post {
    constructor(
        public id: number,
        public userId: number,
        public username: string,
        public email: string,
        public content: string,
        public timeStamp: number,
        public avatarUrl?: string,
        public imageUrl?: string,
        public videoUrl?: string,
        public likes?: number,
        public dislikes?: number,
      ) { }
}