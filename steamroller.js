function steamrollArray(arr) {
  // Utiliza a função "reduce" para produzir um retorno para cada elemento do array, iniciando com um array vazio.
  return arr.reduce((arr, i) => {
    // Se o item não for um array, então apenas adiciona ele como resultado do array. Se o item for um array, então utiliza recursividade para passar esse inner array para executar o mesmo processo e spread para adicionar cada elemento nesse novo array.
    if (i instanceof Array) {
      arr.push(...steamrollArray(i));
    } else {
      arr.push(i);
    }
    return arr;
  }, []);
}
