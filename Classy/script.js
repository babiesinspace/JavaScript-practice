class Classic {
  constructor(art_url) {
    this.frame ="black-border";
    this.art_url = art_url || "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  }
  render() {
    let div = document.getElementById('myDiv');
    let img = document.createElement("img");
    img.src = this.art_url
    img.classList.add(this.frame)
    div.appendChild(img);
  }
}

// let mona = new Classic()


var art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
art1.render()
// art1.render()
// art1.render()

class Meme extends Classic {
  render(frame) {
    this.frame = frame;
    super.render()
  }
}

var meme1 = new Meme("http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg")
meme1.render("red-border")