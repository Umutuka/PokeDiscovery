const getPokemonGeneration = (id) => {
    switch (true) {
      case id <= 151:
        return I;
      case id <= 251:
        return 2;
      case id <= 386:
        return 3;
      case id <= 493:
        return 4;
      case id <= 649:
        return 5;
      case id <= 721:
        return 6;
      case id <= 809:
        return 7;
      case id <= 898:
        return 8;
      default:
        return null;
    }
  }

  export default getPokemonGeneration;