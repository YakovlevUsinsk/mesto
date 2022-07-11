

export default class UserInfo {
constructor ({nameUserSelector, interesUserSelector}) {
    this._nameUser = document.querySelector(nameUserSelector);
    this._interesUser = document.querySelector(interesUserSelector);
}
    getUserInfo() {
        return {
            'user-name':  this._nameUser.textContent,
            'user-interest': this._interesUser.textContent,
        }
    }

    setUserInfo(item) {
       this._nameUser.textContent = item['user-name'];
       this._interesUser.textContent = item['user-interest'];
    }
}