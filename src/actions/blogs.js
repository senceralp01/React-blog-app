import database from '../firebase/firebaseConfig';

//ACTION CREATORS


// Obje içerisinde bilgi gönderilmeme durumuna karşın {title='', description='', dateAdded=0} varsayılan değerler olarak atandı. 
export const addBlog = (blog) => ({
    type: "ADD_BLOG",
    blog
});

// Normalde biz dispatch'i object üzerinden yapıyorduk. Ancak aşağıda durum farklı. configureStore.js içerisinde eklemiş olduğumuz Redux Thunk kütüphanesi-Middleware aracılığıyla bu işlemi fonksiyon üzerinden asenkron bir sorgu ile gerçekleştiriyoruz.
export const addBlogToDatabase = (blogData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { title = '', description = '', dateAdded = 0 } = blogData; // (default değerlerler set edilerek alındı)
        const blog = { title, description, dateAdded, uid };

        database.ref("blogs").push(blog).then((response) => {
            dispatch(addBlog({
                id: response.key, // elimizdeki dataya firebase'de üretilen id'yi ekliyoruz. Sonra addBlog ile Redux içerisine aktarıyoruz.
                ...blog
            }));
        });
    }
}


export const removeBlog = (id) => ({
    type: "REMOVE_BLOG",
    id: id
});

// Normalde biz dispatch'i object üzerinden yapıyorduk. Ancak aşağıda durum farklı. configureStore.js içerisinde eklemiş olduğumuz Redux Thunk kütüphanesi-Middleware aracılığıyla bu işlemi fonksiyon üzerinden asenkron bir sorgu ile gerçekleştiriyoruz.
export const removeBlogFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}`).remove().then(() => { // Neticede EditBlogPage.js'de reducer'a bir object dispatch edilmiş olduğu için return ettik.
            dispatch(removeBlog(id)); // removeBlog action creater içerisinde, reducer'da ne işlemi ne ile yapacağı bilgilerini içeren bir object generate ediliyor.
        })
    }
};


export const editBlog = (id, updates) => ({
    type: "EDIT_BLOG",
    id,
    updates
});

// Normalde biz dispatch'i object üzerinden yapıyorduk. Ancak aşağıda durum farklı. configureStore.js içerisinde eklemiş olduğumuz Redux Thunk kütüphanesi-Middleware aracılığıyla bu işlemi fonksiyon üzerinden asenkron bir sorgu ile gerçekleştiriyoruz.
export const editBlogsInDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}`).update(updates).then(() => { // önce database'i update ediyor, sonra sayfada gösterilmesi için editBlog'u dispatch ettiriyor.
            dispatch(editBlog(id, updates))
        });
    }
};


export const setBlogs = (blogs) => ({
    type: "SET_BLOGS",
    blogs
});

// Normalde biz dispatch'i object üzerinden yapıyorduk. Ancak aşağıda durum farklı. configureStore.js içerisinde eklemiş olduğumuz Redux Thunk kütüphanesi-Middleware aracılığıyla bu işlemi fonksiyon üzerinden asenkron bir sorgu ile gerçekleştiriyoruz.
export const getBlogsFromDatabase = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref("blogs").once("value").then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                const result = blog.val(); // val(): firebase'deki ilgili object'in val değeri

                if (result.uid == uid) {
                    blogs.push({
                        id: blog.key, // key: firebase'ki ilgili object'in key değeri
                        ...result
                    });
                }
            });

            dispatch(setBlogs(blogs)); // Veritabanından gelen bilgileri alıp setBlogs action creater'a dispatch ederek Redux içeriğine ekliyoruz.
        })
    }
};


export const clearBlogs = () => ({
    type: "CLEAR_BLOGS"
});