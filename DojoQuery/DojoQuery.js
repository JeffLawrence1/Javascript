function $Dojo(id) {
    this.ID = document.getElementById(id);
    this.click = function(callback) {
        this.ID.addEventListener("click", callback);
    };

    this.hover = function(hoverin, hoverout) {
        this.ID.addEventListener("mouseover", hoverin);

        this.ID.addEventListener("mouseout", hoverout);

    };

    return this;
}