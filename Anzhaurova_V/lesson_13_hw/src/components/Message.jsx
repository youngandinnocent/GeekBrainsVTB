import React, {Component} from 'react';
import PropTypes from 'prop-types'; /*подключили биб-ку чтобы описать что приходит*/

export class Message extends Component{
    state = {
        author: '',
        text: ''
    };
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        onSend: PropTypes.func
    };

    static defaultProps = {
        //если что-то не приходит св-во будет взято по умолчанию
        onSend: () => {}
    };

    //что будет происходить при изменении поля
    handleInputOnChange = (event) => {
       //получаем имя поля(из строки 31)
        const fieldName = event.target.name;
        //меняем состояние и добавляем в объект динам св-ва
        this.setState({
            //забираем значение из поля с именем автора
            [fieldName]:event.target.value,
        });
    };

    handleInputSend = (event) => {
        //onSend мы отправили из MessageField
        const {onSend} = this.props
        //проверяем что это точно функция
        if (typeof onSend === "function")
            onSend(this.state);
            //очищаем наше поле (текст)
            this.setState({text: ''})
        };

   render() {
    //забрать из состояния автора и текст
    const {author,text} = this.state;
    return (
            <div>
                <input type="text" name="author" value={author} onChange={this.handleInputOnChange}
                       placeholder="от кого"/><br/>
                <textarea name="text" placeholder="Введите сообщение" onChange={this.handleInputOnChange}/><br/>
                <button onClick={this.handleInputSend}>Отправить</button>
            </div>
        )
    }
}