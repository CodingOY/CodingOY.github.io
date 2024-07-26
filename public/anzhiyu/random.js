var posts=["2024/07/26/hello-world/","2024/07/26/算法笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };