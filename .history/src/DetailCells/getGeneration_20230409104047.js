const getPokemonGeneration = (id) => {
    switch (true) {
      case id <= 151:
        return "I";
      case id <= 251:
        return "II";
      case id <= 386:
        return "III";
      case id <= 493:
        return "IV";
      case id <= 649:
        return "V";
      case id <= 721:
        return "VI";
      case id <= 809:
        return "VII";
      case id <= 898:
        return "VIII";
      case id <= 900:
        return "IX";
      default:
        return null;
    }
  }

  export default getPokemonGeneration;