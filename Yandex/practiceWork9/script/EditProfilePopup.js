class EditProfilePopup extends Popup {
    constructor(popup, fullUserInfo, userNameElement, userAboutElement, api) {
        super(popup);
        this.fullUserInfo = fullUserInfo;
        this.userNameElement = userNameElement;
        this.userAboutElement = userAboutElement;

        this.api = api;

        this.inputUserName = this.popup.querySelector('input.popup__input.popup__input_type_user');
        this.inputUserAbout = this.popup.querySelector('input.popup__input.popup__input_type_about');
    }

    open() {
        this.inputUserName.value = this.userNameElement.textContent.trim();
        this.inputUserAbout.value = this.userAboutElement.textContent.trim();

        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this.popup.addEventListener('submit', e => {
            e.preventDefault();

            /*
                Надо исправить: +++
                
                все изменения на странице должны происходить, только после того, как
                сервер ответил подтверждением. Если сервер не ответил, или ответил ошибкой, а
                данные на странице сохраняться, то это может ввести пользователя в заблуждение

                Попап так же нужно закрывать только если сервер ответил подтверждением, иначе
                если запрос завершиться ошибкой, а попап закроется пользователь может подумать
                что данные сохранились, т.е. перенести закрытие попапа и очистку формы в блок then
            */

            //this.fullUserInfo.setUserInfo(this.inputUserName.value, this.inputUserAbout.value); Надо исправить: +++

            this.api.postUserInfo(this.inputUserName.value, this.inputUserAbout.value)
                .then((data) => {
                    this.fullUserInfo.setUserInfo(data.name, data.about);
                    super.close();
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
}