class Page {
    constructor(){
        var firstElement = document.querySelector('#first');
        this.firstScreen = new firstScreen(firstElement);
        var secondElement = document.querySelector('#second');
        this.secondScreen = new secondScreen(secondElement);
        this.secondScreen.Hide();

        this.toSecond=this.toSecond.bind(this);
        this.toFirst=this.toFirst.bind(this);

        var goback = document.querySelector('#back');
        goback.addEventListener('click',this.toFirst);
    }
    toSecond()
    {
        this.firstScreen.Hide();
        this.secondScreen.Show();
    }
    toFirst()
    {
        this.firstScreen.Show();
        this.secondScreen.Hide();
    }
}