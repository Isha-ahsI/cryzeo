import user1 from '../images/avatars/1.jpg'
import user2 from '../images/avatars/2.jpg'
import user4 from '../images/avatars/4.jpg'
import CardImg1 from '../images/news-img1.jpg'
import CardImg2 from '../images/news-img2.jpg'

export const featuredPosts = [
    {
      id: 1,
      title: "The Future of Digital Currency",
      excerpt:
        "Exploring the latest trends and innovations in cryptocurrency...",
      category: "Crypto",
      date: "March 15, 2024",
      image: CardImg1,
      author: {
        name: "John Doe",
        avatar: user1,
        role: "Crypto Expert",
      },
      readTime: "5 min read",
      likes: 245,
    },
    {
      id: 2,
      title: "Blockchain Technology Explained",
      excerpt:
        "A comprehensive guide to understanding blockchain fundamentals...",
      category: "Technology",
      date: "March 14, 2024",
      image: CardImg2,
      author: {
        name: "Jane Smith",
        avatar: user2,
        role: "Tech Writer",
      },
      readTime: "8 min read",
      likes: 189,
    },
  ];

  export const avatars=[
    {"src":user1,"name":"user1"},
    {"src":user2,"name":"user2"},
    {"src":user4,"name":"user4"},
  ]
