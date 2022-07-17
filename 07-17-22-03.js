function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
  
  this.isWorthIt = () => {
    return (this.draft - this.crew * 1.5) >= 20;
  }
}