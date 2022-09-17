import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem';

const BlogList = (props) => {
    console.log(props);
    return (
        <ul className='list'>
            {props.blogs.map(blog => {
                return <BlogListItem key={blog.id} {...blog} /> // {...blog} ile destructuring yaprak blog içerisindeki herbir elamanı props olarak tek tek gönderebiliyoruz.
            })}
        </ul>
    )
}

// mapStateToProps: connect içerisinde ilk argüman olarak kullanılır. Connect edilmiş ilgili componentin ihtiyaç duyduğu state bilgilerini store'den seçmek için kullanılır. Props içerisine state bilgilerini import eder.
// Store state'i her değiştiğinde çağrılır.
// Tüm store state'i alır ve ilgili component'in ihtiyaç duyduğu bir veri object'i döndürmelidir.

// Redux içerisinde tanımlanan state bilgileri fonksiyona girdi olarak dahil edilir.
// State içerisindeki bilgiler mapStateToProps fonksiyonu aracılığıyla kullanılacak props parametresi içerisine aktarılır. (Örn: Aşağıdaki blogs bilgisi props içerisine mapStateToProps aracılığıyla aktarılır.)

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs // blogs: yerine istediğimiz ifadeyi yazabiliriz. Yukarıda da props'un içerisinde props.istedigimizIfade olarak çağırabiliriz.
    }
}


// connect'in ikinci argümanı ise içerisinde olduğu ilgili component ismidir.
// context benzeri yapı olan react-redux Provider kapsayıcı elamanı sayesinde propslar kapsama alanı içerisindeki componentler için ulaşılabilir oluyor. Fakat burada ilgili componenti connect aracılığıyla react-redux ile bağlantı kurduruyoruz.
export default connect(mapStateToProps)(BlogList); // Higher Order Component (HOC) Pattern

// Özetle burada BlogList component'in görevi state içerisinde react-redux'a bağlantı kurmak. Dolayısıyla connect metoduna burada ihtiyacımız var. Connect metoduna da bir parametre göndermemiz gerekiyor(mapStateToProps). Bu parametrenin görevi de kendisine gelen state bilgisinin içerisinde bulunan blog bilgisini, ilgili componentin, yani BlogList componentin props parametresi içerisine bu bog bilgisini aktarmak.