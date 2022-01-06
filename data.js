module.exports = () => {
    return {
        posts: [
            { id: 1, userId: 1, username: 'ucheobiefula', email: 'ucheanota@yahoo.com', content: "I learned that to attract good luck to oneself, it is necessary to take advantage of opportunities", timeStamp: new Date().getMinutes(), avatarUrl: "../../assets/content-image/avatar1.png", likes: 4, dislikes: 0, fileUrl: "../../assets/content-image/image1.jpg" },
            { id: 2, userId: 2, username: 'preciouslady', email: 'preciousanota@yahoo.com', content: "Every man must master his own spirit of procastinatio before he can expect to share in the rich treasures of life", timeStamp: new Date().getMinutes(), avatarUrl: "../../assets/content-image/avatar2.jpg", likes: 250, dislikes: 0, fileUrl: "/images/image1.jpg" },
            { id: 3, userId: 3, username: 'tochuz', email: 'tochukwuanota@gmail.com', content: "Remain prepared until that opportunity comes", timeStamp: new Date().getMinutes(), avatarUrl: "../../assets/content-image/avatar3.png", likes: 250, dislikes: 0, fileUrl: "" },
            { id: 4, userId: 4, username: 'irisbaby', email: 'irisanota@ymail.com', content: "Hurray!!!! I just got my first job for the year", timeStamp: new Date().getMinutes(), avatarUrl: "../../assets/content-image/avatar4.png", likes: 1000, dislikes: 0, fileUrl: "" },
            { id: 5, userId: 5, username: 'dozie', email: 'dozieanota@hotmail.com', content: "Men of actions are favored by the goddess of Goodluck!", timeStamp: new Date().getMinutes(), avatarUrl: "../../assets/content-image/avatar5.png", likes: 50, dislikes: 0, fileUrl: "" },
        ],
        users: [
            { id: 1, username: "ucheobiefula", email: "ucheanota@yahoo.com", password: "", 
                post: [], 
                friends: [
                    {id: 2, username: "preciouslady", avatarUrl: "../../assets/content-image/avatar2.jpg" },
                    {id: 3, username: "tochuz", avatarUrl: "../../assets/content-image/avatar3.png" },
                    {id: 4, username: "irisbaby", avatarUrl: "../../assets/content-image/avatar4.png" },
                    {id: 5, username: "dozie", avatarUrl: "../../assets/content-image/avatar5.png" },
                ]
            },
            { id: 2, username: "preciouslady", email: "preciousanota@yahoo.com", password: "", 
                post: [], 
                friends: [
                    {id: 1, username: "ucheobiefula", avatarUrl: "../../assets/content-image/avatar1.png" },
                    {id: 3, username: "tochuz", avatarUrl: "../../assets/content-image/avatar3.png" },
                    {id: 4, username: "irisbaby", avatarUrl: "../../assets/content-image/avatar4.png" },
                    {id: 5, username: "dozie", avatarUrl: "../../assets/content-image/avatar5.png" },
                ]
            },
            { id: 3, username: "tochuz", email: "tochukwuanota@yahoo.com", password: "", 
                post: [], 
                friends: [
                    {id: 2, username: "preciouslady", avatarUrl: "../../assets/content-image/avatar2.jpg" },
                    {id: 1, username: "ucheobiefula", avatarUrl: "../../assets/content-image/avatar1.png" },
                    {id: 4, username: "irisbaby", avatarUrl: "../../assets/content-image/avatar4.png" },
                    {id: 5, username: "dozie", avatarUrl: "../../assets/content-image/avatar5.png" },
                ]
            },
            { id: 4, username: "irisbaby", email: "irisanota@yahoo.com", password: "", 
                post: [], 
                friends: [
                    {id: 2, username: "preciouslady", avatarUrl: "../../assets/content-image/avatar2.jpg" },
                    {id: 3, username: "tochuz", avatarUrl: "../../assets/content-image/avatar3.png" },
                    {id: 1, username: "ucheobiefula", avatarUrl: "../../assets/content-image/avatar1.png" },
                    {id: 5, username: "dozie", avatarUrl: "../../assets/content-image/avatar5.png" },
                ]
            },
            { id: 5, username: "dozie", email: "dozieanota@yahoo.com", password: "", 
                post: [], 
                friends: [
                    {id: 2, username: "preciouslady", avatarUrl: "../../assets/content-image/avatar2.jpg" },
                    {id: 3, username: "tochuz", avatarUrl: "../../assets/content-image/avatar3.png" },
                    {id: 1, username: "ucheobiefula", avatarUrl: "../../assets/content-image/avatar1.png" },
                    {id: 4, username: "irisbaby", avatarUrl: "../../assets/content-image/avatar4.png" },
                ]
            },
            
        ]
    }
}