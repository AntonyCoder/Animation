import './callbackChat.css'

export default class CallbackChat {
    constructor(container) {
        if (!(container instanceof HTMLElement)) {
            throw new Error('This is not HTML element!');
        }
        this.container = container;

        this.onButton = this.onButton.bind(this);
        this.onCloseButton = this.onCloseButton.bind(this);
        this.init();
    }

    init() {
        this.renderButton();
    }

    renderButton() {
        const button = document.createElement('a');
        button.classList.add('callback-button');

        this.container.appendChild(button);

        button.addEventListener('click', this.onButton)
    }

    renderCallbackChat() {
        const callbackForm = document.createElement('form');
        callbackForm.classList.add('callback-form');

        const closeButton = document.createElement('a');
        closeButton.classList.add('close-button');
        closeButton.textContent = 'X';

        closeButton.addEventListener('click', this.onCloseButton);

        const label = document.createElement('label');
        label.classList.add('label');
        label.textContent = 'Напишите нам';

        const callbackText = document.createElement('textarea');
        callbackText.classList.add('callback-text');

        const sendButton = document.createElement('a');
        sendButton.classList.add('send-button');
        sendButton.textContent = 'Отправить';

        callbackForm.append(closeButton, label, callbackText, sendButton);

        return callbackForm
    }

    onButton(e) {
        const callbackChat = this.renderCallbackChat();
        e.target.classList.add('hide');

        this.container.appendChild(callbackChat);

        requestAnimationFrame(() => {
            callbackChat.classList.add('show')
        })
    }

    onCloseButton(e) {
        const form = e.target.closest('form');
        form.classList.add('hide');

        form.addEventListener('transitionend', (e) => {
            form.remove();
        }, { once: true });

        const button = document.querySelector('.callback-button');
        button.classList.remove('hide');
    }
}