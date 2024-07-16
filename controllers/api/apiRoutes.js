Router.get("/posts", async (req, res) => {
    try {
        const postData = await Post.findAll();

    }
})
