import database from '../firebase/firebaseConfig';

//ACTION CREATORS

// Obje içerisinde bilgi gönderilmeme durumuna karşın {title='', description='', dateAdded=0} varsayılan değerler olarak atandı. 
export const addBlog = (blog) => ({
    type: "ADD_BLOG",
    blog
});

export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch) => {
        const { title='', description='', dateAdded=0 } = blogData; // (default değerlerler set edilerek alındı)
        const blog = { title, description, dateAdded};

        database.ref("blogs").push(blog).then((response) => {
            dispatch(addBlog({
                id: response.key, // elimizdeki dataya firebase'de üretilen id'yi ekliyoruz. Sonra addBlog ile Redux içerisine aktarıyoruz.
                ...blog
            }));
        });
    }
}

export const removeBlog = ({ id }) => (
    {
        type: "REMOVE_BLOG",
        id: id
    }
);

export const editBlog = (id, updates) => ({
    type: "EDIT_BLOG",
    id,
    updates
});

export const setBlogs = (blogs) => ({
    type: "SET_BLOGS",
    blogs
});

export const  getBlogsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("blogs").once("value").then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                });
            });

            dispatch(setBlogs(blogs)); // Veritabanından gelen bilgileri alıp setBlogs action creater'a dispatch ederek Redux içeriğine ekliyoruz.
        })
    }
}

// Normalde biz dispatch'i object üzerinden yapıyprduk. Ancak artık eklemiş olduğumuz Redux Thunk kütüphanesi-Middleware aracılığıyla bu işlemi fonksiyon üzerinden asenkron bir sorgu ile gerçekleştiriyoruz.