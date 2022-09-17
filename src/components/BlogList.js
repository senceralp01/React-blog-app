import React from 'react'
import { connect} from 'react-redux'

const BlogList = (props) => {
    console.log(props);
  return (
    <div>
        {props.blogs.length}
    </div>
  )
}

// mapStateToProps: connect içerisinde ilk argüman olarak kullanılır. Connect edilmiş ilgili componentin ihtiyaç duyduğu state bilgilerini store'den seçmek için kullanılır. Props içerisine state bilgilerini import eder.
// Store state'i her değiştiğinde çağrılır.
// Tüm store state'i alır ve ilgili component'in ihtiyaç duyduğu bir veri object'i döndürmelidir.

// Redux içerisinde tanımlanan state bilgileri fonksiyona girdi olarak dahil edilir.
// State içerisindeki bilgiler mapStateToProps fonksiyonu aracılığıyla kullanılacak props parametresi içerisine aktarılır. (Örn: Aşağıdaki blogs bilgisi props içerisine mapStateToProps aracılığıyla aktarılır.)

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}


// connect'in ikinci argümanı ise içerisinde olduğu ilgili component ismidir.
// context benzeri yapı olan react-redux Provider kapsayıcı elamanı sayesinde propslar kapsama alanı içerisindeki componentler için ulaşılabilir oluyor. İkincil ve sonrasındaki dallanan componentler ise connect ile bu kapsama dahil ediliyor.
export default connect(mapStateToProps)(BlogList);