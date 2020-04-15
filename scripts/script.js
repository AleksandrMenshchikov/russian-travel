class CreateActiveLink {
  constructor(ulElement, activeElement, linkElement) {
    this.ulElement = document.querySelector(`.${ulElement}`);
    this.activeElement = activeElement;
    this.linkElement = linkElement;
    this.listOfLinks = document.querySelectorAll(`.${linkElement}`);
    this.ulElement.addEventListener("click", this.handlerEvent.bind(this));
  }

  handlerEvent(e) {
    if (e.target.classList.contains(this.linkElement)) {
      e.target.classList.add(this.activeElement);
    }
    for (let i = 0; i < this.listOfLinks.length; i++) {
      if (this.listOfLinks[i] === e.target) continue;
      this.listOfLinks[i].classList.remove(this.activeElement);
    }
  }
}

const createActiveLink = new CreateActiveLink(
  "header__links-list",
  "header__lang-link_active",
  "header__lang-link"
);
