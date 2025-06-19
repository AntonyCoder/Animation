import './collapse.css'

export default class Collapse {
    constructor(container) {
        if (!(container instanceof HTMLElement)) {
            throw new Error('This is not HTML element!');
        }
        this.container = container;

        this.onButton = this.onButton.bind(this)
        this.init();
    }

    init() {
        this.renderWidget();
    }

    renderWidget() {
        const widget = document.createElement('div');
        widget.classList.add('widget');

        const button = this.renderButton();
        const textContainer = this.renderTextContainer();

        widget.append(button, textContainer);

        this.container.appendChild(widget);
    }

    //Отрисовка кнопки
    renderButton() {
        const button = document.createElement('a');
        button.classList.add('button');
        button.textContent = 'Collapse';

        button.addEventListener('click', this.onButton);

        return button
    }

    //Отрисовка содержимого
    renderTextContainer() {
        const container = document.createElement('div');
        container.classList.add('container');

        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = `
        Я помню чудное мгновенье:
        Передо мной явилась ты,
        Как мимолетное виденье,
        Как гений чистой красоты.
        В томленьях грусти безнадежной,
        В тревогах шумной суеты,
        Звучал мне долго голос нежный
        И снились милые черты.`

        container.appendChild(text);

        return container;
    }

    //Обработчик нажатия на кнопку
    onButton() {
        const textContainer = document.querySelector('.container');
        textContainer.classList.toggle('collapsed')
    }
}