export class Post {
    constructor(
        public id: number,
        public userId: number,
        public username: string,
        public email: string,
        public content: string,
        public timeStamp: number,
        public avatarUrl: string,
        public likes?: number,
        public dislikes?: number,
        public fileUrl?: string,
      ) { }
}