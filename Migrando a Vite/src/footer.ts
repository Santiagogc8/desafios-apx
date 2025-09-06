export function footerComponent() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<h1>Just a simple footer</h1>";
    footer.style.backgroundColor = "black";
    footer.style.color = "white";
    footer.style.padding = "12px";
    footer.style.position = "absolute";
    footer.style.bottom = "0px";
    footer.style.right = "0px";
    footer.style.left = "0px";
    footer.style.textAlign = "center";
    return footer;
}