import addView from '../views/add.art'
class InitAdd {
    init(session) {
        let html = addView()
        $('main').html(html)
    }


}
export default new InitAdd()