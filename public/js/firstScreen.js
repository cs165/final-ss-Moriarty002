class firstScreen {
    constructor(firstElement)
    {
        this.Hide=this.Hide.bind(this);
        this.Show=this.Show.bind(this);
        this.firstElement=firstElement;
    }
    Hide()
    {
        this.firstElement.classList.add('inactive');
    }
    Show()
    {
        this.firstElement.classList.remove('inactive');
    }

}