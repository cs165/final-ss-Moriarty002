class secondScreen {
    constructor(secondElement)
    {
        this.Hide=this.Hide.bind(this);
        this.Show=this.Show.bind(this);
        this.secondElement=secondElement;
    }
    Hide()
    {
        this.secondElement.classList.add('inactive');
    }
    Show()
    {
        this.secondElement.classList.remove('inactive');
    }
}