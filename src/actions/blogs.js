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
                id: response.key, // elimizdeki dataya firebase'de üretilen id'yi ekliyoruz.
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