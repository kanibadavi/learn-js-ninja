const user = {
    userName : "kani",
    age : 24,
    blogs : ["macbook" , "notebook"],
    login : function() {
        console.log("you are logged in");
    },
    logBlogs :function (){
        console.log('user has written these blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
}
user.login()
user.logBlogs()
